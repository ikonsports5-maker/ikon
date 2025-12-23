'use client';

import React, { useState } from 'react';
import { 
  Menu, X, Phone, ChevronRight, ChevronDown, ArrowLeft, ArrowRight, 
  Plus, Minus, Target, Activity, Star, Trophy, Zap, 
  Users, Construction, LayoutGrid, Shield, HardHat, ClipboardCheck
} from 'lucide-react';
import Header from '@/component/Header';

const sportsData: Record<string, {
  name: string;
  tagline: string;
  heroImage: string;
  expertiseTitle: string;
  expertiseDescription: string;
  faqs: { question: string; answer: string }[];
  services: { title: string; description: string; icon: string }[];
  productTitle: string;
  productDescription: string;
  productImage: string;
  productFeatures: { title: string; description: string }[];
}> = {
  'cricket-turf': {
    name: 'Cricket Turf',
    tagline: 'designed for optimal performance, durability, and safety',
    heroImage: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2000&auto=format&fit=crop',
    expertiseTitle: 'Cricket Turf Construction India',
    expertiseDescription: 'At ikon Sports, we deliver ICC-standard cricket turf solutions designed for optimal performance, durability, and safety. Whether for professional clubs, schools, or recreational grounds, our expertise ensures your pitch exceeds expectations. Using cutting-edge artificial cricket turf from international suppliers, we\'ve built 50+ cricket fields and 200+ cricket turfs that are reshaping how the game is played. Our commitment to quality has established us as a leader in cricket turf in India, helping players at every level enjoy the best playing surfaces available.',
    faqs: [
      {
        question: 'Why Invest in a Cricket Turf?',
        answer: 'Cricket turfs provide consistent playing conditions year-round, require minimal maintenance, and offer excellent durability. They are cost-effective in the long run and can be used in all weather conditions.'
      },
      {
        question: 'Why Choose Artificial Cricket Turf?',
        answer: 'Artificial cricket turf offers superior ball bounce consistency, all-weather playability, lower maintenance costs, and longer lifespan compared to natural grass. It\'s the preferred choice for modern cricket facilities.'
      },
      {
        question: 'What Dimensions Do You Need?',
        answer: 'Standard cricket pitch dimensions are 22 yards (20.12 meters) in length. The width of the pitch is 10 feet (3.05 meters). The overall playing area varies based on your requirements and available space.'
      }
    ],
    services: [
      {
        title: 'Design & Consultation',
        description: 'Custom layouts optimized for your site and usage needs.',
        icon: 'design'
      },
      {
        title: 'Earthworks & Preparation',
        description: 'Ground leveling, drainage installation, and base preparation for durability.',
        icon: 'earthwork'
      },
      {
        title: 'Turf Installation',
        description: 'Professional installation of premium artificial cricket turf, ensuring seamless and long-lasting results.',
        icon: 'turf'
      },
      {
        title: 'ICC Certification Assistance',
        description: 'Support in obtaining ICC Quality certification for your field.',
        icon: 'certification'
      },
      {
        title: 'Post-Installation Maintenance',
        description: 'Maintenance packages to keep your turf performing at its best.',
        icon: 'maintenance'
      }
    ],
    productTitle: 'Premium Artificial Cricket Turf',
    productDescription: 'Our products are trusted by professional clubs, schools, and recreational facilities globally, ensuring you receive the best in the industry. Our artificial cricket turf solutions are transforming the landscape of cricket in India, providing players with the best surfaces available. As an official partner of leading manufacturers, we deliver top-quality materials for your cricket field.',
    productImage: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2000&auto=format&fit=crop',
    productFeatures: [
      {
        title: 'High-Performance Turf Systems',
        description: 'Advanced fiber technology providing superior ball bounce and spin characteristics matching natural turf.'
      },
      {
        title: 'Durability and Longevity',
        description: 'UV-stabilized materials resistant to wear and weather, ensuring 8-10 years of optimal performance.'
      },
      {
        title: 'Safe and Comfortable',
        description: 'Shock-absorbing underlays reduce player fatigue and injury risk while maintaining excellent playability.'
      },
      {
        title: 'Low Maintenance',
        description: 'Minimal upkeep required compared to natural grass, saving time and costs while maintaining consistent quality.'
      }
    ]
  },
  'tennis-courts': {
    name: 'Tennis Courts',
    tagline: 'designed for optimal playability, durability, and safety',
    heroImage: 'https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?q=80&w=2000&auto=format&fit=crop',
    expertiseTitle: 'Tennis Court Construction India',
    expertiseDescription: 'At ikon Sports, we deliver ITF-standard tennis court solutions designed for optimal playability, durability, and safety. Whether for professional clubs, schools, or recreational grounds, our expertise ensures your court exceeds expectations. Using cutting-edge tennis court surfaces from leading suppliers, we\'ve built 100+ tennis courts that are reshaping how the game is played. Our commitment to quality has established us as a leader in tennis court construction in India, helping players at every level enjoy the best playing surfaces available.',
    faqs: [
      {
        question: 'Why Invest in a Tennis Court?',
        answer: 'Tennis courts provide excellent recreational and competitive opportunities, add value to properties, and offer year-round playability with proper surface selection.'
      },
      {
        question: 'Why Choose Artificial Tennis Courts?',
        answer: 'Artificial tennis courts offer consistent ball bounce, minimal maintenance, all-weather playability, and superior durability compared to clay or grass courts.'
      },
      {
        question: 'What Dimensions Do You Need?',
        answer: 'A standard tennis court is 78 feet (23.77 m) long and 36 feet (10.97 m) wide for doubles. Singles courts are 78 feet by 27 feet (8.23 m). Additional space is recommended for run-off areas.'
      }
    ],
    services: [
      {
        title: 'Design & Consultation',
        description: 'Custom layouts optimized for your site and usage needs.',
        icon: 'design'
      },
      {
        title: 'Earthworks & Preparation',
        description: 'Ground leveling, drainage installation, and base preparation for durability.',
        icon: 'earthwork'
      },
      {
        title: 'Surface Installation',
        description: 'Professional installation of premium acrylic or synthetic surfaces, ensuring seamless and long-lasting results.',
        icon: 'turf'
      },
      {
        title: 'ITF Certification Assistance',
        description: 'Support in obtaining ITF certification for your court.',
        icon: 'certification'
      },
      {
        title: 'Post-Installation Maintenance',
        description: 'Maintenance packages to keep your court performing at its best.',
        icon: 'maintenance'
      }
    ],
    productTitle: 'Professional Tennis Court Surfaces',
    productDescription: 'Our products are trusted by professional clubs, schools, and recreational facilities globally, ensuring you receive the best in the industry. Our tennis court solutions are transforming the landscape of tennis in India, providing players with world-class surfaces.',
    productImage: 'https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?q=80&w=2000&auto=format&fit=crop',
    productFeatures: [
      {
        title: 'High-Performance Surface Systems',
        description: 'Advanced acrylic surfaces providing superior ball bounce and consistent play characteristics.'
      },
      {
        title: 'Durability and Longevity',
        description: 'UV-stabilized materials resistant to wear and weather, ensuring years of optimal performance.'
      },
      {
        title: 'Safe and Comfortable',
        description: 'Cushioned surfaces reduce joint stress and injury risk while maintaining excellent playability.'
      },
      {
        title: 'Low Maintenance',
        description: 'Minimal upkeep required, saving time and costs while maintaining consistent quality.'
      }
    ]
  },
  'football-turf': {
    name: 'Football Turf',
    tagline: 'designed for optimal playability, durability, and safety',
    heroImage: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=1600&h=600&fit=crop',
    expertiseTitle: 'Football Turf Construction India',
    expertiseDescription: 'At ikon Sports, we deliver FIFA-standard football turf solutions designed for optimal playability, durability, and safety. Whether for professional clubs, schools, or recreational grounds, our expertise ensures your pitch exceeds expectations. Using cutting-edge artificial football turf from Limonta, we\'ve built 7 FIFA-quality football fields and 50+ football turfs that are reshaping how the game is played. Our commitment to quality has established us as a leader in football turf in India, helping players at every level enjoy the best playing surfaces available.',
    faqs: [
      {
        question: 'Why Invest in a Football Turf?',
        answer: 'Football turfs provide consistent playing conditions year-round, require minimal maintenance compared to natural grass, and offer excellent durability. They enable more playing hours and are cost-effective in the long run.'
      },
      {
        question: 'Why Choose Artificial Football Turf?',
        answer: 'Artificial football turf offers all-weather playability, consistent ball roll and bounce, superior durability, lower water consumption, and reduced maintenance costs. It\'s the modern solution for football facilities worldwide.'
      },
      {
        question: 'What Dimensions Do You Need?',
        answer: 'Standard football pitch dimensions range from 100-110 meters in length and 64-75 meters in width. FIFA recommends 105m x 68m for international matches. We can customize based on your available space and requirements.'
      }
    ],
    services: [
      {
        title: 'Design & Consultation',
        description: 'Custom layouts optimized for your site and usage needs.',
        icon: 'design'
      },
      {
        title: 'Earthworks & Preparation',
        description: 'Ground leveling, drainage installation, and base preparation for durability.',
        icon: 'earthwork'
      },
      {
        title: 'Turf Installation',
        description: 'Professional installation of premium artificial football turf, ensuring seamless and long-lasting results.',
        icon: 'turf'
      },
      {
        title: 'FIFA Certification Assistance',
        description: 'Support in obtaining FIFA Quality certification for your field.',
        icon: 'certification'
      },
      {
        title: 'Post-Installation Maintenance',
        description: 'Maintenance packages to keep your turf performing at its best.',
        icon: 'maintenance'
      }
    ],
    productTitle: 'Limonta Artificial Football Turf',
    productDescription: 'Limonta products are trusted by professional clubs, schools, and recreational facilities globally, ensuring you receive the best in the industry. Our artificial football turf solutions are transforming the landscape of football in India, providing players with the best surfaces available. As an official partner of Limonta, a world leader in artificial turf technology, we deliver top-quality materials for your football field.',
    productImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
    productFeatures: [
      {
        title: 'High-Performance Turf Systems',
        description: 'Advanced fiber technology providing superior ball roll, bounce, and player interaction matching natural grass.'
      },
      {
        title: 'Durability and Longevity',
        description: 'UV-stabilized materials resistant to wear and weather, ensuring years of optimal performance with FIFA Quality certification.'
      },
      {
        title: 'Safe and Comfortable',
        description: 'Shock-absorbing underlays reduce player fatigue and injury risk while maintaining excellent playability.'
      },
      {
        title: 'Eco-Friendly',
        description: 'Sustainable manufacturing processes and recyclable materials, reducing water consumption and environmental impact.'
      }
    ]
  },
  'basketball-courts': {
    name: 'Basketball Courts',
    tagline: 'designed for optimal performance, durability, and safety',
    heroImage: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2000&auto=format&fit=crop',
    expertiseTitle: 'Basketball Court Construction India',
    expertiseDescription: 'At ikon Sports, we deliver FIBA-standard basketball court solutions designed for optimal performance, durability, and safety. Whether for professional clubs, schools, or recreational grounds, our expertise ensures your court exceeds expectations. Using cutting-edge basketball court surfaces from leading suppliers, we\'ve built numerous basketball courts that provide exceptional playing conditions. Our commitment to quality has established us as a leader in basketball court construction in India.',
    faqs: [
      {
        question: 'Why Invest in a Basketball Court?',
        answer: 'Basketball courts provide excellent recreational opportunities, add value to properties, and can be used for multiple sports. They require minimal space compared to other sports facilities.'
      },
      {
        question: 'Why Choose Acrylic Basketball Courts?',
        answer: 'Acrylic basketball courts offer consistent ball bounce, excellent grip, weather resistance, and require minimal maintenance. They provide professional-quality playing conditions.'
      },
      {
        question: 'What Dimensions Do You Need?',
        answer: 'A FIBA standard basketball court is 28 meters long and 15 meters wide. NBA courts are slightly larger at 28.7m x 15.2m. We can customize dimensions based on your available space.'
      }
    ],
    services: [
      {
        title: 'Design & Consultation',
        description: 'Custom layouts optimized for your site and usage needs.',
        icon: 'design'
      },
      {
        title: 'Earthworks & Preparation',
        description: 'Ground leveling, drainage installation, and base preparation for durability.',
        icon: 'earthwork'
      },
      {
        title: 'Surface Installation',
        description: 'Professional installation of premium acrylic surfaces, ensuring seamless and long-lasting results.',
        icon: 'turf'
      },
      {
        title: 'FIBA Certification Assistance',
        description: 'Support in obtaining FIBA certification for your court.',
        icon: 'certification'
      },
      {
        title: 'Post-Installation Maintenance',
        description: 'Maintenance packages to keep your court performing at its best.',
        icon: 'maintenance'
      }
    ],
    productTitle: 'Professional Basketball Court Surfaces',
    productDescription: 'Our basketball court products are trusted by professional clubs, schools, and recreational facilities, ensuring you receive the best in the industry. Our solutions provide players with world-class playing surfaces that meet international standards.',
    productImage: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2000&auto=format&fit=crop',
    productFeatures: [
      {
        title: 'High-Performance Surface Systems',
        description: 'Advanced acrylic surfaces providing superior ball bounce and grip for optimal performance.'
      },
      {
        title: 'Durability and Longevity',
        description: 'Weather-resistant materials ensuring years of consistent performance in all conditions.'
      },
      {
        title: 'Safe and Comfortable',
        description: 'Cushioned surfaces reduce impact stress and enhance player safety.'
      },
      {
        title: 'Low Maintenance',
        description: 'Easy to clean and maintain, saving time and operational costs.'
      }
    ]
  },
  'badminton-courts': {
    name: 'Badminton Courts',
    tagline: 'designed for optimal performance, durability, and safety',
    heroImage: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=1600&h=600&fit=crop',
    expertiseTitle: 'Badminton Court Construction India',
    expertiseDescription: 'At ikon Sports, we deliver BWF-standard badminton court solutions designed for optimal performance, durability, and safety. Whether for professional clubs, schools, or recreational grounds, our expertise ensures your court exceeds expectations. Using premium badminton court flooring from leading suppliers, we\'ve built numerous badminton courts that provide exceptional playing conditions. Our commitment to quality has established us as a leader in badminton court construction in India.',
    faqs: [
      {
        question: 'Why Invest in a Badminton Court?',
        answer: 'Badminton courts provide excellent recreational opportunities, require minimal space, and can accommodate multiple skill levels. They are cost-effective to build and maintain.'
      },
      {
        question: 'Why Choose Professional Badminton Flooring?',
        answer: 'Professional badminton flooring offers consistent shuttle bounce, excellent grip, shock absorption for player safety, and durability. It\'s essential for quality gameplay.'
      },
      {
        question: 'What Dimensions Do You Need?',
        answer: 'A standard badminton court is 13.4 meters long and 6.1 meters wide. Additional space is needed around the court for player movement and safety. Multiple courts can be arranged in larger facilities.'
      }
    ],
    services: [
      {
        title: 'Design & Consultation',
        description: 'Custom layouts optimized for your site and usage needs.',
        icon: 'design'
      },
      {
        title: 'Earthworks & Preparation',
        description: 'Ground leveling and base preparation for durability.',
        icon: 'earthwork'
      },
      {
        title: 'Flooring Installation',
        description: 'Professional installation of premium PVC or wooden flooring, ensuring seamless results.',
        icon: 'turf'
      },
      {
        title: 'BWF Certification Assistance',
        description: 'Support in obtaining BWF certification for your court.',
        icon: 'certification'
      },
      {
        title: 'Post-Installation Maintenance',
        description: 'Maintenance packages to keep your court performing at its best.',
        icon: 'maintenance'
      }
    ],
    productTitle: 'Professional Badminton Court Flooring',
    productDescription: 'Our badminton court products are trusted by professional clubs, schools, and recreational facilities, ensuring you receive the best in the industry. Our solutions provide players with world-class playing surfaces that meet BWF standards.',
    productImage: 'https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?q=80&w=1000&auto=format&fit=crop',
    productFeatures: [
      {
        title: 'High-Performance Flooring Systems',
        description: 'Advanced PVC or wooden surfaces providing superior shuttle response and player grip.'
      },
      {
        title: 'Durability and Longevity',
        description: 'High-quality materials ensuring years of consistent performance.'
      },
      {
        title: 'Safe and Comfortable',
        description: 'Shock-absorbing properties reduce joint stress and injury risk.'
      },
      {
        title: 'Low Maintenance',
        description: 'Easy to clean and maintain, ensuring long-lasting quality.'
      }
    ]
  },
  'pickleball-courts': {
    name: 'Pickleball Courts',
    tagline: 'designed for optimal playability, durability, and safety',
    heroImage: '/player1.png',
    expertiseTitle: 'Pickleball Court Construction India',
    expertiseDescription: 'At ikon Sports, we deliver USAPA-standard pickleball court solutions designed for optimal playability, durability, and safety. Whether for professional clubs, schools, or recreational grounds, our expertise ensures your court exceeds expectations. Using cutting-edge pickleball court surfaces, we\'ve built numerous pickleball courts that are introducing this rapidly growing sport across India. Our commitment to quality has established us as a leader in pickleball court construction in India.',
    faqs: [
      {
        question: 'Why Invest in a Pickleball Court?',
        answer: 'Pickleball is one of the fastest-growing sports globally. Courts require minimal space, are cost-effective to build, and can accommodate players of all ages and skill levels.'
      },
      {
        question: 'Why Choose Professional Pickleball Surfaces?',
        answer: 'Professional pickleball surfaces offer consistent ball bounce, excellent traction, weather resistance, and durability. They provide the quality needed for competitive and recreational play.'
      },
      {
        question: 'What Dimensions Do You Need?',
        answer: 'A standard pickleball court is 44 feet (13.41m) long and 20 feet (6.10m) wide. Multiple courts can fit in the space of a single tennis court, making them space-efficient.'
      }
    ],
    services: [
      {
        title: 'Design & Consultation',
        description: 'Custom layouts optimized for your site and usage needs.',
        icon: 'design'
      },
      {
        title: 'Earthworks & Preparation',
        description: 'Ground leveling, drainage installation, and base preparation for durability.',
        icon: 'earthwork'
      },
      {
        title: 'Surface Installation',
        description: 'Professional installation of premium acrylic surfaces, ensuring seamless and long-lasting results.',
        icon: 'turf'
      },
      {
        title: 'USAPA Certification Assistance',
        description: 'Support in obtaining USAPA certification for your court.',
        icon: 'certification'
      },
      {
        title: 'Post-Installation Maintenance',
        description: 'Maintenance packages to keep your court performing at its best.',
        icon: 'maintenance'
      }
    ],
    productTitle: 'Professional Pickleball Court Surfaces',
    productDescription: 'Our pickleball court products are trusted by clubs and recreational facilities, ensuring you receive the best in the industry. Our solutions provide players with world-class playing surfaces that meet USAPA standards.',
    productImage: '/player1.png',
    productFeatures: [
      {
        title: 'High-Performance Surface Systems',
        description: 'Advanced acrylic surfaces providing superior ball response and player traction.'
      },
      {
        title: 'Durability and Longevity',
        description: 'Weather-resistant materials ensuring years of consistent performance.'
      },
      {
        title: 'Safe and Comfortable',
        description: 'Cushioned surfaces reduce joint stress for players of all ages.'
      },
      {
        title: 'Low Maintenance',
        description: 'Easy to maintain with minimal upkeep requirements.'
      }
    ]
  },
  'padel-courts': {
    name: 'Padel Courts',
    tagline: 'designed for optimal playability, durability, and safety',
    heroImage: 'https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?w=1600&h=600&fit=crop',
    expertiseTitle: 'Padel Court Construction India',
    expertiseDescription: 'At ikon Sports, we deliver International Padel Federation standard padel court solutions designed for optimal playability, durability, and safety. Whether for professional clubs or recreational grounds, our expertise ensures your court exceeds expectations. Using premium padel court materials including tempered glass walls and synthetic grass, we\'re introducing this exciting sport across India. Our commitment to quality has established us as a leader in padel court construction in India.',
    faqs: [
      {
        question: 'Why Invest in a Padel Court?',
        answer: 'Padel is rapidly growing globally and in India. It\'s social, easy to learn, and provides excellent entertainment. Padel courts attract members and generate revenue for clubs and facilities.'
      },
      {
        question: 'Why Choose Professional Padel Court Construction?',
        answer: 'Professional padel courts require precise glass wall installation, proper turf selection, and structural expertise. Quality construction ensures safety, durability, and optimal playing conditions.'
      },
      {
        question: 'What Dimensions Do You Need?',
        answer: 'A standard padel court is 20 meters long and 10 meters wide, enclosed by 3-4 meter high walls. The court includes tempered glass walls and metal mesh panels.'
      }
    ],
    services: [
      {
        title: 'Design & Consultation',
        description: 'Custom layouts optimized for your site and usage needs.',
        icon: 'design'
      },
      {
        title: 'Earthworks & Preparation',
        description: 'Ground leveling, drainage installation, and base preparation for durability.',
        icon: 'earthwork'
      },
      {
        title: 'Court Installation',
        description: 'Professional installation of glass walls, mesh panels, and synthetic grass turf.',
        icon: 'turf'
      },
      {
        title: 'Certification Assistance',
        description: 'Support in meeting international padel standards.',
        icon: 'certification'
      },
      {
        title: 'Post-Installation Maintenance',
        description: 'Maintenance packages to keep your court performing at its best.',
        icon: 'maintenance'
      }
    ],
    productTitle: 'Professional Padel Court Systems',
    productDescription: 'Our padel court products include tempered glass walls, metal mesh panels, and premium synthetic grass, ensuring you receive the best in the industry. Our solutions provide players with world-class playing facilities.',
    productImage: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&h=600&fit=crop',
    productFeatures: [
      {
        title: 'High-Performance Court Systems',
        description: 'Tempered safety glass walls and premium synthetic grass providing optimal playing conditions.'
      },
      {
        title: 'Durability and Longevity',
        description: 'High-quality materials ensuring years of safe and consistent performance.'
      },
      {
        title: 'Safe and Comfortable',
        description: 'Safety glass and shock-absorbing turf reduce injury risk.'
      },
      {
        title: 'Low Maintenance',
        description: 'Minimal upkeep required for glass walls and synthetic surfaces.'
      }
    ]
  },
  'squash-courts': {
    name: 'Squash Courts',
    tagline: 'designed for optimal performance, durability, and safety',
    heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&h=600&fit=crop',
    expertiseTitle: 'Squash Court Construction India',
    expertiseDescription: 'At ikon Sports, we deliver WSF-standard squash court solutions designed for optimal performance, durability, and safety. Whether for professional clubs or recreational facilities, our expertise ensures your court exceeds expectations. Using premium squash court materials including wall panels and hardwood flooring, we\'ve built numerous squash courts across India. Our commitment to quality has established us as a leader in squash court construction in India.',
    faqs: [
      {
        question: 'Why Invest in a Squash Court?',
        answer: 'Squash courts provide excellent recreational and competitive opportunities, require minimal space compared to other sports, and offer year-round indoor play. They add significant value to sports facilities.'
      },
      {
        question: 'Why Choose Professional Squash Court Construction?',
        answer: 'Professional squash courts require precise wall construction for consistent ball rebound, proper flooring for player movement, and acoustic treatment. Quality construction ensures optimal playing conditions.'
      },
      {
        question: 'What Dimensions Do You Need?',
        answer: 'A standard squash court is 9.75 meters long, 6.4 meters wide, and 5.64 meters high. Precise dimensions are crucial for proper gameplay according to WSF standards.'
      }
    ],
    services: [
      {
        title: 'Design & Consultation',
        description: 'Custom layouts optimized for your site and usage needs.',
        icon: 'design'
      },
      {
        title: 'Construction & Preparation',
        description: 'Structural construction and preparation for court installation.',
        icon: 'earthwork'
      },
      {
        title: 'Wall & Floor Installation',
        description: 'Professional installation of wall panels and hardwood flooring.',
        icon: 'turf'
      },
      {
        title: 'WSF Certification Assistance',
        description: 'Support in obtaining WSF certification for your court.',
        icon: 'certification'
      },
      {
        title: 'Post-Installation Maintenance',
        description: 'Maintenance packages to keep your court performing at its best.',
        icon: 'maintenance'
      }
    ],
    productTitle: 'Professional Squash Court Systems',
    productDescription: 'Our squash court products include high-quality wall panels, hardwood flooring, and glass back walls, ensuring you receive the best in the industry. Our solutions provide players with world-class playing facilities that meet WSF standards.',
    productImage: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800&h=600&fit=crop',
    productFeatures: [
      {
        title: 'High-Performance Wall Systems',
        description: 'Precision-engineered wall panels providing consistent ball rebound characteristics.'
      },
      {
        title: 'Durability and Longevity',
        description: 'Premium materials ensuring years of consistent performance.'
      },
      {
        title: 'Professional Flooring',
        description: 'Hardwood flooring providing excellent grip and shock absorption.'
      },
      {
        title: 'Acoustic Treatment',
        description: 'Sound-dampening materials for optimal playing environment.'
      }
    ]
  },
  'athletic-tracks': {
    name: 'Athletic Tracks',
    tagline: 'designed for optimal performance, durability, and safety',
    heroImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600&h=600&fit=crop',
    expertiseTitle: 'Athletic Track Construction India',
    expertiseDescription: 'At ikon Sports, we deliver World Athletics certified running track solutions designed for optimal performance, durability, and safety. Whether for schools, universities, or sports complexes, our expertise ensures your track exceeds expectations. Using cutting-edge polyurethane and rubber surfaces, we\'ve built numerous athletic tracks across India. Our commitment to quality has established us as a leader in athletic track construction in India.',
    faqs: [
      {
        question: 'Why Invest in an Athletic Track?',
        answer: 'Athletic tracks provide professional training facilities for runners, enable hosting of athletics events, and offer all-weather performance. They add significant value to educational and sports institutions.'
      },
      {
        question: 'Why Choose Synthetic Athletic Tracks?',
        answer: 'Synthetic athletic tracks offer consistent performance in all weather conditions, excellent shock absorption, durability, and require minimal maintenance compared to traditional surfaces.'
      },
      {
        question: 'What Dimensions Do You Need?',
        answer: 'A standard outdoor athletic track is 400 meters in length with 6-8 lanes. Each lane is 1.22 meters wide. We can customize track configurations based on available space and requirements.'
      }
    ],
    services: [
      {
        title: 'Design & Consultation',
        description: 'Custom layouts optimized for your site and usage needs.',
        icon: 'design'
      },
      {
        title: 'Earthworks & Preparation',
        description: 'Ground leveling, drainage installation, and base preparation for durability.',
        icon: 'earthwork'
      },
      {
        title: 'Track Installation',
        description: 'Professional installation of polyurethane or rubber track surfaces.',
        icon: 'turf'
      },
      {
        title: 'World Athletics Certification',
        description: 'Support in obtaining World Athletics certification for your track.',
        icon: 'certification'
      },
      {
        title: 'Post-Installation Maintenance',
        description: 'Maintenance packages to keep your track performing at its best.',
        icon: 'maintenance'
      }
    ],
    productTitle: 'Professional Athletic Track Surfaces',
    productDescription: 'Our athletic track products are trusted by schools, universities, and sports complexes, ensuring you receive the best in the industry. Our solutions provide athletes with world-class running surfaces that meet World Athletics standards.',
    productImage: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800&h=600&fit=crop',
    productFeatures: [
      {
        title: 'High-Performance Surface Systems',
        description: 'Advanced polyurethane and rubber surfaces providing superior traction and energy return.'
      },
      {
        title: 'Durability and Longevity',
        description: 'UV-stabilized materials ensuring years of consistent performance in all weather conditions.'
      },
      {
        title: 'Safe and Comfortable',
        description: 'Excellent shock absorption reducing injury risk and athlete fatigue.'
      },
      {
        title: 'Low Maintenance',
        description: 'Minimal upkeep required while maintaining world-class performance.'
      }
    ]
  },
  'swimming-pools': {
    name: 'Swimming Pools',
    tagline: 'designed for optimal performance, durability, and safety',
    heroImage: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=1600&h=600&fit=crop',
    expertiseTitle: 'Swimming Pool Construction India',
    expertiseDescription: 'At ikon Sports, we deliver Olympic-standard swimming pool solutions designed for optimal performance, durability, and safety. Whether for professional clubs, schools, or recreational facilities, our expertise ensures your pool exceeds expectations. Using advanced filtration, water treatment, and construction technologies, we\'ve built numerous swimming pools across India. Our commitment to quality has established us as a leader in swimming pool construction in India.',
    faqs: [
      {
        question: 'Why Invest in a Swimming Pool?',
        answer: 'Swimming pools provide excellent recreational and competitive opportunities, promote health and fitness, and add significant value to properties and institutions. They can be used year-round with proper heating.'
      },
      {
        question: 'Why Choose Professional Pool Construction?',
        answer: 'Professional pool construction ensures proper structural integrity, efficient filtration systems, water treatment, and safety features. Quality construction provides decades of reliable service.'
      },
      {
        question: 'What Dimensions Do You Need?',
        answer: 'Olympic swimming pools are 50 meters long and 25 meters wide with a minimum depth of 2 meters. Semi-Olympic pools are 25m x 12.5m. We can customize dimensions based on your requirements and available space.'
      }
    ],
    services: [
      {
        title: 'Design & Consultation',
        description: 'Custom designs optimized for your site and usage needs.',
        icon: 'design'
      },
      {
        title: 'Excavation & Construction',
        description: 'Professional excavation and structural construction.',
        icon: 'earthwork'
      },
      {
        title: 'Systems Installation',
        description: 'Professional installation of filtration, circulation, and treatment systems.',
        icon: 'turf'
      },
      {
        title: 'Certification Assistance',
        description: 'Support in meeting swimming federation standards.',
        icon: 'certification'
      },
      {
        title: 'Maintenance Services',
        description: 'Comprehensive maintenance packages for optimal pool operation.',
        icon: 'maintenance'
      }
    ],
    productTitle: 'Professional Swimming Pool Systems',
    productDescription: 'Our swimming pool products include advanced filtration systems, automated water treatment, energy-efficient heating, and safety features, ensuring you receive the best in the industry. Our solutions provide swimmers with world-class facilities.',
    productImage: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop',
    productFeatures: [
      {
        title: 'Advanced Filtration Systems',
        description: 'State-of-the-art filtration ensuring crystal-clear water quality.'
      },
      {
        title: 'Durable Construction',
        description: 'High-quality materials and construction methods ensuring decades of service.'
      },
      {
        title: 'Energy-Efficient Systems',
        description: 'Modern heating and circulation systems minimizing operational costs.'
      },
      {
        title: 'Safety Features',
        description: 'Comprehensive safety features including non-slip surfaces and emergency systems.'
      }
    ]
  }
};

