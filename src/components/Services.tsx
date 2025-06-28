import React from 'react';
import { 
  Smartphone, 
  Globe, 
  Database,  
  Bot, 
  Cloud,
  TimerIcon as Time,
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'End-to-End App Development',
      description: 'Complete application development from concept to deployment with modern technologies and best practices.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Database,
      title: 'Platform Development',
      description: 'Scalable platform solutions designed to grow with your business needs and user demands.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile App & Smart Solutions',
      description: 'Native and cross-platform mobile applications with smart features and intuitive user experiences.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Time,
      title: 'Real-Time Application',
      description: 'Comprehensive Real-Time platform for modern environments.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Bot,
      title: 'AI & Automation',
      description: 'Intelligent automation solutions and AI-powered features to streamline your business processes.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Hosting',
      description: 'Reliable cloud infrastructure and hosting solutions with high availability and security.',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business succeed in the digital landscape
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* CTA */}
              {/* <button className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 flex items-center space-x-2 group-hover:translate-x-2">
                <span>Learn More</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;