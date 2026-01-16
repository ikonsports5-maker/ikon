'use client';

import React, { useState, useEffect } from 'react';
import { 
  Calendar, User, ArrowRight, ArrowLeft, 
  Facebook, Linkedin, X, Menu 
} from 'lucide-react';
import Header from '@/component/Header';
import { sanityClient } from '@/lib/sanity.client';
import { urlFor } from '@/lib/imageUrl';
import { PortableText } from '@portabletext/react';
import Footer from '@/component/Footer';

const BlogPage = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // --- FETCH DATA FROM SANITY ---
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // FIX: Changed "content" to "body" to match your schema
        const query = `*[_type == "blog"] | order(publishedAt desc) {
          _id,
          title,
          excerpt,
          publishedAt,
          categories,
          mainImage,
          body, 
          author,
          slug
        }`;
        const data = await sanityClient.fetch(query);
        console.log("Fetched Blogs:", data); // Check your console to see if 'body' exists now
        setBlogs(data);
      } catch (error) {
        console.error("Sanity fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Custom styling for Portable Text
  const portableTextComponents = {
    block: {
      h3: ({ children }: any) => (
        <h3 className="text-2xl font-black text-[#335495] uppercase mt-10 mb-4 tracking-tight">
          {children}
        </h3>
      ),
      normal: ({ children }: any) => (
        <p className="mb-6 leading-relaxed text-gray-700">
          {children}
        </p>
      ),
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
          {children}
        </ul>
      ),
    },
    types: {
      image: ({ value }: any) => (
        <div className="relative w-full my-10">
          <img 
            src={urlFor(value).url()} 
            alt="Blog detail" 
            className="rounded-sm shadow-xl w-full object-cover border-l-4 border-[#C8D653]" 
          />
        </div>
      ),
    },
  };

  if (loading) return <div className="h-screen flex items-center justify-center font-black text-[#335495]">LOADING...</div>;

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      <Header />

      {!selectedBlog ? (
        /* --- GRID VIEW --- */
        <>
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

          <section className="py-16 md:py-24 container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogs.map((blog) => (
                <article 
                  key={blog._id} 
                  className="group bg-white flex flex-col h-full border border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  onClick={() => {
                    setSelectedBlog(blog);
                    window.scrollTo(0, 0);
                  }}
                >
                  <div className="relative h-64 overflow-hidden">
                    {blog.mainImage && (
                        <img src={urlFor(blog.mainImage).url()} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    )}
                    <div className="absolute top-4 left-4 bg-[#C8D653] text-[#335495] px-4 py-1 text-[10px] font-black uppercase tracking-widest">
                      {blog.categories?.[0] || "Update"}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow text-left">
                    <div className="flex items-center gap-4 text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="text-[#C8D653]"/> 
                        {new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                    <h3 className="text-[#335495] font-black uppercase text-lg leading-tight mb-4 group-hover:text-[#C8D653] transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
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
        /* --- SINGLE VIEW --- */
        <div className="animate-in fade-in duration-500">
          <div className="relative w-full h-[50vh] md:h-[60vh]">
            <img src={urlFor(selectedBlog.mainImage).url()} alt={selectedBlog.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-20 text-white z-10 text-left">
              <div className="container mx-auto max-w-4xl">
                <span className="bg-[#C8D653] text-[#335495] px-4 py-1 text-[10px] font-black uppercase tracking-widest mb-4 inline-block">
                  {selectedBlog.categories?.[0] || "Article"}
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-6 tracking-tighter">
                  {selectedBlog.title}
                </h1>
                <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] opacity-90">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} className="text-[#C8D653]"/> 
                    {new Date(selectedBlog.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-2"><User size={14} className="text-[#C8D653]"/> {selectedBlog.author || "IKON Sports"}</span>
                </div>
              </div>
            </div>
          </div>

          <article className="py-12 md:py-24 container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-left">
              <button 
                onClick={() => setSelectedBlog(null)}
                className="inline-flex items-center gap-2 text-[#335495] font-black uppercase text-[10px] tracking-widest mb-12 hover:text-[#C8D653] transition-colors"
              >
                <ArrowLeft size={16} /> Back to Blog Grid
              </button>

              {/* RENDER BODY FIELD FROM SANITY */}
              <div className="text-lg">
                <PortableText value={selectedBlog.body} components={portableTextComponents} />
              </div>

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

     <Footer />
    </div>
  );
};

export default BlogPage;