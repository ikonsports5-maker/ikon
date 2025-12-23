'use client';
import React, { useState } from 'react';
import { 
  Menu, X, Phone, ChevronRight, 
  Dribbble, Target, Shield, Zap, Dumbbell, 
  MapPin, Trophy, Users, Star, Activity,
  ArrowUpRight, Heart, Construction, LayoutGrid,Facebook, Instagram, Linkedin,
  CheckCircle2, Rocket, HardHat, ClipboardCheck

} from 'lucide-react';
import Header from '@/component/Header';

const ServicesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden w-full">
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/917737022715?text=Hello%20IKON%20Sports%2C%20I%20am%20interested%20in%20building%20a%20sports%20court." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>

      {/* --- HEADER --- */}
     <Header />

      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[400px] md:h-[500px] bg-gray-200 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="/bg-3.jpeg" alt="Services Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Our Services</h1>
          <p className="text-[#C8D653] text-lg md:text-2xl font-bold uppercase tracking-widest">
            Professional & Durable Turnkey Sports Infrastructure
          </p>
          <div className="h-1.5 w-24 bg-[#C8D653] mx-auto mt-6"></div>
        </div>
      </div>

      {/* --- 1. INFRASTRUCTURE FOR SECTORS --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#335495] uppercase mb-4">Core Sector Expertise</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Providing turnkey solutions for educational, residential, and large-scale sports developments across India.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Sports Infrastructure for Schools", desc: "Safe and professional school sports courts, playgrounds, and gym facilities for students.", icon: <Users size={40}/> },
              { title: "Real Estate Projects", desc: "Premium sports and recreational amenities for residential and commercial complexes.", icon: <Construction size={40}/> },
              { title: "Large-Scale Projects", desc: "Turnkey solutions for stadiums, sports academies, and high-performance facilities.", icon: <Trophy size={40}/> }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-gray-50 border-t-4 border-[#C8D653] hover:shadow-2xl transition-all group">
                <div className="text-[#335495] mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="text-[#335495] font-black uppercase text-lg mb-4 leading-tight">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 2. COURT CONSTRUCTION GRID --- */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
            <h2 className="text-3xl md:text-5xl font-black text-[#335495] uppercase leading-none">Court <br/><span className="text-[#C8D653]">Construction</span></h2>
            <p className="text-gray-500 text-sm max-w-sm border-l-2 border-[#C8D653] pl-6">Professional indoor and outdoor sports court installation with international standard surfaces.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Basketball Courts", desc: "Certified flooring, hoops, and markings for indoor & outdoor use." },
              { title: "Tennis Courts", desc: "Clay, synthetic, or grass surfaces with professional-grade finishing." },
              { title: "Football Grounds", desc: "Natural or artificial turf fields for clubs and academies." },
              { title: "Badminton Courts", desc: "Indoor & outdoor courts with durable flooring and professional layouts." },
              { title: "Volleyball Courts", desc: "Full net systems and shock-absorbent flooring for all environments." },
              { title: "Squash Courts", desc: "Premium indoor courts with durable wall panels and specialty flooring." }
            ].map((court, i) => (
              <div key={i} className="bg-white p-8 border-l-4 border-[#335495] shadow-sm hover:bg-[#335495] group transition-all duration-300">
                <h4 className="font-black text-[#335495] group-hover:text-white uppercase text-sm mb-3 tracking-wide">{court.title}</h4>
                <p className="text-gray-500 group-hover:text-blue-100 text-xs leading-relaxed">{court.desc}</p>
                <div className="mt-4 flex items-center text-[#C8D653] text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowUpRight size={12} className="ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. MULTI-SPORT SECTION --- */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2">
               <div className="relative rounded-sm overflow-hidden shadow-2xl group">
                 <img src="/bg-1.jpeg" alt="Multi-Sports Court" className="w-full h-80 md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute top-0 right-0 bg-[#C8D653] p-6 text-[#335495] font-black uppercase text-xs tracking-widest">
                   Best Seller
                 </div>
               </div>
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-black text-[#335495] uppercase leading-tight">Multi-Sports <br/> Facilities</h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
                Space and cost-efficient solutions perfect for schools, residential complexes, and commercial projects.
              </p>
              <div className="space-y-4">
                {[
                  "Basketball & Volleyball Combinations",
                  "Badminton & Tennis Multi-Courts",
                  "EPDM & Shock-Absorbent Multipurpose Flooring",
                  "Integrated Gym & Recreational Zones"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#335495] font-bold uppercase text-xs tracking-wide">
                    <div className="w-2 h-2 bg-[#C8D653]"></div>
                    {point}
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed border-l-4 border-[#C8D653] pl-6 italic">
                Our flooring is engineered for Indian weather conditions and international safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4 & 6. SPECIALIZED FACILITIES --- */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#335495] uppercase mb-4 text-left md:text-center">Specialized Sports Infrastructure</h2>
            <div className="h-1.5 w-24 bg-[#C8D653] mx-auto hidden md:block"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Shooting Range", desc: "Safety-compliant indoor & outdoor ranges.", icon: <Target size={24}/> },
              { title: "Cricket Pitch", desc: "Artificial & natural turf wickets.", icon: <Activity size={24}/> },
              { title: "Archery Range", desc: "Safe and standardized archery facilities.", icon: <Star size={24}/> },
              { title: "Running Track", desc: "Built to international athletic standards.", icon: <Zap size={24}/> },
              { title: "Hockey Ground", desc: "Synthetic or natural turf hockey fields.", icon: <Trophy size={24}/> },
              { title: "Skating Rink", desc: "Indoor & outdoor rinks with safety features.", icon: <Activity size={24}/> },
              { title: "Gym Setup", desc: "Complete equipment and installation.", icon: <Dumbbell size={24}/> },
              { title: "Sports Lighting", desc: "High-output LED night lighting solutions.", icon: < Zap size={24}/> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-sm shadow-md hover:shadow-xl transition-all border-b-2 border-transparent hover:border-[#C8D653]">
                <div className="text-[#C8D653] mb-4">{item.icon}</div>
                <h4 className="text-[#335495] font-black uppercase text-xs mb-2 tracking-widest">{item.title}</h4>
                <p className="text-gray-500 text-[10px] font-medium leading-relaxed uppercase opacity-70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE IKON (RECAP) --- */}
      <section className="py-16 md:py-24 bg-[#335495] text-white">
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
              <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight">Why Choose <br/><span className="text-[#C8D653]">IKON Sports?</span></h2>
              <div className="flex gap-4">
                 <div className="bg-[#C8D653] text-[#335495] px-6 py-2 font-black uppercase text-[10px] tracking-widest">Pan-India Reach</div>
                 <div className="border border-[#C8D653] text-[#C8D653] px-6 py-2 font-black uppercase text-[10px] tracking-widest">Turnkey Solutions</div>
              </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { title: "Multi-Sport Expertise", desc: "Basketball to Cricket, Tennis to Archery.", icon: <LayoutGrid /> },
                { title: "Turnkey Solutions", desc: "Civil work, flooring, lighting, and accessories.", icon: <Shield /> },
                { title: "High-Quality Materials", desc: "Engineered for Indian weather conditions.", icon: <Construction /> },
                { title: "International Standards", desc: "Facilities built for safety and durability.", icon: <Star /> }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                   <div className="text-[#C8D653]">{item.icon}</div>
                   <h4 className="font-black uppercase text-sm tracking-widest">{item.title}</h4>
                   <p className="text-blue-100 text-xs opacity-70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-black text-[#335495] uppercase leading-tight">Get Your Professional Sports Facility Today</h2>
            <p className="text-gray-600 font-medium">Planning a sports court, gym, skating rink, or specialized facility? IKON Sports delivers professional, future-ready infrastructure across India.</p>
            <a 
              href="https://wa.me/917737022715?text=Hello%20IKON%20Sports%2C%20I%20am%20interested%20in%20building%20a%20sports%20court." 
              target="_blank" 
              className="inline-flex items-center gap-3 bg-[#335495] text-white px-10 py-4 text-sm font-black uppercase tracking-widest hover:bg-blue-800 transition shadow-2xl rounded-sm"
            >
              Get Free Quote on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#1f2937] text-white py-12 border-t-4 border-[#C8D653]">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div><h4 className="font-bold text-[#C8D653] mb-4">IKON Sports</h4><p className="text-gray-400">India’s No. 1 Sports Courts Infrastructure Company.</p></div>
          <div><h4 className="font-bold text-[#C8D653] mb-4">Quick Links</h4><ul className="text-gray-400 space-y-2"><li><a href="/">Home</a></li><li><a href="/about">About Us</a></li></ul></div>
          <div><h4 className="font-bold text-[#C8D653] mb-4">Contact</h4><ul className="text-gray-400 space-y-2"><li>Call / WhatsApp: +91 77370 22715</li><li>info@ikonsports.in</li></ul></div>
          <div><h4 className="font-bold text-[#C8D653] mb-4">Follow Us</h4><div className="flex space-x-4"><Facebook size={20}/><Instagram size={20}/><Linkedin size={20}/></div></div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;