'use client';
import React, { useState } from 'react';
import { 
  Menu, X, Search, Facebook, Instagram, Linkedin, 
  Headset, Atom, ThumbsUp, ChevronRight, Play 
} from 'lucide-react';
import YouTubeLoop from '@/component/YoutubeLoop';
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const courtTypes = [
    { title: "Super Panoramic Padel Court", content: "Designed for professional players, the Super Panoramic Padel Court is one such marvelous design that combines robustness with an appealing look. Its sleek aesthetic increases the scenic pleasure of watching the match and features vast glass walls. Hence, one can easily have a perfect view of the game from any side at all points in time. The courts are specially designed by our padel court manufacturers company Rajasthan to offer the experience of high-graded games and could easily be applied to any interior or exterior space." },
    { title: "Challenger Court", content: "The Challenger Court is built for clubs and high-traffic areas, offering exceptional durability and a classic design that players love. It features reinforced structures to withstand intensive use while maintaining excellent playability." },
    { title: "Panoramic Padel Court", content: "Our Panoramic Padel Court removes visual barriers, providing spectators with an unobstructed view of the action. It's perfect for tournament venues and clubs that want to offer a premium viewing experience." },
    { title: "Super Challenger Design", content: "An evolution of our classic court, the Super Challenger Design incorporates advanced materials for even greater structural rigidity and weather resistance, making it ideal for harsh climates." },
    { title: "Portable Padel Court", content: "We, being the top padel court supplier in Jaipur, also have a Portable version of Super Panoramic Court; it is the perfect choice for short-term events, tournaments, or temporary installations. It retains the super-quality design and aesthetics of a court but offers flexibility in temporary setups." }
  ];

  // Custom Colors based on the image
  const colors = {
    blue: '#335495', // The deep royal blue
    green: '#C8D653', // The lime green
    textDark: '#1a1a1a',
    textLight: '#f5f5f5'
  };

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden w-full">
      {/* --- HEADER --- */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo Placeholder */}
          <div className="flex items-center">
             <div className="flex flex-col leading-none">
               {/* Use text fallback if image missing, or ensure /logo.jpg exists in your public folder */}
               <img src="/logo.jpg" alt="Ikon" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
             </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 font-semibold text-sm text-[#335495]">
            <a href="#" className="hover:text-[#C8D653] transition">HOME</a>
            <a href="#" className="hover:text-[#C8D653] transition">ABOUT US</a>
            <a href="#" className="hover:text-[#C8D653] transition">SERVICES</a>
            <a href="#" className="hover:text-[#C8D653] transition">PROJECTS</a>
            <a href="#" className="hover:text-[#C8D653] transition">CONTACT</a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#335495]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 flex flex-col space-y-4 font-semibold text-[#335495] shadow-lg absolute w-full z-50">
            <a href="#" className="hover:text-[#C8D653] block" onClick={() => setIsMenuOpen(false)}>HOME</a>
            <a href="#" className="hover:text-[#C8D653] block" onClick={() => setIsMenuOpen(false)}>ABOUT US</a>
            <a href="#" className="hover:text-[#C8D653] block" onClick={() => setIsMenuOpen(false)}>SERVICES</a>
            <a href="#" className="hover:text-[#C8D653] block" onClick={() => setIsMenuOpen(false)}>PROJECTS</a>
            <a href="#" className="hover:text-[#C8D653] block" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
          </div>
        )}
      </header>

      <div className="w-full h-screen hidden md:block object-cover">
       <img src="/bg-2.jpeg" className='w-screen' alt="" />
      </div>

      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[550px] md:h-[600px] bg-gray-200 overflow-hidden flex flex-col md:flex-row">
        {/* Background Video - Responsive Scaling */}
        <div className="absolute inset-0 z-0">
        <img src="/bg-2.jpeg" alt="Ikon" className="w-full h-full object-cover" />
          {/* Overlay to ensure text readability over video */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Slanted Green Overlay (Desktop) */}
        <div 
          className="absolute top-0 left-0 h-full w-full md:w-[55%] z-10 hidden md:block"
          style={{
            backgroundColor: colors.green,
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' 
          }}
        ></div>
        
        {/* Mobile Green Overlay (Gradient for better text readability on mobile) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#C8D653]/90 to-transparent md:hidden z-10"></div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center justify-center md:justify-start">
          <div className="max-w-xl text-[#335495] pt-12 md:pt-0 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight md:leading-[0.9] mb-6 md:mb-8 tracking-tight drop-shadow-sm">
              The 1st & Fastest <br className="hidden md:block"/> Padel
              Courts Manufacturer In <br/>
              Rajasthan
            </h1>
            <button className="bg-[#335495] text-white px-8 py-3 text-xs md:text-sm font-bold uppercase hover:bg-blue-800 transition shadow-lg rounded-sm tracking-wide transform hover:-translate-y-0.5">
              Explore Products
            </button>
          </div>
        </div>

        {/* Bottom Translucent White Overlay Strip */}
        <div 
            className="absolute bottom-0 left-0 w-full h-16 md:h-24 z-10 pointer-events-none hidden md:block"
            style={{
                background: 'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
                clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0% 100%)'
            }}
        ></div>
        
        {/* Bottom Right Caption */}
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 text-right text-white drop-shadow-md">
            <h3 className="text-sm md:text-xl font-bold leading-none">Our Project</h3>
            <p className="text-xs md:text-sm font-medium opacity-90">Award Winning Project</p>
        </div>
      </div>

      {/* --- ABOUT US SECTION --- */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-[#335495] uppercase mb-4 md:mb-6 flex items-center">
              About Us
              <div className="h-1 w-12 md:w-20 bg-[#C8D653] ml-4"></div>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
              Ikon is a sector-leading expert in high-quality Padel courts. We are fully dedicated to the Padel Court construction business. Our long experience allows us to give a customer full coverage for installation of the padel courts as per the new Spanish standards.
            </p>
            <button className="bg-[#335495] text-white px-6 py-2 text-xs font-bold uppercase hover:bg-blue-900 transition">
              Read More
            </button>
          </div>
          <div className="relative mt-4 md:mt-0">
            <img 
              src="/bg-2.jpeg" 
              alt="Factory Team" 
              className="w-full hidden lg:block h-56 md:h-80 object-cover shadow-xl rounded-sm"
            />
           <div className="w-full block lg:hidden">
          <YouTubeLoop />

           </div>
            {/* Play Button Overlay */}
            <div onClick={() => window.open('https://www.youtube.com/watch?v=RCwzOp-sujE', '_blank')} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
              <div className="bg-[#C8D653] group-hover:bg-[#b9c745] w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition shadow-lg animate-pulse">
                <Play fill="white" className="text-white ml-1" size={28} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES / MAP SECTION --- */}
      <section className="relative w-full bg-white">
        {/* Blue Background Top Half */}
        <div className="relative bg-[#335495] pt-16 md:pt-24 pb-32 md:pb-48 overflow-visible">
            {/* White Cloud/Smoke Effect */}
            <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none mix-blend-screen">
                 <img 
                    src="/bg-1.jpeg" 
                    alt="Clouds" 
                    className="w-full h-full object-cover grayscale"
                />
            </div>
            
            {/* Player Image - Adjusted for mobile visibility */}
            <div className="absolute right-0 bottom-0 z-10 w-[200px] md:w-[500px] h-[250px] md:h-[500px] pointer-events-none overflow-hidden flex items-end justify-end opacity-80 md:opacity-100">
                <img 
                    src="/padel-1.png" 
                    alt="Padel Player" 
                    className="object-cover w-full h-full md:object-contain object-right-bottom mask-image-gradient"
                    style={{ 
                        maskImage: 'linear-gradient(to left, black 70%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to left, black 70%, transparent 100%)'
                    }} 
                />
            </div>

            <div className="container mx-auto px-4 relative z-20">
                 <h3 className="text-[#C8D653] font-bold text-lg md:text-3xl uppercase tracking-wider mb-2 md:mb-0 max-w-[80%] md:max-w-2xl text-left shadow-black drop-shadow-sm leading-relaxed">
                    Serving in Rajasthan, Gujarat, Madhya Pradesh, and more
                 </h3>
            </div>
        </div>

        {/* Cards - Mobile Stack fix */}
        <div className="relative z-30 -mt-20 md:-mt-24 container mx-auto px-4 pb-12 md:pb-20">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {/* Card 1 */}
                <div className="bg-white p-6 md:p-8 shadow-xl flex flex-row items-start space-x-4 md:space-x-5 min-h-[140px] md:min-h-[160px] rounded-sm">
                    <div className="text-[#C8D653] shrink-0 pt-1">
                        <Headset size={36} className="md:w-10 md:h-10" strokeWidth={1.5} />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#335495] uppercase mb-1 text-sm">Customer Service</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Provide excellent Customer Service.</p>
                    </div>
                </div>
                 {/* Card 2 */}
                 <div className="bg-white p-6 md:p-8 shadow-xl flex flex-row items-start space-x-4 md:space-x-5 min-h-[140px] md:min-h-[160px] rounded-sm">
                    <div className="text-[#C8D653] shrink-0 pt-1">
                        <Atom size={36} className="md:w-10 md:h-10" strokeWidth={1.5} />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#335495] uppercase mb-1 text-sm">Innovation</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Look after the cornerstone of Ikon, our Staff.</p>
                    </div>
                </div>
                 {/* Card 3 */}
                 <div className="bg-white p-6 md:p-8 shadow-xl flex flex-row items-start space-x-4 md:space-x-5 min-h-[140px] md:min-h-[160px] rounded-sm">
                    <div className="text-[#C8D653] shrink-0 pt-1">
                         <ThumbsUp size={36} className="md:w-10 md:h-10" strokeWidth={1.5} />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#335495] uppercase mb-1 text-sm">Quality</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">We Deliver Innovation without compromising the quality of our products.</p>
                    </div>
                </div>
             </div>
        </div>
        
        {/* Wavy Background */}
        <div className="absolute bottom-0 left-0 w-full h-[60%] -z-10 overflow-hidden opacity-10 pointer-events-none">
             <div className="w-full h-full" style={{
                 backgroundImage: `repeating-linear-gradient(45deg, #eee 0px, #eee 1px, transparent 1px, transparent 20px), repeating-linear-gradient(-45deg, #eee 0px, #eee 1px, transparent 1px, transparent 20px)`
             }}></div>
        </div>
      </section>

      {/* --- STATS COUNTER SECTION --- */}
      <section className="py-12 md:py-20 relative" style={{ backgroundImage: `url('/waves-line.jpg')` }}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/topography.png')] opacity-10"></div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center text-center relative z-10">
          
          <div className="order-2 md:order-1">
            <h3 className="text-4xl md:text-5xl font-black text-[#335495]">400+</h3>
            <p className="text-xs font-bold tracking-widest mt-2 uppercase text-gray-800">Courts Installed in GCC,<br/>Africa, Asia</p>
          </div>

          <div className="flex flex-col items-center justify-center order-1 md:order-2">
            {/* The Big 20 with Image Mask - Scaled for Mobile */}
            <div className="text-[100px] md:text-[180px] font-black leading-none tracking-tighter select-none"
                 style={{
                   backgroundImage: 'url(/bg-1.jpeg)',
                   WebkitBackgroundClip: 'text',
                   WebkitTextFillColor: 'transparent',
                   backgroundPosition: 'center'
                 }}>
              20
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-800 -mt-2 md:-mt-4 bg-white px-4">Years of Experience</p>
          </div>

          <div className="order-3">
            <h3 className="text-4xl md:text-5xl font-black text-[#335495]">200+</h3>
            <p className="text-xs font-bold tracking-widest mt-2 uppercase text-gray-800">Courts<br/>Installed in Rajasthan</p>
          </div>

        </div>
      </section>

      {/* --- WHAT WE DO --- */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-start md:items-center">
          <div className="md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-black text-[#335495] uppercase leading-none">
              What <br/> <span className="text-[#335495]">We Do</span>
            </h2>
          </div>
          <div className="md:w-3/4 md:pl-8 border-l-4 border-[#C8D653] pl-4">
            <p className="text-gray-600 mb-6 max-w-2xl text-sm md:text-base leading-relaxed">
              Considering speculation Padel court manufacturing and selling, we work fully to live up to our emerging customers. As we give a full high-quality Padel courts equipment, we assure full satisfaction for clients that need padel courts.
            </p>
            <button className="border-2 border-[#335495] text-[#335495] px-6 py-2 text-xs font-bold uppercase hover:bg-[#335495] hover:text-white transition">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* --- PROJECTS & EXHIBITIONS GRID --- */}
      <section className="grid grid-cols-1 md:grid-cols-4 h-auto md:h-80">
        {/* 1. Court Image */}
        <div className="h-56 md:h-full relative group overflow-hidden">
           <img 
            src="/bg-3.jpeg" 
            alt="Project Court" 
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition"></div>
        </div>

        {/* 2. Blue Text Block */}
        <div className="bg-[#335495] p-8 flex flex-col justify-center items-start text-white h-auto md:h-full">
          <h3 className="text-2xl md:text-3xl font-black uppercase mb-2">Our <br/> <span className="text-[#C8D653]">Projects</span></h3>
          <a href="#" className="flex items-center text-sm font-medium hover:underline mt-2">
            Click here <ChevronRight size={16} />
          </a>
        </div>

        {/* 3. Exhibition Image */}
        <div className="h-56 md:h-full relative group overflow-hidden">
           <img 
            src="/bg-4.jpeg" 
            alt="Exhibition" 
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

        {/* 4. Green Text Block */}
        <div className="bg-[#C8D653] p-8 flex flex-col justify-center items-start text-[#335495] h-auto md:h-full">
          <h3 className="text-2xl md:text-3xl font-black uppercase mb-2"><span className="text-white">Our</span> <br/> Exhibitions</h3>
          <a href="#" className="flex items-center text-sm font-medium hover:underline mt-2">
            Click here <ChevronRight size={16} />
          </a>
        </div>
      </section>

      {/* --- SEO TEXT BLOCK --- */}
      <section className="py-16 md:py-20 bg-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-black text-[#335495] uppercase mb-6 md:mb-8">
            Ikon: Your Trusted Partner in Padel Tennis Court Installation and Maintenance
          </h2>
          <p className="text-gray-500 text-sm md:text-md font-medium mb-6 leading-relaxed">
            Ikon is the first and fastest manufacturing and installation company that provides a perfect innovative solution for the world of sport, having specialist Ikon products. We create ideal clubs, Padel courts manufacturing. The Ikon Progress consists in quality and commitment to our customers; we also aim at being a great innovation company.
          </p>
          <p className="text-gray-500 text-sm md:text-md font-medium mb-10 leading-relaxed">
            Let's understand more about Padel tennis courts and why Ikon has Padel courts in Jaipur. Our courts exports are the exhilarating game into an unforgettable experience.
          </p>
          <button className="bg-[#335495] text-white px-12 py-3 text-xs font-bold uppercase hover:bg-blue-800 transition rounded-sm shadow-md">
            Call Us
          </button>
        </div>
      </section>

      {/* --- WHAT IS PADEL TENNIS --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto">
        {/* Left: Green Text */}
        <div className="bg-[#C8D653] p-10 md:p-20 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-black text-[#335495] uppercase mb-6">What is Padel Tennis?</h2>
          <p className="text-[#335495] text-sm leading-relaxed font-medium">
            Padel tennis represents a group sport meant to be played as doubles. The court is an enclosed one, 1/3 the size of a tennis court, however, it uses the same balls. Just like a standard tennis court, there is a net in the middle. The court has walls, and balls can be played off them, just like in squash.
          </p>
        </div>
        {/* Right: Image */}
        <div className="h-56 md:h-auto">
          <img 
            src="/player1.png" 
            alt="Woman playing Padel" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* --- COURT INSTALLATION --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto">
         {/* Left: Image (Blueprint style) */}
         <div className="h-56 md:h-auto order-2 md:order-1 relative">
           <img 
            src="/bg-5.jpeg" 
            alt="Court Construction" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#335495]/40 mix-blend-multiply"></div>
        </div>

        {/* Right: Blue Text */}
        <div className="bg-[#335495] p-10 md:p-20 flex flex-col justify-center order-1 md:order-2 text-white">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6">Padel Court Installation</h2>
          <p className="text-blue-100 text-sm leading-relaxed">
            Padel court installation requires specific knowledge about civil works, metallic structure, and glass installation. We have a professional team for installation that can work everywhere in the world. We comply with the new norms and regulations of the International Padel Federation for the installation of padel courts.
          </p>
        </div>
      </section>

      {/* --- TYPES OF PADEL COURTS --- */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335495] mb-4 md:mb-6">Types of Padel Courts</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              At Ikon, we provide a variety of padel court designs for different players, venues, and event types. Some of the most popular options given by our padel court manufacturers company Rajasthan include the following:
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-0 max-w-6xl mx-auto shadow-lg md:shadow-none rounded-lg overflow-hidden md:rounded-none">
            {/* Tabs List */}
            <div className="flex flex-col md:w-1/3 z-10">
              {courtTypes.map((court, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`py-4 px-6 text-left font-bold text-sm transition-all border-b md:border-b-0 md:border md:border-[#335495] md:-mb-[1px] md:mr-[-1px] relative ${
                    activeTab === index 
                      ? 'bg-[#335495] text-white z-20' 
                      : 'bg-white text-[#335495] hover:bg-blue-50 z-0'
                  }`}
                >
                  {court.title}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="md:w-2/3 border-t-0 md:border md:border-[#335495] p-8 md:p-12 flex items-center bg-gray-50 md:bg-white min-h-[250px] md:min-h-[300px] relative z-10">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {courtTypes[activeTab].content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAINTENANCE --- */}
      <section className="py-8 md:py-12 bg-white mb-8 md:mb-12">
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto rounded-xl p-6 md:p-12">
              {/* Image with offset border */}
              <div className="relative w-full md:w-1/2 p-4">
                  {/* Decorative line behind */}
                   <div className="absolute top-0 left-0 w-2/3 h-full border-l-2 border-t-2 border-b-2 border-[#335495] rounded-l-xl -translate-x-2 translate-y-2 z-0"></div>
                   
                   <div className="relative z-10 rounded-xl overflow-hidden shadow-xl h-56 md:h-64 w-full bg-white p-2">
                     <img 
                        src="https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                        alt="Padel Racket and Balls on Court" 
                        className="w-full h-full object-cover rounded-lg"
                     />
                  </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 text-left">
                  <h2 className="text-2xl md:text-3xl font-black text-[#335495] uppercase mb-4 leading-tight">
                    Padel Court Maintenance In Jaipur
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 md:mb-8">
                    Once your Padel tennis court is installed, regular maintenance by our Padel Tennis court producer company in Rajasthan is essential to keep it in top condition. Ikon offers complete maintenance services to ensure that your court remains playable and attractive for years.
                  </p>
                  <button className="bg-[#335495] text-white px-8 py-3 text-sm font-bold hover:bg-blue-800 transition rounded shadow-md w-full md:w-auto">
                    Built Your Custom Padel Court
                  </button>
              </div>
           </div>
        </div>
      </section>


      {/* --- FOOTER --- */}
      <footer className="bg-[#1f2937] text-white py-12 border-t-4 border-[#C8D653]">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-center md:text-left">
          <div>
            <h4 className="font-bold text-[#C8D653] uppercase mb-4">Ikon</h4>
            <p className="text-gray-400">The leading manufacturer of high-quality padel courts in the Rajasthan.</p>
          </div>
          <div>
            <h4 className="font-bold text-[#C8D653] uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Projects</a></li>
            </ul>
          </div>
           <div>
            <h4 className="font-bold text-[#C8D653] uppercase mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Jaipur, Rajasthan</li>
              <li>+91 1234567890</li>
              <li>info@ikon.com</li>
            </ul>
          </div>
           <div>
            <h4 className="font-bold text-[#C8D653] uppercase mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
               <Facebook className="hover:text-[#C8D653] cursor-pointer" />
               <Instagram className="hover:text-[#C8D653] cursor-pointer" />
               <Linkedin className="hover:text-[#C8D653] cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="text-center text-gray-600 text-xs mt-12 pt-8 border-t border-gray-700">
          © 2025 Ikon. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;