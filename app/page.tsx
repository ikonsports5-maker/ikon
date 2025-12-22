'use client';
import React, { useState } from 'react';
import { 
  Menu, X, Facebook, Instagram, Linkedin, 
  Headset, Atom, ThumbsUp, ChevronRight, Play, MapPin, CheckCircle2, MessageCircle 
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  // Updated to reflect the "SERVICES" section provided
  const servicesList = [
    { title: "Pickleball Courts", content: "IKON provides professional Pickleball court construction with accurate layouts, durable surfaces and consistent play quality suitable for Indian weather conditions. It's one of the fastest-growing sports in India, widely adopted by clubs, schools, and residential societies." },
    { title: "Tennis Courts", content: "Professional-grade tennis court construction featuring high-performance synthetic acrylic surfaces or clay, designed for schools, academies, and private clubs." },
    { title: "Basketball Courts", content: "Durable and safe basketball court solutions with proper shock absorption and anti-slip properties, following standard dimensions for competitive play." },
    { title: "Badminton Courts", content: "Indoor and outdoor badminton flooring solutions including synthetic mats and wooden flooring that ensure player safety and optimal shuttle bounce." },
    { title: "Turf & Football", content: "High-quality Futsal & Football turf installations and Cricket Turf (Indoor & Outdoor) designed for high-traffic use and low maintenance." },
    { title: "Other Solutions", content: "Comprehensive services for Swimming Pool Construction, Gym & Multipurpose Flooring, and specialized Court Maintenance & Resurfacing." }
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
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
             <div className="flex flex-col leading-none">
               <img src="/logo.jpg" alt="Ikon Sports" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
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

      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[550px] md:h-[600px] bg-gray-200 overflow-hidden flex flex-col md:flex-row">
        <div className="absolute inset-0 z-0">
          <img src="/bg-2.jpeg" alt="Sports Court" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div 
          className="absolute top-0 left-0 h-full w-full md:w-[60%] z-10 hidden md:block"
          style={{
            backgroundColor: colors.green,
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' 
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#C8D653]/95 to-transparent md:hidden z-10"></div>

        <div className="relative z-20 container mx-auto px-4 h-full flex items-center justify-center md:justify-start">
          <div className="max-w-2xl text-[#335495] pt-12 md:pt-0 text-center md:text-left">
            <p className="text-sm md:text-lg font-bold uppercase tracking-widest mb-2">India’s No. 1 Sports Courts Infrastructure Company</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight md:leading-[0.95] mb-6 tracking-tight">
              7+ Years Experience <br className="hidden md:block"/>
              Pan-India Turnkey <br className="hidden md:block"/>
              Execution
            </h1>
            <p className="text-[#335495] font-medium mb-8 max-w-lg hidden md:block">
              We design, build and deliver high-performance sports courts for schools, academies, clubs, townships and commercial projects across India.
            </p>
            <button className="bg-[#335495] text-white px-8 py-4 text-sm font-bold uppercase hover:bg-blue-800 transition shadow-lg rounded-sm tracking-wide transform hover:-translate-y-0.5">
              Get a Free Site Assessment
            </button>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 text-right text-white drop-shadow-md">
            <h3 className="text-sm md:text-xl font-bold leading-none">400+ Courts Delivered</h3>
            <p className="text-xs md:text-sm font-medium opacity-90">Quality-Driven Construction</p>
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
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                IKON is a Pan-India sports courts infrastructure company with over 7 years of experience in designing and executing professional sports facilities.
              </p>
              <p>
                We deliver complete turnkey solutions including planning, civil work, flooring systems, accessories and final handover. Our courts are built for durability, safety and consistent play performance, using proven materials and industry-standard construction practices.
              </p>
            </div>
          </div>
          <div className="relative mt-4 md:mt-0">
            <img 
              src="/bg-2.jpeg" 
              alt="IKON Sports Project" 
              className="w-full h-56 md:h-80 object-cover shadow-xl rounded-sm"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
              <div className="bg-[#C8D653] group-hover:bg-[#b9c745] w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition shadow-lg">
                <Play fill="white" className="text-white ml-1" size={28} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICE AREAS SECTION --- */}
      <section className="relative w-full bg-white">
        <div className="relative bg-[#335495] pt-16 md:pt-24 pb-32 md:pb-48 overflow-hidden">
            <div className="container mx-auto px-4 relative z-20">
                 <h3 className="text-[#C8D653] font-bold text-lg md:text-4xl uppercase tracking-wider mb-4 max-w-2xl">
                    Pan-India Execution
                 </h3>
                 <p className="text-white/80 max-w-xl text-sm md:text-lg">
                  Serving Rajasthan • Gujarat • Madhya Pradesh • Delhi NCR • Maharashtra • Karnataka • Telangana • Tamil Nadu • & More Locations
                 </p>
            </div>
            
            <div className="absolute right-0 bottom-0 z-10 w-[200px] md:w-[450px] h-[250px] md:h-[450px] opacity-40 md:opacity-80">
                <img src="/padel-1.png" alt="Sports Player" className="object-contain w-full h-full" />
            </div>
        </div>

        {/* --- WHY IKON (Cards) --- */}
        <div className="relative z-30 -mt-20 md:-mt-24 container mx-auto px-4 pb-12 md:pb-20">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-white p-6 md:p-8 shadow-xl flex flex-row items-start space-x-4 min-h-[140px] rounded-sm border-b-4 border-[#C8D653]">
                    <div className="text-[#C8D653] shrink-0 pt-1">
                        <CheckCircle2 size={36} />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#335495] uppercase mb-1 text-sm">Turnkey Execution</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Single-point responsibility from design to delivery.</p>
                    </div>
                </div>
                 <div className="bg-white p-6 md:p-8 shadow-xl flex flex-row items-start space-x-4 min-h-[140px] rounded-sm border-b-4 border-[#C8D653]">
                    <div className="text-[#C8D653] shrink-0 pt-1">
                        <Atom size={36} />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#335495] uppercase mb-1 text-sm">Multi-Sport Expertise</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Pickleball, Tennis, Basketball, Badminton, Turf and Sports Flooring.</p>
                    </div>
                </div>
                 <div className="bg-white p-6 md:p-8 shadow-xl flex flex-row items-start space-x-4 min-h-[140px] rounded-sm border-b-4 border-[#C8D653]">
                    <div className="text-[#C8D653] shrink-0 pt-1">
                         <ThumbsUp size={36} />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#335495] uppercase mb-1 text-sm">Quality Construction</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Long-lasting surfaces, proper drainage and professional finishing.</p>
                    </div>
                </div>
             </div>
        </div>
      </section>

      {/* --- STATS COUNTER SECTION --- */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center text-center">
          <div className="order-2 md:order-1">
            <h3 className="text-4xl md:text-5xl font-black text-[#335495]">400+</h3>
            <p className="text-xs font-bold tracking-widest mt-2 uppercase text-gray-800">Sports Courts<br/>Delivered</p>
          </div>

          <div className="flex flex-col items-center justify-center order-1 md:order-2">
            <div className="text-[100px] md:text-[150px] font-black leading-none text-[#C8D653]">7+</div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-800 -mt-2">Years of Experience</p>
          </div>

          <div className="order-3">
            <h3 className="text-4xl md:text-5xl font-black text-[#335495]">200+</h3>
            <p className="text-xs font-bold tracking-widest mt-2 uppercase text-gray-800">Clients<br/>Across India</p>
          </div>
        </div>
      </section>

      {/* --- EXECUTION PROCESS (What We Do) --- */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-start">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-black text-[#335495] uppercase leading-none">
              Execution <br/> <span className="text-[#C8D653]">Process</span>
            </h2>
          </div>
          <div className="md:w-2/3 md:pl-8 border-l-4 border-[#C8D653] pl-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {[
                 "Site Survey & Planning", "Civil Work & Base Preparation", 
                 "Sports Flooring Installation", "Line Marking & Accessories", 
                 "Lighting & Finishing", "Final Inspection & Handover"
               ].map((step, i) => (
                 <div key={i} className="flex items-center space-x-2 text-gray-700 font-medium">
                   <div className="w-6 h-6 rounded-full bg-[#335495] text-white flex items-center justify-center text-xs">{i+1}</div>
                   <span>{step}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS & EXHIBITIONS --- */}
      <section className="grid grid-cols-1 md:grid-cols-4 h-auto md:h-80">
        <div className="h-56 md:h-full relative group overflow-hidden">
           <img src="/bg-3.jpeg" alt="Sports Project" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
        </div>
        <div className="bg-[#335495] p-8 flex flex-col justify-center items-start text-white">
          <h3 className="text-2xl md:text-3xl font-black uppercase mb-2">Our <br/> <span className="text-[#C8D653]">Projects</span></h3>
          <p className="text-xs mb-4 opacity-80">Schools, academies, clubs, and resorts across India.</p>
          <a href="#" className="flex items-center text-sm font-medium hover:underline">Click here <ChevronRight size={16} /></a>
        </div>
        <div className="h-56 md:h-full relative group overflow-hidden">
           <img src="/bg-4.jpeg" alt="Exhibition" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
        </div>
        <div className="bg-[#C8D653] p-8 flex flex-col justify-center items-start text-[#335495]">
          <h3 className="text-2xl md:text-3xl font-black uppercase mb-2"><span className="text-white">Our</span> <br/> Experience</h3>
          <p className="text-xs mb-4 opacity-80">Delivering excellence for over 200+ clients.</p>
          <a href="#" className="flex items-center text-sm font-medium hover:underline">Click here <ChevronRight size={16} /></a>
        </div>
      </section>

      {/* --- PICKLEBALL SECTION --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto">
        <div className="bg-[#C8D653] p-10 md:p-20 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-black text-[#335495] uppercase mb-6">Pickleball Courts</h2>
          <p className="text-[#335495] text-sm md:text-base leading-relaxed font-medium">
            Pickleball is one of the fastest-growing sports in India, widely adopted by clubs, schools, residential societies and commercial facilities. 
            <br/><br/>
            IKON provides professional Pickleball court construction with accurate layouts, durable surfaces and consistent play quality suitable for Indian weather conditions.
          </p>
        </div>
        <div className="h-64 md:h-auto">
          <img src="/player1.png" alt="Pickleball Play" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* --- SERVICES TABS --- */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#335495] uppercase mb-4">Sports Courts & Flooring Solutions</h2>
            <div className="h-1 w-24 bg-[#C8D653] mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-0 max-w-6xl mx-auto shadow-2xl rounded-lg overflow-hidden">
            <div className="flex flex-col md:w-1/3 bg-gray-100">
              {servicesList.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`py-5 px-6 text-left font-bold text-sm transition-all border-b border-gray-200 ${
                    activeTab === index ? 'bg-[#335495] text-white' : 'text-[#335495] hover:bg-gray-200'
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
            <div className="md:w-2/3 p-8 md:p-16 flex items-center bg-white min-h-[300px]">
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-bold text-[#335495] mb-4">{servicesList[activeTab].title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-lg">
                  {servicesList[activeTab].content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAINTENANCE SECTION --- */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
              <div className="w-full md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?auto=format&fit=crop&w=1000&q=80" 
                  alt="Maintenance" 
                  className="rounded-xl shadow-2xl"
                />
              </div>
              <div className="w-full md:w-1/2 text-left">
                  <h2 className="text-3xl md:text-4xl font-black text-[#335495] uppercase mb-6">Court Maintenance</h2>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                    Sports court maintenance and resurfacing services including recoating, crack repair, line re-marking, net and fencing replacement. Ikon offers complete maintenance services to ensure that your court remains playable and attractive for years.
                  </p>
                  <div className="bg-[#335495] p-6 rounded-sm text-white">
                    <h4 className="font-bold uppercase mb-2">Build Your Sports Court With IKON</h4>
                    <p className="text-sm text-blue-100 mb-4">Ready for a professional site assessment?</p>
                    <div className="flex flex-col space-y-2 text-sm font-bold">
                      <span className="flex items-center"><MapPin size={16} className="mr-2 text-[#C8D653]"/> Call / WhatsApp: +91 77370 22715</span>
                      <span className="flex items-center"><MapPin size={16} className="mr-2 text-[#C8D653]"/> Email: info@ikonsports.in</span>
                    </div>
                  </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#111827] text-white py-12 border-t-8 border-[#C8D653]">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h4 className="font-bold text-[#C8D653] uppercase mb-4">IKON Sports</h4>
            <p className="text-gray-400 text-xs">India’s No. 1 Sports Courts Infrastructure Company. Delivering high-performance turnkey solutions nationwide.</p>
          </div>
          <div>
            <h4 className="font-bold text-[#C8D653] uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Projects</a></li>
            </ul>
          </div>
           <div>
            <h4 className="font-bold text-[#C8D653] uppercase mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li>Head Office: Rajasthan, India</li>
              <li>+91 77370 22715</li>
              <li>info@ikonsports.in</li>
            </ul>
          </div>
           <div>
            <h4 className="font-bold text-[#C8D653] uppercase mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
               <Facebook className="hover:text-[#C8D653] cursor-pointer" size={20} />
               <Instagram className="hover:text-[#C8D653] cursor-pointer" size={20} />
               <Linkedin className="hover:text-[#C8D653] cursor-pointer" size={20} />
            </div>
          </div>
        </div>
        <div className="text-center text-gray-600 text-xs mt-12 pt-8 border-t border-gray-800">
          © 2025 IKON Sports Infrastructure. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;