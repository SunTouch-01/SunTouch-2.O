import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About Us', 'Services', 'Projects', 'Gallery', 'Contact'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase().replace(' ', '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/98 dark:bg-gray-900/98 backdrop-blur-lg shadow-xl border-b border-gray-200/20 dark:border-gray-700/20' 
        : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-2">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-white-600 p-2 rounded-lg" style={{ backgroundColor: theme === 'light' ? '#f3f4f6' : '#f3f4f6', borderRadius: '50%', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
              <img src="/assets/logo.png" alt="Logo" className="h-10 w-auto" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              SunTouch Technology
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-semibold text-sm uppercase tracking-wide py-2 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 border border-gray-300 dark:border-gray-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-2 bg-white dark:bg-gray-900 rounded-xl shadow-2xl mt-2 border border-gray-200 dark:border-gray-700">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-3 text-base font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;