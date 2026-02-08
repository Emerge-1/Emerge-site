import React from 'react';

const CASES = [
  {
    title: 'Precision Foundry',
    industry: 'Heavy Industry',
    impact: 'Real-time thermal monitoring of molten alloy flow, reducing casting porosity by 34% in critical engine blocks.',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Autonomous Fabrication',
    industry: 'Advanced Manufacturing',
    impact: 'Multi-spectral sensor fusion providing sub-millimeter alignment validation for high-speed robotic assembly lines.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Aerospace Propulsion',
    industry: 'Defense',
    impact: 'Non-destructive spectral validation of composite turbine blades, ensuring 100% material integrity before flight.',
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800',
  }
];

export const Solutions: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
           <h2 className="text-sm font-medium tracking-[0.3em] uppercase text-slate-500 mb-4">Verticals</h2>
           <h3 className="text-4xl md:text-5xl font-bold silver-gradient leading-tight">Built for the most complex environments on Earth.</h3>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {CASES.map((item, idx) => (
          <div key={idx} className="flex flex-col group">
            <div className="relative aspect-[4/5] mb-8 overflow-hidden rounded-sm bg-slate-900 border border-white/5">
               {/* Noise/Grain Overlay for Industrial Grit */}
               <div className="absolute inset-0 z-10 opacity-[0.15] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
               
               <img 
                 src={item.image} 
                 alt={item.title} 
                 className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                 loading="lazy"
               />
               
               {/* Vignette effect */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] mb-3 block">{item.industry}</span>
            <h4 className="text-xl font-bold mb-4 tracking-tight group-hover:text-white transition-colors">{item.title}</h4>
            <div className="w-8 h-px bg-white/10 group-hover:w-full transition-all duration-500 mb-4" />
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              {item.impact}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};