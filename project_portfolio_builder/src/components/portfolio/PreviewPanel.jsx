// Live preview panel that renders the portfolio layout
import { useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import "./PreviewPanel.css";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

// Sun and Moon icons for toggle
const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const PreviewPanel = ({ data, isDarkMode, onToggleDarkMode }) => {
  const contentRef = useRef(null);
  const [isExporting, setIsExporting] = useState(false);

  const handleExportPDF = async () => {
    if (!contentRef.current || isExporting) return;
    
    setIsExporting(true);
    
    const opt = {
      margin: 0,
      filename: `${data.hero.name || 'portfolio'}-portfolio.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        logging: false
      },
      jsPDF: { 
        unit: 'in', 
        format: 'a4', 
        orientation: 'portrait' 
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    try {
      await html2pdf().set(opt).from(contentRef.current).save();
    } catch (error) {
      console.error('PDF export failed:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className={`preview-panel ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="preview-header">
        <div className="preview-header-content">
          <div className="preview-header-left">
            <div className="preview-dots">
              <div className="preview-dot red" />
              <div className="preview-dot yellow" />
              <div className="preview-dot green" />
            </div>
            <span className="preview-title">Portfolio Preview</span>
          </div>
          <div className="preview-header-right">
            <button 
              className="export-btn"
              onClick={handleExportPDF}
              disabled={isExporting}
              title="Export as PDF"
            >
              <DownloadIcon />
              <span>{isExporting ? 'Exporting...' : 'Export PDF'}</span>
            </button>
            <button 
              className="theme-toggle-btn"
              onClick={onToggleDarkMode}
              title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </button>
            <div className="preview-badge">
              {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </div>
          </div>
        </div>
      </div>
      
      <div className="preview-content" ref={contentRef}>
        <HeroSection data={data.hero} />
        <AboutSection data={data.about} />
        <SkillsSection skills={data.skills} />
        <ProjectsSection projects={data.projects} />
        <ContactSection data={data.contact} />
      </div>
    </div>
  );
};

export default PreviewPanel;