const servicesList = [
  { name: 'Cricket Turf', id: 'cricket-turf' },
  { name: 'Basketball Courts', id: 'basketball-courts' },
  { name: 'Tennis Courts', id: 'tennis-courts' },
  { name: 'Football Turf', id: 'football-turf' },
  { name: 'Badminton Courts', id: 'badminton-courts' },
  { name: 'Pickleball Courts', id: 'pickleball-courts' }
];

// --- HELPER COMPONENTS ---
function ServiceIcon({ type }: { type: string }) {
  const icons: any = {
    design: <LayoutGrid className="w-12 h-12 text-[#C8D653]" />,
    turf: <Activity className="w-12 h-12 text-[#C8D653]" />,
    maintenance: <ClipboardCheck className="w-12 h-12 text-[#C8D653]" />,
    certification: <Shield className="w-12 h-12 text-[#C8D653]" />
  };
  return icons[type] || <Construction className="w-12 h-12 text-[#C8D653]" />;
}

function Accordion({ title, children, defaultOpen = false }: { title: string; children: any; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className={`border rounded-sm mb-4 transition-all ${isOpen ? 'border-[#335495] shadow-md' : 'border-gray-100'}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-5 text-left transition-colors">
        <span className={`text-base font-black uppercase tracking-tight ${isOpen ? 'text-[#335495]' : 'text-gray-700'}`}>{title}</span>
        <div className={`transition-all ${isOpen ? 'text-[#C8D653]' : 'text-gray-300'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      {isOpen && <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">{children}</div>}
    </div>
  );
}

// --- MAIN PAGE COMPONENT ---
export default function SportPage({ params }: { params: any }) {
  // UNWRAP THE URL ID
  const { id }:any = React.use(params);
  const sport = sportsData[id];
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  if (!sport) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-[#335495]">
        <h1 className="text-4xl font-black">404: NOT FOUND</h1>
        <p className="mt-2 text-gray-500">The sport "{id}" is not in our service catalog.</p>
        <a href="/" className="mt-6 bg-[#335495] text-white px-6 py-2 rounded-full uppercase font-bold text-xs">Back Home</a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-left">
      {/* --- HEADER (Centered Logo + Sub Dropdown) --- */}
     <Header />

      {/* --- HERO --- */}
      <div className="relative h-[55vh] flex items-center justify-center">
        <img src={sport.heroImage} alt={sport.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#335495]/50 backdrop-blur-[1px]"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-4">{sport.name}</h1>
          <div className="h-2 w-24 bg-[#C8D653] mx-auto mb-6"></div>
          <p className="text-lg md:text-xl font-bold uppercase tracking-widest opacity-90">{sport.tagline}</p>
        </div>
      </div>

      {/* --- EXPERTISE SECTION --- */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-1 bg-[#C8D653]"></div>
            <span className="text-[#C8D653] font-bold uppercase tracking-[0.3em] text-xs">Technical Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#335495] uppercase mb-8">{sport.expertiseTitle}</h2>
          <p className="text-gray-600 leading-relaxed text-base mb-10">{sport.expertiseDescription}</p>
          <div className="space-y-1">
            {sport.faqs.map((faq: any, index: number) => (
              <Accordion key={index} title={faq.question}>{faq.answer}</Accordion>
            ))}
          </div>
        </div>
        <div className="bg-gray-50 p-8 border-l-4 border-[#335495] h-fit">
          <h3 className="text-[#335495] font-black uppercase text-sm mb-6 tracking-widest">Why IKON Sports?</h3>
          <ul className="space-y-4 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            <li className="flex gap-3 items-center"><Shield size={16} className="text-[#C8D653]" /> Pan-India Execution</li>
            <li className="flex gap-3 items-center"><Target size={16} className="text-[#C8D653]" /> Turnkey Solutions</li>
            <li className="flex gap-3 items-center"><HardHat size={16} className="text-[#C8D653]" /> International Safety Standards</li>
          </ul>
        </div>
      </div>

      {/* --- SERVICES GRID --- */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#335495] uppercase mb-4">What We Do</h2>
            <div className="h-1.5 w-20 bg-[#C8D653] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sport.services.map((service: any, index: number) => (
              <div key={index} className="bg-white p-10 border-b-4 border-transparent hover:border-[#C8D653] transition-all group shadow-sm">
                <ServiceIcon type={service.icon} />
                <h3 className="text-[#335495] font-black uppercase text-sm mt-6 mb-3 tracking-widest">{service.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- PRODUCT & CTA --- */}
      <div className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-1 bg-[#C8D653]"></div>
              <span className="text-[#C8D653] font-bold uppercase tracking-[0.3em] text-xs">Premium Quality</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#335495] uppercase leading-none mb-8">{sport.productTitle}</h2>
            <p className="text-gray-600 leading-relaxed mb-10">{sport.productDescription}</p>
            {sport.productFeatures.map((f: any, i: number) => (
              <Accordion key={i} title={f.title} defaultOpen={i === 0}>{f.description}</Accordion>
            ))}
          </div>
          <div className="relative group">
            <div className="absolute -top-4 -right-4 w-32 h-32 border-t-4 border-r-4 border-[#C8D653] -z-10 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2"></div>
            <img src={sport.productImage} alt="Product Detail" className="w-full h-[500px] object-cover rounded-sm shadow-2xl transition-all" />
          </div>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="bg-[#1a1a1a] text-white py-12 border-t-4 border-[#C8D653] text-center">
        <p className="text-[#C8D653] font-black uppercase tracking-[0.3em] mb-2">IKON Sports</p>
        <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">India’s No. 1 Sports Infrastructure Company. © 2025</p>
      </footer>
    </div>
  );
}