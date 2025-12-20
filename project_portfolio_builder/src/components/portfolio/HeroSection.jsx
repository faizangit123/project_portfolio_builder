// Hero section component for the portfolio preview
import "./HeroSection.css";

const HeroSection = ({ data }) => {
  return (
    <section className="hero-section">
      <div className="hero-blob" />
      
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          <span className="hero-badge-text">Available for opportunities</span>
        </div>
        
        <h1 className="hero-name">
          {data.name || "Your Name"}
        </h1>
        
        <h2 className="hero-role">
          {data.role || "Your Role"}
        </h2>
        
        <p className="hero-tagline">
          {data.tagline || "Your professional tagline goes here"}
        </p>
        
        <div className="hero-buttons">
          <button className="hero-btn-primary">
            View My Work
          </button>
          <button className="hero-btn-secondary">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
