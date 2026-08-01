'use client';
import React from 'react';
import { ArrowUpRight, Phone } from 'lucide-react';
import Header from '@/component/Header';

import Footer from '@/component/Footer';

// Every service we have a dedicated page for. `href` handles Gym living
// outside the /services/[id] route.
const services = [
  { name: 'Gym', id: 'gym', href: '/gym', desc: 'Heavy-duty rubber & commercial flooring', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop' },
  { name: 'Cricket Turf', id: 'cricket-turf', desc: 'Practice nets, pitches & full-size fields', img: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop' },
  { name: 'Basketball Courts', id: 'basketball-courts', desc: 'Shock-absorbent multi-layer floors', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop' },
  { name: 'Tennis Courts', id: 'tennis-courts', desc: 'Multi-layer acrylic systems', img: 'https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?q=80&w=800&auto=format&fit=crop' },
  { name: 'Football Turf', id: 'football-turf', desc: 'FIFA-quality heavy-duty turfs', img: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=800&auto=format&fit=crop' },
  { name: 'Badminton Courts', id: 'badminton-courts', desc: 'Synthetic & wooden flooring', img: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=800&auto=format&fit=crop' },
  { name: 'Pickleball Courts', id: 'pickleball-courts', desc: 'Accurate layouts & durable surfaces', img: '/player1.png' },
  { name: 'Padel Courts', id: 'padel-courts', desc: 'Glass-wall panoramic structures', img: '/player1.png' },
  { name: 'Squash Courts', id: 'squash-courts', desc: 'WSF-standard panels & hardwood', img: 'https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?q=80&w=800&auto=format&fit=crop' },
  { name: 'Athletic Tracks', id: 'athletic-tracks', desc: 'World Athletics certified surfaces', img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop' },
  { name: 'Swimming Pools', id: 'swimming-pools', desc: 'Turnkey pool construction & finishing', img: 'https://images.unsplash.com/photo-1560090995-01632a28895b?q=80&w=800&auto=format&fit=crop' },
];

const ServicesPage = () => {
  return (
    <div className="font-sans text-[#1a1a1a] bg-white overflow-x-hidden w-full selection:bg-[#C8D653] selection:text-[#335495]">
      <Header />

      {/* --- PAGE TITLE --- */}
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#C8D653]"></div>
            <span className="text-[#C8D653] font-black uppercase tracking-[0.3em] text-[10px]">What We Build</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#335495] uppercase tracking-tighter leading-[0.9]">
            Our Services
          </h1>
          <p className="text-gray-500 text-sm md:text-base font-medium mt-6 max-w-xl leading-relaxed">
            Turnkey sports infrastructure across India — planning, civil work, flooring systems and accessories.
          </p>
        </div>
      </section>

      {/* --- ALL SERVICES GRID --- */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <a
                key={service.id}
                href={service.href || `/services/${service.id}`}
                aria-label={`View ${service.name}`}
                className="group block"
              >
                {/* Image */}
                <div className="relative h-56 lg:h-64 overflow-hidden bg-gray-100 border-b-4 border-[#C8D653]">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#335495]/10 group-hover:bg-transparent transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 bg-[#C8D653] flex items-center justify-center text-[#335495]">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>

                {/* Label */}
                <div className="py-4">
                  <h3 className="font-black text-[#335495] uppercase text-sm tracking-widest group-hover:text-[#C8D653] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-tight mt-1">
                    {service.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT BAR --- */}
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
    </div>
  );
};

export default ServicesPage;
