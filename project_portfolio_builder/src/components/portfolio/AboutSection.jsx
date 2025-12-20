// About section component for the portfolio preview
import "./AboutSection.css";

const UserIcon = () => (
  <svg className="about-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const AboutSection = ({ data }) => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Get to know me</h2>
        </div>
        
        <div className="about-content">
          <div className="about-image-container">
            {data.imageUrl ? (
              <img 
                src={data.imageUrl} 
                alt="Profile" 
                className="about-image"
              />
            ) : (
              <UserIcon />
            )}
          </div>
          
          <div className="about-text-content">
            <p className="about-bio">
              {data.bio || "Tell visitors about yourself, your journey, and what makes you unique. Share your passion, experience, and what drives you in your field."}
            </p>
            
            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-value">3+</div>
                <div className="about-stat-label">Projects</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-value">6+</div>
                <div className="about-stat-label">Skills</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-value">1+</div>
                <div className="about-stat-label">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
