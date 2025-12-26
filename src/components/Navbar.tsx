import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); 

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-0">
            <img src={require('../assets/butterfly.png')} className="w-14 h-20 mt-2" alt="TinyWings Logo" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              TinyWings
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition">
              About
            </button>
            <button onClick={() => scrollToSection('programs')} className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition">
              Programs
            </button>
             <button onClick={() => scrollToSection('activities')} className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition">
              Activities
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition">
              Contact
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-800 rounded">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-800 rounded">
              About
            </button>
            <button onClick={() => scrollToSection('programs')} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-800 rounded">
              Programs
            </button>
            <button onClick={() => scrollToSection('activities')} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-800 rounded">
              Activities
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-800 rounded">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-800 rounded">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
