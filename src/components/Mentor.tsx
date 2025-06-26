import React from 'react';
import { Heart, Star, Award } from 'lucide-react';

const mentors = [
  {
    name: 'Mr. Dinesh Israni',
    role: 'Mentor & Industry Expert',
    image: '/assets/dinesh_sir.jpg',
    description: [
      `We extend our heartfelt gratitude to Mr. Dinesh Israni for his invaluable guidance, mentorship, and unwavering support throughout our journey. His industry expertise and visionary leadership have been instrumental in shaping SunTouch Technology into what it is today.`,
      `His commitment to excellence and passion for innovation continues to inspire our team to push boundaries and deliver exceptional solutions for our clients.`,
    ],
  },
  {
    name: 'DR. PRADIP SURESH MANE',
    role: 'Technical Advisor & Strategist',
    image: '/assets/hod_sir.jpg', // Ensure this image exists
    description: [
      `DR. PRADIP SURESH MANE has played a pivotal role in helping our team align technological goals with business outcomes. His strategic foresight and deep technical understanding have been key assets in our growth.`,
      `We appreciate his continual support, valuable feedback, and dedication to nurturing innovation and excellence within the team.`,
    ],
  },
];

const Mentor: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-full">
              <Heart className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-800 dark:text-blue-300 font-medium">Appreciation</span>
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Mentors & Guides
          </h2>
        </div>

        {/* Grid of Mentor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-full"
            >
              <div className="p-8 lg:p-10 flex flex-col flex-grow">
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6">
                  {/* Image */}
                  <div className="relative">
                    <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden ring-4 ring-blue-100 dark:ring-blue-900">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2">
                      <Award className="h-5 w-5 text-yellow-800" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {mentor.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                      {mentor.role}
                    </p>

                    <div className="prose prose-sm dark:prose-invert max-w-none">
                      {mentor.description.map((para, i) => (
                        <p key={i} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center lg:justify-start items-center space-x-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-gray-600 dark:text-gray-400 font-medium">
                        Exceptional Mentor
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentor;
