import React from 'react';
import { CheckCircle, Users, Target, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    { icon: Users, text: 'Expert Team of Professionals' },
    { icon: Target, text: 'Focused on Client Success' },
    { icon: Lightbulb, text: 'Innovative Technology Solutions' },
    { icon: CheckCircle, text: 'Proven Track Record' }
  ];

  return (
    <section id="about-us" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Professional team collaboration"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-3 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">3+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                We are a forward-thinking technology company dedicated to delivering innovative solutions 
                that help businesses thrive in the digital age. Our passion for technology and commitment 
                to excellence drives us to create solutions that make a real difference.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                From startups to enterprise organizations, we partner with our clients to understand 
                their unique challenges and deliver customized solutions that exceed expectations.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <feature.icon className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            {/* <div className="pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                Learn More About Us
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;