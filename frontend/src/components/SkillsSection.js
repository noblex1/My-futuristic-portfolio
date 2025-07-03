import React, { useState, useEffect } from 'react';
import { Code, Cpu, Shield, Settings } from 'lucide-react';
import { skills } from '../data/mockData';

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('languages');
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

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'languages', name: 'Languages', icon: Code, color: 'from-green-500 to-teal-500' },
    { id: 'frameworks', name: 'Frameworks', icon: Cpu, color: 'from-blue-500 to-purple-500' },
    { id: 'tools', name: 'Tools', icon: Tool, color: 'from-orange-500 to-red-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-pink-500' }
  ];

  const getSkillColor = (level) => {
    if (level >= 90) return 'from-green-500 to-emerald-500';
    if (level >= 80) return 'from-blue-500 to-cyan-500';
    if (level >= 70) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            My technical expertise across different domains
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-gray-800/50 backdrop-blur-sm text-gray-400 hover:text-white border border-gray-700/50 hover:border-cyan-500/50'
              }`}
            >
              <category.icon size={20} />
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills[selectedCategory]?.map((skill, index) => (
            <div
              key={index}
              className={`group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">{skill.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{skill.level}% Proficiency</p>
                </div>
              </div>
              
              {/* Skill Progress Bar */}
              <div className="mb-4">
                <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  />
                </div>
              </div>
              
              {/* Skill Level Badge */}
              <div className="flex justify-between items-center">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  skill.level >= 90 ? 'bg-green-500/20 text-green-400' :
                  skill.level >= 80 ? 'bg-blue-500/20 text-blue-400' :
                  skill.level >= 70 ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {skill.level >= 90 ? 'Expert' :
                   skill.level >= 80 ? 'Advanced' :
                   skill.level >= 70 ? 'Intermediate' :
                   'Beginner'}
                </span>
                <span className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.level >= 90 ? '🚀' :
                   skill.level >= 80 ? '⭐' :
                   skill.level >= 70 ? '💪' :
                   '🌱'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Skills Overview
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {categories.map((category) => {
              const categorySkills = skills[category.id] || [];
              const averageLevel = categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length;
              
              return (
                <div key={category.id} className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} mb-4`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{category.name}</h4>
                  <div className="bg-gray-800 rounded-full h-2 mb-2">
                    <div
                      className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000`}
                      style={{ width: isVisible ? `${averageLevel}%` : '0%' }}
                    />
                  </div>
                  <p className="text-gray-400 text-sm">{Math.round(averageLevel)}% Average</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;