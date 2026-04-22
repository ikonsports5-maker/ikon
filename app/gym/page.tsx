'use client';

import React from 'react';
import {
    Dumbbell, CheckCircle2, Layout, Settings,
    Wrench, ShieldCheck, ArrowRight, Activity,
    Users, Building2, MapPin, PhoneCall
} from 'lucide-react';
import Header from '@/component/Header';
import Footer from '@/component/Footer';

const GymServicesPage = () => {
    const brandBlue = "#335495";
    const brandLime = "#C8D653";

    return (
        <div className="font-sans text-gray-800 overflow-x-hidden w-full bg-white">
            <Header />

            {/* --- HERO SECTION --- */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                        alt="Gym Infrastructure"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#335495]/90 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-[2px] bg-[#C8D653]"></div>
                            <span className="text-[#C8D653] font-black uppercase tracking-[0.3em] text-xs">Fitness Infrastructure</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.85] tracking-tighter mb-8">
                            Build Fitness <br />
                            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>Spaces</span>
                        </h1>
                        <p className="text-blue-100 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-medium">
                            IKON Sports delivers complete indoor and outdoor gym solutions designed for performance, durability, and long-term use.
                        </p>
                        <a href="https://wa.me/917737022715" className="bg-[#C8D653] text-[#335495] px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-all shadow-xl rounded-sm">
                            Get Free Consultation
                        </a>
                    </div>
                </div>
            </section>

            {/* --- WHY IKON SECTION --- */}
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                {/* Ghost Text Background */}
                <span className="absolute top-10 right-[-5%] text-[150px] font-black text-gray-200/50 select-none uppercase tracking-tighter z-0">
                    POWER
                </span>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-4">
                            <h2 className="text-4xl font-black text-[#335495] uppercase leading-none mb-6">
                                Why <br /><span className="text-[#C8D653]">IKON Sports?</span>
                            </h2>
                            <div className="h-1.5 w-20 bg-[#335495] mb-8"></div>
                            <p className="text-gray-600 font-medium leading-relaxed">
                                We create fitness environments that are powerful, safe, and built to last across Indian weather conditions.
                            </p>
                        </div>

                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { title: "Indoor & Outdoor Expertise", icon: <Layout size={24} /> },
                                { title: "Weather-Resistant Equipment", icon: <ShieldCheck size={24} /> },
                                { title: "Custom Design & Layout", icon: <Activity size={24} /> },
                                { title: "Strong Installation Team", icon: <Wrench size={24} /> }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 bg-white p-6 shadow-sm border-l-4 border-[#C8D653]">
                                    <div className="text-[#335495]">{item.icon}</div>
                                    <span className="font-bold text-[#335495] uppercase text-sm tracking-tight">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MAIN SERVICES (Split Sections) --- */}

            {/* 1. Indoor Gym */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 relative">
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#C8D653]/20 z-0"></div>
                            <img
                                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
                                className="relative z-10 w-full h-[500px] object-cover shadow-2xl rounded-sm"
                                alt="Indoor Gym"
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <span className="text-[#C8D653] font-black text-5xl opacity-20 mb-4 block">01</span>
                            <h3 className="text-4xl font-black text-[#335495] uppercase mb-6">Indoor Gym Setup</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Create a premium indoor fitness experience with high-performance cardio, strength, and functional zones optimized for your space.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 mb-10">
                                {["Cardio Equipment", "Strength Training", "Functional Zones", "Rubber/PVC Flooring", "Space Optimization"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 size={18} className="text-[#C8D653]" />
                                        <span className="text-sm font-bold text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="p-6 bg-[#335495] text-white rounded-sm">
                                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C8D653] mb-2">Ideal For</p>
                                <p className="text-sm font-medium">Commercial Gyms • Hotels • Corporates • Home Gyms</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Outdoor Gym */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div className="lg:w-1/2 relative">
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#335495]/10 z-0"></div>
                            <img
                                src="/image.png"
                                className="relative z-10 w-full h-[500px] object-cover shadow-2xl rounded-sm"
                                alt="Outdoor Gym"
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <span className="text-[#335495] font-black text-5xl opacity-10 mb-4 block">02</span>
                            <h3 className="text-4xl font-black text-[#335495] uppercase mb-6">Outdoor Gym Setup</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Build durable and weather-resistant outdoor fitness spaces with heavy-duty, anti-rust machines designed for parks and schools.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {["Heavy-Duty Equipment", "Anti-Rust Coating", "Park & Community Setup", "Open Fitness Zones"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 group">
                                        <div className="w-8 h-[2px] bg-[#C8D653] group-hover:w-12 transition-all"></div>
                                        <span className="text-sm font-black uppercase text-[#335495] tracking-widest">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="p-6 border-2 border-[#335495] text-[#335495] rounded-sm">
                                <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60 mb-2">Ideal For</p>
                                <p className="text-sm font-black uppercase">Parks • Residential Societies • Schools • Gov Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- EXECUTION PROCESS (THE STEPS) --- */}
            <section className="py-24 bg-[#335495] text-white">
                <div className="container mx-auto px-6 text-center mb-16">
                    <h2 className="text-4xl font-black uppercase tracking-tight">How IKON Works</h2>
                    <div className="h-1.5 w-24 bg-[#C8D653] mx-auto mt-6"></div>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {[
                            { step: "01", title: "Analysis", desc: "Space & goals assessment" },
                            { step: "02", title: "Design", desc: "Customized layout planning" },
                            { step: "03", title: "Selection", desc: "Optimized equipment choice" },
                            { step: "04", title: "Setup", desc: "Professional installation" },
                            { step: "05", title: "Handover", desc: "Ready-to-use fitness space" }
                        ].map((item, i) => (
                            <div key={i} className="relative text-center group">
                                <div className="text-6xl font-black text-white/10 mb-4 group-hover:text-[#C8D653]/20 transition-colors">
                                    {item.step}
                                </div>
                                <h4 className="font-black uppercase tracking-widest text-sm mb-2">{item.title}</h4>
                                <p className="text-xs text-blue-200 font-medium">{item.desc}</p>
                                {i < 4 && (
                                    <div className="hidden md:block absolute top-8 -right-4 text-[#C8D653]/30">
                                        <ArrowRight size={24} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- TURNKEY & MAINTENANCE --- */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-slate-50 p-10 rounded-sm border-b-4 border-[#335495]">
                            <div className="w-12 h-12 bg-[#335495] text-white flex items-center justify-center mb-6">
                                <Settings />
                            </div>
                            <h3 className="text-2xl font-black text-[#335495] uppercase mb-4">Turnkey Solutions</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                From concept to completion, we handle layout design, equipment selection, flooring, and final safety testing.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-10 rounded-sm border-b-4 border-[#C8D653]">
                            <div className="w-12 h-12 bg-[#C8D653] text-[#335495] flex items-center justify-center mb-6">
                                <Wrench />
                            </div>
                            <h3 className="text-2xl font-black text-[#335495] uppercase mb-4">Maintenance & Support</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Regular servicing, repairs, and upgrades to keep your gym equipment running at peak performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-[#335495] uppercase leading-none mb-10">
                        Build Your <br /> <span className="text-[#C8D653]">Dream Gym Today</span>
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <a
                            href="https://wa.me/917737022715"
                            className="bg-[#335495] text-white px-12 py-5 font-black uppercase text-xs tracking-[0.2em] shadow-2xl flex items-center justify-center gap-3 hover:bg-blue-900 transition-all"
                        >
                            <PhoneCall size={18} /> Get Expert Consultation
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default GymServicesPage;