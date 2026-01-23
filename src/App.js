import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import FireExtinguishers from './components/services/FireExtinguishers';
import FireAlarmDetection from './components/services/FireAlarmDetection';
import SprinklerSystems from './components/services/SprinklerSystems';
import EmergencyLighting from './components/services/EmergencyLighting';
import FireSafetyTraining from './components/services/FireSafetyTraining';
import ComplianceInspection from './components/services/ComplianceInspection';

export const ThemeContext = React.createContext();

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Router>
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <div className="App flex flex-col min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
          <div className="pattern-bg"></div>
          <Header />
          <main className="flex-grow relative z-10">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/fire-extinguishers" element={<FireExtinguishers />} />
              <Route path="/services/fire-alarm-detection" element={<FireAlarmDetection />} />
              <Route path="/services/sprinkler-systems" element={<SprinklerSystems />} />
              <Route path="/services/emergency-lighting" element={<EmergencyLighting />} />
              <Route path="/services/fire-safety-training" element={<FireSafetyTraining />} />
              <Route path="/services/compliance-inspection" element={<ComplianceInspection />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
