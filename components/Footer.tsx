import React, { useState, useEffect, useCallback } from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupFading, setPopupFading] = useState(false);

  const handleComingSoonClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setPopupFading(false);
    setShowPopup(true);
  }, []);

  useEffect(() => {
    if (!showPopup) return;
    const fadeTimer = setTimeout(() => setPopupFading(true), 1500);
    const hideTimer = setTimeout(() => {
      setShowPopup(false);
      setPopupFading(false);
    }, 2000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [showPopup]);

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 pt-24 pb-12">
      {showPopup && (
        <div
          className="fixed bottom-8 left-1/2 z-50 px-6 py-3 rounded-xl shadow-2xl border border-white/10 pointer-events-none"
          style={{
            transform: 'translateX(-50%)',
            background: 'linear-gradient(135deg, rgba(30,30,30,0.95), rgba(20,20,20,0.98))',
            backdropFilter: 'blur(16px)',
            animation: popupFading ? 'popupFadeOut 0.5s ease forwards' : 'popupFadeIn 0.3s ease forwards',
          }}
        >
          <p className="text-sm text-emerald-400 font-medium tracking-wide">
            🚀 Coming Soon!
          </p>
        </div>
      )}
      <style>{`
        @keyframes popupFadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(12px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes popupFadeOut {
          from { opacity: 1; transform: translateX(-50%) translateY(0); }
          to { opacity: 0; transform: translateX(-50%) translateY(12px); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="flex flex-col items-start">
            <Logo className="mb-4" />
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
              Emerge is an intelligence company. We build foundation models for material understanding,
              ensuring the integrity of the critical components that power our world.
            </p>
          </div>
          <div className="flex justify-end items-end">
            <div className="text-left md:text-right">
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
            <a href="#" onClick={handleComingSoonClick} className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
            <a href="#" onClick={handleComingSoonClick} className="hover:text-white transition-colors cursor-pointer">Terms of Service</a>
            <a href="#" onClick={handleComingSoonClick} className="hover:text-white transition-colors cursor-pointer">Trust Center</a>
          </div>
        </div>
      </div>
    </footer>
  );
};