import React, { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const servicesList = [
    { name: 'Cricket Turf', id: 'cricket-turf' },
    { name: 'Basketball Courts', id: 'basketball-courts' },
    { name: 'Tennis Courts', id: 'tennis-courts' },
    { name: 'Football Turf', id: 'football-turf' },
    { name: 'Badminton Courts', id: 'badminton-courts' },
    { name: 'Pickleball Courts', id: 'pickleball-courts' },
    { name: 'Padel Courts', id: 'padel-courts' },
    
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          
          {/* 1. Desktop Left Navigation */}
          <nav className="hidden md:flex flex-1 items-center justify-end space-x-8 font-semibold text-xs lg:text-sm text-[#335495]">
            <a href="/" className="hover:text-[#C8D653] transition tracking-widest">HOME</a>
            <a href="/about-us" className="hover:text-[#C8D653] transition tracking-widest">ABOUT US</a>
            <a href="/blogs" className="hover:text-[#C8D653] transition tracking-widest">BLOGS</a>
          </nav>

          {/* 2. Centered Logo */}
          <div className="flex-shrink-0 mx-4 md:mx-20">
            <a href="/">
              <img 
                src="/logo.jpg" 
                alt="Ikon Sports" 
                className="w-14 h-14 md:w-16 md:h-16 object-contain hover:scale-105 transition-transform duration-300" 
              />
            </a>
          </div>

          {/* 3. Desktop Right Navigation */}
          <nav className="hidden md:flex flex-1 items-center justify-start space-x-8 font-semibold text-xs lg:text-sm text-[#335495]">
            
            {/* SERVICES DROPDOWN BLOCK */}
            <div 
              className="relative py-4"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="flex items-center gap-1 cursor-pointer">
                {/* Main Link: Clicking this goes to /services */}
                <a href="/services" className="hover:text-[#C8D653] transition tracking-widest uppercase">
                  SERVICES
                </a>
                <ChevronDown size={14} className={`transition-transform text-gray-400 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </div>

              {/* Dropdown Menu (Desktop) */}
              <div className={`absolute left-0 mt-2 w-56 bg-white shadow-2xl border-t-2 border-[#C8D653] transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'}`}>
                <div className="py-2">
                  {servicesList.map((service) => (
                    <a 
                      key={service.id}
                      href={`/services/${service.id}`}
                      className="block px-6 py-3 text-[#335495] hover:bg-gray-50 hover:text-[#C8D653] font-bold text-[11px] tracking-wider uppercase border-b border-gray-50 last:border-0"
                    >
                      {service.name}
                    </a>
                  ))}
                  {/* "View All" link inside the dropdown for good UX */}
                  <a href="/services" className="block px-6 py-3 bg-gray-50 text-[#335495] font-black text-[10px] tracking-widest uppercase hover:bg-[#335495] hover:text-white transition-colors">
                    View All Services →
                  </a>
                </div>
              </div>
            </div>

            {/* <a href="/projects" className="hover:text-[#C8D653] transition tracking-widest">PROJECTS</a> */}
            <a href="/contact" className="hover:text-[#C8D653] transition tracking-widest">CONTACT</a>
          </nav>

          {/* Mobile Right Side */}
          <div className="flex items-center space-x-4 md:hidden">
            <a href="tel:+917737022715" className="flex items-center space-x-1 text-[#335495] font-bold text-[10px] bg-gray-50 px-3 py-2 rounded-full border border-gray-100">
              <Phone size={12} className="text-[#C8D653]" fill="#C8D653" />
              <span>CALL</span>
            </a>
            <button className="text-[#335495]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t p-6 flex flex-col space-y-4 font-bold text-[#335495] shadow-2xl absolute w-full z-50 h-screen overflow-y-auto">
          <a href="/" className="pb-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>HOME</a>
          <a href="/about-us" className="pb-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>ABOUT US</a>
          
          {/* Mobile Services Accordion */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
              {/* Clicking the text goes to /services */}
              <a href="/services" className="uppercase" onClick={() => setIsMenuOpen(false)}>SERVICES</a>
              {/* Clicking the icon toggles the list */}
              <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="p-2">
                <ChevronDown size={20} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            
            {isServicesOpen && (
              <div className="bg-gray-50 flex flex-col pl-4">
                {servicesList.map((service) => (
                  <a 
                    key={service.id} 
                    href={`/services/${service.id}`}
                    className="py-3 text-[11px] border-b border-white last:border-0 uppercase tracking-widest"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/projects" className="pb-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>PROJECTS</a>
          <a href="/contact" className="pb-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
        </div>
      )}
    </header>
  );
};

export default Header;