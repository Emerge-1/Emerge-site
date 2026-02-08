import React from 'react';

export const IntelligenceDemo: React.FC = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-4">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" className="animate-pulse">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Laptop Structure */}
      <div className="relative w-full max-w-4xl aspect-[16/10] bg-[#0a0a0a] rounded-xl border-[6px] border-[#1a1a1a] shadow-[0_0_100px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.05)] overflow-hidden flex flex-col">
        
        {/* Screen Bezel Detail */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#1a1a1a] rounded-b-md z-30 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#333]" />
        </div>

        {/* Dashboard Header */}
        <div className="h-10 bg-[#121212] border-b border-white/5 flex items-center justify-between px-4 shrink-0">
          <div className="flex items-center space-x-6">
            <div className="flex space-x-1.5">
              <div className="w-2 h-2 rounded-full bg-red-900/40" />
              <div className="w-2 h-2 rounded-full bg-yellow-900/40" />
              <div className="w-2 h-2 rounded-full bg-green-900/40" />
            </div>
            <span className="text-[8px] font-mono text-white/30 tracking-[0.4em] uppercase">Emerge.OS // Spectral_Native.v4</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[8px] font-mono text-green-500/60 uppercase animate-pulse">● System Live</span>
            <div className="h-4 w-px bg-white/10" />
            <span className="text-[8px] font-mono text-white/20 uppercase tracking-tighter">Lat: 37.42N / Lon: 122.08W</span>
          </div>
        </div>

        {/* Main Interface Content */}
        <div className="flex-1 flex overflow-hidden p-3 gap-3">
          
          {/* Left Sidebar: Telemetry */}
          <div className="w-1/4 flex flex-col gap-3">
            <div className="flex-1 bg-white/[0.02] border border-white/5 p-3 rounded-sm flex flex-col">
              <h5 className="text-[7px] font-mono text-white/40 uppercase mb-3 tracking-widest">Material.Prop</h5>
              <div className="space-y-4">
                {[
                  { label: 'Density', val: '8.96 g/cm³', p: '94%' },
                  { label: 'Thermal', val: '385 W/mK', p: '21%' },
                  { label: 'Elastic', val: '117 GPa', p: '67%' },
                  { label: 'Conductivity', val: '59.6 MS/m', p: '88%' }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-[7px] font-mono uppercase tracking-tighter">
                      <span className="text-white/20">{item.label}</span>
                      <span className="text-white/60">{item.val}</span>
                    </div>
                    <div className="h-0.5 bg-white/5 w-full rounded-full overflow-hidden">
                      <div className="h-full bg-white/20" style={{ width: item.p }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-20 bg-white/[0.02] border border-white/5 p-3 rounded-sm">
              <div className="flex justify-between mb-2">
                <span className="text-[7px] font-mono text-white/40 uppercase">Inference</span>
                <span className="text-[7px] font-mono text-white/60">0.04ms</span>
              </div>
              <div className="flex items-end gap-0.5 h-6">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="flex-1 bg-white/10 hover:bg-white/40 transition-colors" style={{ height: `${Math.random() * 100}%` }} />
                ))}
              </div>
            </div>
          </div>

          {/* Center: Primary Visualization */}
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex-1 bg-black border border-white/10 rounded-sm relative overflow-hidden group">
              {/* Target Reticle */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-48 h-48 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute w-64 h-64 border border-white/[0.02] rounded-full animate-[spin_20s_linear_infinite_reverse]" />
                <div className="w-px h-full bg-white/[0.03] absolute" />
                <div className="h-px w-full bg-white/[0.03] absolute" />
              </div>

              {/* Scanning Lines */}
              <div className="absolute inset-0">
                <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="none">
                  <path 
                    d="M 0 100 Q 100 20 200 100 T 400 100" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.1)" 
                    strokeWidth="0.5"
                    className="animate-[dash_8s_linear_infinite]"
                    strokeDasharray="4 4"
                  />
                  <path 
                    d="M 0 100 Q 100 180 200 100 T 400 100" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.05)" 
                    strokeWidth="0.5"
                  />
                </svg>
              </div>

              {/* Vertical Scan Beam */}
              <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent animate-[scan_4s_ease-in-out_infinite]" />

              <div className="absolute top-4 left-4 text-[7px] font-mono text-white/40 uppercase tracking-widest">Spectral Focus // Area 4-B</div>
              <div className="absolute bottom-4 right-4 text-[7px] font-mono text-white/20 uppercase">Scan Confidence: 99.8%</div>
              
              {/* Dynamic Points */}
              <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-white rounded-full animate-ping" />
              <div className="absolute top-1/4 left-2/3 w-1 h-1 bg-white/40 rounded-full animate-pulse" />
            </div>

            <div className="h-16 bg-white/[0.02] border border-white/5 rounded-sm p-3 flex items-center justify-between">
              <div className="flex space-x-8">
                <div>
                  <span className="text-[6px] font-mono text-white/20 uppercase block mb-1">Frequency Range</span>
                  <span className="text-[9px] font-mono text-white/60">300GHz - 10THz</span>
                </div>
                <div>
                  <span className="text-[6px] font-mono text-white/20 uppercase block mb-1">Resolution</span>
                  <span className="text-[9px] font-mono text-white/60">0.002μm</span>
                </div>
                <div>
                  <span className="text-[6px] font-mono text-white/20 uppercase block mb-1">Neural Load</span>
                  <span className="text-[9px] font-mono text-white/60">12.4 TFLOPS</span>
                </div>
              </div>
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full group">
                <div className="w-5 h-5 border-2 border-white/10 border-t-white/60 rounded-full animate-spin" />
              </div>
            </div>
          </div>

          {/* Right Sidebar: Active Nodes */}
          <div className="w-48 bg-white/[0.02] border border-white/5 p-3 rounded-sm flex flex-col">
            <h5 className="text-[7px] font-mono text-white/40 uppercase mb-4 tracking-widest">Active.Nodes</h5>
            <div className="space-y-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center space-x-3 p-1.5 border border-white/5 bg-black rounded-sm">
                  <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-green-500' : 'bg-white/10'}`} />
                  <div className="flex-1">
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-white/20" style={{ width: `${Math.random() * 80 + 20}%` }} />
                    </div>
                  </div>
                  <span className="text-[6px] font-mono text-white/30">N-{i+100}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-4 border-t border-white/5">
               <div className="text-[7px] font-mono text-white/10 leading-tight">
                  ROOT@EMERGE:~$ EXECUTE_SENSE_MAP<br/>
                  ... ANALYSIS COMPLETE<br/>
                  ... INTEGRITY VERIFIED
               </div>
            </div>
          </div>

        </div>

        {/* Task Bar */}
        <div className="h-8 bg-[#0d0d0d] border-t border-white/5 shrink-0 flex items-center px-4 space-x-4">
           {['Dashboard', 'Sensors', 'Neural', 'Output', 'Logs'].map((item, i) => (
             <span key={item} className={`text-[7px] font-mono uppercase tracking-widest cursor-pointer hover:text-white transition-colors ${i === 2 ? 'text-white' : 'text-white/20'}`}>
               {item}
             </span>
           ))}
        </div>
      </div>

      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -40; }
        }
        @keyframes scan {
          0% { left: 0%; opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.8; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};
