// Form panel component for editing portfolio data
import { useState } from "react";
import "./FormPanel.css";

// Icons as inline SVGs
const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const FolderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const ChevronDownIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const TrashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

// Collapsible section component
const FormSection = ({ title, icon: Icon, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="form-section">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="form-section-header"
      >
        <div className="form-section-header-left">
          <div className="form-section-icon">
            <Icon />
          </div>
          <span className="form-section-title">{title}</span>
        </div>
        <ChevronDownIcon className={`form-section-chevron ${isOpen ? 'open' : ''}`} />
      </button>
      {isOpen && <div className="form-section-content">{children}</div>}
    </div>
  );
};

const FormPanel = ({ data, onUpdate }) => {
  // Update handlers for each section
  const updateHero = (field, value) => {
    onUpdate({ ...data, hero: { ...data.hero, [field]: value } });
  };

  const updateAbout = (field, value) => {
    onUpdate({ ...data, about: { ...data.about, [field]: value } });
  };

  const updateSkill = (id, field, value) => {
    const skills = data.skills.map(skill => 
      skill.id === id ? { ...skill, [field]: value } : skill
    );
    onUpdate({ ...data, skills });
  };

  const addSkill = () => {
    const newSkill = {
      id: Date.now().toString(),
      name: "",
      level: 50,
    };
    onUpdate({ ...data, skills: [...data.skills, newSkill] });
  };

  const removeSkill = (id) => {
    onUpdate({ ...data, skills: data.skills.filter(s => s.id !== id) });
  };

  const updateProject = (id, field, value) => {
    const projects = data.projects.map(project => 
      project.id === id ? { ...project, [field]: value } : project
    );
    onUpdate({ ...data, projects });
  };

  const addProject = () => {
    const newProject = {
      id: Date.now().toString(),
      title: "",
      description: "",
      technologies: [],
      link: "",
    };
    onUpdate({ ...data, projects: [...data.projects, newProject] });
  };

  const removeProject = (id) => {
    onUpdate({ ...data, projects: data.projects.filter(p => p.id !== id) });
  };

  const updateContact = (field, value) => {
    onUpdate({ ...data, contact: { ...data.contact, [field]: value } });
  };

  return (
    <div className="form-panel">
      {/* Header */}
      <div className="form-header">
        <h1 className="form-header-title">Portfolio Builder</h1>
        <p className="form-header-subtitle">Edit your portfolio in real-time</p>
      </div>

      {/* Form sections */}
      <div className="form-sections">
        {/* Hero Section */}
        <FormSection title="Hero" icon={UserIcon}>
          <div className="form-field">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-input"
              value={data.hero.name}
              onChange={(e) => updateHero("name", e.target.value)}
              placeholder="John Doe"
            />
          </div>
          <div className="form-field">
            <label className="form-label">Role / Title</label>
            <input
              type="text"
              className="form-input"
              value={data.hero.role}
              onChange={(e) => updateHero("role", e.target.value)}
              placeholder="Frontend Developer"
            />
          </div>
          <div className="form-field">
            <label className="form-label">Tagline</label>
            <input
              type="text"
              className="form-input"
              value={data.hero.tagline}
              onChange={(e) => updateHero("tagline", e.target.value)}
              placeholder="Building amazing web experiences"
            />
          </div>
        </FormSection>

        {/* About Section */}
        <FormSection title="About" icon={BriefcaseIcon} defaultOpen={false}>
          <div className="form-field">
            <label className="form-label">Bio</label>
            <textarea
              className="form-input form-textarea"
              value={data.about.bio}
              onChange={(e) => updateAbout("bio", e.target.value)}
              placeholder="Tell visitors about yourself..."
              rows={4}
            />
          </div>
          <div className="form-field">
            <label className="form-label">Profile Image URL</label>
            <input
              type="text"
              className="form-input"
              value={data.about.imageUrl}
              onChange={(e) => updateAbout("imageUrl", e.target.value)}
              placeholder="https://example.com/photo.jpg"
            />
          </div>
        </FormSection>

        {/* Skills Section */}
        <FormSection title="Skills" icon={CodeIcon} defaultOpen={false}>
          {data.skills.map((skill) => (
            <div key={skill.id} className="form-item-row">
              <input
                type="text"
                className="form-input"
                value={skill.name}
                onChange={(e) => updateSkill(skill.id, "name", e.target.value)}
                placeholder="Skill name"
              />
              <input
                type="number"
                className="form-input form-input-small"
                min="0"
                max="100"
                value={skill.level}
                onChange={(e) => updateSkill(skill.id, "level", parseInt(e.target.value) || 0)}
              />
              <button
                type="button"
                className="form-btn form-btn-icon form-btn-delete"
                onClick={() => removeSkill(skill.id)}
              >
                <TrashIcon />
              </button>
            </div>
          ))}
          <button type="button" className="form-btn form-btn-full" onClick={addSkill}>
            <PlusIcon /> Add Skill
          </button>
        </FormSection>

        {/* Projects Section */}
        <FormSection title="Projects" icon={FolderIcon} defaultOpen={false}>
          {data.projects.map((project, index) => (
            <div key={project.id} className="form-project-card">
              <div className="form-project-header">
                <span className="form-project-number">Project {index + 1}</span>
                <button
                  type="button"
                  className="form-btn form-btn-icon form-btn-delete form-btn-delete-small"
                  onClick={() => removeProject(project.id)}
                >
                  <TrashIcon />
                </button>
              </div>
              <input
                type="text"
                className="form-input"
                value={project.title}
                onChange={(e) => updateProject(project.id, "title", e.target.value)}
                placeholder="Project title"
              />
              <textarea
                className="form-input form-textarea"
                value={project.description}
                onChange={(e) => updateProject(project.id, "description", e.target.value)}
                placeholder="Project description"
                rows={2}
              />
              <input
                type="text"
                className="form-input"
                value={project.technologies.join(", ")}
                onChange={(e) => updateProject(project.id, "technologies", e.target.value.split(", ").filter(Boolean))}
                placeholder="React, TypeScript, Node.js"
              />
              <input
                type="text"
                className="form-input"
                value={project.link}
                onChange={(e) => updateProject(project.id, "link", e.target.value)}
                placeholder="https://github.com/..."
              />
            </div>
          ))}
          <button type="button" className="form-btn form-btn-full" onClick={addProject}>
            <PlusIcon /> Add Project
          </button>
        </FormSection>

        {/* Contact Section */}
        <FormSection title="Contact" icon={MailIcon} defaultOpen={false}>
          <div className="form-field">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              value={data.contact.email}
              onChange={(e) => updateContact("email", e.target.value)}
              placeholder="you@email.com"
            />
          </div>
          <div className="form-field">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-input"
              value={data.contact.phone}
              onChange={(e) => updateContact("phone", e.target.value)}
              placeholder="+1 (555) 123-4567"
            />
          </div>
          <div className="form-field">
            <label className="form-label">LinkedIn</label>
            <input
              type="text"
              className="form-input"
              value={data.contact.linkedin}
              onChange={(e) => updateContact("linkedin", e.target.value)}
              placeholder="linkedin.com/in/username"
            />
          </div>
          <div className="form-field">
            <label className="form-label">GitHub</label>
            <input
              type="text"
              className="form-input"
              value={data.contact.github}
              onChange={(e) => updateContact("github", e.target.value)}
              placeholder="github.com/username"
            />
          </div>
          <div className="form-field">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-input"
              value={data.contact.location}
              onChange={(e) => updateContact("location", e.target.value)}
              placeholder="San Francisco, CA"
            />
          </div>
        </FormSection>
      </div>
    </div>
  );
};

export default FormPanel;
