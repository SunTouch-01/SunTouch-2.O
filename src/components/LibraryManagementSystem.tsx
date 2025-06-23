import React, { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, Users, Calendar, Bell, Shield, Smartphone, ExternalLink, X, ChevronRight, Youtube} from 'lucide-react';

const LibraryManagementSystem: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  useEffect(() => {
    // Smooth scroll animation on mount
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Smart Catalog System",
      description: "Advanced search, filtering, and categorization with AI-powered recommendations",
      details: "Full-text search across titles, authors, genres, and descriptions. Smart tagging system and automated categorization."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multi-Role Access",
      description: "Dedicated portals for students, teachers, and administrators",
      details: "Role-based permissions, customized dashboards, and tailored experiences for different user types."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Smart Tracking",
      description: "Automated issue, return, and due date management",
      details: "Real-time tracking, automated renewals, and intelligent due date calculations based on book type."
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Intelligent Notifications",
      description: "Proactive alerts for due dates and book availability",
      details: "Email and SMS notifications, customizable reminder schedules, and availability alerts."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Admin Dashboard",
      description: "Comprehensive management tools with analytics",
      details: "User management, book analytics, usage statistics, and detailed reporting systems."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Responsive Design",
      description: "Seamless experience across all devices",
      details: "Mobile-first design, progressive web app features, and offline capability for basic functions."
    }
  ];

  const techStack = [
    { name: "React", color: "bg-blue-500", description: "Modern UI Framework" },
    { name: "Node.js", color: "bg-green-500", description: "Backend Runtime" },
    { name: "MongoDB", color: "bg-green-600", description: "Database" },
    { name: "Next.js", color: "bg-orange-500", description: "Framework" },
    { name: "Tailwind CSS", color: "bg-cyan-500", description: "Styling" },
    { name: "Express.js", color: "bg-gray-600", description: "Web Framework" }
  ];

  const projectImages = [
    {
      url: "/assets/lib2.jpeg",
      title: "Library Interior",
      description: "Modern library environment"
    },
    {
      url: "/assets/dashboard.png",
      title: "Digital Interface",
      description: "User-friendly dashboard"
    },
    {
      url: "/assets/collection.png",
      title: "Book Collection",
      description: "Extensive catalog system"
    }
  ];

  const stats = [
    { number: "5000+", label: "Books Managed", icon: <BookOpen className="w-5 h-5" /> },
    { number: "100+", label: "Active Users", icon: <Users className="w-5 h-5" /> },
    { number: "99.9%", label: "Uptime", icon: <Shield className="w-5 h-5" /> },
    { number: "24/7", label: "Support", icon: <Bell className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22 width=%2232%22 height=%2232%22 fill=%22none%22 stroke=%22%23e5e7eb%22%3e%3cpath d=%22m0 0.5 32 32M0 32 32 0.5%22/%3e%3c/svg%3e')] opacity-20"></div>
      
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="group flex items-center text-blue-600 dark:text-blue-400 font-medium mb-8 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 transform hover:translate-x-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Projects
          </button>

          {/* Hero Section */}
          <div className="fade-on-scroll bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 mb-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-2xl shadow-lg">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                BooksEra
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                A next-generation digital library management system that transforms how educational institutions 
                manage their book collections, streamline operations, and enhance user experience.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="group bg-gradient-to-br from-white to-blue-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center justify-center mb-3 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="fade-on-scroll mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              🚀 Powerful Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer border border-white/20 ${
                    activeFeature === index ? 'ring-4 ring-blue-500/30 scale-105' : ''
                  }`}
                  onClick={() => setActiveFeature(activeFeature === index ? null : index)}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <ChevronRight className={`w-5 h-5 ml-auto text-gray-400 transition-transform duration-300 ${
                      activeFeature === index ? 'rotate-90' : 'group-hover:translate-x-1'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Expandable Details */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    activeFeature === index ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                        {feature.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="fade-on-scroll mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              🛠️ Technology Stack
            </h2>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer "
                  >
                    <div className={`w-3 h-3 ${tech.color} rounded-full mb-4 group-hover:scale-150 transition-transform duration-300`}></div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {tech.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{tech.description}</p>
                    
                    {/* Tooltip */}
                    {/* <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      Click to learn more
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="fade-on-scroll mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              📸 Project Gallery
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projectImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {image.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{image.description}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ExternalLink className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="fade-on-scroll text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 shadow-2xl text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22 width=%2232%22 height=%2232%22 fill=%22none%22 stroke=%22%23ffffff10%22%3e%3cpath d=%22m0 0.5 32 32M0 32 32 0.5%22/%3e%3c/svg%3e')]"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Library?
                </h2>
                <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                  Join the digital revolution and modernize your library management system today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={() => window.open("https://forentend-library.vercel.app/", "_blank")} className="group bg-white text-blue-600 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    <span className="flex items-center justify-center">
                      Get Started
                      <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  <button onClick={() => window.open("https://youtu.be/FZrfTm5qbhI?si=R-glIFcVyEJNu4Xg", "_blank")} className="group border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1">
                    <span className="flex items-center justify-center">
                      <Youtube className="w-5 h-5 mr-2" />
                      Quick Tour
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6">
          <div className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-gray-900/50 text-white p-2 rounded-full hover:bg-gray-900/70 transition-colors duration-300 z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage}
              alt="Project preview"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style>{`
        .fade-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default LibraryManagementSystem;