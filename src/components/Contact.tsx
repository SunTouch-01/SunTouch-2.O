import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram,  
  Facebook,
  ArrowRight,
  Linkedin
} from 'lucide-react';

const Contact: React.FC = () => {
  const quickLinks = [
    'About Us',
    'Services', 
    'Projects',
    'Gallery',
    'Team',
    'Careers'
  ];

  const services = [
    'App Development',
    'Platform Development',
    'Mobile Solutions',
    'AI & Automation',
    'Cloud Hosting',
    'Consulting'
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6 bg-white-600">
              <img src="/assets/logo.png" alt="Logo" className="h-12 w-auto p-1 rounded-lg" style={{ backgroundColor: 'white', borderRadius: '50%' }} />
              <span className="text-xl font-bold">SunTouch Technology</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We are a forward-thinking technology company dedicated to delivering 
              innovative solutions that help businesses thrive in the digital age.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/suntouchtechnology01?igsh=MTV1MjFzcWNwczMybg=="
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300 group"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/suntouch-technology-892572367"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300 group"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300 group"
              >
                <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 75065 41325</p>
                  <p className="text-gray-400 text-sm">Mon-Fri 9am-6pm</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">suntouchtechnology01@gmail.com</p>
                  <p className="text-gray-400 text-sm">We'll respond within 24hrs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Chembur, Mumbai</p>
                  <p className="text-gray-400 text-sm">India</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            {/* <div className="mt-8 p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-l-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors duration-300">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 SunTouch Technology. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;