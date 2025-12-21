// Default portfolio data with realistic placeholder content

export const dummyPortfolioData = {
  hero: {
    name: "MD FAIZAN",
    role: "Frontend Developer",
    tagline: "Crafting beautiful, responsive web experiences with modern technologies",
  },
  about: {
    bio: "I'm a passionate frontend developer with a keen eye for design and a love for creating seamless user experiences. Recently graduated with a degree in Computer Science, I specialize in React, TypeScript, and modern CSS frameworks. I believe in writing clean, maintainable code and staying up-to-date with the latest web technologies.",
    imageUrl: "",
  },
  skills: [
    { id: "1", name: "React", level: 85 },
    { id: "2", name: "TypeScript", level: 80 },
    { id: "3", name: "JavaScript", level: 90 },
    { id: "4", name: "HTML/CSS", level: 95 },
    { id: "5", name: "Tailwind CSS", level: 85 },
    { id: "6", name: "Git", level: 75 },
  ],
  projects: [
    {
      id: "1",
      title: "E-Commerce Dashboard",
      description: "A responsive admin dashboard for managing online store products, orders, and analytics with real-time data visualization.",
      technologies: ["React", "TypeScript", "Chart.js"],
      link: "https://project-portfolio-builder.vercel.app/",
    },
    {
      id: "2",
      title: "Weather App",
      description: "A beautiful weather application with location-based forecasts, hourly predictions, and dynamic backgrounds based on conditions.",
      technologies: ["React", "API Integration", "CSS"],
      link: "https://project-portfolio-builder.vercel.app/",
    },
    {
      id: "3",
      title: "Task Management Tool",
      description: "A Kanban-style project management tool with drag-and-drop functionality, team collaboration, and deadline tracking.",
      technologies: ["React", "Redux", "Node.js"],
      link: "https://project-portfolio-builder.vercel.app/",
    },
  ],
  contact: {
    email: "faizanrock705@gmail.com",
    phone: "+1 (555) 123-4567",
    linkedin: "https://www.linkedin.com/in/md-faizan-97705b348/",
    github: "https://github.com/faizangit123",
    location: "New Delhi, Delhi",
  },
};
