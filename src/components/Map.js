import React from 'react';
import { motion } from 'framer-motion';

const Map = ({ height = 400, className = '' }) => {
  const src = process.env.REACT_APP_GOOGLE_MAP_URL || '';

  if (!src) {
    return (
      <div className={`w-full rounded-xl overflow-hidden shadow-lg bg-white/5 p-6 text-center ${className}`}>
        <p className="text-sm text-white/70">Map embed not configured. Set REACT_APP_GOOGLE_MAP_URL in your .env.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className={`w-full rounded-xl overflow-hidden shadow-lg ${className}`}
    >
      <iframe
        title="location-map"
        src={src}
        width="100%"
        height={height}
        loading="lazy"
        allowFullScreen
        style={{ border: 0, borderRadius: 12, display: 'block' }}
      />
    </motion.div>
  );
};

export default Map;
