import React from 'react'

import { Facebook, Instagram, Linkedin } from 'lucide-react'

function Footer() {
  return (
      <footer className="bg-[#1f2937] text-white py-12 border-t-4 border-[#C8D653]">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-center md:text-left">
          <div>
            <h4 className="font-bold text-[#C8D653] uppercase mb-4">IKON Sports</h4>
            <p className="text-gray-400">India’s No. 1 Sports Courts Infrastructure Company. Experts in turnkey sports facility design and delivery.</p>
          </div>
          <div>
            <h4 className="font-bold text-[#C8D653] uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about-us" className="hover:text-white">About Us</a></li>
              <li><a href="/projects" className="hover:text-white">Projects</a></li>
              <li><a href="/blogs" className="hover:text-white">Blogs</a></li>
              <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
            </ul>
          </div>
           <div>
            <h4 className="font-bold text-[#C8D653] uppercase mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Pan-India Operations</li>
              <li>Call / WhatsApp: 7737022715 Or 9358959715</li>
              <li>ikonsportsinfra@gmail.com</li>
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
  )
}

export default Footer