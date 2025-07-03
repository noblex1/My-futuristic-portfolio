import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/mockData';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{personalInfo.name}</h3>
                  <p className="text-gray-400">{personalInfo.title}</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Passionate about creating innovative solutions through technology. 
                Specializing in AI, cybersecurity, and full-stack development.
              </p>
              
              <div className="flex gap-4">
                {[
                  { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
                  { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
                  { icon: Twitter, href: personalInfo.social.twitter, label: 'Twitter' },
                  { icon: Mail, href: personalInfo.social.email, label: 'Email' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-cyan-400 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: 'About', href: '#about' },
                  { label: 'Projects', href: '#projects' },
                  { label: 'Experience', href: '#experience' },
                  { label: 'Skills', href: '#skills' },
                  { label: 'Blog', href: '#blog' },
                  { label: 'Contact', href: '#contact' }
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="text-cyan-400 flex-shrink-0" size={16} />
                  <a
                    href={personalInfo.social.email}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400 flex-shrink-0">📍</span>
                  <span className="text-gray-400 text-sm">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>© {currentYear} {personalInfo.name}. Made with</span>
              <Heart className="text-red-400 animate-pulse" size={16} fill="currentColor" />
              <span>and lots of ☕</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">Built with React & Tailwind</span>
              </div>
              
              <button
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-cyan-400 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
    </footer>
  );
};

export default Footer;