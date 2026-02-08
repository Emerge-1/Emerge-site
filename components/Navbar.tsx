import React from 'react';
import { Logo } from './Logo';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 py-2' : 'bg-transparent py-4 md:py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <Logo className="origin-left transition-transform duration-300" />
        <div className="flex items-center">
          <button 
            onClick={scrollToContact}
            className="px-4 md:px-6 py-2 md:py-2.5 bg-white text-black rounded-sm hover:bg-slate-200 transition-colors font-bold uppercase tracking-widest text-[8px] md:text-[10px] shadow-[0_0_20px_rgba(255,255,255,0.1)] whitespace-nowrap"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
    </nav>
  );
};