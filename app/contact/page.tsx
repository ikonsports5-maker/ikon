'use client';

import React, { useState } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, Clock, 
  Send, ChevronDown, Facebook, Instagram, Linkedin 
} from 'lucide-react';
import Header from '@/component/Header';
import Footer from '@/component/Footer';

const ContactPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Pickleball Court',
    message: ''
  });

  const servicesList = [
    { name: 'Cricket Turf', id: 'cricket-turf' },
    { name: 'Basketball Courts', id: 'basketball-courts' },
    { name: 'Tennis Courts', id: 'tennis-courts' },
    { name: 'Football Turf', id: 'football-turf' },
    { name: 'Badminton Courts', id: 'badminton-courts' },
    { name: 'Pickleball Courts', id: 'pickleball-courts' },
    { name: 'Padel Courts', id: 'padel-courts' },
    { name: 'Squash Courts', id: 'squash-courts' },
  ];

  // WhatsApp Redirect Logic
  const handleSubmit = (e:any) => {
    e.preventDefault();
    
    const whatsappNumber = "917737022715";
    const text = `Hello IKON Sports,%0a%0a*New Inquiry*%0a*Name:* ${formData.name}%0a*Phone:* ${formData.phone}%0a*Service:* ${formData.service}%0a*Message:* ${formData.message}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden w-full bg-white">
      {/* --- HEADER --- */}
      <Header />

      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="/bg-1.jpeg" alt="Contact IKON Sports" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#335495]/70 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4">Contact Us</h1>
          <div className="h-2 w-24 bg-[#C8D653] mx-auto mb-6"></div>
          <p className="text-lg md:text-xl font-bold uppercase tracking-[0.3em] opacity-90 text-[#C8D653]">Let's Build Your Vision</p>
        </div>
      </div>

      {/* --- CONTACT CONTENT --- */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Column: Contact Info */}
            <div className="lg:w-1/3 space-y-10">
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-black text-[#335495] uppercase leading-none mb-6">Get in <br/><span className="text-[#C8D653]">Touch</span></h2>
                <p className="text-gray-500 font-medium leading-relaxed">Have a project in mind? Our experts are ready to provide a free site assessment and technical consultation.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-5 group">
                  <div className="bg-gray-50 p-4 rounded-sm text-[#335495] group-hover:bg-[#335495] group-hover:text-white transition-all shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-[#335495] uppercase text-xs tracking-widest mb-1">Call / WhatsApp</h4>
                    <p className="text-gray-600 font-bold">+91 77370 22715</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="bg-gray-50 p-4 rounded-sm text-[#335495] group-hover:bg-[#335495] group-hover:text-white transition-all shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-[#335495] uppercase text-xs tracking-widest mb-1">Email Us</h4>
                    <p className="text-gray-600 font-bold">ikonsportsinfra@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="bg-gray-50 p-4 rounded-sm text-[#335495] group-hover:bg-[#335495] group-hover:text-white transition-all shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-[#335495] uppercase text-xs tracking-widest mb-1">Our Reach</h4>
                    <p className="text-gray-600 font-bold">Pan-India Operations</p>
                  </div>
                </div>
              </div>

              
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-t-8 border-[#C8D653] rounded-sm">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#335495]">Full Name</label>
                    <input 
                      type="text" name="name" required value={formData.name} onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-gray-50 border border-gray-100 p-4 outline-none focus:border-[#335495] transition-all font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#335495]">Phone Number</label>
                    <input 
                      type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-gray-50 border border-gray-100 p-4 outline-none focus:border-[#335495] transition-all font-medium"
                    />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#335495]">Service Required</label>
                    <select 
                      name="service" value={formData.service} onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-100 p-4 outline-none focus:border-[#335495] transition-all font-bold text-[#335495] appearance-none"
                    >
                      {servicesList.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
                    </select>
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#335495]">Your Message</label>
                    <textarea 
                      name="message" rows={4} value={formData.message} onChange={handleChange}
                      placeholder="Tell us about your site location, court size, or specific needs..."
                      className="w-full bg-gray-50 border border-gray-100 p-4 outline-none focus:border-[#335495] transition-all font-medium resize-none"
                    ></textarea>
                  </div>

                  <div className="md:col-span-2 pt-4">
                    <button 
                      type="submit"
                      className="w-full bg-[#335495] text-white py-5 px-4 font-black uppercase tracking-[0.2em] text-xs hover:bg-[#C8D653] hover:text-[#335495] transition-all shadow-lg flex items-center justify-center gap-3 group"
                    >
                      Send Inquiry via WhatsApp
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    <p className="text-[10px] text-gray-400 mt-4 text-center font-bold uppercase tracking-widest">
                      *By clicking send, you will be redirected to WhatsApp to chat with our team.
                    </p>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    <Footer />
    </div>
  );
};

export default ContactPage;