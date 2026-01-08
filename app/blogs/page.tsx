'use client';

import React, { useState } from 'react';
import { 
  Menu, X, Phone, Calendar, User, ArrowRight, 
  ArrowLeft, ChevronDown, Facebook, Instagram, Linkedin, Share2, Search 
} from 'lucide-react';
import Header from '@/component/Header';

const BlogPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  // State to handle which blog is being read (null means show all)
  const [selectedBlog, setSelectedBlog] = useState(null);

  // --- DUMMY DATA ---
  const blogs = [
  
    {
      id: "basketball-flooring",
      title: "Why Acrylic Multi-Layer Flooring is Best for Basketball",
      excerpt: "Choosing the right surface can reduce player injury by 30%. We break down the technical layers of FIBA courts.",
      date: "Oct 12, 2025",
      author: "Technical Team",
      category: "Basketball",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200",
      content: `
        <p>Basketball is a high-impact sport. The friction and force generated during a game can lead to severe joint injuries if the surface isn't engineered correctly.</p>
        <br/>
        <h3 class="text-xl font-black text-[#335495] uppercase">The Layers of Excellence</h3>
        <p>A professional FIBA-style court consists of a primer, a resurfacer, and multiple coats of texture and finish. Each layer serves a specific purpose: grip, color durability, and shock absorption.</p>
      `
    },
    {
      id: "turf-maintenance",
      title: "Maintenance Guide: Keeping Your Artificial Turf Evergreen",
      excerpt: "5 Simple steps to ensure your cricket or football turf lasts for over 10 years in Indian weather.",
      date: "Sept 28, 2025",
      author: "Maintenance Dept",
      category: "Maintenance",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1200",
      content: `
        <p>Your investment in artificial turf needs regular care to maintain its bounce and drainage capabilities.</p>
        <br/>
        <h3 class="text-xl font-black text-[#335495] uppercase">Weekly Maintenance Tips</h3>
        <p>Brushing the fibers and removing organic debris are the two most important tasks for a long-lasting field.</p>
      `
    }
  ];

  const servicesList = [
    { name: 'Cricket Turf', id: 'cricket-turf' },
    { name: 'Basketball Courts', id: 'basketball-courts' },
    { name: 'Tennis Courts', id: 'tennis-courts' },
    { name: 'Pickleball Courts', id: 'pickleball-courts' }
  ];

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      
      {/* --- HEADER (Persistent) --- */}
      <Header />

      {/* --- CONDITIONAL RENDERING --- */}
      {!selectedBlog ? (
        /* --- GRID VIEW (SHOW ALL BLOGS) --- */
        <>
          {/* BLOG HERO */}
          <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1540747913346-19e32778e8cd?q=80&w=2000" alt="Hero" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#335495]/80 backdrop-blur-sm"></div>
            </div>
            <div className="relative z-20 text-center text-white px-4">
              <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4">Insights & Updates</h1>
              <div className="h-2 w-24 bg-[#C8D653] mx-auto mb-6"></div>
              <p className="text-lg md:text-xl font-bold uppercase tracking-[0.3em] opacity-90 text-[#C8D653]">The IKON Sports Journal</p>
            </div>
          </div>

          {/* BLOG GRID */}
          <section className="py-16 md:py-24 container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogs.map((blog) => (
                <article 
                  key={blog.id} 
                  className="group bg-white flex flex-col h-full border border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  onClick={() => {
                    setSelectedBlog(blog);
                    window.scrollTo(0, 0); // Scroll to top when opening
                  }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 left-4 bg-[#C8D653] text-[#335495] px-4 py-1 text-[10px] font-black uppercase tracking-widest">
                      {blog.category}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow text-left">
                    <div className="flex items-center gap-4 text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                      <span className="flex items-center gap-1"><Calendar size={12} className="text-[#C8D653]"/> {blog.date}</span>
                    </div>
                    <h3 className="text-[#335495] font-black uppercase text-lg leading-tight mb-4 group-hover:text-[#C8D653] transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                      {blog.excerpt}
                    </p>
                    <button className="flex items-center gap-2 text-[#335495] font-black uppercase text-[10px] tracking-[0.2em] border-b-2 border-[#C8D653] self-start pb-1">
                      Read Article <ArrowRight size={14} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </>
      ) : (
        /* --- SINGLE VIEW (SHOW FULL CONTENT) --- */
        <div className="animate-in fade-in duration-500">
          {/* ARTICLE HERO */}
          <div className="relative w-full h-[50vh] md:h-[60vh]">
            <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-20 text-white z-10 text-left">
              <div className="container mx-auto max-w-4xl">
                <span className="bg-[#C8D653] text-[#335495] px-4 py-1 text-[10px] font-black uppercase tracking-widest mb-4 inline-block">
                  {selectedBlog.category}
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-6 tracking-tighter">
                  {selectedBlog.title}
                </h1>
                <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] opacity-90">
                  <span className="flex items-center gap-2"><Calendar size={14} className="text-[#C8D653]"/> {selectedBlog.date}</span>
                  <span className="flex items-center gap-2"><User size={14} className="text-[#C8D653]"/> {selectedBlog.author}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ARTICLE CONTENT */}
          <article className="py-12 md:py-24 container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-left">
              {/* BACK BUTTON */}
              <button 
                onClick={() => setSelectedBlog(null)}
                className="inline-flex items-center gap-2 text-[#335495] font-black uppercase text-[10px] tracking-widest mb-12 hover:text-[#C8D653] transition-colors"
              >
                <ArrowLeft size={16} /> Back to Blog Grid
              </button>

              <div 
                className="text-gray-700 leading-relaxed text-lg"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              />

              {/* SHARE BLOCK */}
              <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Share:</span>
                  <div className="flex gap-2">
                    <Facebook size={18} className="text-[#335495] cursor-pointer hover:text-[#C8D653]" />
                    <Linkedin size={18} className="text-[#335495] cursor-pointer hover:text-[#C8D653]" />
                  </div>
                </div>
                <a href="/contact" className="bg-[#335495] text-white px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-[#C8D653] hover:text-[#335495] transition-all">
                  Inquire Now
                </a>
              </div>
            </div>
          </article>
        </div>
      )}

      {/* --- FOOTER (Always Visible) --- */}
      <footer className="bg-[#1a1a1a] text-white py-12 border-t-4 border-[#C8D653]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#C8D653] font-black uppercase tracking-[0.3em] mb-2 text-sm">IKON Sports</p>
          <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">India’s No. 1 Sports Infrastructure Company. © 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;