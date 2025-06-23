import React, { useState, useEffect } from 'react';
import { ArrowLeft, Home, Smartphone, ChefHat, Shield, Bell, Users, Sparkles, ChevronRight, X, ExternalLink, Zap, Calendar, Settings, Star, Bolt } from 'lucide-react';

const NextHomeProject: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

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
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Service Booking",
      description: "Request housekeeping, maintenance, and more with just a tap",
      details: "24/7 on-demand services with real-time tracking, professional staff verification, and instant confirmation. Schedule recurring services or book emergency assistance.",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Luxury Concierge",
      description: "Book private chefs, spa services, and premium amenities",
      details: "Access to exclusive luxury services including personal chefs, in-home spa treatments, event planning, and premium lifestyle amenities.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Luxury Apartments & Villas",
      description: "Personalized services and elite amenities at your fingertips.",
      details: "Enjoy seamless convenience, real-time support, and a lifestyle curated for ultimate comfort and sophistication.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <ChefHat className="w-6 h-6" />,
      title: "Food & Dining",
      description: "Order gourmet meals or schedule personalized meal plans",
      details: "Curated restaurant partnerships, custom meal planning, dietary preference management, and premium ingredient sourcing.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Real-Time Updates",
      description: "Get instant notifications for bookings and confirmations",
      details: "Smart notification system with customizable alerts, service tracking, and proactive updates about your home and services.",
      color: "from-red-500 to-rose-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Guest Experience Enhancement",
      description: "Digital check-in, guidebooks, and personalized recommendations",
      details: "Seamless guest management with digital concierge services, local recommendations, and automated hospitality features.",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const techStack = [
    { name: "React Native", color: "bg-blue-500", description: "Mobile App Development", icon: <Smartphone className="w-4 h-4" /> },
    { name: "Node.js", color: "bg-green-500", description: "Backend Runtime", icon: <Settings className="w-4 h-4" /> },
    { name: "Firebase Realtime Database", color: "bg-green-600", description: "Database", icon: <Shield className="w-4 h-4" /> },
    // { name: "IoT Integration", color: "bg-purple-500", description: "Smart Home Devices", icon: <Wifi className="w-4 h-4" /> },
    { name: "Firebase", color: "bg-orange-500", description: "Real-time Services", icon: <Zap className="w-4 h-4" /> },
    // { name: "AWS", color: "bg-gray-600", description: "Cloud Infrastructure", icon: <Camera className="w-4 h-4" /> }
  ];

  const projectImages = [
    {
      url: "/assets/next2.jpg",
      title: "Smart Home Dashboard",
      description: "Intuitive control interface"
    },
    {
      url: "/assets/next3.jpg",
      title: "Luxury Living Space",
      description: "Premium lifestyle management"
    },
    {
      url: "/assets/services.jpg",
      title: "Concierge Services",
      description: "On-demand luxury services"
    },
    {
      url: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Smart Kitchen",
      description: "Gourmet dining experience"
    }
  ];

  const stats = [
    { number: "10+", label: "Premium Services", icon: <Sparkles className="w-5 h-5" />, color: "from-purple-500 to-pink-500" },
    { number: "24/7", label: "Concierge Support", icon: <Bell className="w-5 h-5" />, color: "from-blue-500 to-cyan-500" },
    { number: "98%", label: "Satisfaction Rate", icon: <Star className="w-5 h-5" />, color: "from-yellow-500 to-orange-500" },
    { number: "40+", label: "Villas", icon: <Home className="w-5 h-5" />, color: "from-green-500 to-emerald-500" }
  ];

  const serviceCategories = [
    { name: "Housekeeping", icon: <Home className="w-5 h-5" />, count: "50+ Services" },
    { name: "Maintenance", icon: <Settings className="w-5 h-5" />, count: "30+ Specialists" },
    { name: "Wellness", icon: <Sparkles className="w-5 h-5" />, count: "25+ Treatments" },
    { name: "Dining", icon: <ChefHat className="w-5 h-5" />, count: "100+ Restaurants" },
    { name: "Security", icon: <Shield className="w-5 h-5" />, count: "24/7 Monitoring" },
    { name: "QuickServe", icon: <Bolt className="w-5 h-5" />, count: "Instant Service Booking" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22 width=%2232%22 height=%2232%22 fill=%22none%22 stroke=%22%23e5e7eb%22%3e%3cpath d=%22m0 0.5 32 32M0 32 32 0.5%22/%3e%3c/svg%3e')] opacity-20"></div>
      
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="group flex items-center text-purple-600 dark:text-purple-400 font-medium mb-8 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-300 transform hover:translate-x-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Projects
          </button>

          {/* Hero Section */}
          <div className="fade-on-scroll bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
            
            <div className="text-center relative z-10">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-4 rounded-2xl shadow-lg animate-pulse">
                  <Home className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Next Home
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                The ultimate smart lifestyle management system that transforms your living space into a 
                luxury experience with premium concierge services.
              </p>
              
              {/* Service Categories */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
                {serviceCategories.map((category, index) => (
                  <div key={index} className="group bg-gradient-to-br from-white to-purple-50 dark:from-gray-700 dark:to-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center justify-center mb-2 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{category.name}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">{category.count}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="fade-on-scroll mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer overflow-hidden ${
                    hoveredStat === index ? 'scale-105' : ''
                  }`}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className={`flex items-center justify-center mb-3 text-transparent bg-gradient-to-r ${stat.color} bg-clip-text group-hover:scale-110 transition-transform duration-300`}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="fade-on-scroll mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              ✨ Premium Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer border border-white/20 relative overflow-hidden ${
                    activeFeature === index ? 'ring-4 ring-purple-500/30 scale-105' : ''
                  }`}
                  onClick={() => setActiveFeature(activeFeature === index ? null : index)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {feature.icon}
                      </div>
                      <ChevronRight className={`w-5 h-5 ml-auto text-gray-400 transition-transform duration-300 ${
                        activeFeature === index ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-center mb-3">
                        <div className={`w-8 h-8 ${tech.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                          {tech.icon}
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 text-center">
                        {tech.name}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300 text-center">{tech.description}</p>
                    </div>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
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
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-12 shadow-2xl text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22 width=%2232%22 height=%2232%22 fill=%22none%22 stroke=%22%23ffffff10%22%3e%3cpath d=%22m0 0.5 32 32M0 32 32 0.5%22/%3e%3c/svg%3e')]"></div>
              <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Lifestyle?
                </h2>
                <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
                  Experience the future of luxury living with Next Home's intelligent platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group bg-white text-purple-600 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    <span className="flex items-center justify-center">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Get Started
                      <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  <button className="group border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:-translate-y-1">
                    <span className="flex items-center justify-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Demo
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

export default NextHomeProject;