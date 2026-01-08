import React from 'react';
import { Headset, Disc, ThumbsUp, HardHat, LayoutGrid } from 'lucide-react';

const SportsInfrastructureHero = () => {
  return (
    <section className="relative w-full bg-white font-sans overflow-hidden">
      {/* --- Main Hero Area --- */}
      <div className="relative min-h-[550px] lg:h-[650px] w-full flex items-center">
        
        {/* 1. Base Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-[center_right_25%] md:bg-center"
          style={{ backgroundImage: "url('/bg-1.jpeg')" }}
        />

        {/* 2. Blue Gradient Overlay */}
        {/* Using a solid start and a long fade to let the court show on the right */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#00388c] via-[#00388c]/95 to-transparent md:w-[75%]" />
        
        {/* Mobile-only solid overlay for readability */}
        <div className="absolute inset-0 z-10 bg-[#00388c]/60 md:hidden" />

        {/* 3. Player PNG (The guy jumping) */}
        <div className="absolute right-0 bottom-0 z-20 w-[55%] h-[85%] pointer-events-none hidden md:block">
          <img 
            src="/padel-guy.png" 
            alt="Player Jumping" 
            className="h-full w-full object-contain object-bottom"
          />
        </div>

        {/* --- Text Content --- */}
        <div className="container mx-auto px-6 lg:px-16 relative z-30">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-[56px] font-black leading-[1.1] mb-6 tracking-tight uppercase">
              World-Class Sports <br />
              Infrastructure, <br />
              Delivered.
            </h1>
            
            <p className="text-sm md:text-lg font-medium mb-10 max-w-xl opacity-90 leading-snug">
              Pan-India execution. Serving Rajasthan, Gujarat, Madhya Pradesh, Delhi NCR, 
              Maharashtra, Karnataka, Telangana, Tamil Nadu & more.
            </p>

            <button onClick={()=>window.location.href="/contact"} className="bg-[#dae635] text-[#00388c] font-black py-4 px-10 rounded-sm hover:scale-105 transition-transform uppercase text-sm tracking-wider shadow-lg">
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      {/* --- Separate Feature Tiles --- */}
      {/* -mt-12 pulls them up to overlap the blue section */}
      <div className="relative z-40 -mt-12 md:-mt-16 container mx-auto px-6 lg:px-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Tile 1 */}
          <div className="bg-white p-8 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-start gap-4 transition-transform hover:-translate-y-1">
            <div className="text-[#00388c] flex-shrink-0 mt-1">
              <HardHat size={38} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-[#00388c] font-extrabold text-[13px] uppercase tracking-wide mb-2 leading-tight">
                Complete Turnkey Execution
              </h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Single-point responsibility from design to delivery.
              </p>
            </div>
          </div>

          {/* Tile 2 */}
          <div className="bg-white p-8 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-start gap-4 transition-transform hover:-translate-y-1">
            <div className="text-[#00388c] flex-shrink-0 mt-1">
              <LayoutGrid size={38} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-[#00388c] font-extrabold text-[13px] uppercase tracking-wide mb-2 leading-tight">
                Multi-Sport Expertise
              </h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Pickleball, Tennis, Basketball, Badminton, Turf and Sports Flooring.
              </p>
            </div>
          </div>

          {/* Tile 3 */}
          <div className="bg-white p-8 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-start gap-4 transition-transform hover:-translate-y-1">
            <div className="text-[#00388c] flex-shrink-0 mt-1">
              <ThumbsUp size={38} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-[#00388c] font-extrabold text-[13px] uppercase tracking-wide mb-2 leading-tight">
                Quality-Driven Construction
              </h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Long-lasting surfaces, proper drainage and professional finishing.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SportsInfrastructureHero;