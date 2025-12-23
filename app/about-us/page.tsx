'use client';
import React, { useState } from 'react';
import { 
  Menu, X, Phone, ChevronRight, Play, 
  CheckCircle2, Users, Rocket, Target, 
  HardHat, LayoutGrid, Construction, ClipboardCheck
} from 'lucide-react';
import Header from '@/component/Header';

const AboutUs = () => {
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

      {/* --- HEADER (Centered Logo Style) --- */}
     <Header />

      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[400px] md:h-[500px] bg-gray-200 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="/bg-2.jpeg" alt="IKON Sports Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">About Us</h1>
          <p className="text-[#C8D653] text-lg md:text-2xl font-bold uppercase tracking-widest">
            Pan-India Sports Courts Infrastructure Company
          </p>
          <div className="h-1.5 w-24 bg-[#C8D653] mx-auto mt-6"></div>
        </div>
      </div>

      {/* --- WHO WE ARE SECTION --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-1">
              <div className="relative rounded-sm overflow-hidden shadow-2xl bg-gray-100 group">
                <img src="/bg-1.jpeg" alt="IKON Sports Project" className="w-full h-64 md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 w-2 h-24 bg-[#C8D653]"></div>
              </div>
            </div>
            <div className="order-2 text-left">
              <div className="flex items-center mb-6">
                <div className="h-1.5 w-16 bg-[#C8D653] mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-black text-[#335495] uppercase">Who We Are</h2>
              </div>
              <div className="space-y-6 text-gray-600">
                <p className="text-xl font-bold text-[#335495] leading-tight">
                  With 7+ years of experience, IKON Sports is a Pan-India sports infrastructure company designing and executing professional sports courts.
                </p>
                <p className="text-sm md:text-base leading-relaxed">
                  We specialize in professional construction and installation of Pickleball, Basketball, Tennis, Padel, Cricket turf, and Football grounds.
                </p>
                <p className="text-sm md:text-base leading-relaxed">
                  Our turnkey solutions include planning, civil work, flooring systems, fencing, lighting, and accessories. Using industry-approved materials and international standards, we ensure high durability and player safety.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 text-[#335495] font-bold text-xs uppercase tracking-widest">
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#C8D653]" /> Pickleball</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#C8D653]" /> Basketball</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#C8D653]" /> Tennis</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#C8D653]" /> Padel</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#C8D653]" /> Cricket Turf</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#C8D653]" /> Football</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST & STATS SECTION --- */}
      <section className="py-12 md:py-20 bg-[#335495] text-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-4xl md:text-6xl font-black text-[#C8D653]">400+</h3>
            <p className="text-xs font-bold tracking-[0.3em] mt-2 uppercase">Sports Courts Delivered</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-6xl font-black text-[#C8D653]">7+</h3>
            <p className="text-xs font-bold tracking-[0.3em] mt-2 uppercase">Years Industry Experience</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-6xl font-black text-[#C8D653]">Pan-India</h3>
            <p className="text-xs font-bold tracking-[0.3em] mt-2 uppercase">Projects Executed Across India</p>
          </div>
        </div>
      </section>

      {/* --- OUR PROCESS SECTION --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#335495] uppercase mb-12">Our Process to Build Professional Courts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                step: "01", 
                title: "Consultation & Planning", 
                desc: "Understanding sport-specific requirements, site conditions, and usage to plan the ideal court.",
                icon: <Users size={32} />
              },
              { 
                step: "02", 
                title: "Design & Engineering", 
                desc: "Layouts and construction designs developed as per international sports standards for safety and performance.",
                icon: <Target size={32} />
              },
              { 
                step: "03", 
                title: "Construction & Delivery", 
                desc: "Execution of civil work, flooring installation, and final finishing to deliver a ready-to-play facility.",
                icon: <Rocket size={32} />
              }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-sm hover:shadow-xl transition-all border-t-4 border-[#C8D653]">
                <div className="text-[#335495] mb-4 flex justify-center">{item.icon}</div>
                <h4 className="text-[#335495] font-black uppercase text-sm tracking-widest mb-4">{item.step}. {item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE IKON SECTION --- */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <h2 className="text-3xl md:text-4xl font-black text-[#335495] uppercase text-left">Why Choose <br/><span className="text-[#C8D653]">IKON Sports</span></h2>
            <p className="text-gray-500 text-sm max-w-sm border-l-2 border-[#C8D653] pl-6 text-left">Leading Sports Courts Builder in India providing future-ready sports infrastructure.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Multi-Sport Specialization", desc: "Pickleball, Basketball, Tennis, Padel, Cricket Turf & Football — all under one roof.", icon: <LayoutGrid size={32} /> },
              { title: "High-Quality Flooring", desc: "Certified artificial turf and sports flooring built for Indian weather and heavy use.", icon: <Construction size={32} /> },
              { title: "Turnkey Execution", desc: "From civil work to final court handover with single-point responsibility.", icon: <ClipboardCheck size={32} /> },
              { title: "Safety & Performance", desc: "Designed to reduce injury risk and ensure long-term consistent play quality.", icon: <HardHat size={32} /> },
              { title: "Pan-India Delivery", desc: "Serving Rajasthan, Gujarat, MP, Delhi NCR, Maharashtra, Karnataka, Tamil Nadu & more.", icon: <Target size={32} /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 border-l-4 border-[#C8D653] shadow-sm hover:bg-[#335495] group transition-all duration-300 text-left">
                <div className="text-[#335495] group-hover:text-[#C8D653] mb-4">{item.icon}</div>
                <h4 className="font-black text-[#335495] group-hover:text-white uppercase text-sm mb-2">{item.title}</h4>
                <p className="text-gray-500 group-hover:text-blue-100 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 bg-[#335495] text-center text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 leading-tight">Let’s Build Your Sports Court</h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-sm md:text-lg">
            IKON Sports delivers professional, future-ready sports infrastructure across India. Get your free site assessment today.
          </p>
          <a 
            href="https://wa.me/917737022715?text=Hello%20IKON%20Sports%2C%20I%20am%20interested%20in%20building%20a%20sports%20court." 
            target="_blank" 
            className="inline-flex items-center gap-3 bg-[#C8D653] text-[#335495] px-10 py-4 text-sm font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl"
          >
            Get Free Quote
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </a>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#1f2937] text-white py-12 border-t-4 border-[#C8D653]">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div><h4 className="font-bold text-[#C8D653] mb-4">IKON Sports</h4><p className="text-gray-400">India’s No. 1 Sports Courts Infrastructure Company.</p></div>
          <div><h4 className="font-bold text-[#C8D653] mb-4">Quick Links</h4><ul className="text-gray-400 space-y-2"><li>Home</li><li>About Us</li></ul></div>
          <div><h4 className="font-bold text-[#C8D653] mb-4">Contact</h4><ul className="text-gray-400 space-y-2"><li>+91 77370 22715</li><li>info@ikonsports.in</li></ul></div>
          {/* <div><h4 className="font-bold text-[#C8D653] mb-4">Follow Us</h4><div className="flex space-x-4"><Facebook size={20}/><Instagram size={20}/><Linkedin size={20}/></div></div> */}
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;