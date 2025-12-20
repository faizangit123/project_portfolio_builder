// Main Builder container component with state management
import { useState } from "react";
import { dummyPortfolioData } from "../../data/dummyData";
import FormPanel from "./FormPanel";
import PreviewPanel from "./PreviewPanel";
import "./Builder.css";

const Builder = () => {
  // State management using useState hook
  // Initialized with dummy data for demonstration
  const [portfolioData, setPortfolioData] = useState(dummyPortfolioData);
  
  // Dark mode state for preview panel
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Update function passed to FormPanel for real-time updates
  const handleDataUpdate = (newData) => {
    setPortfolioData(newData);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="builder">
      {/* Form Panel - Left side on desktop, top on mobile */}
      <FormPanel data={portfolioData} onUpdate={handleDataUpdate} />
      
      {/* Preview Panel - Right side on desktop, bottom on mobile */}
      <PreviewPanel 
        data={portfolioData} 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={toggleDarkMode} 
      />
    </div>
  );
};

export default Builder;
