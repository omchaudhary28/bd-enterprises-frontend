import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Header from './components/Header';
import MainContent from './components/MainContent';
import VisionValues from './components/VisionValues';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import PPEs from './components/PPEs';
import FireExtinguishers from './components/services/FireExtinguishers';
import FireAlarmDetection from './components/services/FireAlarmDetection';
import SprinklerSystems from './components/services/SprinklerSystems';
import EmergencyLighting from './components/services/EmergencyLighting';
import FireSafetyTraining from './components/services/FireSafetyTraining';
import ComplianceInspection from './components/services/ComplianceInspection';
import OxygenCylinders from './components/services/OxygenCylinders';
import Fabrication from './components/services/Fabrication';
import HeadProtection from './components/ppe/HeadProtection';
import EyeFaceProtection from './components/ppe/EyeFaceProtection';
import HearingProtection from './components/ppe/HearingProtection';
import RespiratoryProtection from './components/ppe/RespiratoryProtection';
import HandProtection from './components/ppe/HandProtection';
import BodyProtection from './components/ppe/BodyProtection';
import FootProtection from './components/ppe/FootProtection';
import { ThemeProvider } from './components/ThemeContext';
import { useCanonicalUrl } from './hooks/useCanonicalUrl';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useCanonicalUrl();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const RouteTransition = ({ children }) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? false : { opacity: 0, y: 10 }}
      animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      exit={prefersReduced ? { opacity: 1 } : { opacity: 0, y: -8 }}
      transition={{ duration: prefersReduced ? 0 : 0.3, ease: 'easeOut' }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <RouteTransition>
              <>
                <MainContent />
                <VisionValues />
              </>
            </RouteTransition>
          }
        />

        <Route path="/about" element={<RouteTransition><About /></RouteTransition>} />

        <Route path="/services" element={<RouteTransition><Services /></RouteTransition>} />
        <Route path="/services/fire-extinguishers" element={<RouteTransition><FireExtinguishers /></RouteTransition>} />
        <Route path="/services/fire-alarm-detection" element={<RouteTransition><FireAlarmDetection /></RouteTransition>} />
        <Route path="/services/smoke-detection" element={<RouteTransition><FireAlarmDetection /></RouteTransition>} />
        <Route path="/services/sprinkler-systems" element={<RouteTransition><SprinklerSystems /></RouteTransition>} />
        <Route path="/services/fire-hydrant-systems" element={<RouteTransition><SprinklerSystems /></RouteTransition>} />
        <Route path="/services/emergency-lighting" element={<RouteTransition><EmergencyLighting /></RouteTransition>} />
        <Route path="/services/fire-safety-training" element={<RouteTransition><FireSafetyTraining /></RouteTransition>} />
        <Route path="/services/compliance-inspection" element={<RouteTransition><ComplianceInspection /></RouteTransition>} />
        <Route path="/services/oxygen-cylinders" element={<RouteTransition><OxygenCylinders /></RouteTransition>} />
        <Route path="/services/fabrication" element={<RouteTransition><Fabrication /></RouteTransition>} />

        <Route path="/services/ppe" element={<RouteTransition><PPEs /></RouteTransition>} />
        <Route path="/services/ppe/head-protection" element={<RouteTransition><HeadProtection /></RouteTransition>} />
        <Route path="/services/ppe/eye-face-protection" element={<RouteTransition><EyeFaceProtection /></RouteTransition>} />
        <Route path="/services/ppe/hearing-protection" element={<RouteTransition><HearingProtection /></RouteTransition>} />
        <Route path="/services/ppe/respiratory-protection" element={<RouteTransition><RespiratoryProtection /></RouteTransition>} />
        <Route path="/services/ppe/hand-protection" element={<RouteTransition><HandProtection /></RouteTransition>} />
        <Route path="/services/ppe/body-protection" element={<RouteTransition><BodyProtection /></RouteTransition>} />
        <Route path="/services/ppe/foot-protection" element={<RouteTransition><FootProtection /></RouteTransition>} />

        <Route path="/ppe" element={<RouteTransition><PPEs /></RouteTransition>} />
        <Route path="/ppe/head-protection" element={<RouteTransition><HeadProtection /></RouteTransition>} />
        <Route path="/ppe/eye-face-protection" element={<RouteTransition><EyeFaceProtection /></RouteTransition>} />
        <Route path="/ppe/hearing-protection" element={<RouteTransition><HearingProtection /></RouteTransition>} />
        <Route path="/ppe/respiratory-protection" element={<RouteTransition><RespiratoryProtection /></RouteTransition>} />
        <Route path="/ppe/hand-protection" element={<RouteTransition><HandProtection /></RouteTransition>} />
        <Route path="/ppe/body-protection" element={<RouteTransition><BodyProtection /></RouteTransition>} />
        <Route path="/ppe/foot-protection" element={<RouteTransition><FootProtection /></RouteTransition>} />

        <Route path="/contact" element={<RouteTransition><Contact /></RouteTransition>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider>
        <div className="App flex min-h-screen flex-col bg-gray-50 transition-colors duration-300 dark:bg-slate-900">
          <div className="pattern-bg" aria-hidden="true" />
          <Header />
          <main className="relative z-10 flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
