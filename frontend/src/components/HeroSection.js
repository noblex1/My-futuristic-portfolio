import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin, Twitter, MapPin, Calendar, Code2, Shield } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const phrases = [
    "Building the Future with Code",
    "AI & Cybersecurity Enthusiast", 
    "Passionate Software Engineer",
    "Innovation Through Technology",
    "Machine Learning Explorer",
    "Ethical Hacking Specialist"
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 3000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? 80 : 120);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  const handleDownloadResume = () => {
    // Mock download functionality
    alert('Resume download would start here! (This is a mock implementation)');
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
        <div className="grid-background"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Profile Image with Glowing Effect */}
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-gray-900 p-2">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            {/* Holographic Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-spin-slow"></div>
            <div className="absolute inset-4 rounded-full border border-blue-400/20 animate-reverse-spin"></div>
          </div>
        </div>

        {/* Greeting */}
        <div className="mb-4">
          <span className="text-2xl md:text-3xl font-light text-cyan-400">👋 Hi, I'm</span>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
          {personalInfo.name}
        </h1>

        {/* Animated Tagline */}
        <div className="mb-6 h-16 flex items-center justify-center">
          <p className="text-xl md:text-2xl font-light text-gray-300">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          {personalInfo.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105 transition-all duration-300 hover:from-cyan-400 hover:to-blue-500"
          >
            View Projects
          </button>
          
          <button
            onClick={handleDownloadResume}
            className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </button>
          
          <button
            onClick={handleContactClick}
            className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            Let's Connect
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          {[
            { icon: Linkedin, href: personalInfo.social.linkedin, color: 'hover:text-blue-400' },
            { icon: Github, href: personalInfo.social.github, color: 'hover:text-gray-400' },
            { icon: Twitter, href: personalInfo.social.twitter, color: 'hover:text-cyan-400' },
            { icon: Mail, href: personalInfo.social.email, color: 'hover:text-green-400' }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full bg-gray-800/50 backdrop-blur-sm text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-gray-700/50`}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <button
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-cyan-500/30"></div>
      <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-cyan-500/30"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-cyan-500/30"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-cyan-500/30"></div>
    </section>
  );
};

export default HeroSection;