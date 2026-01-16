'use client';
import React, { useState,useEffect } from 'react';
import { 
  Menu, X, Search, Facebook, Instagram, Linkedin, 
  Headset, Atom, ThumbsUp, ChevronRight, Play , ArrowUpRight, Zap
} from 'lucide-react';
import YouTubeLoop from '@/component/YoutubeLoop';



import { Quote, Star,Plus, Minus } from 'lucide-react';

import {  ArrowLeft, ArrowRight, Phone } from 'lucide-react';

import SportsInfrastructureHero from '@/component/NewHero';
import Header from '@/component/Header';
import Footer from '@/component/Footer';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  // Updated Content for the Tabs Section to maintain UI while showing new services
  const courtTypes = [
    { title: "Pickleball Courts", content: "Pickleball is one of the fastest-growing sports in India, widely adopted by clubs, schools, residential societies and commercial facilities. IKON provides professional Pickleball court construction with accurate layouts, durable surfaces and consistent play quality suitable for Indian weather conditions." },
    { title: "Tennis & Basketball", content: "We specialize in high-performance Tennis and Basketball court construction. Our surfaces are designed for professional bounce, player safety, and extreme durability, utilizing multi-layered acrylic systems or modular tiles depending on the project requirements." },
    { title: "Badminton & Futsal", content: "From indoor wooden flooring to outdoor synthetic turf, we provide turnkey solutions for Badminton and Futsal. Our Futsal turfs are built to withstand high-intensity play while our Badminton courts meet international standards for shock absorption." },
    { title: "Cricket & Turf", content: "We offer both Indoor and Outdoor Cricket Turf solutions. Our high-density artificial grass is perfect for practice pitches and full-sized fields, ensuring a consistent ball behavior and low maintenance costs for schools and academies." },
    { title: "Gym & Multi-Sport", content: "Complete gym and multipurpose flooring solutions designed for versatility. Whether it's heavy-duty rubber flooring for weight rooms or seamless polyurethane surfaces for multi-sport halls, we deliver quality that lasts." }
  ];

  const colors = {
    blue: '#335495',
    green: '#C8D653',
    textDark: '#1a1a1a',
    textLight: '#f5f5f5'
  };


  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    "/2sd.jpg",
    "/MOBILE-BANNER.jpg", 
    "/vd.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Changes every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden w-full">


      <a 
      href="https://wa.me/917737022715?text=Hello%20IKON%20Sports%2C%20I%20am%20interested%20in%20building%20a%20sports%20court." 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
     <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
      
      {/* Tooltip visible on hover */}
      <span className="absolute right-16 bg-white text-gray-800 text-xs font-bold px-3 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
        Chat with us
      </span>
    </a>
      {/* --- HEADER --- */}
     
    {/* --- HEADER --- */}
   <Header />


     

      {/* <div className="w-full h-screen hidden md:block object-cover">
       <img src="/bg-2.jpeg" className='w-screen' alt="" />
      </div> */}

      {/* --- HERO SECTION --- */}
    <div className="relative w-full h-[550px] md:h-[600px] bg-gray-200 overflow-hidden">
        {/* --- AUTO-SCROLLING BACKGROUND --- */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={img} 
                alt={`Slide ${index}`} 
                className="w-full h-full object-cover" 
              />
            </div>
          ))}
          {/* Dark Overlay for Readability of bottom text */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* --- BOTTOM DECORATIVE STRIP --- */}
       
        
        {/* --- BOTTOM RIGHT CAPTION & INDICATORS --- */}
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 text-right text-white drop-shadow-md">
            <h3 className="text-sm md:text-xl font-bold leading-none">Our Project</h3>
            <p className="text-xs md:text-sm font-medium opacity-90">Pan-India Execution</p>
            {/* Slide Indicators */}
            <div className="flex justify-end space-x-2 mt-2">
              {heroImages.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 w-4 transition-all ${i === currentSlide ? 'bg-[#C8D653] w-8' : 'bg-white/50'}`}
                />
              ))}
            </div>
        </div>
      </div>

      <section className="py-16 md:py-24  bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
            
            {/* Left Column: Heading */}
            <div className="w-full md:w-1/2">
              <div className="inline-block bg-[#C8D653] text-[#335495] px-4 py-1 text-xs font-bold uppercase tracking-widest mb-4">
                India's No. 1
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl  text-[#335495] uppercase font-black">
                Sports Courts <br/> Infrastructure <br/> Company
              </h1>
              <div className="h-2 w-24 bg-[#C8D653] mt-8"></div>
            </div>

            {/* Right Column: Details & CTA */}
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-xl md:text-2xl font-bold text-[#335495] leading-tight">
                7+ Years Experience | Pan-India Turnkey Execution | 400+ Courts Delivered
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
                We design, build and deliver high-performance sports courts for schools, academies, clubs, townships and commercial projects across India.
              </p>
              <div className="pt-4">
                <button onClick={()=>window.location.href="/contact"} className="bg-[#335495] text-white px-10 py-4 text-sm font-bold uppercase hover:bg-blue-800 transition shadow-xl rounded-sm tracking-widest transform hover:-translate-y-1">
                  Get a Free Site Assessment
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    

      {/* --- SERVICES / MAP SECTION --- */}
     <SportsInfrastructureHero />


    

      {/* --- STATS COUNTER SECTION --- */}
      <section className="py-12 md:py-20 relative" style={{ backgroundImage: `url('/waves-line.jpg')` }}>
      
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center text-center relative z-10">
          
          <div className="order-2 md:order-1">
            <h3 className="text-4xl md:text-5xl font-black text-[#335495]">400+</h3>
            <p className="text-xs font-bold tracking-widest mt-2 uppercase text-gray-800">Sports Courts<br/>Delivered</p>
          </div>

          <div className="flex flex-col items-center justify-center order-1 md:order-2">
            <div className="text-[100px] md:text-[180px] font-black leading-none tracking-tighter select-none"
                 style={{
                   backgroundImage: 'url(/bg-1.jpeg)',
                   WebkitBackgroundClip: 'text',
                   WebkitTextFillColor: 'transparent',
                   backgroundPosition: 'center'
                 }}>
              7+
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-800 -mt-2 md:-mt-4 bg-white px-4">Years of Experience</p>
          </div>

          <div className="order-3">
            <h3 className="text-4xl md:text-5xl font-black text-[#335495]">200+</h3>
            <p className="text-xs font-bold tracking-widest mt-2 uppercase text-gray-800">Clients<br/>Across India</p>
          </div>

        </div>
      </section>

        {/* --- ABOUT US SECTION (Image Left, Content Right) --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Media Container */}
            <div className="order-1">
              <div className="relative rounded-sm overflow-hidden shadow-2xl bg-gray-100 group">
                {/* Main Image */}
                <img 
                  src="/MOBILE-BANNER-1 v.jpg" 
                  alt="IKON Sports Construction" 
                  className="w-full h-64 md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Video Play Button Overlay */}
                <div 
                  onClick={() => window.open('https://www.youtube.com/watch?v=RCwzOp-sujE', '_blank')} 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/10 group-hover:bg-black/20 transition-colors duration-300"
                >
                  <div className="bg-[#C8D653] text-white w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xl">
                    <Play fill="currentColor" className="ml-1" size={32} />
                  </div>
                </div>

                {/* Decorative Accent (Bottom Left) */}
                <div className="absolute bottom-0 left-0 w-2 h-24 bg-[#C8D653]"></div>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="order-2">
              <div className="flex items-center mb-6">
                <div className="h-1.5 w-16 bg-[#C8D653] mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-black text-[#335495] uppercase tracking-tight">
                  About Us
                </h2>
              </div>

              <div className="space-y-6 text-gray-600">
                <p className="text-xl font-bold text-[#335495] leading-tight">
                  IKON is a Pan-India sports courts infrastructure company with over 7 years of experience.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  We specialize in designing and executing professional sports facilities, delivering complete turnkey solutions that include planning, civil work, flooring systems, and accessories.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  Our courts are built for durability, safety, and consistent play performance. We use only proven materials and industry-standard construction practices to ensure your facility remains at peak performance for years.
                </p>

                <div className="flex items-center space-x-4 pt-4">
                   <div className="text-[#335495]">
                      <div className="text-2xl font-black leading-none">400+</div>
                      <div className="text-[10px] uppercase font-bold tracking-tighter opacity-70">Courts Delivered</div>
                   </div>
                   <div className="h-8 w-px bg-gray-200"></div>
                   <div className="text-[#335495]">
                      <div className="text-2xl font-black leading-none">Pan-India</div>
                      <div className="text-[10px] uppercase font-bold tracking-tighter opacity-70">Turnkey Execution</div>
                   </div>
                </div>
              </div>

              <div className="mt-10">
                <a href="about-us" className="bg-[#335495] text-white px-10 py-4 text-xs font-bold uppercase hover:bg-blue-900 transition-all shadow-lg rounded-sm tracking-widest">
                  Read More
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- WHAT WE DO --- */}
    {/* --- WHAT WE DO SECTION (High Visibility) --- */}
     <section className="py-16 md:py-24 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row gap-5">
      
      {/* Left Column: Heading & Summary */}
      <div className="lg:px-12 px-2 ">
        <div className="sticky top-32">
          <h2 className="text-4xl md:text-5xl font-black text-[#335495] uppercase leading-[0.9] mb-6">
            What <br/> <span className="text-[#C8D653]">We Do</span>
          </h2>
          <div className="h-1.5 w-20 bg-[#335495] mb-8"></div>
          <p className="text-[#335495] font-bold text-lg mb-4 uppercase tracking-tight">
            Sports Courts & <br/> Flooring Solutions
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs">
            From international standard Pickleball arenas to professional gym flooring, we provide end-to-end infrastructure excellence.
          </p>
          <a href="/services" className="hidden w-fit lg:block bg-[#335495] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-blue-900 transition-all shadow-lg">
            View All Services
          </a>
        </div>
      </div>

      {/* Right Column: Visual Service Cards */}
      <div className="lg:w-2/3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { id: "pickleball-courts", title: "Pickleball Courts", desc: "Professional layouts & surfaces", img: "/player1.png" },
            { id: "tennis-courts", title: "Tennis Courts", desc: "Multi-layer acrylic systems", img: "https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?q=80&w=800&auto=format&fit=crop" },
            { id: "basketball-courts", title: "Basketball Courts", desc: "Shock-absorbent floors", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop" },
            { id: "badminton-courts", title: "Badminton Courts", desc: "Synthetic & Wood flooring", img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=1000&h=600&fit=crop" },
            { id: "cricket-turf", title: "Cricket Turf", desc: "Practice nets & pitches", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop" },
            { id: "football-turf", title: "Football Turf", desc: "Heavy-duty Turfs", img: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=1600&h=600&fit=crop" }
          ].map((service, index) => (
          <a 
    href={`/services/${service.id}`} // This handles the navigation
    key={index} 
    className={`group block transition-all duration-500 ${index >= 3 ? 'hidden md:block' : 'block'}`}
  >
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden border-b-4 border-[#C8D653] shadow-md bg-gray-200">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-[#335495]/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>

              {/* Title & Description Below Image */}
              <div className="py-4 text-left">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-black text-[#335495] uppercase text-sm tracking-widest group-hover:text-[#C8D653] transition-colors">
                    {service.title}
                  </h4>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-[#C8D653] group-hover:translate-x-1 transition-transform"
                  >
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-tight">
                  {service.desc}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 lg:hidden">
          <button 
            onClick={() => window.location.href="/services"} 
            className="w-full bg-[#335495] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest shadow-lg active:scale-95 transition-transform"
          >
            View All Services
          </button>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* --- PROJECTS & EXHIBITIONS GRID --- */}
     {/* --- PROJECTS SECTION (Full Width Split) --- */}
   

{/* --- PROJECTS MOSAIC SECTION (IMAGES ONLY) --- */}


{/* --- PORTFOLIO SECTION --- */}
<section className="py-20 lg:py-32 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Section Header */}
    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[2px] bg-[#C8D653]"></div>
          <span className="text-[#C8D653] font-black uppercase tracking-[0.3em] text-[10px]">Portfolio Showcase</span>
        </div>
        <h2 className="text-5xl lg:text-7xl font-black text-[#335495] uppercase leading-[0.85] tracking-tighter">
          We believe in <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #335495' }}>What we create</span>
        </h2>
      </div>
      <p className="text-gray-500 max-w-xs font-medium uppercase tracking-widest text-[10px] leading-loose">
        High-performance infrastructure delivered across 22+ states in India.
      </p>
    </div>

    {/* Collage Grid */}
    <div className="grid grid-cols-2 md:grid-cols-12 gap-3 lg:gap-4 h-auto md:h-[700px]">
      
      {/* 1. Large Feature Card (Left) */}
      <div className="col-span-2 md:col-span-6 relative group overflow-hidden bg-gray-100 shadow-xl">
        {/* Navigation Overlays */}
       
        <img 
          src="/pickleball-image.jpg" 
          className="w-full h-full object-cover  hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
          alt="Main Project"
        />

        {/* Bottom Info Label */}
        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent text-white translate-y-4 group-hover:translate-y-0 transition-transform">
          <p className="text-[#C8D653] font-black uppercase text-[10px] tracking-widest mb-2">Premium Court Build</p>
          <h4 className="text-2xl font-black uppercase tracking-tight">IKON Olympic-Spec Arena</h4>
        </div>
      </div>

      {/* 2. Center Stack (Equal Split) */}
      <div className="col-span-1 md:col-span-3 grid grid-rows-2 gap-3 lg:gap-4">
        <div className="relative overflow-hidden group shadow-lg">
          <div className="absolute inset-0 bg-[#335495]/20 group-hover:opacity-0 transition-opacity z-10"></div>
          <img 
            src="/vd.jpg" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            alt="Detail 1"
          />
        </div>
        <div className="relative overflow-hidden group shadow-lg">
          <div className="absolute inset-0 bg-[#335495]/20 group-hover:opacity-0 transition-opacity z-10"></div>
          <img 
            src="/2sd.jpg" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            alt="Detail 2"
          />
        </div>
      </div>

      {/* 3. Right Stack (Asymmetrical Split 40/60) */}
      <div className="col-span-1 md:col-span-3 flex flex-col gap-3 lg:gap-4">
        {/* Top Image (40%) */}
        <div className="relative overflow-hidden group shadow-lg h-[40%]">
          <div className="absolute top-4 right-4 z-20">
             <div className="w-8 h-8 bg-[#C8D653] flex items-center justify-center text-[#335495]">
                <ArrowUpRight size={16} />
             </div>
          </div>
          <img 
            src="/MOBILE-BANNER-1 v.jpg" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            alt="Detail 3"
          />
        </div>
        
        {/* Bottom Image (60%) */}
        <div className="relative overflow-hidden group shadow-lg flex-grow">
          {/* Ghost Number Overlay */}
          <span className="absolute bottom-4 right-4 text-6xl font-black text-white/10 group-hover:text-[#C8D653]/20 transition-colors z-10 select-none">
            04
          </span>
          <img 
            src="/bg-5.jpeg" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            alt="Detail 4"
          />
        </div>
      </div>

    </div>

    {/* Floating Tagline at bottom of collage */}
    <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">
       <p>Verified Technical Specifications</p>
       <p className="hidden md:block">ISO 9001:2015 Construction Standards</p>
       <p>IKON Sports Infrastructure</p>
    </div>
  </div>
</section>

      {/* --- SEO TEXT BLOCK --- */}
      <section className="py-16 md:py-20 bg-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-black text-[#335495] uppercase mb-6 md:mb-8">
            IKON: Your Trusted Partner in Sports Tennis Court Installation and Maintenance
          </h2>
          <p className="text-gray-500 text-sm md:text-md font-medium mb-6 leading-relaxed">
            IKON is the first and fastest manufacturing and installation company that provides a perfect innovative solution for the world of sport. We create ideal clubs and sports facilities. The IKON progress consists in quality and commitment to our customers; we also aim at being a great innovation company.
          </p>
          <p className="text-gray-500 text-sm md:text-md font-medium mb-10 leading-relaxed">
            Our courts transform the exhilarating game into an unforgettable experience, whether it's for professional play or community leisure.
          </p>
          <a href="https://wa.me/917737022715?text=Hello%20IKON%20Sports%2C%20I%20am%20interested%20in%20building%20a%20sports%20court." className="bg-[#335495] text-white px-12 py-3 text-xs font-bold uppercase hover:bg-blue-800 transition rounded-sm shadow-md">
            Call Us Today
          </a>
        </div>
      </section>

      {/* --- WHAT IS PICKLEBALL --- */}
      <section className="grid grid-cols-1 hidden md:grid-cols-2 h-auto">
        <div className="bg-[#C8D653] p-10 md:p-20 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-black text-[#335495] uppercase mb-6">Pickleball</h2>
          <p className="text-[#335495] text-sm leading-relaxed font-medium">
            Pickleball is one of the fastest-growing sports in India, widely adopted by clubs, schools, residential societies and commercial facilities. IKON provides professional Pickleball court construction with accurate layouts, durable surfaces and consistent play quality suitable for Indian weather conditions.
          </p>
        </div>
        <div className="h-56 md:h-auto">
          <img 
            src="/player1.png" 
            alt="Pickleball Construction" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* --- EXECUTION PROCESS --- */}
      <section className="grid  grid-cols-1 md:grid-cols-2 h-auto">
         <div className="h-56 md:h-auto order-2 md:order-1 relative">
           <img 
            src="/vd.jpg" 
            alt="Turnkey Execution Process" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#335495]/40 mix-blend-multiply"></div>
        </div>

        <div className="bg-[#335495] p-10 md:p-20 flex flex-col justify-center order-1 md:order-2 text-white">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6">Execution Process</h2>
          <ul className="text-blue-100 text-sm leading-loose list-disc pl-5">
            <li>Site Survey & Planning</li>
            <li>Civil Work & Base Preparation</li>
            <li>Sports Flooring Installation</li>
            <li>Line Marking & Accessories</li>
            <li>Lighting & Finishing</li>
            <li>Final Inspection & Handover</li>
          </ul>
        </div>
      </section>

      {/* --- TYPES OF COURTS / SERVICES TABS --- */}
     {/* --- ENHANCED INFRASTRUCTURE SOLUTIONS (TABS) --- */}
      {/* --- INFRASTRUCTURE SOLUTIONS (CLEAN VERSION) --- */}
    <section className="py-12 md:py-16 bg-white">
  <div className="container mx-auto px-4">
    
    {/* Simple Centered Header */}
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-black text-[#335495] uppercase tracking-tight">
        Infrastructure Solutions
      </h2>
      <div className="h-1 w-16 bg-[#C8D653] mx-auto mt-3"></div>
    </div>

    {/* Compact Accordion Container */}
    <div className="max-w-3xl mx-auto border-t border-gray-100">
      {courtTypes.map((court, index) => (
        <div 
          key={index} 
          className="border-b border-gray-100"
        >
          {/* Question / Toggle Button */}
          <button
            onClick={() => setActiveTab(activeTab === index ? -1 : index)}
            className="w-full flex items-center justify-between py-5 px-2 text-left group transition-colors"
          >
            <span className={`text-base md:text-lg font-bold transition-colors ${
              activeTab === index ? 'text-[#335495]' : 'text-gray-700 group-hover:text-[#335495]'
            }`}>
              {court.title}
            </span>
            
            {/* Minimalist Icon */}
            <div className={`transition-transform duration-300 ${
              activeTab === index ? 'text-[#C8D653]' : 'text-gray-400'
            }`}>
              {activeTab === index ? <Minus size={20} /> : <Plus size={20} />}
            </div>
          </button>

          {/* Collapsible Content */}
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeTab === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-2 pb-6">
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {court.content}
              </p>
              
              <div className="mt-4 flex gap-3">
                <button className="text-[#335495] text-[11px] font-bold uppercase tracking-wider underline decoration-[#C8D653] decoration-2 underline-offset-4 hover:text-blue-800">
                  Get Technical Specs
                </button>
                {/* <button className="text-[#335495] text-[11px] font-bold uppercase tracking-wider underline decoration-[#C8D653] decoration-2 underline-offset-4 hover:text-blue-800">
                  View Projects
                </button> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>


   

{/* --- TESTIMONIALS SECTION --- */}
<section className="py-16 md:py-24 bg-gray-50">
  <div className="container mx-auto px-4">
    
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-5xl font-black text-[#335495] uppercase leading-tight mb-4">
        Trusted by <span className="text-[#C8D653]">Industry Leaders</span>
      </h2>
      <div className="h-1.5 w-24 bg-[#335495] mx-auto mb-6"></div>
      <p className="text-gray-600 font-medium">
        Hear from the schools, clubs, and developers who chose IKON for their world-class sports infrastructure.
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          name: "Rajesh Sharma",
          role: "Director, Sports Academy",
          text: "IKON's turnkey approach was flawless. From the initial site survey to the final line marking, their team handled everything with extreme professionalism."
        },
        {
          name: "Amit Verma",
          role: "Club Manager",
          text: "The quality of the Pickleball courts is world-class. Our members are thrilled with the surface grip and the overall finish. Truly India's No. 1 company."
        },
        {
          name: "Sanjay Mehta",
          role: "Real Estate Developer",
          text: "We needed 4 courts delivered within a tight deadline for our new township. IKON delivered ahead of schedule without compromising on quality."
        }
      ].map((item, index) => (
        <div 
          key={index} 
          className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-[#C8D653] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
        >
          {/* Quote Icon */}
          <div className="absolute -top-4 left-8 bg-[#335495] p-3 rounded-lg text-white shadow-md">
            <Quote size={20} fill="white" />
          </div>

          {/* Star Rating */}
          <div className="flex space-x-1 mb-6 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-[#C8D653]" fill="#C8D653" />
            ))}
          </div>

          {/* Review Text */}
          <p className="text-gray-600 italic mb-8 leading-relaxed">
            "{item.text}"
          </p>

          {/* Client Profile */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-[#335495] border border-gray-200">
              {item.name.charAt(0)}
            </div>
            <div>
              <h4 className="text-[#335495] font-black uppercase text-sm tracking-tight">{item.name}</h4>
              <p className="text-[#C8D653] text-[10px] font-bold uppercase tracking-widest">{item.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom Trust Note */}
    <div className="mt-16 text-center">
      <p className="text-[#335495] font-bold uppercase text-xs tracking-[0.4em] opacity-50">
        400+ Successful Projects Across India
      </p>
    </div>
  </div>
</section>

      {/* --- MAINTENANCE --- */}
      <section className="py-8 hidden md:py-12 bg-white mb-8 md:mb-12">
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto rounded-xl p-6 md:p-12">
              <div className="relative w-full md:w-1/2 p-4">
                   <div className="absolute top-0 left-0 w-2/3 h-full border-l-2 border-t-2 border-b-2 border-[#335495] rounded-l-xl -translate-x-2 translate-y-2 z-0"></div>
                   
                   <div className="relative z-10 rounded-xl overflow-hidden shadow-xl h-56 md:h-64 w-full bg-white p-2">
                     <img 
                        src="https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                        alt="Sports Court Maintenance" 
                        className="w-full h-full object-cover rounded-lg"
                     />
                  </div>
              </div>

              <div className="w-full md:w-1/2 text-left">
                  <h2 className="text-2xl md:text-3xl font-black text-[#335495] uppercase mb-4 leading-tight">
                    Maintenance & Resurfacing
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 md:mb-8">
                    Sports court maintenance and resurfacing services including recoating, crack repair, line re-marking, net and fencing replacement. Ikon offers complete maintenance services to ensure that your court remains playable and attractive for years.
                  </p>
                  <button className="bg-[#335495] text-white px-8 py-3 text-sm font-bold hover:bg-blue-800 transition rounded shadow-md w-full md:w-auto">
                    Build Your Sports Court With IKON
                  </button>
              </div>
           </div>
        </div>
      </section>


     <Footer />
    </div>
  );
};

export default App;