import React from 'react';
import { Linkedin, Github, Instagram } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Amit Pandey',
      role: 'Founder',
      image: '/assets/Amit.png',
      bio: 'Visionary leader with 3+ years of experience in technology and business strategy.',
      social: {
        linkedin: 'https://www.linkedin.com/in/amit-pandey-b101b6255',
        instagram: 'https://www.instagram.com/yk._amit?igsh=MWczd2dhdHEzajdvMg==',
        github: 'https://github.com/AmitPandey-106'
      }
    },
    // {
    //   name: 'Shani Sharma',
    //   role: 'Founder of Cut Point ',
    //   image: '/assets/Shani.jpg',
    //   bio: 'Expert project manager ensuring seamless delivery and client satisfaction.',
    //   social: {
    //     linkedin: 'https://www.linkedin.com/in/shani-sharma-b8a3b425a',
    //     instagram: 'https://www.instagram.com/_heyitshani?igsh=MXFyeXhhNGZ1Z2Rvdg==',
    //     github: 'https://github.com/Shani113-op'
    //   }
    // },
    {
      name: 'Rahul Padwal',
      role: 'CEO',
      image: '/assets/Rahul.png',
      bio: 'Creative designer focused on user-centered design and intuitive interfaces.',
      social: {
        linkedin: 'https://www.linkedin.com/in/rahul-padwal-835a31347',
        instagram: 'https://www.instagram.com/rahulll_4039/',
        github: 'https://github.com/Rahul-4039'
      }
    },
    // {
    //   name: 'Darshan Gowda',
    //   role: 'Manager',
    //   image: '/assets/Darshan.jpg',
    //   bio: 'Backend specialist building scalable and secure server-side solutions.',
    //   social: {
    //     linkedin: '#',
    //     instagram: '#',
    //     github: '#'
    //   }
    // }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet the Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our passionate team of experts dedicated to bringing your vision to life
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100 dark:border-gray-700"
            >
              {/* Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-gray-100 dark:ring-gray-700 group-hover:ring-blue-500 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-3">
                <a
                  href={member.social.linkedin}
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300 group/social"
                >
                  <Linkedin className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover/social:text-blue-600 dark:group-hover/social:text-blue-400" />
                </a>
                <a
                  href={member.social.instagram}
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300 group/social"
                >
                  <Instagram className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover/social:text-blue-600 dark:group-hover/social:text-blue-400" />
                </a>
                <a
                  href={member.social.github}
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300 group/social"
                >
                  <Github className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover/social:text-blue-600 dark:group-hover/social:text-blue-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;