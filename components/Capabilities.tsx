import React from 'react';
import { Radio, Waves, Thermometer, Eye, Zap, ShieldAlert } from 'lucide-react';

const WAVELENGTHS = [
  {
    title: 'Radio & Microwave',
    description: 'Non-destructive volumetric analysis. Penetrating opaque materials to detect internal structural shifts and density variations hidden to the naked eye.',
    icon: <Radio className="w-6 h-6" />,
  },
  {
    title: 'Terahertz',
    description: 'The "gap" spectrum. Mapping molecular signatures and chemical compositions without the ionizing radiation risk of higher frequencies.',
    icon: <Waves className="w-6 h-6" />,
  },
  {
    title: 'Infrared (LWIR/SWIR)',
    description: 'Sub-surface thermal intelligence. Tracking heat dissipation patterns to predict mechanical fatigue and stress fractures before they manifest.',
    icon: <Thermometer className="w-6 h-6" />,
  },
  {
    title: 'Visible Spectrum',
    description: 'Neural-enhanced optical verification. Moving beyond simple pixels to real-time geometric and textural validation at sub-micron scales.',
    icon: <Eye className="w-6 h-6" />,
  },
  {
    title: 'Ultraviolet',
    description: 'Surface integrity and molecular bond analysis. Detecting micro-fractures, impurities, and coating inconsistencies at the atomic level.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'X-Ray & Gamma',
    description: 'Atomic-scale inspection. Verifying internal weld integrity and crystalline structure in high-stress aerospace and defense components.',
    icon: <ShieldAlert className="w-6 h-6" />,
  }
];

export const Capabilities: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {WAVELENGTHS.map((wave, idx) => (
        <div 
          key={idx} 
          className="glass-panel p-8 rounded-sm group hover:border-white/30 transition-all duration-500 hover:transform hover:-translate-y-1"
        >
          <div className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center mb-6 text-slate-400 group-hover:text-white transition-colors border border-white/5">
            {wave.icon}
          </div>
          <h4 className="text-xl font-semibold mb-3 text-white tracking-tight">{wave.title}</h4>
          <p className="text-slate-400 text-sm leading-relaxed font-light">
            {wave.description}
          </p>
        </div>
      ))}
    </div>
  );
};