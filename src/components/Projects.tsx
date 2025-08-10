import React, { useState } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { useInView } from './hooks/useInView';
export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const {
    ref,
    inView
  } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const projects = [{
    id: 1,
    title: 'Social Media Post Design',
    category: 'post',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop',
    description: 'Eye-catching social media graphics designed for brand engagement and audience growth across multiple platforms.',
    tags: ['Photoshop', 'Illustrator', 'Branding', 'Social Media'],
    links: {
      live: '#',
      github: '#'
    }
  }, {
    id: 2,
    title: 'Tutorial Cover Design',
    category: 'tute',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop',
    description: 'Professional tutorial thumbnails and cover designs that drive engagement and increase click-through rates.',
    tags: ['Photoshop', 'Typography', 'Composition', 'Digital Art'],
    links: {
      live: '#',
      github: '#'
    }
  }, {
    id: 3,
    title: 'Corporate Website Design',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop',
    description: 'Modern and responsive website design for corporate clients with focus on user experience and brand consistency.',
    tags: ['UI/UX', 'Figma', 'Responsive Design', 'Prototyping'],
    links: {
      live: '#',
      github: '#'
    }
  }, {
    id: 4,
    title: 'Product Promo Video',
    category: 'video',
    image: 'https://images.unsplash.com/photo-1574717024453-e599ffe37f25?q=80&w=2070&auto=format&fit=crop',
    description: 'Compelling product promotional videos that showcase features and benefits with professional editing and sound design.',
    tags: ['Premiere Pro', 'After Effects', 'Sound Design', 'Storytelling'],
    links: {
      live: '#',
      github: '#'
    }
  }, {
    id: 5,
    title: 'Motion Graphics Animation',
    category: 'animation',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
    description: 'Dynamic motion graphics animations for explainer videos, brand intros, and digital marketing campaigns.',
    tags: ['After Effects', 'Cinema 4D', 'Animation', 'Motion Design'],
    links: {
      live: '#',
      github: '#'
    }
  }, {
    id: 6,
    title: 'Brand Identity Design',
    category: 'post',
    image: 'https://images.unsplash.com/photo-1600877685303-857fde8d40be?q=80&w=1932&auto=format&fit=crop',
    description: 'Comprehensive brand identity packages including logo design, color palettes, typography, and brand guidelines.',
    tags: ['Illustrator', 'Branding', 'Logo Design', 'Identity'],
    links: {
      live: '#',
      github: '#'
    }
  }];
  const filters = [{
    id: 'all',
    name: 'All Projects'
  }, {
    id: 'post',
    name: 'Post Design'
  }, {
    id: 'tute',
    name: 'Tutorial Covers'
  }, {
    id: 'web',
    name: 'Web Design'
  }, {
    id: 'video',
    name: 'Video Editing'
  }, {
    id: 'animation',
    name: 'Animations'
  }];
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);
  return <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading title="My Projects" subtitle="Recent work" />
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${inView ? 'animate-fadeIn opacity-0' : ''}`} style={{
        animationDelay: '0.3s',
        animationFillMode: 'forwards'
      }}>
          {filters.map((filter, index) => <button key={filter.id} onClick={() => setActiveFilter(filter.id)} className={`px-6 py-2 rounded-full transition-all duration-500 ${activeFilter === filter.id ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white transform scale-105' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'} ${inView ? 'animate-scaleIn opacity-0' : ''}`} style={{
          animationDelay: `${0.4 + index * 0.1}s`,
          animationFillMode: 'forwards'
        }}>
              {filter.name}
            </button>)}
        </div>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => <div key={project.id} className={`bg-gray-800 rounded-lg overflow-hidden group project-card ${inView ? 'animate-scaleIn opacity-0' : ''}`} style={{
          animationDelay: `${inView ? 0.5 + index * 0.1 : 0}s`,
          animationFillMode: 'forwards'
        }}>
              <div className="relative h-60 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex space-x-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <a href={project.links.live} className="p-3 bg-cyan-500 rounded-full hover:bg-cyan-600 transition-colors transform hover:scale-110">
                      <ExternalLinkIcon size={18} />
                    </a>
                    <a href={project.links.github} className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors transform hover:scale-110">
                      <GithubIcon size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => <span key={tagIndex} className="px-3 py-1 text-xs bg-gray-700 rounded-full text-cyan-400 transition-all duration-300 hover:bg-gray-600">
                      {tag}
                    </span>)}
                </div>
              </div>
            </div>)}
        </div>
        <div className={`text-center mt-12 ${inView ? 'animate-fadeIn opacity-0' : ''}`} style={{
        animationDelay: `${inView ? 1.2 : 0}s`,
        animationFillMode: 'forwards'
      }}>
          <a href="#" className="inline-block px-8 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
            View All Projects
          </a>
        </div>
      </div>
    </section>;
};