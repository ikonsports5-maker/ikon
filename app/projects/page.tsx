'use client';

import React, { useState, useEffect } from 'react';
import { 
  MapPin, Calendar, User, ArrowLeft, ArrowRight
} from 'lucide-react';
import Header from '@/component/Header';
import { sanityClient } from '@/lib/sanity.client';
import { urlFor } from '@/lib/imageUrl';

const ProjectsPage = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>(['All']);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "project"] | order(_createdAt desc) {
          _id, title, client, location, year, typeOfProject,
          about, infrastructure, heroImage, gallery,
          youtubeUrls, featured, slug
        }`;
        const data = await sanityClient.fetch(query);
        setProjects(data);
        setFilteredProjects(data);

        // --- DYNAMIC CATEGORY EXTRACTION ---
        // 1. Get all 'typeOfProject' values from the data
        // 2. Filter out nulls/undefined
        // 3. Use 'Set' to remove duplicates
        const uniqueTypes: string[] = Array.from(
          new Set(data.map((p: any) => p.typeOfProject).filter(Boolean))
        );
        
        // 4. Combine 'All' with the unique types found in Sanity
        setCategories(['All', ...uniqueTypes.sort()]);

      } catch (error) {
        console.error("Sanity project fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Filter Logic when Tab changes
  useEffect(() => {
    if (activeTab === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.typeOfProject === activeTab);
      setFilteredProjects(filtered);
    }
  }, [activeTab, projects]);

  if (loading) return <div className="h-screen flex items-center justify-center font-black text-[#335495] uppercase tracking-widest">Loading Portfolio...</div>;

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      <Header />

      {!selectedProject ? (
        <>
          {/* HERO SECTION */}
          <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 z-0">
              <img src="/bg-2.jpeg" alt="Portfolio" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#335495]/90 backdrop-blur-sm"></div>
            </div>
            <div className="relative z-20 text-center text-white px-4">
              <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4">Portfolio</h1>
              <div className="h-2 w-20 bg-[#C8D653] mx-auto mb-6"></div>
              <p className="text-sm md:text-lg font-bold uppercase tracking-[0.4em] text-[#C8D653]">Building Excellence Across India</p>
            </div>
          </div>

          {/* DYNAMIC CATEGORY TABS */}
          <section className="sticky top-[70px] z-40 bg-white border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 overflow-x-auto no-scrollbar">
              <div className="flex justify-start md:justify-center items-center py-4 gap-4 md:gap-10 min-w-max">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`px-4 py-2 text-[10px] md:text-xs font-black uppercase tracking-widest transition-all duration-300 border-b-2 ${
                      activeTab === cat 
                        ? 'text-[#335495] border-[#C8D653]' 
                        : 'text-gray-400 border-transparent hover:text-[#335495]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* PROJECT GRID */}
          <section className="py-12 md:py-20 container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-700">
              {filteredProjects.map((project) => (
                <article 
                  key={project._id} 
                  className="group relative bg-white border border-gray-50 overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
                  onClick={() => { setSelectedProject(project); window.scrollTo(0,0); }}
                >
                  <div className="relative h-64 overflow-hidden">
                    {project.heroImage && (
                      <img src={urlFor(project.heroImage).url()} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    )}
                    <div className="absolute top-4 left-4 bg-[#335495] text-white px-3 py-1 text-[9px] font-black uppercase tracking-widest">
                      {project.typeOfProject}
                    </div>
                  </div>
                  <div className="p-6 text-left">
                    <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                      <MapPin size={12} className="text-[#C8D653]"/> {project.location}
                    </div>
                    <h3 className="text-[#335495] font-black uppercase text-base leading-tight group-hover:text-[#C8D653] transition-colors">{project.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </>
      ) : (
        /* --- SINGLE PROJECT DETAIL VIEW --- */
        <div className="animate-in fade-in duration-500 text-left">
           {/* Detailed View Code... */}
           <div className="relative w-full h-[50vh] md:h-[60vh]">
            <img src={urlFor(selectedProject.heroImage).url()} className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-[#335495]/70 backdrop-blur-sm"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-20 text-white z-10">
               <div className="container mx-auto">
                <button onClick={() => setSelectedProject(null)} className="flex items-center gap-2 text-[#C8D653] font-black uppercase text-[10px] mb-8 hover:text-white transition-colors">
                  <ArrowLeft size={16} /> Back to Projects
                </button>
                <h1 className="text-3xl md:text-6xl font-black uppercase max-w-4xl tracking-tighter leading-none">{selectedProject.title}</h1>
               </div>
            </div>
          </div>
          
          <article className="py-16 md:py-24 container mx-auto px-4 max-w-5xl">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-2/3">
                <h2 className="text-[#335495] font-black uppercase text-2xl mb-6 border-l-4 border-[#C8D653] pl-4">Project Overview</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-10">{selectedProject.about}</p>
                
                {selectedProject.gallery?.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                    {selectedProject.gallery.map((img: any, i: number) => (
                      <div key={i} className="h-64 rounded-sm overflow-hidden shadow-md">
                        <img src={urlFor(img).url()} className="w-full h-full object-cover" alt="Gallery" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="lg:w-1/3 space-y-6">
                <div className="bg-gray-50 p-8 border border-gray-100">
                  <h4 className="font-black uppercase text-xs tracking-[0.2em] mb-6 text-[#335495]">Project Details</h4>
                  <div className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    <div className="flex justify-between border-b pb-2"><span>Client</span> <span className="text-[#335495]">{selectedProject.client}</span></div>
                    <div className="flex justify-between border-b pb-2"><span>Location</span> <span className="text-[#335495]">{selectedProject.location}</span></div>
                    <div className="flex justify-between border-b pb-2"><span>Year</span> <span className="text-[#335495]">{selectedProject.year}</span></div>
                    <div className="flex justify-between pb-2"><span>Type</span> <span className="text-[#335495]">{selectedProject.typeOfProject}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      )}

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
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about-us" className="hover:text-white">About Us</a></li>
              {/* <li><a href="/projects" className="hover:text-white">Projects</a></li> */}
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
            {/* <h4 className="font-bold text-[#C8D653] uppercase mb-4">Follow Us</h4> */}
            {/* <div className="flex justify-center md:justify-start space-x-4">
               <Facebook className="hover:text-[#C8D653] cursor-pointer" />
               <Instagram className="hover:text-[#C8D653] cursor-pointer" />
               <Linkedin className="hover:text-[#C8D653] cursor-pointer" />
            </div> */}
          </div>
        </div>
        <div className="text-center text-gray-600 text-xs mt-12 pt-8 border-t border-gray-700">
          © 2025 IKON Sports. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ProjectsPage;