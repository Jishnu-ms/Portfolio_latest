import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython, FaGitAlt, FaFigma, FaJava } from 'react-icons/fa';
import { SiFlutter, SiFirebase, SiFastapi, SiPytorch, SiCplusplus } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { BsCpuFill } from 'react-icons/bs';
import './Skills.css';

const AntigravityIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="antigravity-icon"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    <path d="M12 8a4 4 0 0 1 4 4" opacity="0.5" />
  </svg>
);

const skillsData = [
  {
    category: 'Languages',
    items: [
      { name: 'C', icon: <SiCplusplus /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'Python', icon: <FaPython /> },
    ]
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: <FaReact /> },
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'JS', icon: <FaJs /> },
    ]
  },
  {
    category: 'Mobile',
    items: [
      { name: 'Flutter', icon: <SiFlutter /> },
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'Firebase', icon: <SiFirebase /> },
    ]
  },
  {
    category: 'AI/ML',
    items: [
      { name: 'PyTorch', icon: <SiPytorch /> },
      { name: 'Deep Learning', icon: <BsCpuFill /> },
    ]
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Figma', icon: <FaFigma /> },
      { name: 'VS Code', icon: <VscVscode /> },
      { name: 'Antigravity', icon: <AntigravityIcon /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title reveal">Technical Skills</h2>

        <div className="skills-grid">
          {skillsData.map((skillCategory, index) => (
            <div
              key={index}
              className="skill-card glass-effect reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3>{skillCategory.category}</h3>
              <div className="skill-items">
                {skillCategory.items.map((item, i) => (
                  <div key={i} className="skill-badge">
                    <span className="skill-icon">{item.icon}</span>
                    <span className="skill-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
