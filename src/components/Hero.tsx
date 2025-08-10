import React, { useEffect, useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = e => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Professional background */}
      <div className="absolute inset-0 z-0 bg-gray-950">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950"></div>
        {/* Professional geometric elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/20 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 border border-purple-500/20 rounded-full"></div>
            <div className="absolute top-2/3 left-1/3 w-32 h-32 border border-cyan-500/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gray-700/20 rounded-full"></div>
          </div>
        </div>
        {/* Subtle interactive elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.03) 0%, rgba(30, 64, 175, 0.01) 50%, transparent 100%)',
        transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
        transition: 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1)'
      }}></div>
        {/* Subtle light sources */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/5 blur-3xl" style={{
        transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`
      }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-purple-500/5 blur-3xl" style={{
        transform: `translate(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px)`
      }}></div>
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-cyan-400 font-medium mb-4 tracking-wider animate-fadeIn opacity-0" style={{
          animationDelay: '0.3s',
          animationFillMode: 'forwards'
        }}>
            WELCOME TO MY PORTFOLIO
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block animate-fadeIn opacity-0" style={{
            animationDelay: '0.5s',
            animationFillMode: 'forwards'
          }}>
              I'm Tharindu
            </span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 animate-fadeIn opacity-0" style={{
            animationDelay: '0.7s',
            animationFillMode: 'forwards'
          }}>
              Prabashwara
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8 animate-fadeIn opacity-0" style={{
          animationDelay: '0.9s',
          animationFillMode: 'forwards'
        }}>
            IT Undergraduate & Graphic Design Professional crafting digital
            experiences that blend creativity with technical excellence
          </p>
          <div className="flex flex-wrap gap-4 animate-fadeIn opacity-0" style={{
          animationDelay: '1.1s',
          animationFillMode: 'forwards'
        }}>
            <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-fadeIn opacity-0" style={{
      animationDelay: '1.5s',
      animationFillMode: 'forwards'
    }}>
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDownIcon size={20} className="animate-bounce" />
        </div>
      </a>
    </section>;
};