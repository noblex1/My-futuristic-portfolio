import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { blogPosts } from '../data/mockData';

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(null);
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

    const element = document.getElementById('blog');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleReadMore = (post) => {
    // Mock functionality - in a real app, this would navigate to the full post
    alert(`This would open the full blog post: "${post.title}"\n\nThis is a mock implementation for the portfolio demo.`);
  };

  return (
    <section id="blog" className="py-20 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Blog & Insights
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Sharing thoughts on technology, cybersecurity, and my learning journey
          </p>
        </div>

        {/* Featured Post */}
        <div className={`mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                    Featured
                  </span>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={16} />
                    <span className="text-sm">{formatDate(blogPosts[0].date)}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors duration-300">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock size={16} />
                    <span className="text-sm">{blogPosts[0].readTime}</span>
                  </div>
                  
                  <button
                    onClick={() => handleReadMore(blogPosts[0])}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <div
              key={post.id}
              className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 1) * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                
                {/* Reading Time Badge */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center gap-1 text-white text-sm">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-gray-400">
                  <Calendar size={16} />
                  <span className="text-sm">{formatDate(post.date)}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <button
                  onClick={() => handleReadMore(post)}
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group-hover:gap-3"
                >
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to read more?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I regularly write about technology trends, cybersecurity insights, and my learning journey. 
              Stay tuned for more articles and tutorials!
            </p>
            <button
              onClick={() => alert('Blog subscription feature would be implemented here!')}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Subscribe for Updates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;