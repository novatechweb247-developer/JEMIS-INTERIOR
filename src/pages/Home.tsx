import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { ChevronLeft, ChevronRight, ArrowRight, Phone, MessageSquare, MapPin, CheckCircle2 } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: 'FURNITURE THAT DEFINES YOUR SPACE.',
      subtitle: 'Contemporary Living Collection',
      description: 'Discover furniture and interior ideas that bring comfort, character, and elegance into everyday living.',
      ctaText: 'EXPLORE OUR SERVICES',
      ctaTarget: 'services',
      image: '/src/assets/images/hero_contemporary_living_1792945865424.jpg',
    },
    {
      title: 'DESIGNED AROUND THE WAY YOU LIVE.',
      subtitle: 'Fitted Kitchens & Interiors',
      description: 'Explore contemporary interior solutions that balance thoughtful design, practical function, and beautiful finishing details.',
      ctaText: 'VIEW OUR WORK',
      ctaTarget: 'gallery',
      image: '/src/assets/images/hero_fitted_kitchen_1792945865410.jpg',
    },
    {
      title: 'MAKE EVERY DETAIL COUNT.',
      subtitle: 'Complete Interior Spaces',
      description: 'Create an interior that feels cohesive, welcoming, and unmistakably yours with JEMIS INTERIOR.',
      ctaText: 'DISCUSS YOUR PROJECT',
      ctaTarget: 'contact',
      image: '/src/assets/images/hero_complete_interior_1792945865493.jpg',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#191A18]">
      
      {/* 1. THREE-SLIDE PREMIUM HERO */}
      <section className="relative h-screen w-full overflow-hidden bg-[#191A18]">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Scrim */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover scale-105 animate-subtle-zoom"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center px-6 md:px-16 lg:px-24">
              <div className="max-w-3xl space-y-6 text-[#F7F4EE]">
                <span className="text-xs uppercase tracking-[0.3em] text-[#B99A65] font-semibold block animate-fade-in">
                  {slide.subtitle}
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-balance leading-tight">
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg text-[#D9D0C4] max-w-xl font-light leading-relaxed">
                  {slide.description}
                </p>
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => { onNavigate(slide.ctaTarget as PageId); window.scrollTo(0,0); }}
                    className="bg-[#B99A65] text-[#191A18] hover:bg-[#a68856] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all flex items-center gap-3 group"
                  >
                    <span>{slide.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => { onNavigate('contact'); window.scrollTo(0,0); }}
                    className="border border-[#F7F4EE]/40 hover:border-[#B99A65] text-[#F7F4EE] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all"
                  >
                    Contact Jemis
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Hero Controls */}
        <div className="absolute bottom-10 left-6 md:left-16 lg:left-24 z-20 flex items-center gap-6">
          <div className="flex items-center gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 transition-all rounded-full ${
                  idx === currentSlide ? 'w-10 bg-[#B99A65]' : 'w-3 bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 ml-4">
            <button
              onClick={handlePrevSlide}
              className="p-3 bg-black/40 hover:bg-[#B99A65] hover:text-[#191A18] text-white transition-colors border border-white/10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextSlide}
              className="p-3 bg-black/40 hover:bg-[#B99A65] hover:text-[#191A18] text-white transition-colors border border-white/10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. BRAND INTRODUCTION */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B99A65] font-semibold">
              Established in Jos
            </span>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-[#191A18] leading-tight">
              THOUGHTFULLY DESIGNED. BEAUTIFULLY FURNISHED.
            </h2>
            <p className="text-base text-[#8A8176] leading-relaxed">
              JEMIS INTERIOR brings furniture and interior inspiration together to help customers create spaces that feel comfortable, functional, and refined. Located in the heart of Jos, Plateau State, we pride ourselves on exceptional curation, quality craftsmanship, and meticulous attention to every detail of your home or office.
            </p>
            <div className="pt-4">
              <button
                onClick={() => { onNavigate('about'); window.scrollTo(0,0); }}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#191A18] hover:text-[#B99A65] transition-colors border-b border-[#191A18] hover:border-[#B99A65] pb-1"
              >
                <span>Discover Jemis Interior</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-[#D9D0C4] overflow-hidden">
              <img
                src="/src/assets/images/service_living_room_1792945866092.jpg"
                alt="Jemisi Interior Living Space"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#191A18] text-[#F7F4EE] p-8 hidden md:block max-w-xs shadow-xl">
              <p className="font-serif text-lg mb-2">No. 23 Gwarandok, Jos</p>
              <p className="text-xs text-[#D9D0C4] tracking-wider">Visit our studio or reach out via phone & WhatsApp for personal consultations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICE CATEGORIES */}
      <section className="bg-[#191A18] text-[#F7F4EE] py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs uppercase tracking-[0.3em] text-[#B99A65] font-semibold">
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight">
                Crafted For Living & Working
              </h2>
            </div>
            <div>
              <button
                onClick={() => { onNavigate('services'); window.scrollTo(0,0); }}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B99A65] hover:text-white transition-colors"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Living Room & Seating',
                desc: 'Sofas, sectionals, and accent seating built for comfort, elegance, and durability.',
                image: '/src/assets/images/service_living_room_1792945866092.jpg',
              },
              {
                title: 'Fitted Kitchens',
                desc: 'Custom cabinetry, integrated appliances, and clean functional kitchen layouts.',
                image: '/src/assets/images/service_kitchen_1792945866207.jpg',
              },
              {
                title: 'Bedroom & Interiors',
                desc: 'Serene bedroom suites, custom wardrobes, and harmonious spatial styling.',
                image: '/src/assets/images/service_bedroom_1792945877639.jpg',
              },
            ].map((srv, idx) => (
              <div
                key={idx}
                onClick={() => { onNavigate('services'); window.scrollTo(0,0); }}
                className="group cursor-pointer bg-white/5 border border-white/10 hover:border-[#B99A65] transition-all p-6 space-y-6"
              >
                <div className="aspect-[4/3] overflow-hidden bg-black/40">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-serif">{srv.title}</h3>
                  <p className="text-sm text-[#D9D0C4] font-light leading-relaxed">{srv.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B99A65]">
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE JEMIS INTERIOR */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B99A65] font-semibold">
            Our Commitment
          </span>
          <h2 className="text-3xl md:text-4xl font-serif">
            Why Choose JEMIS INTERIOR
          </h2>
          <p className="text-sm text-[#8A8176]">
            Dedicated to bringing uncompromising quality and personal attention to every client in Jos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Personalized Consultation',
              desc: 'We listen closely to your preferences, spatial requirements, and lifestyle to propose tailored interior solutions.',
            },
            {
              title: 'Exceptional Craftsmanship',
              desc: 'Every piece of furniture and interior finish is selected or crafted with strict adherence to quality and durability.',
            },
            {
              title: 'Jos Local Expertise',
              desc: 'Conveniently situated at No. 23 Gwarandok, Jos, offering responsive local service, delivery coordination, and support.',
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 border border-[#D9D0C4] space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#191A18] text-[#B99A65] flex items-center justify-center font-serif text-lg">
                0{i + 1}
              </div>
              <h3 className="text-xl font-serif text-[#191A18]">{item.title}</h3>
              <p className="text-sm text-[#8A8176] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SELECTED PROJECT GALLERY PREVIEW */}
      <section className="bg-[#D9D0C4]/30 py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs uppercase tracking-[0.3em] text-[#B99A65] font-semibold">
                Visual Showcase
              </span>
              <h2 className="text-3xl md:text-4xl font-serif">
                Selected Spaces & Furniture
              </h2>
            </div>
            <div>
              <button
                onClick={() => { onNavigate('gallery'); window.scrollTo(0,0); }}
                className="bg-[#191A18] text-[#F7F4EE] hover:bg-[#B99A65] hover:text-[#191A18] px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
              >
                View Full Gallery
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Living Room Suite', cat: 'Living Rooms', img: '/src/assets/images/gallery_featured_1792945865520.jpg' },
              { title: 'Master Bedroom Wardrobe', cat: 'Bedroom Interiors', img: '/src/assets/images/gallery_bedroom_1792945876818.jpg' },
              { title: 'Dining & Chandelier', cat: 'Completed Spaces', img: '/src/assets/images/gallery_dining_1792945877056.jpg' },
            ].map((item, idx) => (
              <div
                key={idx}
                onClick={() => { onNavigate('gallery'); window.scrollTo(0,0); }}
                className="group cursor-pointer bg-white overflow-hidden border border-[#D9D0C4]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-black/10">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 space-y-1">
                  <span className="text-xs uppercase tracking-widest text-[#B99A65] block">
                    {item.cat}
                  </span>
                  <h3 className="text-lg font-serif text-[#191A18]">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONSULTATION CTA & LOCATION PREVIEW */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="bg-[#191A18] text-[#F7F4EE] p-10 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B99A65] font-semibold">
              Let's Connect
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-balance">
              LET'S CREATE A SPACE YOU'LL LOVE.
            </h2>
            <p className="text-sm text-[#D9D0C4] leading-relaxed">
              Planning a new interior or looking for furniture inspiration? Contact JEMIS INTERIOR to discuss your needs and ideas with our team in Jos.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => { onNavigate('contact'); window.scrollTo(0,0); }}
                className="bg-[#B99A65] text-[#191A18] hover:bg-[#a68856] px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
              >
                DISCUSS YOUR PROJECT
              </button>
              <a
                href="tel:+2348100549618"
                className="border border-white/30 hover:border-[#B99A65] text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#B99A65]" />
                <span>CALL 0810 054 9618</span>
              </a>
            </div>
          </div>

          <div className="bg-white/5 p-8 border border-white/10 space-y-6">
            <h3 className="text-xl font-serif text-[#F7F4EE]">Visit Jemis Interior</h3>
            <div className="space-y-4 text-sm text-[#D9D0C4]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B99A65] shrink-0 mt-0.5" />
                <span>No. 23 Gwarandok, Jos 930251, Plateau State, Nigeria.</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#B99A65] shrink-0" />
                <a href="tel:+2348100549618" className="hover:text-[#B99A65] transition-colors">
                  0810 054 9618
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-[#B99A65] shrink-0" />
                <a href="https://wa.me/2348100549618" target="_blank" rel="noopener noreferrer" className="hover:text-[#B99A65] transition-colors">
                  WhatsApp Instant Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
