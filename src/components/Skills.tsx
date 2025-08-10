import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { CodeIcon, PencilRulerIcon, PlayIcon, PencilIcon } from 'lucide-react';
import { useInView } from './hooks/useInView';
export const Skills = () => {
  const {
    ref,
    inView
  } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const skillCategories = [{
    title: 'Designing',
    icon: <PencilRulerIcon size={24} className="text-cyan-400" />,
    skills: [{
      name: 'Adobe Photoshop',
      level: 95
    }, {
      name: 'Adobe Illustrator',
      level: 90
    }, {
      name: 'UI/UX Design',
      level: 85
    }, {
      name: 'Brand Identity',
      level: 92
    }]
  }, {
    title: 'Coding',
    icon: <CodeIcon size={24} className="text-cyan-400" />,
    skills: [{
      name: 'HTML/CSS',
      level: 90
    }, {
      name: 'JavaScript',
      level: 85
    }, {
      name: 'React.js',
      level: 80
    }, {
      name: 'Responsive Design',
      level: 88
    }]
  }, {
    title: 'Animation',
    icon: <PlayIcon size={24} className="text-cyan-400" />,
    skills: [{
      name: 'After Effects',
      level: 88
    }, {
      name: 'Motion Graphics',
      level: 85
    }, {
      name: 'Character Animation',
      level: 75
    }, {
      name: 'Video Editing',
      level: 92
    }]
  }, {
    title: 'Drafting',
    icon: <PencilIcon size={24} className="text-cyan-400" />,
    skills: [{
      name: 'Concept Development',
      level: 90
    }, {
      name: 'Storyboarding',
      level: 85
    }, {
      name: 'Wireframing',
      level: 88
    }, {
      name: 'Prototyping',
      level: 82
    }]
  }];
  return <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeading title="My Skills" subtitle="What I bring to the table" />
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skillCategories.map((category, index) => <div key={index} className={`bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/10 ${inView ? 'animate-scaleIn opacity-0' : ''}`} style={{
          animationDelay: `${inView ? 0.2 * index : 0}s`,
          animationFillMode: 'forwards'
        }}>
              <div className="flex items-center mb-6">
                <div className="mr-4 p-3 bg-gray-800 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className={`bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full ${inView ? 'animate-fillWidth' : ''}`} style={{
                  '--target-width': `${skill.level}%`,
                  width: inView ? '0%' : `${skill.level}%`,
                  animationDelay: `${inView ? 0.5 + 0.1 * skillIndex : 0}s`
                } as React.CSSProperties}></div>
                    </div>
                  </div>)}
              </div>
            </div>)}
        </div>
        <div className={`mt-16 ${inView ? 'animate-fadeIn opacity-0' : ''}`} style={{
        animationDelay: `${inView ? 1.2 : 0}s`,
        animationFillMode: 'forwards'
      }}>
          <h3 className="text-xl font-semibold mb-6 text-center">
            Design Software & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere Pro', 'Adobe After Effects', 'Figma', 'Cinema 4D', 'Blender', 'DaVinci Resolve', 'Sketch', 'Procreate', 'InDesign', 'Lightroom'].map((skill, index) => <span key={index} className={`px-4 py-2 bg-gray-900 rounded-full text-gray-300 border border-gray-700 hover:border-cyan-500/50 hover:text-white transition-all duration-300 transform hover:scale-110 ${inView ? 'animate-fadeIn opacity-0' : ''}`} style={{
            animationDelay: `${inView ? 1.4 + index * 0.05 : 0}s`,
            animationFillMode: 'forwards'
          }}>
                {skill}
              </span>)}
          </div>
        </div>
      </div>
    </section>;
};