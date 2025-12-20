// Skills section component for the portfolio preview
import "./SkillsSection.css";

const SkillsSection = ({ skills }) => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <span className="section-label">Skills</span>
          <h2 className="section-title">My Expertise</h2>
        </div>
        
        <div className="skills-grid">
          {skills.length > 0 ? (
            skills.map((skill, index) => (
              <div 
                key={skill.id} 
                className="skill-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-progress-track">
                  <div 
                    className="skill-progress-bar"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="skills-empty">
              Add your skills to showcase your expertise
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
