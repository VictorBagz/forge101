import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: '#', active: true },
    {
      name: 'ABOUT US',
      dropdown: [
        { name: 'Our Story', href: '#' },
        { name: 'Client Reviews', href: '#trainers' },
        { name: 'Training Methods', href: '#' },
        { name: 'Articles', href: '#' },
      ]
    },
    {
      name: 'WHO WE WORK WITH',
      dropdown: [
        { name: 'Adult-Fitness', href: '#' },
        { name: 'Elite Athletes', href: '#' },
        { name: 'Injured Athletes', href: '#' },
        { name: 'Youth Athletes', href: '#' },
      ]
    },
    {
      name: 'WHAT WE DO',
      dropdown: [
        { name: 'Performance Training', href: '#programs' },
        { name: 'Adult Fitness', href: '#' },
        { name: 'Sports Conditioning', href: '#' },
        { name: 'Sports Recovery', href: '#' },
        { name: 'Sports Medicine', href: '#' },
        { name: 'Wellness Tracking', href: '#' },
        { name: 'Schedule & Calendar', href: '#' },
        { name: 'Excercise Library', href: '#' },
      ]
    },
    {
      name: 'GET STARTED',
      dropdown: [
        { name: 'Find a Location', href: '#membership' },
        { name: 'Contact Us', href: '#' },
      ]
    },
  ];

  // Helper classes for dynamic text color based on scroll state
  const textColorClass = isScrolled ? 'text-gray-900' : 'text-white';
  const hoverColorClass = 'hover:text-forge-accent';
  const subTextColorClass = isScrolled ? 'text-gray-500' : 'text-gray-300';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 py-2 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center group mr-8">
          <img 
            src="./logo.png" 
            alt="Forge Performance Hub" 
            // Invert logo when scrolled to make it dark (assuming original is white for dark theme)
            className={`h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${isScrolled ? 'brightness-0' : ''}`}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center flex-1 justify-end space-x-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group h-10 flex items-center">
              <a
                href={item.href || '#'}
                className={`flex items-center text-sm font-bold uppercase tracking-wider transition-colors ${item.active ? 'text-forge-accent' : `${textColorClass} ${hoverColorClass}`}`}
              >
                {item.name}
                {item.dropdown && <ChevronDown size={14} className={`ml-1 transition-all duration-200 group-hover:text-forge-accent group-hover:rotate-180 ${subTextColorClass}`} />}
              </a>
              
              {/* Active Indicator */}
              {item.active && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-forge-accent translate-y-[21px]"></div>
              )}

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div className="absolute top-full left-0 mt-4 w-56 bg-white border border-gray-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform -translate-x-4 rounded-sm">
                  <div className="absolute -top-2 left-8 w-4 h-4 bg-white border-t border-l border-gray-200 transform rotate-45"></div>
                  <div className="relative py-2 bg-white z-10 rounded-sm">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-6 py-3 text-sm text-gray-600 hover:text-forge-accent hover:bg-gray-50 transition-colors"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {/* Search Icon */}
          <button className={`${textColorClass} ${hoverColorClass} transition-colors ml-4 p-2`}>
            <Search size={20} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button className={`${textColorClass} ${hoverColorClass} transition-colors`}>
            <Search size={22} />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${textColorClass} ${hoverColorClass} transition-colors`}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isMenuOpen && (
        <>
          {/* Overlay backdrop */}
          <div 
            className="md:hidden fixed inset-0 bg-black/50 z-40 animate-fadeIn"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Slide-in drawer */}
          <div className="md:hidden fixed right-0 top-0 h-screen w-full sm:w-96 bg-white shadow-2xl overflow-y-auto pb-32 z-50 animate-slideInRight">
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 pb-4 last:border-0">
                  <button
                    onClick={() => setActiveMobileDropdown(activeMobileDropdown === item.name ? null : item.name)}
                    className={`w-full flex justify-between items-center text-xl font-display font-bold uppercase tracking-wider ${item.active ? 'text-forge-accent' : 'text-gray-900'}`}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={20} className={`transition-transform duration-300 ${activeMobileDropdown === item.name ? 'rotate-180 text-forge-accent' : 'text-gray-400'}`} />}
                  </button>
                  
                  {item.dropdown && (
                    <div className={`mt-4 pl-4 space-y-4 border-l-2 border-gray-100 ml-1 overflow-hidden transition-all duration-300 ${activeMobileDropdown === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-sm text-gray-500 hover:text-forge-accent transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <a
                  href="#membership"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center py-4 bg-forge-accent hover:bg-forge-accentHover text-white font-bold uppercase tracking-wider transition-colors"
                >
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;