import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Award, ChevronRight, Building, GraduationCap, Users, Briefcase } from 'lucide-react';
import { experience, certificates } from '../data/mockData';

const ExperienceSection = () => {
  const [selectedTab, setSelectedTab] = useState('experience');
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

    const element = document.getElementById('experience');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const getExperienceIcon = (type) => {
    switch (type) {
      case 'education':
        return GraduationCap;
      case 'community':
        return Users;
      case 'internship':
        return Briefcase;
      default:
        return Building;
    }
  };

  const getExperienceColor = (type) => {
    switch (type) {
      case 'education':
        return 'from-green-500 to-teal-500';
      case 'community':
        return 'from-purple-500 to-pink-500';
      case 'internship':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-cyan-500 to-blue-500';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            My professional journey and accomplishments in technology
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50">
            <button
              onClick={() => setSelectedTab('experience')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedTab === 'experience'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setSelectedTab('certificates')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedTab === 'certificates'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Certificates
            </button>
          </div>
        </div>

        {/* Experience Tab Content */}
        {selectedTab === 'experience' && (
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full hidden md:block"></div>
            
            {experience.map((exp, index) => {
              const IconComponent = getExperienceIcon(exp.type);
              const colorClass = getExperienceColor(exp.type);
              
              return (
                <div key={exp.id} className="relative flex items-center mb-16">
                  <div className={`w-full ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                    <div className={`inline-block ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} w-full md:max-w-md`}>
                      <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 ${
                        isVisible ? 'animate-fade-in-up' : 'opacity-0'
                      }`} style={{ animationDelay: `${index * 0.2}s` }}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-3 bg-gradient-to-r ${colorClass} rounded-lg`}>
                            <IconComponent className="text-white" size={20} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                            <p className="text-cyan-400 font-semibold">{exp.company}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-4 text-gray-400">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        
                        {exp.achievements && (
                          <div className="space-y-2">
                            <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                            {exp.achievements.map((achievement, achIndex) => (
                              <div key={achIndex} className="flex items-start gap-2">
                                <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                                <span className="text-gray-300 text-sm">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-gray-900 hidden md:block"></div>
                </div>
              );
            })}
          </div>
        )}

        {/* Certificates Tab Content */}
        {selectedTab === 'certificates' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="text-yellow-400" size={20} />
                    <span className="text-yellow-400 font-semibold">{cert.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {cert.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-3">
                    Issued by {cert.issuer}
                  </p>
                  
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <p className="text-sm text-gray-300">
                      <span className="font-semibold">Credential ID:</span> {cert.credentialId}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;