import { Code, Palette, Briefcase } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Technical & Development Skills',
      icon: <Code size={24} />,
      skills: [
        'React', 'Next.js', 'HTML', 'CSS', 'JavaScript',
        'Node.js', 'PHP', 'FastAPI',
        'MySQL', 'PostgreSQL', 'SQL', 'TypeScript', 'Tailwind CSS',
        'Stripe/PayPal/Khalti Integration'
      ]
    },
    {
      title: 'UI/UX Design Skills',
      icon: <Palette size={24} />,
      skills: [
        'Figma Prototyping', 'Wireframing', 'Animations',
        'UX Research', 'Empathy Maps', 'Journey Maps',
        'Personas', 'Visual Design', 'Typography',
        'Color Schemes', 'Layouts'
      ]
    },
    {
      title: 'Business & Teaching',
      icon: <Briefcase size={24} />,
      skills: [
        'Entrepreneurship', 'Saptarishi Business Group',
        'Food Distribution', 'UI/UX Crash Courses',
        '30-day Courses', '1-week Intensive',
        'Workshops', 'Training Sessions'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & <span className="text-green-400">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, design capabilities, and business experience
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-green-400/50 transition-all duration-500 hover:transform hover:translateY-[-8px] hover:shadow-2xl hover:shadow-green-400/10 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-400/10 rounded-lg flex items-center justify-center text-green-400 group-hover:bg-green-400/20 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-white font-semibold text-xl group-hover:text-green-400 transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-gray-800/50 text-gray-300 px-3 py-1.5 rounded-full text-sm border border-gray-700 hover:border-green-400/50 hover:text-green-400 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
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