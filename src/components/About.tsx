import React, { useEffect, useState } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import { useInView } from './hooks/useInView';
export const About = () => {
  const {
    ref,
    inView
  } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  return <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" subtitle="Get to know me better" />
        <div ref={ref} className="flex flex-col lg:flex-row gap-12 mt-12">
          <div className={`lg:w-2/5 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-cyan-500 to-purple-600 p-1">
                <img src="/WhatsApp_Image_2025-08-10_at_18.50.54_5908466d.jpg" alt="Tharindu Prabashwara" className="w-full h-full object-cover rounded-lg transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 -z-10"></div>
            </div>
            <div className="flex justify-center mt-8 space-x-4">
              {[{
              icon: <GithubIcon size={20} />
            }, {
              icon: <LinkedinIcon size={20} />
            }, {
              icon: <TwitterIcon size={20} />
            }].map((social, index) => <a key={index} href="#" className={`bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${inView ? 'animate-fadeIn opacity-0' : ''}`} style={{
              animationDelay: `${inView ? 0.7 + index * 0.1 : 0}s`,
              animationFillMode: 'forwards'
            }}>
                  {social.icon}
                </a>)}
            </div>
          </div>
          <div className={`lg:w-3/5 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              IT Undergraduate & Graphic Design Professional
            </h3>
            <div className="space-y-6 text-gray-300">
              <p className={`leading-relaxed ${inView ? 'animate-fadeIn opacity-0' : ''}`} style={{
              animationDelay: `${inView ? 0.5 : 0}s`,
              animationFillMode: 'forwards'
            }}>
                My name is Tharindu, and I am currently an undergraduate
                pursuing a Bachelor of Science (Hons) degree in Information
                Technology. I am dedicated to expanding my knowledge and skills
                in the field of IT, combining academic rigor with practical
                experience to prepare myself for a successful career in
                technology and digital media.
              </p>
              <p className={`leading-relaxed ${inView ? 'animate-fadeIn opacity-0' : ''}`} style={{
              animationDelay: `${inView ? 0.7 : 0}s`,
              animationFillMode: 'forwards'
            }}>
                Throughout my university journey, I have gained a strong
                foundation in core IT concepts such as programming, system
                analysis, database management, and networking. This academic
                background equips me with the analytical and technical skills
                necessary to solve complex problems and develop innovative
                solutions in the fast-evolving tech landscape.
              </p>
              <p className={`leading-relaxed ${inView ? 'animate-fadeIn opacity-0' : ''}`} style={{
              animationDelay: `${inView ? 0.9 : 0}s`,
              animationFillMode: 'forwards'
            }}>
                Parallel to my studies, I have developed a professional career
                in graphic design, leveraging my creativity and technical
                proficiency to deliver compelling visual content. I specialize
                in using industry-standard Adobe software such as Photoshop,
                Premiere Pro, and After Effects to create branding materials,
                digital graphics, and video content that effectively communicate
                messages and engage audiences.
              </p>
              <p className={`leading-relaxed ${inView ? 'animate-fadeIn opacity-0' : ''}`} style={{
              animationDelay: `${inView ? 1.1 : 0}s`,
              animationFillMode: 'forwards'
            }}>
                My graphic design company, JBX (Just Branding Your eXcellence),
                serves as a platform where I apply my design expertise to help
                clients elevate their brands through thoughtful and impactful
                visual solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[{
              label: 'Name',
              value: 'Tharindu Prabashwara'
            }, {
              label: 'Education',
              value: 'BSc (Hons) in IT (Undergraduate)'
            }, {
              label: 'Company',
              value: 'JBX Graphic'
            }, {
              label: 'Location',
              value: 'Colombo, Sri Lanka'
            }].map((detail, index) => <div key={index} className={`${inView ? 'animate-fadeIn opacity-0' : ''}`} style={{
              animationDelay: `${inView ? 1.3 + index * 0.1 : 0}s`,
              animationFillMode: 'forwards'
            }}>
                  <h4 className="text-gray-400 text-sm mb-1">{detail.label}</h4>
                  <p className="text-white">{detail.value}</p>
                </div>)}
            </div>
            <a href="#contact" className={`inline-block mt-8 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1 ${inView ? 'animate-fadeIn opacity-0' : ''}`} style={{
            animationDelay: `${inView ? 1.7 : 0}s`,
            animationFillMode: 'forwards'
          }}>
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>;
};