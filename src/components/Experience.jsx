import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Experience.css';

const experienceData = [
  {
    title: 'Student Developer',
    role: 'Computer Science',
    date: 'Ongoing',
    description: 'Building a strong foundation in data structures, algorithms, and software engineering principles while completing coursework and multiple academic projects.',
    icon: <FaGraduationCap />
  },
  {
    title: 'Flutter Projects',
    role: 'Mobile Development App',
    date: 'Recent',
    description: 'Developed and published cross-platform mobile applications including a Bible App with Firebase integration, optimizing for performance and elegant UI.',
    icon: <FaBriefcase />
  },
  {
    title: 'AI Research Project',
    role: 'Machine Learning',
    date: 'Recent',
    description: 'Applied Deep Neural Networks to predict construction costs. Trained models using PyTorch and built an interactive FastAPI & React interface.',
    icon: <FaBriefcase />
  },
  {
    title: 'Software Engineering Intern',
    role: 'Richinnovations',
    date: 'Previous',
    description: 'Developed multiple Flutter applications for production, where the main project was Letmego. Contributed to core features, optimized performance, and collaborated closely with the team to build scalable mobile solutions.',
    icon: <FaBriefcase />
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title reveal">Experience Journey</h2>
        
        <div className="timeline">
          {experienceData.map((item, index) => (
            <div key={index} className="timeline-item reveal" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="timeline-icon-container glass-effect">
                <span className="timeline-icon">{item.icon}</span>
              </div>
              
              <div className="timeline-content glass-effect">
                <span className="timeline-date">{item.date}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-role">{item.role}</h4>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
