'use client';

import React, { useState } from 'react';
import { 
  Plus, Minus, Target, Shield, HardHat, ClipboardCheck, 
  ArrowRight, CheckCircle2, MapPin, Phone
} from 'lucide-react';
import Header from '@/component/Header';
import Footer from '@/component/Footer';

// Enhanced data structure with Gallery support
const sportsData: any = {
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
    expertiseDescription: 'At ikon Sports, we deliver FIFA-standard football turf solutions designed for optimal playability, durability, and safety. Whether for professional clubs, schools, or recreational grounds, our expertise ensures your pitch exceeds expectations. Using cutting-edge artificial football turf from , we\'ve built 7 FIFA-quality football fields and 50+ football turfs that are reshaping how the game is played. Our commitment to quality has established us as a leader in football turf in India, helping players at every level enjoy the best playing surfaces available.',
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
    productTitle: ' Artificial Football Turf',
    productDescription: ' products are trusted by professional clubs, schools, and recreational facilities globally, ensuring you receive the best in the industry. Our artificial football turf solutions are transforming the landscape of football in India, providing players with the best surfaces available. As an official partner of , a world leader in artificial turf technology, we deliver top-quality materials for your football field.',
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

// --- SUB-COMPONENTS ---

function Accordion({ title, children, defaultOpen = false }: { title: string; children: any; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className={`border-b border-gray-100 transition-all ${isOpen ? 'bg-gray-50/50' : ''}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between py-6 text-left group">
        <span className={`text-lg font-bold tracking-tight transition-colors ${isOpen ? 'text-[#335495]' : 'text-gray-900 group-hover:text-[#335495]'}`}>{title}</span>
        <div className={`p-1 rounded-full transition-all ${isOpen ? 'bg-[#335495] text-white' : 'bg-gray-100 text-gray-400'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 leading-relaxed max-w-2xl">{children}</p>
      </div>
    </div>
  );
}

export default function SportPage({ params }: { params: any }) {
  const { id }: any = React.use(params);
  const sport = sportsData[id] || sportsData['cricket-turf']; // Fallback for demo

  return (
    <div className="min-h-screen bg-white font-sans text-left selection:bg-[#C8D653] selection:text-[#335495]">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] lg:h-[90vh] flex items-end overflow-hidden">
        <img src={sport.heroImage} alt={sport.name} className="absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#335495]/40 to-transparent"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 lg:pb-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
                <span className="bg-[#C8D653] text-[#335495] px-3 py-1 text-xs font-black uppercase tracking-widest">ISO 9001 Certified</span>
                <div className="h-[1px] w-12 bg-white/50"></div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
                {sport.name.split(' ')[0]} <br/> 
                <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>{sport.name.split(' ')[1]}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-medium max-w-xl mb-10 border-l-4 border-[#C8D653] pl-6 uppercase tracking-wide">
                {sport.tagline}
            </p>
          </div>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 border-t border-white/20 pt-8">
             <div>
                <p className="text-[#C8D653] text-3xl font-black">{sport.stats?.completed || '500+'}</p>
                <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest mt-1">Projects Finished</p>
             </div>
             <div>
                <p className="text-[#C8D653] text-3xl font-black">{sport.stats?.experience || '10+ Yrs'}</p>
                <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest mt-1">Industry Mastery</p>
             </div>
             <div className="hidden md:block">
                <p className="text-[#C8D653] text-3xl font-black">24/7</p>
                <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest mt-1">Support Ready</p>
             </div>
             <a href="https://wa.me/917737022715?text=Hello%20IKON%20Sports%2C%20I%20am%20interested%20in%20building%20a%20sports%20court." 
      target="_blank"  className="bg-[#C8D653] hover:bg-white text-[#335495] transition-colors flex items-center justify-center gap-2 font-black uppercase text-xs p-4">
                Enquire Now <ArrowRight size={16} />
             </a>
          </div>
        </div>
      </section>

      {/* --- EXPERTISE SECTION --- */}
      <section className="py-20 lg:py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-4xl lg:text-6xl font-black text-[#335495] uppercase leading-tight mb-8">
                {sport.expertiseTitle}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
                {sport.expertiseDescription}
            </p>
            
            <div className="space-y-2">
              <h4 className="text-[#335495] font-black uppercase text-xs tracking-[0.2em] mb-6">Frequently Asked Questions</h4>
              {sport.faqs.map((faq: any, index: number) => (
                <Accordion key={index} title={faq.question}>{faq.answer}</Accordion>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 sticky top-24">
            <div className="relative p-8 bg-[#335495] text-white">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#C8D653] flex items-center justify-center text-[#335495] font-black text-center leading-none transform rotate-12">
                    ESTD <br/> 2010
                </div>
                <h3 className="text-2xl font-black uppercase mb-8 pr-12">Why IKON is India's Choice</h3>
                <ul className="space-y-6">
                    {[
                        { icon: <Shield size={20}/>, t: "International Standards", d: "Materials sourced from FIFA & ICC preferred suppliers." },
                        { icon: <Target size={20}/>, t: "Turnkey Execution", d: "From excavation to floodlighting, we handle it all." },
                        { icon: <MapPin size={20}/>, t: "Pan-India Presence", d: "Active sites in 22+ states across the country." }
                    ].map((item, i) => (
                        <li key={i} className="flex gap-4">
                            <div className="text-[#C8D653] shrink-0">{item.icon}</div>
                            <div>
                                <p className="font-bold uppercase text-sm tracking-wide">{item.t}</p>
                                <p className="text-white/60 text-sm mt-1">{item.d}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="mt-10 pt-10 border-t border-white/10">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Official Partners</p>
                    <div className="flex gap-6 grayscale opacity-50 contrast-125">
                        <span className="font-black text-xl italic"></span>
                      
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

    {/* --- MINIMAL SERVICES SECTION --- */}
<section className="bg-white py-16 border-y border-gray-100">
  <div className="max-w-7xl mx-auto px-6">
    {/* Simple Title */}
    <div className="mb-12">
      <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#C8D653] mb-2">Technical Services</h2>
      <div className="h-[1px] w-12 bg-[#335495]"></div>
    </div>

    {/* Clean, Minimal Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-12">
      {sport.services.map((service: any, index: number) => (
        <div key={index} className="relative group">
          {/* Subtle Accent Line */}
          <div className="w-6 h-[2px] bg-gray-100 group-hover:bg-[#C8D653] transition-colors mb-6"></div>
          
          {/* Title */}
          <h3 className="text-lg font-black text-[#335495] uppercase tracking-tight mb-3">
            {service.title}
          </h3>
          
          {/* Short Description */}
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* --- GALLERY SECTION --- */}
      {sport.gallery && (
        <section className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <h3 className="text-[#335495] font-black uppercase tracking-widest text-sm">Recent Projects</h3>
            </div>
            <div className="flex gap-6 overflow-x-auto px-6 pb-12 snap-x no-scrollbar">
                {sport.gallery.map((img: string, i: number) => (
                    <div key={i} className="min-w-[300px] md:min-w-[600px] h-[400px] snap-center">
                        <img src={img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Work" />
                    </div>
                ))}
            </div>
        </section>
      )}

      {/* --- PRODUCT SHOWCASE --- */}
      <section className="py-24 bg-[#1a1a1a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-[200px] font-black text-white/5 leading-none select-none">PRO</div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-1 bg-[#C8D653]"></div>
              <span className="text-[#C8D653] font-bold uppercase tracking-[0.3em] text-xs">Surface Technology</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black uppercase leading-[0.9] mb-8">{sport.productTitle}</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-12">{sport.productDescription}</p>
            
            <div className="space-y-4">
              {sport.productFeatures.map((f: any, i: number) => (
                <div key={i} className="bg-white/5 p-6 border-l-2 border-[#C8D653] hover:bg-white/10 transition-colors">
                    <h4 className="font-black uppercase text-[#C8D653] mb-2">{f.title}</h4>
                    <p className="text-white/60 text-sm">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 border-2 border-[#C8D653] translate-x-6 translate-y-6 -z-0"></div>
            <img src={sport.productImage} alt="Product Detail" className="relative z-10 w-full lg:h-[600px] h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
     <Footer />

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-6 right-6 lg:hidden z-50">
        <button className="bg-[#C8D653] text-[#335495] w-14 h-14 rounded-full shadow-2xl flex items-center justify-center animate-bounce">
            <Phone size={24} />
        </button>
      </div>
      
      <style jsx global>{`
        @keyframes slow-zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
            animation: slow-zoom 20s infinite alternate ease-in-out;
        }
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .stroke-white {
            -webkit-text-stroke: 1px rgba(255,255,255,0.8);
        }
      `}</style>
    </div>
  );
}