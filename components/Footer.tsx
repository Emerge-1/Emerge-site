import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="flex flex-col items-start">
            <Logo className="mb-4" />
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
              Emerge is an intelligence company. We build foundation models for material understanding, 
              ensuring the integrity of the critical components that power our world.
            </p>
          </div>
          <div className="flex md:justify-end items-end">
            <div className="text-right">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">HEADQUARTERS</h5>
              <p className="text-sm text-slate-400">Palo Alto, California</p>
              <p className="text-sm text-slate-400">United States</p>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Emerge Technologies Inc. All rights reserved.
          </p>
          <div className="flex space-x-8 text-xs text-slate-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Trust Center</a>
          </div>
        </div>
      </div>
    </footer>
  );
};