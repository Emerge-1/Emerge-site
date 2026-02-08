import React from 'react';

const INSTITUTIONS = [
  { id: 'SRC-NASA-01', name: 'NASA', label: 'Optical Instruments', coord: '37.4° N, 122.0° W' },
  { id: 'SRC-CORN-04', name: 'Cornell', label: 'Material Science', coord: '42.4° N, 76.4° W' },
  { id: 'SRC-UCB-09', name: 'Berkeley', label: 'AI & Robotics', coord: '37.8° N, 122.2° W' },
  { id: 'SRC-GOOG-22', name: 'Google', label: 'Cloud Infrastructure', coord: '37.4° N, 122.0° W' },
  { id: 'SRC-AMZN-15', name: 'Amazon', label: 'Scale Systems', coord: '47.6° N, 122.3° W' },
];

export const Heritage: React.FC = () => {
  return (
    <section id="heritage" className="relative py-20 md:py-32 bg-black overflow-hidden border-y border-white/5 scroll-mt-20">
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.02)]">
          
          {/* Section Header Sidebar */}
          <div className="bg-[#080808] lg:w-80 p-6 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
            <div>
              <div className="flex items-center space-x-3 mb-6 md:mb-10">
                <div className="w-1.5 h-1.5 bg-white rotate-45" />
                <span className="text-[9px] md:text-[10px] font-mono tracking-[0.5em] text-white/30 uppercase">Origin.sys</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-4 md:mb-6 text-white uppercase italic leading-none">Provenance</h3>
              <p className="text-[10px] md:text-[11px] text-slate-500 font-mono leading-relaxed uppercase tracking-widest">
                Our core architecture is synthesized from research originating within the world's most rigorous scientific and technical institutions.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 hidden lg:block">
              <div className="space-y-4">
                <div>
                  <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.3em] block mb-1">Clearance</span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Standard.Alpha</span>
                </div>
                <div>
                  <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.3em] block mb-1">System Hash</span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-tighter">0x7F2A...E901</span>
                </div>
              </div>
            </div>
          </div>

          {/* Institutional Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-white/5 relative">
            {/* Active System Pulse */}
            <div className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent animate-[scan_6s_linear_infinite] z-20 pointer-events-none hidden sm:block" />

            {INSTITUTIONS.map((inst) => (
              <div 
                key={inst.id} 
                className="bg-black p-8 md:p-10 group relative flex flex-col items-center justify-center transition-all duration-1000 hover:bg-white/[0.04] border-r border-b border-white/10 last:border-r-0"
              >
                {/* Meta Labels */}
                <div className="absolute top-4 md:top-5 left-4 md:left-5 text-[6px] md:text-[7px] font-mono text-slate-800 group-hover:text-white/20 transition-colors tracking-tighter uppercase">
                  LOC: {inst.coord}
                </div>
                
                <div className="absolute top-4 md:top-5 right-4 md:right-5 text-[6px] md:text-[7px] font-mono text-slate-800 group-hover:text-white/40 transition-colors uppercase">
                  {inst.id}
                </div>

                {/* Institution Name */}
                <div className="relative mb-6 md:mb-8 text-center">
                  <span className="text-xl md:text-3xl font-black tracking-tighter text-white/20 group-hover:text-white transition-all duration-700 group-hover:scale-110 block uppercase italic">
                    {inst.name}
                  </span>
                  {/* Decorative underline */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-white/30 group-hover:w-full transition-all duration-700" />
                </div>

                {/* Industry Label */}
                <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-600 group-hover:text-slate-200 transition-colors text-center px-4 leading-tight">
                  {inst.label}
                </span>

                {/* Technical Corner Brackets */}
                <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-white/0 group-hover:border-white/10 transition-all" />
                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-white/0 group-hover:border-white/10 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};
