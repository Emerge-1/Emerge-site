import React, { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';

const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus('submitted');
        setFormData({ name: '', organization: '', email: '', message: '' });
      } else {
        console.error('Form submission failed:', response.statusText);
        setStatus('error');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('error');
    }
  };

  if (status === 'submitted') {
    return (
      <section id="contact" className="py-24 px-6 border-t border-white/5 bg-[#020202]">
        <div className="max-w-3xl mx-auto text-center py-20">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="w-16 h-16 text-white animate-in zoom-in duration-500" />
          </div>
          <h3 className="text-4xl font-bold silver-gradient mb-4">Inquiry Received.</h3>
          <p className="text-slate-400 text-lg leading-relaxed font-light mb-8">
            Thank you for reaching out. Your message has been successfully sent to our technical team. 
            We will review your requirements and contact you shortly.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="px-8 py-3 border border-white/20 hover:bg-white hover:text-black transition-all text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm"
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-6 border-t border-white/5 bg-[#020202]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium tracking-[0.3em] uppercase text-slate-500 mb-4">Inquiries</h2>
          <h3 className="text-4xl font-bold silver-gradient">Partner with Emerge.</h3>
          <p className="mt-4 text-slate-500 text-sm font-light">Secure transmission of technical requirements.</p>
        </div>
        
        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Honeypot field for spam protection — hidden from users */}
          <p className="hidden">
            <label>Don't fill this out: <input name="bot-field" /></label>
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Full Name</label>
              <input 
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Organization</label>
              <input 
                required
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Aerospace Dynamics"
                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Work Email</label>
            <input 
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@organization.com"
              className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Project Requirements</label>
            <textarea 
              required
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your sensing challenges..."
              className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-white/30 transition-colors resize-none"
            />
          </div>

          {status === 'error' && (
            <p className="text-red-400 text-sm text-center">
              Something went wrong. Please try again or email us directly at tech.emergeindustries@gmail.com
            </p>
          )}

          <button 
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-5 bg-white text-black font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-slate-200 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <span>SUBMIT INQUIRY</span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};