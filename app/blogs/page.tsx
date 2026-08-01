'use client';

import React, { useState, useEffect } from 'react';
import {
  Calendar, User, ArrowRight, ArrowLeft,
  Facebook, Linkedin, X, Menu,
  Clock, Link2, Check, ArrowUp, MessageCircle
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
  const [readProgress, setReadProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // --- READING PROGRESS BAR (article view only) ---
  useEffect(() => {
    if (!selectedBlog) return;
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setReadProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [selectedBlog]);

  // Flatten Portable Text blocks to plain words so we can estimate reading time
  const getReadingTime = (body: any[] = []) => {
    const text = (body || [])
      .filter((b: any) => b._type === 'block')
      .map((b: any) => (b.children || []).map((c: any) => c.text).join(''))
      .join(' ');
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  };

  const formatDate = (value: string) =>
    value
      ? new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      : '';

  const openBlog = (blog: any) => {
    setSelectedBlog(blog);
    setCopied(false);
    window.scrollTo(0, 0);
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — nothing to do */
    }
  };

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
      h1: ({ children }: any) => (
        <h2 className="text-3xl md:text-4xl font-black text-[#335495] uppercase mt-14 mb-5 tracking-tight scroll-mt-24">
          {children}
        </h2>
      ),
      h2: ({ children }: any) => (
        <h2 className="text-2xl md:text-3xl font-black text-[#335495] uppercase mt-14 mb-5 tracking-tight scroll-mt-24">
          <span className="block h-1 w-12 bg-[#C8D653] mb-4"></span>
          {children}
        </h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-xl md:text-2xl font-black text-[#335495] uppercase mt-10 mb-4 tracking-tight scroll-mt-24">
          {children}
        </h3>
      ),
      h4: ({ children }: any) => (
        <h4 className="text-base md:text-lg font-black text-[#335495] uppercase mt-8 mb-3 tracking-widest scroll-mt-24">
          {children}
        </h4>
      ),
      normal: ({ children }: any) => (
        <p className="mb-6 leading-[1.9] text-gray-700 text-[17px] md:text-lg">
          {children}
        </p>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className="my-10 border-l-4 border-[#C8D653] bg-[#f8f9fa] px-8 py-6 text-[#335495] text-xl md:text-2xl font-bold italic leading-relaxed">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="mb-8 space-y-3 text-gray-700 text-[17px] md:text-lg">{children}</ul>
      ),
      number: ({ children }: any) => (
        <ol className="mb-8 space-y-3 text-gray-700 text-[17px] md:text-lg list-decimal pl-6 marker:font-black marker:text-[#335495]">
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }: any) => (
        <li className="relative pl-7 leading-relaxed">
          <span className="absolute left-0 top-[0.6em] h-2 w-2 bg-[#C8D653]"></span>
          {children}
        </li>
      ),
      number: ({ children }: any) => <li className="pl-2 leading-relaxed">{children}</li>,
    },
    marks: {
      strong: ({ children }: any) => <strong className="font-black text-[#335495]">{children}</strong>,
      em: ({ children }: any) => <em className="italic">{children}</em>,
      link: ({ children, value }: any) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#335495] font-bold underline decoration-[#C8D653] decoration-2 underline-offset-4 hover:text-[#C8D653] transition-colors"
        >
          {children}
        </a>
      ),
    },
    types: {
      image: ({ value }: any) => (
        <figure className="my-12">
          <img
            src={urlFor(value).url()}
            alt={value?.alt || 'Blog detail'}
            className="shadow-xl w-full h-auto border-l-4 border-[#C8D653]"
          />
          {value?.caption && (
            <figcaption className="mt-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              {value.caption}
            </figcaption>
          )}
        </figure>
      ),
      table: ({ value }: any) => {
        const rows: any[] = value?.rows || [];
        if (!rows.length) return null;
        const hasHeader = value?.hasHeaderRow !== false;
        const headRow = hasHeader ? rows[0] : null;
        const bodyRows = hasHeader ? rows.slice(1) : rows;

        return (
          <figure className="my-12">
            {/* Wide tables scroll inside their own box instead of breaking the page */}
            <div className="overflow-x-auto border border-gray-100">
              <table className="w-full border-collapse text-left text-sm md:text-base">
                {headRow && (
                  <thead>
                    <tr className="bg-[#335495] text-white">
                      {(headRow.cells || []).map((cell: string, i: number) => (
                        <th
                          key={i}
                          className="px-5 py-4 font-black uppercase text-[11px] tracking-widest whitespace-nowrap"
                        >
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                )}
                <tbody>
                  {bodyRows.map((row: any, r: number) => (
                    <tr key={row._key || r} className={r % 2 ? 'bg-[#f8f9fa]' : 'bg-white'}>
                      {(row.cells || []).map((cell: string, c: number) => (
                        <td
                          key={c}
                          className={`px-5 py-4 align-top border-t border-gray-100 text-gray-700 ${
                            c === 0 ? 'font-bold text-[#335495]' : ''
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {value?.caption && (
              <figcaption className="mt-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                {value.caption}
              </figcaption>
            )}
          </figure>
        );
      },
      htmlEmbed: ({ value }: any) => {
        if (!value?.html) return null;
        return (
          <figure className="my-12">
            {/* Rendered verbatim from the CMS — see `blog-html` styles in globals.css */}
            <div
              className="blog-html overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: value.html }}
            />
            {value?.caption && (
              <figcaption className="mt-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                {value.caption}
              </figcaption>
            )}
          </figure>
        );
      },
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
                  onClick={() => openBlog(blog)}
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
          {/* Reading Progress Bar */}
          <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-transparent">
            <div
              className="h-full bg-[#C8D653] transition-[width] duration-150 ease-out"
              style={{ width: `${readProgress}%` }}
            />
          </div>

          {/* --- ARTICLE HEADER (text sits on white, never over the photo) --- */}
          <header className="pt-12 md:pt-20 pb-10 md:pb-14 bg-white">
            <div className="max-w-4xl mx-auto px-6 text-left">
              <button
                onClick={() => setSelectedBlog(null)}
                className="group inline-flex items-center gap-2 text-gray-400 font-black uppercase text-[10px] tracking-[0.2em] mb-8 hover:text-[#335495] transition-colors"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                The IKON Sports Journal
              </button>

              {/* Category chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {(selectedBlog.categories?.length ? selectedBlog.categories : ['Article']).map((cat: string) => (
                  <span
                    key={cat}
                    className="bg-[#C8D653] text-[#335495] px-4 py-1 text-[10px] font-black uppercase tracking-widest"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tighter text-[#335495] mb-8">
                {selectedBlog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 border-t border-gray-100 pt-6">
                <span className="flex items-center gap-2">
                  <User size={14} className="text-[#C8D653]" /> {selectedBlog.author || 'IKON Sports'}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={14} className="text-[#C8D653]" /> {formatDate(selectedBlog.publishedAt)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={14} className="text-[#C8D653]" /> {getReadingTime(selectedBlog.body)} Min Read
                </span>
              </div>
            </div>
          </header>

          {/* --- FEATURE IMAGE (clean, no text or overlay on top of it) --- */}
          {selectedBlog.mainImage && (
            <div className="max-w-6xl mx-auto px-6">
              {/* No fixed height / no object-cover: the image keeps its own ratio so the full frame is visible */}
              <img
                src={urlFor(selectedBlog.mainImage).url()}
                alt={selectedBlog.title}
                className="w-full h-auto bg-gray-100"
              />
            </div>
          )}

          {/* --- ARTICLE BODY --- */}
          <article className="py-12 md:py-20">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex gap-12">

                {/* Sticky share rail (desktop) */}
                <aside className="hidden lg:block w-14 shrink-0">
                  <div className="sticky top-28 flex flex-col items-center gap-4">
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 [writing-mode:vertical-rl] rotate-180 mb-2">
                      Share
                    </span>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"
                      className="w-10 h-10 flex items-center justify-center border border-gray-200 text-[#335495] hover:bg-[#335495] hover:text-white hover:border-[#335495] transition-all"
                    >
                      <Facebook size={16} />
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn"
                      className="w-10 h-10 flex items-center justify-center border border-gray-200 text-[#335495] hover:bg-[#335495] hover:text-white hover:border-[#335495] transition-all"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(`${selectedBlog.title} ${shareUrl}`)}`}
                      target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp"
                      className="w-10 h-10 flex items-center justify-center border border-gray-200 text-[#335495] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all"
                    >
                      <MessageCircle size={16} />
                    </a>
                    <button
                      onClick={handleCopyLink}
                      aria-label="Copy link"
                      className="w-10 h-10 flex items-center justify-center border border-gray-200 text-[#335495] hover:bg-[#C8D653] hover:border-[#C8D653] transition-all"
                    >
                      {copied ? <Check size={16} /> : <Link2 size={16} />}
                    </button>
                  </div>
                </aside>

                {/* Main column */}
                <div className="min-w-0 flex-1 max-w-3xl text-left">
                  {/* Lead paragraph */}
                  {selectedBlog.excerpt && (
                    <p className="text-xl md:text-2xl font-bold text-[#335495] leading-relaxed border-l-4 border-[#C8D653] pl-6 mb-12">
                      {selectedBlog.excerpt}
                    </p>
                  )}

                  {/* RENDER BODY FIELD FROM SANITY */}
                  <div>
                    <PortableText value={selectedBlog.body} components={portableTextComponents} />
                  </div>

                  {/* Mobile share row */}
                  <div className="lg:hidden mt-16 pt-8 border-t border-gray-100 flex items-center gap-4">
                    <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Share</span>
                    <div className="flex gap-2">
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                        target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"
                        className="w-10 h-10 flex items-center justify-center border border-gray-200 text-[#335495]"
                      >
                        <Facebook size={16} />
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                        target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn"
                        className="w-10 h-10 flex items-center justify-center border border-gray-200 text-[#335495]"
                      >
                        <Linkedin size={16} />
                      </a>
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(`${selectedBlog.title} ${shareUrl}`)}`}
                        target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp"
                        className="w-10 h-10 flex items-center justify-center border border-gray-200 text-[#335495]"
                      >
                        <MessageCircle size={16} />
                      </a>
                      <button
                        onClick={handleCopyLink}
                        aria-label="Copy link"
                        className="w-10 h-10 flex items-center justify-center border border-gray-200 text-[#335495]"
                      >
                        {copied ? <Check size={16} /> : <Link2 size={16} />}
                      </button>
                    </div>
                  </div>

                  {/* End-of-article CTA */}
                  <div className="mt-16 bg-[#335495] text-white p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#C8D653]/10 rotate-12"></div>
                    <div className="relative z-10">
                      <p className="text-[#C8D653] text-[10px] font-black uppercase tracking-[0.3em] mb-3">
                        Planning a Facility?
                      </p>
                      <h3 className="text-2xl md:text-3xl font-black uppercase leading-tight mb-6 max-w-md">
                        Let's build your court the right way.
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href="/contact"
                          className="bg-[#C8D653] text-[#335495] px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all"
                        >
                          Inquire Now
                        </a>
                        <a
                          href="/projects"
                          className="border border-white/40 px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-[#335495] transition-all"
                        >
                          View Projects
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- KEEP READING --- */}
              {blogs.filter((b) => b._id !== selectedBlog._id).length > 0 && (
                <div className="mt-24 pt-12 border-t border-gray-100">
                  <div className="flex items-end justify-between mb-10 gap-6">
                    <h3 className="text-2xl md:text-3xl font-black text-[#335495] uppercase tracking-tight">
                      Keep Reading
                    </h3>
                    <button
                      onClick={() => setSelectedBlog(null)}
                      className="text-[10px] font-black uppercase tracking-widest text-[#335495] border-b-2 border-[#C8D653] pb-1 hover:text-[#C8D653] transition-colors whitespace-nowrap"
                    >
                      All Articles
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs
                      .filter((b) => b._id !== selectedBlog._id)
                      .slice(0, 3)
                      .map((blog) => (
                        <article
                          key={blog._id}
                          onClick={() => openBlog(blog)}
                          className="group cursor-pointer"
                        >
                          <div className="relative h-48 overflow-hidden bg-gray-100 mb-5">
                            {blog.mainImage && (
                              <img
                                src={urlFor(blog.mainImage).url()}
                                alt={blog.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                            )}
                          </div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                            {formatDate(blog.publishedAt)}
                          </p>
                          <h4 className="text-[#335495] font-black uppercase text-base leading-tight group-hover:text-[#C8D653] transition-colors">
                            {blog.title}
                          </h4>
                        </article>
                      ))}
                  </div>
                </div>
              )}

              {/* Back to top */}
              <div className="mt-16 flex justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#335495] transition-colors"
                >
                  <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                  Back to Top
                </button>
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