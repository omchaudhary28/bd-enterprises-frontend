const http = require('http');
const https = require('https');

const BACKEND_PROTOCOL = process.env.BACKEND_PROXY_PROTOCOL || 'http';
const BACKEND_HOST = process.env.BACKEND_PROXY_HOST || 'sg2plzcpnl508874.prod.sin2.secureserver.net';
const BACKEND_PORT = Number(process.env.BACKEND_PROXY_PORT || (BACKEND_PROTOCOL === 'https' ? 443 : 80));
const BACKEND_BASE_PATH = process.env.BACKEND_PROXY_BASE_PATH || '/api';
const BACKEND_VHOST = process.env.BACKEND_PROXY_VHOST || 'www.bdenterprises.in';
const REQUEST_TIMEOUT_MS = Number(process.env.BACKEND_PROXY_TIMEOUT_MS || 15000);

const transport = BACKEND_PROTOCOL === 'https' ? https : http;

module.exports = (req, res) => {
  const incomingUrl = new URL(req.url, 'http://localhost');
  const incomingPath = incomingUrl.pathname.replace(/^\/api/, '');
  const upstreamPath = `${BACKEND_BASE_PATH}${incomingPath}${incomingUrl.search}`;

  const upstreamHeaders = { ...req.headers };
  delete upstreamHeaders.host;
  upstreamHeaders.host = BACKEND_VHOST;
  upstreamHeaders['x-forwarded-host'] = req.headers.host || '';
  upstreamHeaders['x-forwarded-proto'] = 'https';
  upstreamHeaders['x-forwarded-for'] = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
  upstreamHeaders['x-proxy-by'] = 'vercel-api-proxy';

  const upstreamReq = transport.request(
    {
      protocol: `${BACKEND_PROTOCOL}:`,
      hostname: BACKEND_HOST,
      port: BACKEND_PORT,
      method: req.method,
      path: upstreamPath,
      headers: upstreamHeaders,
      timeout: REQUEST_TIMEOUT_MS
    },
    (upstreamRes) => {
      res.statusCode = upstreamRes.statusCode || 502;

      Object.entries(upstreamRes.headers || {}).forEach(([key, value]) => {
        if (typeof value !== 'undefined') {
          res.setHeader(key, value);
        }
      });

      res.setHeader('x-api-proxy', 'cpanel-backend');
      upstreamRes.pipe(res);
    }
  );

  upstreamReq.on('timeout', () => {
    upstreamReq.destroy(new Error('Upstream timeout'));
  });

  upstreamReq.on('error', (error) => {
    if (!res.headersSent) {
      res.statusCode = 502;
      res.setHeader('Content-Type', 'application/json');
      res.end(
        JSON.stringify({
          success: false,
          message: 'Backend proxy request failed',
          error: error.message
        })
      );
      return;
    }

    res.end();
  });

  const method = (req.method || 'GET').toUpperCase();
  const shouldSendBody = method !== 'GET' && method !== 'HEAD';

  if (!shouldSendBody) {
    upstreamReq.end();
    return;
  }

  if (typeof req.body !== 'undefined' && req.body !== null) {
    const bodyBuffer = Buffer.isBuffer(req.body)
      ? req.body
      : Buffer.from(typeof req.body === 'string' ? req.body : JSON.stringify(req.body));

    upstreamReq.setHeader('content-length', String(bodyBuffer.length));
    upstreamReq.write(bodyBuffer);
    upstreamReq.end();
    return;
  }

  req.pipe(upstreamReq);
};
