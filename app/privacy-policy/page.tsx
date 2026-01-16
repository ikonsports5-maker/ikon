'use client';

import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, Mail, Globe } from 'lucide-react';
import Header from '@/component/Header';
import Footer from '@/component/Footer';
const PrivacyPolicy = () => {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      <Header />

      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="/bg-2.jpeg" alt="Privacy Policy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#335495]/90 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Privacy Policy</h1>
          <div className="h-1.5 w-20 bg-[#C8D653] mx-auto mb-6"></div>
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-[#C8D653]">Your Data Security is Our Priority</p>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <section className="py-16 md:py-24 container mx-auto px-4 max-w-5xl">
        <div className="text-left">
          <div className="flex items-center gap-3 mb-8">
            <ShieldCheck className="text-[#C8D653]" size={24} />
            <p className="text-[#335495] font-black uppercase text-sm tracking-widest">Last Updated: 12 January 2026</p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p className="text-lg mb-12">
              Welcome to <strong className="text-[#335495]">Ikon Sports</strong>. 
              At Ikon Sports, accessible from <a href="https://ikonsports.in" className="text-[#335495] underline font-bold">https://ikonsports.in</a>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you visit our website or contact us via WhatsApp, forms, or advertisements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              {/* 1. Information We Collect */}
              <div className="border-l-4 border-gray-100 pl-6 hover:border-[#C8D653] transition-colors">
                <h3 className="text-[#335495] font-black uppercase text-xl mb-4 flex items-center gap-2">
                  <span className="text-[#C8D653]">01.</span> Information We Collect
                </h3>
                <ul className="space-y-2 text-sm font-medium list-none pl-0">
                  <li>• Full Name</li>
                  <li>• Phone Number (including WhatsApp number)</li>
                  <li>• Email Address</li>
                  <li>• Location / City</li>
                  <li>• Project or enquiry details related to sports court flooring</li>
                  <li>• Information voluntarily shared via forms, WhatsApp, calls, or ads</li>
                </ul>
              </div>

              {/* 2. How We Collect */}
              <div className="border-l-4 border-gray-100 pl-6 hover:border-[#C8D653] transition-colors">
                <h3 className="text-[#335495] font-black uppercase text-xl mb-4 flex items-center gap-2">
                  <span className="text-[#C8D653]">02.</span> How We Collect Information
                </h3>
                <ul className="space-y-2 text-sm font-medium">
                  <li>• Website contact forms</li>
                  <li>• WhatsApp chat initiated via ads or website buttons</li>
                  <li>• Facebook / Instagram Lead Ads</li>
                  <li>• Direct calls, messages, or emails</li>
                  <li>• Cookies and tracking tools</li>
                </ul>
              </div>
            </div>

            <hr className="my-16 border-gray-100" />

            {/* 3. How We Use */}
            <div className="mb-16">
              <h3 className="text-[#335495] font-black uppercase text-2xl mb-6">03. How We Use Your Information</h3>
              <p className="mb-4">Your information is used strictly for business purposes such as:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold uppercase tracking-tight">
                <div className="bg-gray-50 p-4 border border-gray-100">Responding to enquiries</div>
                <div className="bg-gray-50 p-4 border border-gray-100">Providing flooring solutions info</div>
                <div className="bg-gray-50 p-4 border border-gray-100">Contacting via WhatsApp/Phone/SMS</div>
                <div className="bg-gray-50 p-4 border border-gray-100">Marketing communication (with consent)</div>
              </div>
            </div>

            {/* 4. WhatsApp & Meta */}
            <div className="bg-[#335495] p-8 md:p-12 text-white mb-16 rounded-sm shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Lock size={120} />
                </div>
                <h3 className="text-[#C8D653] font-black uppercase text-2xl mb-6 relative z-10">04. WhatsApp & Meta Ads Consent</h3>
                <p className="text-sm opacity-90 leading-relaxed mb-6 relative z-10">By submitting your details on our website or clicking on a WhatsApp or Lead Form advertisement, you:</p>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-widest relative z-10 pl-0 list-none">
                    <li className="flex gap-3"><ChevronRight size={14} className="text-[#C8D653] shrink-0" /> Give consent to Ikon Sports to contact you via WhatsApp, phone call, SMS, or email</li>
                    <li className="flex gap-3"><ChevronRight size={14} className="text-[#C8D653] shrink-0" /> Acknowledge communication may happen through Meta platforms</li>
                    <li className="flex gap-3"><ChevronRight size={14} className="text-[#C8D653] shrink-0" /> Understand data is used only for enquiry and service-related communication</li>
                </ul>
                <p className="mt-8 text-[10px] font-black text-[#C8D653] uppercase tracking-[0.3em]">We do not send spam or share your data with unauthorized third parties.</p>
            </div>

            {/* Sections 5 - 10 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-20">
                <div>
                    <h4 className="text-[#335495] font-black uppercase text-lg mb-4">05. Cookies & Tracking</h4>
                    <p className="text-sm text-gray-500">Ikon Sports uses cookies, Meta Pixel, and similar technologies to track ad performance and serve relevant advertisements. You may disable cookies through your browser settings.</p>
                </div>
                <div>
                    <h4 className="text-[#335495] font-black uppercase text-lg mb-4">06. Data Protection</h4>
                    <p className="text-sm text-gray-500">We implement industry-standard security measures. While we strive for protection, no online transmission is 100% secure.</p>
                </div>
                <div>
                    <h4 className="text-[#335495] font-black uppercase text-lg mb-4">07. Sharing of Information</h4>
                    <p className="text-sm text-gray-500">We do not sell, rent, or trade your personal data. Information is shared only when required by law.</p>
                </div>
                <div>
                    <h4 className="text-[#335495] font-black uppercase text-lg mb-4">08. Third-Party Services</h4>
                    <p className="text-sm text-gray-500">We use Meta Ads, WhatsApp Business, and Analytics tools. These follow their own privacy policies.</p>
                </div>
            </div>

            {/* 09 & 10 */}
            <div className="space-y-12">
                <div className="bg-gray-50 p-6 border-l-4 border-[#335495]">
                    <h4 className="text-[#335495] font-black uppercase text-sm mb-2">09. Children’s Information</h4>
                    <p className="text-sm">Ikon Sports does not knowingly collect personal data from individuals under the age of 13.</p>
                </div>
                <div className="bg-gray-50 p-6 border-l-4 border-[#335495]">
                    <h4 className="text-[#335495] font-black uppercase text-sm mb-2">10. Policy Updates</h4>
                    <p className="text-sm">We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page.</p>
                </div>
            </div>

            {/* 11. Contact Information */}
            <div className="mt-24 pt-12 border-t border-gray-100 text-center">
                <h3 className="text-[#335495] font-black uppercase text-3xl mb-8 tracking-tighter">11. Contact Information</h3>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <a href="mailto:support@ikonsports.in" className="flex items-center gap-3 group">
                        <div className="p-4 bg-gray-50 group-hover:bg-[#C8D653] transition-colors">
                            <Mail className="text-[#335495]" size={20} />
                        </div>
                        <span className="font-black uppercase text-xs tracking-widest text-gray-500 group-hover:text-[#335495]">support@ikonsports.in</span>
                    </a>
                    <a href="https://ikonsports.in" className="flex items-center gap-3 group">
                        <div className="p-4 bg-gray-50 group-hover:bg-[#C8D653] transition-colors">
                            <Globe className="text-[#335495]" size={20} />
                        </div>
                        <span className="font-black uppercase text-xs tracking-widest text-gray-500 group-hover:text-[#335495]">https://ikonsports.in</span>
                    </a>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
};

// Helper Icon for Consent list
const ChevronRight = ({ size, className }: { size: number, className: string }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="m9 18 6-6-6-6"/>
    </svg>
);

export default PrivacyPolicy;