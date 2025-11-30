import React, { useState, useEffect } from 'react';
import { Sprout, Menu, X } from 'lucide-react';
import { APP_NAME } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#workflow" },
    { name: "Technology", href: "#tech" },
    { name: "Impact", href: "#impact" },
    { name: "Team", href: "#team" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-agri-100 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-agri-600 p-2 rounded-lg">
                <Sprout className="h-6 w-6 text-white" />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-agri-900' : 'text-agri-950'}`}>
              {APP_NAME}
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium hover:text-agri-600 transition-colors ${
                  isScrolled ? 'text-slate-600' : 'text-slate-800'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://github.com/orgs/COMP461-Fall-2025-AgriOS/repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-agri-600 hover:bg-agri-700 text-white text-sm font-semibold rounded-full transition-all shadow-lg shadow-agri-600/20"
            >
              View on GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl p-4 flex flex-col gap-4">
           {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-base font-medium text-slate-700 hover:text-agri-600 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <a 
              href="https://github.com/orgs/COMP461-Fall-2025-AgriOS/repositories" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-center px-5 py-3 bg-agri-600 text-white font-semibold rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              View on GitHub
            </a>
        </div>
      )}
    </nav>
  );
};