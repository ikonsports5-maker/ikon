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
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
             <div className="flex flex-col leading-none">
               <img src="/logo.jpg" alt="Ikon Sports" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
             </div>
          </div>

          <nav className="hidden md:flex space-x-6 font-semibold text-sm text-[#335495]">
            <a href="#" className="hover:text-[#C8D653] transition">HOME</a>
            <a href="#" className="hover:text-[#C8D653] transition">ABOUT US</a>
            <a href="#" className="hover:text-[#C8D653] transition">SERVICES</a>
            <a href="#" className="hover:text-[#C8D653] transition">PROJECTS</a>
            <a href="#" className="hover:text-[#C8D653] transition">CONTACT</a>
          </nav>

          <button className="md:hidden text-[#335495]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

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

      {/* <div className="w-full h-screen hidden md:block object-cover">
       <img src="/bg-2.jpeg" className='w-screen' alt="" />
      </div> */}

      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[550px] md:h-[600px] bg-gray-200 overflow-hidden flex flex-col md:flex-row">
        <div className="absolute inset-0 z-0">
        <img src="/bg-2.jpeg" alt="Ikon Sports" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div 
          className="absolute top-0 left-0 h-full w-full md:w-[55%] z-10 hidden md:block"
          style={{
            backgroundColor: colors.green,
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' 
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#C8D653]/90 to-transparent md:hidden z-10"></div>

        <div className="relative z-20 container mx-auto px-4 h-full flex items-center justify-center md:justify-start">
          <div className="max-w-2xl text-[#335495] pt-12 md:pt-0 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black uppercase leading-tight md:leading-[1.1] mb-6 md:mb-8 tracking-tight drop-shadow-sm">
              India’s No. 1 <br className="hidden md:block"/> Sports Courts <br/>
              Infrastructure Company
            </h1>
            <p className="text-[#335495] font-bold mb-6 text-sm md:text-lg">
                7+ Years Experience | Pan-India Turnkey Execution |<br/> 400+ Courts Delivered
            </p>
            <p className="text-[#335495] font-medium mb-8 text-xs md:text-sm max-w-lg">
                We design, build and deliver high-performance sports courts for schools, academies, clubs, townships and commercial projects across India.
            </p>
            <button className="bg-[#335495] text-white px-8 py-3 text-xs md:text-sm font-bold uppercase hover:bg-blue-800 transition shadow-lg rounded-sm tracking-wide transform hover:-translate-y-0.5">
              Get a Free Site Assessment
            </button>
          </div>
        </div>

        <div 
            className="absolute bottom-0 left-0 w-full h-16 md:h-24 z-10 pointer-events-none hidden md:block"
            style={{
                background: 'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
                clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0% 100%)'
            }}
        ></div>
        
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 text-right text-white drop-shadow-md">
            <h3 className="text-sm md:text-xl font-bold leading-none">Our Project</h3>
            <p className="text-xs md:text-sm font-medium opacity-90">Pan-India Execution</p>
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
            <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
              IKON is a Pan-India sports courts infrastructure company with over 7 years of experience in designing and executing professional sports facilities.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
              We deliver complete turnkey solutions including planning, civil work, flooring systems, accessories and final handover.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
              Our courts are built for durability, safety and consistent play performance, using proven materials and industry-standard construction practices.
            </p>
            <button className="bg-[#335495] text-white px-6 py-2 text-xs font-bold uppercase hover:bg-blue-900 transition">
              Read More
            </button>
          </div>
          <div className="relative mt-4 md:mt-0">
            <img 
              src="/bg-2.jpeg" 
              alt="IKON Sports Construction" 
              className="w-full hidden lg:block h-56 md:h-80 object-cover shadow-xl rounded-sm"
            />
           <div className="w-full block lg:hidden">
            <YouTubeLoop />
           </div>
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
        <div className="relative bg-[#335495] pt-16 md:pt-24 pb-32 md:pb-48 overflow-visible">
            <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none mix-blend-screen">
                 <img 
                    src="/bg-1.jpeg" 
                    alt="Map Background" 
                    className="w-full h-full object-cover grayscale"
                />
            </div>
            
            <div className="absolute right-0 bottom-0 z-10 w-[200px] md:w-[500px] h-[250px] md:h-[500px] pointer-events-none overflow-hidden flex items-end justify-end opacity-80 md:opacity-100">
                <img 
                    src="/padel-guy.png" 
                    alt="Sports Player" 
                    className="object-cover w-full h-full md:object-contain object-right-bottom mask-image-gradient"
                    style={{ 
                        maskImage: 'linear-gradient(to left, black 70%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to left, black 70%, transparent 100%)'
                    }} 
                />
            </div>

            <div className="container mx-auto px-4 relative z-20">
                 <h3 className="text-[#C8D653] font-bold text-lg md:text-3xl uppercase tracking-wider mb-2 md:mb-0 max-w-[80%] md:max-w-2xl text-left shadow-black drop-shadow-sm leading-relaxed">
                    Pan-India Execution: Serving Rajasthan, Gujarat, Madhya Pradesh, Delhi NCR, Maharashtra, Karnataka, Telangana, Tamil Nadu & More
                 </h3>
            </div>
        </div>

        <div className="relative z-30 -mt-20 md:-mt-24 container mx-auto px-4 pb-12 md:pb-20">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {/* Card 1 */}
                <div className="bg-white p-6 md:p-8 shadow-xl flex flex-row items-start space-x-4 md:space-x-5 min-h-[140px] md:min-h-[160px] rounded-sm">
                    <div className="text-[#C8D653] shrink-0 pt-1">
                        <Headset size={36} className="md:w-10 md:h-10" strokeWidth={1.5} />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#335495] uppercase mb-1 text-sm">Complete Turnkey Execution</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Single-point responsibility from design to delivery.</p>
                    </div>
                </div>
                 {/* Card 2 */}
                 <div className="bg-white p-6 md:p-8 shadow-xl flex flex-row items-start space-x-4 md:space-x-5 min-h-[140px] md:min-h-[160px] rounded-sm">
                    <div className="text-[#C8D653] shrink-0 pt-1">
                        <Atom size={36} className="md:w-10 md:h-10" strokeWidth={1.5} />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#335495] uppercase mb-1 text-sm">Multi-Sport Expertise</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Pickleball, Tennis, Basketball, Badminton, Turf and Sports Flooring.</p>
                    </div>
                </div>
                 {/* Card 3 */}
                 <div className="bg-white p-6 md:p-8 shadow-xl flex flex-row items-start space-x-4 md:space-x-5 min-h-[140px] md:min-h-[160px] rounded-sm">
                    <div className="text-[#C8D653] shrink-0 pt-1">
                         <ThumbsUp size={36} className="md:w-10 md:h-10" strokeWidth={1.5} />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#335495] uppercase mb-1 text-sm">Quality-Driven Construction</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Long-lasting surfaces, proper drainage and professional finishing.</p>
                    </div>
                </div>
             </div>
        </div>
        
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

      {/* --- WHAT WE DO --- */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-start md:items-center">
          <div className="md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-black text-[#335495] uppercase leading-none">
              What <br/> <span className="text-[#335495]">We Do</span>
            </h2>
          </div>
          <div className="md:w-3/4 md:pl-8 border-l-4 border-[#C8D653] pl-4">
            <p className="text-gray-600 mb-4 max-w-2xl text-sm md:text-base font-bold text-[#335495]">
              Sports Courts & Flooring Solutions:
            </p>
            <p className="text-gray-600 mb-6 max-w-3xl text-xs md:text-sm leading-relaxed grid grid-cols-2 md:grid-cols-3 gap-2">
              <span>• Pickleball Courts</span>
              <span>• Tennis Courts</span>
              <span>• Basketball Courts</span>
              <span>• Badminton Courts</span>
              <span>• Futsal & Football Turf</span>
              <span>• Cricket Turf</span>
              <span>• Swimming Pool Construction</span>
              <span>• Gym & Multipurpose Flooring</span>
              <span>• Maintenance & Resurfacing</span>
            </p>
            <button className="border-2 border-[#335495] text-[#335495] px-6 py-2 text-xs font-bold uppercase hover:bg-[#335495] hover:text-white transition">
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* --- PROJECTS & EXHIBITIONS GRID --- */}
      <section className="grid grid-cols-1 md:grid-cols-4 h-auto md:h-80">
        <div className="h-56 md:h-full relative group overflow-hidden">
           <img 
            src="/bg-3.jpeg" 
            alt="Completed Sports Project" 
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition"></div>
        </div>

        <div className="bg-[#335495] p-8 flex flex-col justify-center items-start text-white h-auto md:h-full">
          <h3 className="text-2xl md:text-3xl font-black uppercase mb-2">Our <br/> <span className="text-[#C8D653]">Projects</span></h3>
          <p className="text-xs mb-4 opacity-80">Schools, Academies, Clubs & Resorts</p>
          <a href="#" className="flex items-center text-sm font-medium hover:underline mt-2">
            Click here <ChevronRight size={16} />
          </a>
        </div>

        <div className="h-56 md:h-full relative group overflow-hidden">
           <img 
            src="/bg-4.jpeg" 
            alt="Sports Infrastructure Exhibition" 
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

        <div className="bg-[#C8D653] p-8 flex flex-col justify-center items-start text-[#335495] h-auto md:h-full">
          <h3 className="text-2xl md:text-3xl font-black uppercase mb-2"><span className="text-white">Our</span> <br/> Exhibitions</h3>
          <p className="text-xs mb-4 opacity-80">Showcasing Global Standards</p>
          <a href="#" className="flex items-center text-sm font-medium hover:underline mt-2">
            Click here <ChevronRight size={16} />
          </a>
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
          <button className="bg-[#335495] text-white px-12 py-3 text-xs font-bold uppercase hover:bg-blue-800 transition rounded-sm shadow-md">
            Call Us Today
          </button>
        </div>
      </section>

      {/* --- WHAT IS PICKLEBALL --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto">
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
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto">
         <div className="h-56 md:h-auto order-2 md:order-1 relative">
           <img 
            src="/bg-5.jpeg" 
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
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335495] mb-4 md:mb-6">Our Infrastructure Solutions</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              At IKON, we provide a variety of high-performance court designs for schools, clubs, and residential townships. Explore our core services below:
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-0 max-w-6xl mx-auto shadow-lg md:shadow-none rounded-lg overflow-hidden md:rounded-none">
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


      {/* --- FOOTER --- */}
      <footer className="bg-[#1f2937] text-white py-12 border-t-4 border-[#C8D653]">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-center md:text-left">
          <div>
            <h4 className="font-bold text-[#C8D653] uppercase mb-4">IKON Sports</h4>
            <p className="text-gray-400">India’s No. 1 Sports Courts Infrastructure Company. Experts in turnkey sports facility design and delivery.</p>
          </div>
          <div>
            <h4 className="font-bold text-[#C8D653] uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Projects</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
            </ul>
          </div>
           <div>
            <h4 className="font-bold text-[#C8D653] uppercase mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Pan-India Operations</li>
              <li>Call / WhatsApp: +91 77370 22715</li>
              <li>info@ikonsports.in</li>
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
          © 2025 IKON Sports. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;