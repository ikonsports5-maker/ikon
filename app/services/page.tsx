'use client';
import React from 'react';
import { 
  ArrowUpRight, Phone, Instagram, Facebook, Linkedin, 
  MapPin, CheckCircle2, Zap, Trophy, Target
} from 'lucide-react';
import Header from '@/component/Header';

import Footer from '@/component/Footer';

const ServicesPage = () => {
  return (
    <div className="font-sans text-[#1a1a1a] bg-white overflow-x-hidden w-full selection:bg-[#C8D653] selection:text-[#335495]">
      <Header />

      {/* --- 1. DYNAMIC HERO SECTION --- */}
      <section className="relative h-[65vh] lg:h-[85vh] flex items-center overflow-hidden bg-[#335495]">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero" 
            className="w-full h-full object-cover animate-slow-zoom" 
          />
        </div>
        
        {/* Ghost Text Background */}
        <div className="absolute top-1/2 -left-10 -translate-y-1/2 text-[150px] lg:text-[300px] font-black text-white/5 uppercase select-none leading-none tracking-tighter">
          IKON
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-[#C8D653] text-[#335495] text-[10px] font-black uppercase tracking-widest">
                <Zap size={12} /> Ikon Infrastructure
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-6">
                Built To <br/>
                <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Endure</span>
              </h1>
              <p className="text-sm lg:text-xl text-white/70 max-w-lg font-medium leading-relaxed">
                From Olympic tracks to local academy turfs, we deliver surfaces that define performance.
              </p>
            </div>
            
            {/* Quick Contact Floater - Desktop Only */}
            <div className="hidden lg:block bg-white p-8 border-l-[10px] border-[#C8D653] shadow-2xl">
              <p className="text-[#335495] font-black uppercase text-xs tracking-widest mb-2">Build Now</p>
              <p className="text-2xl font-black text-[#335495]">+91 77370 22715</p>
            </div>
          </div>
        </div>
      </section>

    {/* --- 2. CORE SECTORS (Compact & High-Density) --- */}
<section className="py-16 lg:py-20 bg-white border-b border-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Minimalist Header */}
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-2xl font-black text-[#335495] uppercase tracking-tighter italic">Core Sectors</h2>
      <div className="flex-grow h-[1px] bg-gray-100"></div>
      <div className="flex gap-1">
        <div className="w-1 h-1 bg-[#C8D653]"></div>
        <div className="w-1 h-1 bg-[#335495]"></div>
      </div>
    </div>

    {/* Small, Elegant Card Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        { 
          title: "Education", 
          num: "01", 
          img: "https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?q=80&w=800", 
          desc: "Professional sports facilities for schools & universities." 
        },
        { 
          title: "Real Estate", 
          num: "02", 
          img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800", 
          desc: "Value-driven amenities for residential & commercial hubs." 
        },
        { 
          title: "Pro Academies", 
          num: "03", 
          img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800", 
          desc: "International standard training centers for elite athletes." 
        }
      ].map((item, i) => (
        <div key={i} className="group flex flex-col">
          {/* Smaller Cinematic Thumbnail */}
          <div className="relative h-44 w-full overflow-hidden mb-6 bg-gray-100">
            <img 
              src={item.img} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
            />
            {/* Minimal Index Number Overlay */}
            <div className="absolute top-0 left-0 bg-[#335495] text-[#C8D653] text-[9px] font-black px-2 py-1">
              SECTION_{item.num}
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[2px] bg-[#C8D653]"></div>
              <h3 className="text-lg font-black text-[#335495] uppercase tracking-tight group-hover:text-[#C8D653] transition-colors">
                {item.title}
              </h3>
            </div>
            <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* --- 3. COURT BUILD GALLERY: Clean Image Grid --- */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-[#C8D653] font-black uppercase tracking-[0.4em] text-[10px] mb-4">Master Construction</h3>
            <h2 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter">Court Portfolio</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-1">
            {[
              { t: "Basketball", img: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=800" },
              { t: "Tennis", img: "https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?q=80&w=800" },
              { t: "Football", img: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=800" },
              { t: "Badminton", img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=800" },
              { t: "Pickleball", img: "/player1.png" },
              { t: "Squash", img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800" }
            ].map((item, i) => (
              <div key={i} className="group relative h-48 lg:h-80 overflow-hidden cursor-crosshair">
                <img src={item.img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-[#335495]/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 text-white">
                  <h4 className="text-sm lg:text-2xl font-black uppercase tracking-tighter translate-y-2 group-hover:translate-y-0 transition-transform">{item.t}</h4>
                </div>
                <div className="absolute top-4 right-4 lg:top-8 lg:right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="text-[#C8D653] w-6 h-6 lg:w-10 lg:h-10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. MINIMAL TECHNICAL DIRECTORY --- */}
      <section className="py-20 lg:py-32 lg:block hidden bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-xl lg:text-3xl font-black text-[#335495] uppercase tracking-tighter">Specialized Units</h2>
            <div className="flex-grow h-[1px] bg-gray-100"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-12">
            {[
              { t: "Shooting Range", s: "Ballistic Walls", tag: "Safety" },
              { t: "Cricket Pitch", s: "Turf Wickets", tag: "ICC" },
              { t: "Athletic Track", s: "EPDM Synthetic", tag: "Certified" },
              { t: "Gym Solutions", s: "Heavy-Duty Mats", tag: "Commercial" },
              { t: "Hockey Turf", s: "Nylon Polymers", tag: "FIH" },
              { t: "Archery Range", s: "Standard Layouts", tag: "Precision" },
              { t: "Sports Lighting", s: "LED HD ready", tag: "4K Ready" },
              { t: "Maintenance", s: "Annual Packs", tag: "24/7" }
            ].map((item, i) => (
              <div key={i} className="group cursor-default border-l border-gray-100 pl-6 hover:border-[#C8D653] transition-colors">
                <span className="text-[9px] font-black text-[#C8D653] uppercase tracking-[0.2em] mb-2 block">{item.tag}</span>
                <h4 className="text-lg lg:text-xl font-black text-[#335495] uppercase tracking-tight mb-1">{item.t}</h4>
                <p className="text-gray-400 text-[11px] uppercase font-bold tracking-widest leading-none">{item.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. COMPACT CONTACT BAR --- */}
      <section className="bg-[#C8D653] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-2xl lg:text-4xl font-black text-[#335495] uppercase leading-tight text-center md:text-left">
            Ready to break ground <br/> on your next project?
          </h2>
          <a href="tel:+917737022715" className="bg-[#335495] text-white px-10 py-5 font-black uppercase text-xs tracking-widest flex items-center gap-3 hover:bg-black transition-all">
            <Phone size={16} /> Contact Expert
          </a>
        </div>
      </section>

     <Footer />
      <style jsx global>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom { animation: slow-zoom 20s infinite alternate ease-in-out; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #335495; }
      `}</style>
    </div>
  );
};

export default ServicesPage;