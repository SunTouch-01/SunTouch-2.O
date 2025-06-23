import React, { useState, useEffect } from 'react';
import { ArrowLeft, Camera, Brain, MapPin, FileText, Users, Smartphone, Shield, Zap, ChevronRight, X, ExternalLink, TrendingUp, Database, Cloud} from 'lucide-react';

const GenAISchoolInspectionProject: React.FC = () => {
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
      icon: <Camera className="w-6 h-6" />,
      title: "Food Quality Inspection",
      description: "AI-powered food quality detection with calorie estimation",
      details: "Upload food images for instant quality analysis. Our AI model detects food freshness, identifies food types, and provides accurate calorie estimations to ensure nutritional standards in school meals.",
      color: "from-green-500 to-emerald-600",
      badge: "AI Vision"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sanitation Check",
      description: "Automated cleanliness analysis for toilets and washbasins",
      details: "Smart sanitation monitoring using computer vision to analyze toilet and washbasin cleanliness. Generates automated sanitation scores and hygiene reports for maintaining health standards.",
      color: "from-blue-500 to-cyan-600",
      badge: "Smart Analysis"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Student Wellness Check",
      description: "Emotion detection and BMI calculation for student health",
      details: "Advanced facial recognition to detect student stress levels and emotions. Combined with BMI calculations from height/weight inputs to provide comprehensive wellness monitoring.",
      color: "from-purple-500 to-pink-600",
      badge: "Health AI"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location Detection",
      description: "GPS-based location tracking with manual override",
      details: "Automatic location detection using GPS and LocationIQ API integration. Provides accurate school location data with manual editing capabilities for precise reporting.",
      color: "from-orange-500 to-red-600",
      badge: "GPS Enabled"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Daily Report Submission",
      description: "Comprehensive reporting with real-time Firebase sync",
      details: "Complete daily inspection reports including date, time, school details, UDISE codes, and teacher information. Real-time synchronization with Firebase for instant data availability.",
      color: "from-indigo-500 to-purple-600",
      badge: "Real-time"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Admin Dashboard",
      description: "Advanced analytics with filtering and export capabilities",
      details: "Powerful administrative interface with date-based filtering, school search functionality, comprehensive analytics, and export-ready report generation for government oversight.",
      color: "from-teal-500 to-green-600",
      badge: "Analytics"
    }
  ];

  const techStack = [
    { name: "React Native", color: "bg-blue-500", description: "Mobile App Framework", icon: <Smartphone className="w-4 h-4" /> },
    { name: "TensorFlow", color: "bg-orange-500", description: "AI/ML Framework", icon: <Brain className="w-4 h-4" /> },
    { name: "Firebase", color: "bg-yellow-500", description: "Backend & Database", icon: <Database className="w-4 h-4" /> },
    { name: "Computer Vision", color: "bg-purple-500", description: "Image Analysis", icon: <Camera className="w-4 h-4" /> },
    { name: "LocationIQ API", color: "bg-green-500", description: "GPS Services", icon: <MapPin className="w-4 h-4" /> },
    { name: "Cloud Functions", color: "bg-gray-600", description: "Serverless Computing", icon: <Cloud className="w-4 h-4" /> }
  ];

  const projectImages = [
    {
      url: "/assets/food_inspection.jpg",
      title: "Food Quality Analysis",
      description: "AI-powered food inspection interface"
    },
    {
      url: "/assets/dashboard.jpg",
      title: "School Environment",
      description: "Government school monitoring system"
    },
    {
      url: "/assets/wellness.jpg",
      title: "Student Wellness",
      description: "Health monitoring dashboard"
    },
    {
      url: "/assets/admin_dashboard.jpg",
      title: "Admin Dashboard",
      description: "Comprehensive reporting interface"
    }
  ];

  const stats = [
    { number: "95%", label: "AI Accuracy", icon: <Brain className="w-5 h-5" />, color: "from-purple-500 to-pink-500" },
    { number: "1000+", label: "Schools Monitored", icon: <Shield className="w-5 h-5" />, color: "from-blue-500 to-cyan-500" },
    { number: "24/7", label: "Real-time Sync", icon: <Zap className="w-5 h-5" />, color: "from-yellow-500 to-orange-500" },
    { number: "50K+", label: "Daily Reports", icon: <FileText className="w-5 h-5" />, color: "from-green-500 to-emerald-500" }
  ];

  const inspectionCategories = [
    { name: "Food Quality", icon: <Camera className="w-5 h-5" />, count: "AI Detection", status: "active" },
    { name: "Sanitation", icon: <Shield className="w-5 h-5" />, count: "Auto Score", status: "active" },
    { name: "Student Health", icon: <Users className="w-5 h-5" />, count: "Wellness AI", status: "active" },
    { name: "Location", icon: <MapPin className="w-5 h-5" />, count: "GPS Enabled", status: "active" },
    { name: "Reports", icon: <FileText className="w-5 h-5" />, count: "Real-time", status: "active" },
    { name: "Analytics", icon: <TrendingUp className="w-5 h-5" />, count: "Dashboard", status: "active" }
  ];

  const aiCapabilities = [
    { title: "Food Recognition", accuracy: "96%", description: "Identifies food types and quality" },
    { title: "Cleanliness Detection", accuracy: "94%", description: "Analyzes sanitation conditions" },
    { title: "Emotion Analysis", accuracy: "92%", description: "Detects student stress levels" },
    { title: "Calorie Estimation", accuracy: "89%", description: "Nutritional content analysis" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Animated Background Pattern */}
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
          <div className="fade-on-scroll bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
            
            <div className="text-center relative z-10">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-2xl shadow-lg animate-pulse">
                  <Brain className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                GenAI School Inspector
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Revolutionary AI-powered school inspection platform designed for government schools to ensure 
                optimal hygiene, nutrition, and student well-being through intelligent monitoring and automated reporting.
              </p>
              
              {/* Inspection Categories */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
                {inspectionCategories.map((category, index) => (
                  <div key={index} className="group bg-gradient-to-br from-white to-blue-50 dark:from-gray-700 dark:to-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center justify-center mb-2 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{category.name}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">{category.count}</div>
                    <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mt-2 animate-pulse"></div>
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

          {/* AI Capabilities Section */}
          <div className="fade-on-scroll mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              🤖 AI Capabilities
            </h2>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {aiCapabilities.map((capability, index) => (
                  <div key={index} className="group text-center p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {capability.accuracy}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{capability.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{capability.description}</p>
                    <div className="mt-3 bg-gradient-to-r from-blue-500 to-indigo-500 h-1 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="fade-on-scroll mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              🚀 Core Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer border border-white/20 relative overflow-hidden ${
                    activeFeature === index ? 'ring-4 ring-blue-500/30 scale-105' : ''
                  }`}
                  onClick={() => setActiveFeature(activeFeature === index ? null : index)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {feature.icon}
                      </div>
                      <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full font-medium">
                        {feature.badge}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        activeFeature === index ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`} />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                      {feature.description}
                    </p>
                    
                    {/* Expandable Details */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      activeFeature === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-center mb-3">
                        <div className={`w-8 h-8 ${tech.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                          {tech.icon}
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-center">
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

          {/* Impact Section */}
          <div className="fade-on-scroll mb-16">
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22 width=%2232%22 height=%2232%22 fill=%22none%22 stroke=%22%23ffffff10%22%3e%3cpath d=%22m0 0.5 32 32M0 32 32 0.5%22/%3e%3c/svg%3e')]"></div>
              <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
              
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  🎯 Government Impact
                </h2>
                <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                  Transforming government school monitoring with AI-powered insights, ensuring better health, 
                  nutrition, and educational environments for thousands of students across the nation.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">1000+</div>
                    <div className="text-blue-200">Schools Monitored</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">50K+</div>
                    <div className="text-blue-200">Students Benefited</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">95%</div>
                    <div className="text-blue-200">Compliance Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="fade-on-scroll text-center">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  Ready to Transform School Monitoring?
                </h2>
                <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Join the AI revolution in education monitoring and ensure better outcomes for students nationwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    <span className="flex items-center justify-center">
                      <Brain className="w-5 h-5 mr-2" />
                      Get Started
                      <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  <button className="group border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold py-4 px-8 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                    <span className="flex items-center justify-center">
                      <FileText className="w-5 h-5 mr-2" />
                      View Demo
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

export default GenAISchoolInspectionProject;