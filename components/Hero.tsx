import React from 'react';

const SpectrumArt: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-16 md:mt-24 px-4 md:px-6 select-none pointer-events-none">
      <div className="relative h-24 md:h-32 w-full flex flex-col justify-end">
        {/* Waveform Visualization */}
        <div className="relative h-16 md:h-20 w-full flex items-center overflow-hidden">
          <svg width="100%" height="60" viewBox="0 0 1000 60" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#334155" stopOpacity="0" />
                <stop offset="10%" stopColor="#475569" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="90%" stopColor="#475569" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#334155" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,30 Q10,10 20,30 T40,30 T60,30 T80,30 T100,30 T120,30 T140,30 T160,30 T180,30 T200,30 T220,30 T240,30 T260,30 T280,30 T300,30 T320,30 T340,30 T360,30 T380,30 T400,30 T420,30 T440,30 T460,30 T480,30 T500,30 T520,30 T540,30 T560,30 T580,30 T600,30 T620,30 T640,30 T660,30 T680,30 T700,30 T720,30 T740,30 T760,30 T780,30 T800,30 T820,30 T840,30 T860,30 T880,30 T900,30 T920,30 T940,30 T960,30 T980,30 T1000,30"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              strokeOpacity="0.1"
            />
            <path
              d="M0,30 C100,0 200,60 300,30 C400,0 500,60 600,30 C700,0 800,60 900,30 C1000,0 1100,60 1200,30"
              fill="none"
              stroke="url(#waveGrad)"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* The Scale Line */}
        <div className="relative h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        {/* Markers */}
        <div className="flex justify-between items-start mt-4 px-1 md:px-2 text-[7px] md:text-[8px] font-mono text-slate-600 tracking-tighter uppercase overflow-hidden">
          <div className="flex flex-col items-center"><span className="h-1 w-px bg-slate-800 mb-1" /><span>X-Ray</span></div>
          <div className="flex flex-col items-center"><span className="h-1 w-px bg-slate-800 mb-1" /><span>UV</span></div>
          <div className="flex flex-col items-center"><span className="h-2 w-px bg-slate-600 mb-1" /><span>Visible</span></div>
          <div className="flex flex-col items-center"><span className="h-1 w-px bg-slate-800 mb-1" /><span className="hidden xs:inline">NIR</span></div>
          <div className="flex flex-col items-center"><span className="h-1 w-px bg-slate-800 mb-1" /><span>SWIR</span></div>
          <div className="flex flex-col items-center"><span className="h-1 w-px bg-slate-800 mb-1" /><span className="hidden sm:inline">Thermal</span></div>
          <div className="flex flex-col items-center"><span className="h-1 w-px bg-slate-800 mb-1" /><span>Radio</span></div>
        </div>
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-24 md:pt-32 pb-16 md:pb-20 hero-mesh overflow-hidden bg-black">
      {/* Intense Technical Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.12]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: 'clamp(40px, 8vw, 60px) clamp(40px, 8vw, 60px)'
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>
      
      {/* Decorative Technical Border Lines */}
      <div className="absolute left-4 md:left-10 top-0 bottom-0 w-px bg-white/5" />
      <div className="absolute right-4 md:right-10 top-0 bottom-0 w-px bg-white/5" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Metadata Ticker Top */}
        <div className="mb-10 md:mb-16 flex flex-wrap justify-center items-center gap-4 md:gap-6">
           <span className="text-[7px] md:text-[9px] font-mono uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/40">Status: Operational</span>
           <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse hidden xs:block" />
           <span className="text-[7px] md:text-[9px] font-mono uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/40">v4.0 Foundational</span>
        </div>

        {/* 'Intelligence' Main Focal Point */}
        <div className="relative mb-6 md:mb-8 w-full max-w-fit px-8 md:px-16 py-4 md:py-6 group">
          {/* Glass Bar Background */}
          <div className="absolute inset-y-0 -left-12 sm:-left-64 -right-12 sm:-right-64 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent backdrop-blur-[2px] md:backdrop-blur-[4px] border-y border-white/5" />
          
          {/* Vertical Scan Line */}
          <div className="absolute inset-y-0 left-0 w-[1px] md:w-[2px] bg-white opacity-20 animate-[scan_4s_ease-in-out_infinite]" />
          
          <h1 className="text-4xl sm:text-7xl md:text-9xl font-black tracking-tighter text-white relative z-10 leading-none italic uppercase">
            Intelligence
          </h1>
        </div>
        
        <div className="relative px-2">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 md:mb-10 leading-[0.9] max-w-5xl mx-auto">
            For What's Emerging.
          </h2>
        </div>
        
        <p className="text-base md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 md:mb-14 leading-relaxed font-light mt-2 md:mt-4 tracking-tight px-4">
          Redefining global manufacturing through <span className="text-white font-medium">Ultraspectral Perception</span> and 
          autonomous material understanding.
        </p>

        {/* Action Button */}
        <button 
          onClick={() => document.getElementById('heritage')?.scrollIntoView({ behavior: 'smooth' })}
          className="group flex flex-col items-center cursor-pointer transition-all duration-300 hover:opacity-80 scale-90 md:scale-100"
        >
          <div className="mb-4 px-6 py-2 border border-white/10 rounded-full text-[9px] md:text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] group-hover:border-white/30 transition-all">
            Initialize Lineage
          </div>
          <div className="w-px h-12 md:h-16 bg-gradient-to-b from-white to-transparent opacity-20 group-hover:opacity-100 group-hover:h-20 md:group-hover:h-24 transition-all duration-700" />
        </button>

        <SpectrumArt />
      </div>

      <style>{`
        @keyframes scan {
          0% { left: 0%; opacity: 0; }
          20% { opacity: 0.5; }
          80% { opacity: 0.5; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};
