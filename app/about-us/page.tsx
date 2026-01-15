'use client';
import React from 'react';
import { 
  CheckCircle2, Users, Target, Rocket, Shield, 
  Construction, ClipboardCheck, ArrowUpRight, Globe
} from 'lucide-react';
import Header from '@/component/Header';
import Footer from '@/component/Footer';

const AboutUs = () => {
  return (
    <div className="font-sans text-[#1a1a1a] bg-white overflow-x-hidden w-full selection:bg-[#C8D653] selection:text-[#335495]">
      <Header />

      {/* --- 1. DYNAMIC HERO (Visual Overlap) --- */}
      <section className="relative h-[60vh] lg:h-[85vh] flex items-center bg-[#335495] overflow-hidden">
        {/* Engineering Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none z-10" 
             style={{ backgroundImage: `radial-gradient(circle, #C8D653 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
        </div>
        
        <div className="absolute inset-0 z-0">
          <img src="/bg-2.jpeg" alt="Hero" className="w-full h-full object-cover opacity-50 scale-105 animate-slow-zoom" />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10">
            <div className="max-w-4xl">
              <span className="inline-block bg-[#C8D653] text-[#335495] px-4 py-1 font-black uppercase text-[10px] tracking-[0.4em] mb-6">
                Established 2018
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-[140px] font-black text-white uppercase tracking-tighter leading-[0.8] mb-8">
                Building <br/>
                <span className="text-transparent" style={{ WebkitTextStroke: '2px #C8D653' }}>The Future</span>
              </h1>
              <p className="text-sm lg:text-xl text-white/80 font-bold max-w-xl uppercase tracking-widest leading-relaxed">
                Precision Engineering for India’s Elite Sports Facilities. 
              </p>
            </div>
          </div>
        </div>
        
        {/* Floating Scroll Badge */}
        <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-4">
            <div className="h-20 w-[1px] bg-[#C8D653]/30"></div>
            <span className="text-white/40 text-[10px] uppercase font-black tracking-widest vertical-text">Scroll Down</span>
        </div>
      </section>

      {/* --- 2. WHO WE ARE (High Texture & Overlap) --- */}
      <section className="py-20 lg:py-32 bg-[#f8f9fa] relative overflow-hidden">
        {/* Diagonal Background Stripe */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#335495] opacity-[0.02] transform -skew-x-12 translate-x-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="relative z-10 shadow-2xl overflow-hidden border-8 border-white">
                <img src="/bg-1.jpeg" className="w-full h-[400px] lg:h-[550px] object-cover  transition-all duration-700" alt="Work" />
              </div>
              {/* Floating Stat Box */}
              <div className="absolute -bottom-10 -left-6 lg:-left-12 bg-[#335495] text-white p-10 z-20 shadow-2xl">
                <p className="text-6xl font-black text-[#C8D653] mb-2 tracking-tighter">400+</p>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 leading-tight">Projects <br/> Executed</p>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-[#C8D653]"></div>
                <h2 className="text-xl font-black text-[#335495] uppercase tracking-widest">About the Firm</h2>
              </div>
              <h3 className="text-4xl lg:text-7xl font-black text-[#335495] uppercase leading-[0.9] tracking-tighter mb-10">
                Pan-India <br/>
                <span className="text-gray-300">Court Specialists</span>
              </h3>
              <div className="space-y-6 text-gray-600 font-medium">
                <p className="text-lg text-[#335495] font-black italic">"We don't just lay floors; we engineer performance."</p>
                <p className="leading-loose text-sm lg:text-base">IKON Sports is a premier turnkey infrastructure company specializing in professional courts for Pickleball, Basketball, Tennis, and more. From initial earthworks to final floodlighting, we handle the complete lifecycle.</p>
                <div className="grid grid-cols-2 gap-4 pt-6">
                    {["ISO Certified", "ICC Standards", "FIFA Grade", "ITF Compliant"].map((tag, i) => (
                        <div key={i} className="flex items-center gap-2 text-[10px] font-black text-[#335495] border border-gray-200 px-3 py-2 uppercase tracking-widest">
                            <CheckCircle2 size={14} className="text-[#C8D653]" /> {tag}
                        </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. PROCESS TIMELINE (No White Space) --- */}
      <section className="bg-[#1a1a1a] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20">
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none">
              How We <br/> <span className="text-[#C8D653]">Engineer</span>
            </h2>
            <p className="text-white/40 max-w-xs text-[10px] font-black uppercase tracking-[0.3em] lg:text-right mt-6">
              A systematic approach to sports infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {[
              { step: "01", title: "Consultation", desc: "Site analysis, soil testing, and sport-specific planning.", icon: <Users /> },
              { step: "02", title: "Engineering", desc: "Detailed CAD layouts and material selection for longevity.", icon: <Construction /> },
              { step: "03", title: "Construction", desc: "Execution under strict supervision and safety protocols.", icon: <Rocket /> }
            ].map((item, i) => (
              <div key={i} className="group bg-[#1a1a1a] p-12 hover:bg-[#335495] transition-all duration-500 relative">
                <span className="text-8xl font-black text-white/5 absolute top-4 right-4 group-hover:text-[#C8D653]/10 transition-colors">{item.step}</span>
                <div className="text-[#C8D653] mb-8 transform group-hover:-translate-y-2 transition-transform">{item.icon}</div>
                <h4 className="text-2xl font-black uppercase mb-4 tracking-tight">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed max-w-xs group-hover:text-white/80 transition-colors">{item.desc}</p>
                <div className="w-0 h-1 bg-[#C8D653] absolute bottom-0 left-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. WHY IKON (Full Information Density) --- */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
                <h2 className="text-3xl font-black text-[#335495] uppercase tracking-tighter border-l-4 border-[#C8D653] pl-6 leading-none">
                    Why <br/> Choose <br/> Us
                </h2>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                    { t: "All-Weather Durability", d: "Surfaces designed to withstand extreme Indian temperatures and monsoons.", i: <Globe size={24}/> },
                    { t: "Single Point Contact", d: "Turnkey execution—we manage everything from civil work to floodlights.", i: <ClipboardCheck size={24}/> },
                    { t: "Player Safety", d: "Advanced shock-absorption systems to reduce player fatigue and injury.", i: <Shield size={24}/> },
                    { t: "Pan-India Reach", d: "Active construction crews in 22+ states across the country.", i: <Target size={24}/> }
                ].map((pillar, i) => (
                    <div key={i} className="flex gap-6">
                        <div className="text-[#C8D653] shrink-0 mt-1">{pillar.i}</div>
                        <div>
                            <h4 className="text-sm font-black text-[#335495] uppercase tracking-widest mb-2">{pillar.t}</h4>
                            <p className="text-gray-500 text-xs leading-loose font-medium">{pillar.d}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. CALL TO ACTION (Compact & Loud) --- */}
      <section className="bg-[#C8D653] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="text-3xl lg:text-5xl font-black text-[#335495] uppercase tracking-tighter leading-none">
            Ready to break ground? <br/> <span className="opacity-40">Consult an expert.</span>
          </h2>
          <div className="flex gap-4">
            <a href="https://wa.me/917737022715" className="bg-[#335495] text-white px-10 py-5 font-black uppercase text-[10px] tracking-widest hover:bg-black transition-colors">
                Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
     <Footer />

      <style jsx global>{`
        .vertical-text { writing-mode: vertical-rl; }
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom { animation: slow-zoom 20s infinite alternate ease-in-out; }
      `}</style>
    </div>
  );
};

export default AboutUs;