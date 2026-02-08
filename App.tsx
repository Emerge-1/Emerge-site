import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Heritage } from './components/Heritage';
import { Capabilities } from './components/Capabilities';
import { IntelligenceDemo } from './components/IntelligenceDemo';
import { Solutions } from './components/Solutions';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-slate-700 selection:text-white overflow-x-hidden">
      {/* Universal Technical Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.08]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <Navbar isScrolled={scrolled} />
      
      <main className="relative z-10">
        <Hero />
        
        <div id="heritage">
          <Heritage />
        </div>
        
        <section id="models" className="py-20 md:py-32 px-6 border-b border-white/5 bg-[#020202]/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[10px] md:text-sm font-medium tracking-[0.3em] uppercase text-slate-500 mb-6 md:mb-8">Foundations that matter</h2>
            <h3 className="text-3xl md:text-5xl font-bold silver-gradient mb-6 md:mb-8 leading-tight">Universal Material Understanding</h3>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light mb-10 md:mb-12">
              We train foundational perception models on the world's largest ultraspectral dataset. 
              While existing computer vision models are limited to the visible RGB spectrum, Emerge models comprehend 
              the deep physical essence of matter across every relevant wavelength.
            </p>
            <button 
              onClick={scrollToContact}
              className="px-8 md:px-10 py-3 md:py-4 border border-white/20 hover:bg-white hover:text-black transition-all duration-500 text-[9px] md:text-[11px] font-bold tracking-[0.3em] uppercase rounded-sm"
            >
              Get in Touch
            </button>
          </div>
        </section>

        <section id="capabilities" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
           <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-[10px] md:text-sm font-medium tracking-[0.3em] uppercase text-slate-500 mb-4">Core Technology</h2>
            <h3 className="text-3xl md:text-5xl font-bold silver-gradient leading-tight">Across the entire spectrum.</h3>
            <p className="mt-4 md:mt-6 text-slate-400 text-base md:text-lg leading-relaxed font-light">
              We move beyond surface-level photography. Emerge sensors capture high-fidelity spectral signatures 
              that reveal the molecular integrity of industrial components in real-time.
            </p>
          </div>
          <Capabilities />
          <div className="mt-12 md:mt-16 text-center">
             <button 
                onClick={scrollToContact}
                className="px-8 py-4 bg-white/5 border border-white/10 hover:border-white/40 transition-all duration-300 text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm"
              >
                Get in Touch
              </button>
          </div>
        </section>

        <section id="demo" className="py-16 md:py-24 bg-[#050505]/90 border-y border-white/5 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6">
             <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
               <div>
                  <h2 className="text-[10px] md:text-sm font-medium tracking-[0.3em] uppercase text-slate-500 mb-4">Neural Processing</h2>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Spectral-Native Models</h3>
                  <p className="text-slate-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg font-light">
                    Legacy AI is blind to what it cannot see in RGB. We are building the first generation of 
                    material-aware foundation models. By synthesizing data from Radio to Gamma, our architecture 
                    constructs a high-dimensional digital twin that standard vision models simply cannot access.
                  </p>
                  <div className="space-y-4 mb-8 md:mb-10">
                    {[
                      'Proprietary Ultraspectral Foundational Models',
                      'Beyond RGB: Chemical & Structural Comprehension',
                      'Real-time Multi-sensor Neural Fusion',
                      'Edge-native Deployment for Sub-ms Inference'
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                        <span className="text-slate-300 font-medium text-xs md:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={scrollToContact}
                    className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-slate-200 transition-all duration-300 text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm shadow-xl"
                  >
                    Get in Touch
                  </button>
               </div>
               <div className="relative aspect-square max-w-lg mx-auto lg:max-w-none">
                 <IntelligenceDemo />
               </div>
             </div>
          </div>
        </section>

        <section id="solutions" className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
          <Solutions />
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
