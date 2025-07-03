import React, { useState, useEffect } from 'react';
import { Brain, Shield, Code, GraduationCap, MapPin, Users } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Brain,
      title: "AI Enthusiast",
      description: "Passionate about machine learning and artificial intelligence applications",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity Focus",
      description: "Specializing in network security, ethical hacking, and threat analysis",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Code,
      title: "Software Engineer",
      description: "Building scalable applications with modern technologies and best practices",
      color: "from-green-500 to-teal-500"
    }
  ];

  const timeline = [
    {
      year: "2022",
      title: "Started Computer Science Journey",
      description: "Began studies at University for Development Studies",
      icon: GraduationCap
    },
    {
      year: "2023",
      title: "Joined HackerBoost Community",
      description: "Became active member in cybersecurity initiatives",
      icon: Users
    },
    {
      year: "2024",
      title: "Cybersecurity Internship",
      description: "Gained hands-on experience in penetration testing",
      icon: Shield
    },
    {
      year: "2024",
      title: "AI Projects Portfolio",
      description: "Developed multiple AI-powered applications",
      icon: Brain
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Bio Section */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-cyan-400" size={20} />
                <span className="text-gray-300">{personalInfo.location}</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                {personalInfo.bio}
              </p>

              <div className="flex flex-wrap gap-3">
                {['Problem Solver', 'Team Player', 'Continuous Learner', 'Innovation Driven'].map((trait, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${highlight.color} group-hover:scale-110 transition-transform duration-300`}>
                    <highlight.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            My Journey
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-center mb-12">
                <div className={`w-full ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className={`inline-block ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                    <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 max-w-md border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`} style={{ animationDelay: `${index * 0.3}s` }}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                          <item.icon className="text-white" size={20} />
                        </div>
                        <span className="text-cyan-400 font-semibold">{item.year}</span>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-gray-900"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;