import React from 'react';
import { PageId } from '../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: PageId) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#191A18] pt-32 pb-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto space-y-20">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B99A65] font-semibold">
            About Jemis Interior
          </span>
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight">
            INTERIORS MADE TO FEEL LIKE HOME.
          </h1>
          <p className="text-base text-[#8A8176] leading-relaxed pt-2">
            Located in Jos, Plateau State, Nigeria, JEMIS INTERIOR is dedicated to bringing furniture and interior inspiration together for homes and professional spaces.
          </p>
        </div>

        {/* Hero image showcase */}
        <div className="aspect-[16/9] w-full bg-[#D9D0C4] overflow-hidden">
          <img
            src="/src/assets/images/hero_complete_interior_1792945865493.jpg"
            alt="Jemis Interior Studio Space"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start pt-6">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-[#191A18]">Our Philosophy & Approach</h3>
            <p className="text-sm text-[#8A8176] leading-relaxed">
              At JEMIS INTERIOR, we believe that every room should reflect the character and lifestyle of its inhabitants. Our design approach balances aesthetic harmony with everyday practicality, ensuring that your living spaces are both visually captivating and comfortable.
            </p>
            <p className="text-sm text-[#8A8176] leading-relaxed">
              Whether you are furnishing a new residence, upgrading your living room seating, or designing a custom fitted kitchen, we work closely with you to realize your vision.
            </p>
          </div>

          <div className="bg-white p-8 border border-[#D9D0C4] space-y-6 shadow-sm">
            <h4 className="text-lg font-serif text-[#191A18]">Core Focus Areas</h4>
            <ul className="space-y-4 text-sm text-[#8A8176]">
              {[
                'Thoughtfully curated furniture selection',
                'Custom fitted kitchens and cabinetry',
                'Harmonious interior spatial planning',
                'Meticulous attention to finishing details',
                'Personalized client consultations',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B99A65] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Studio Location & Consultation */}
        <div className="bg-[#191A18] text-[#F7F4EE] p-10 md:p-14 space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B99A65] font-semibold">
            Visit Us in Jos
          </span>
          <h3 className="text-2xl md:text-3xl font-serif">
            No. 23 Gwarandok, Jos, Plateau State
          </h3>
          <p className="text-sm text-[#D9D0C4] max-w-2xl leading-relaxed">
            We invite you to reach out or visit our location to discuss your upcoming interior project. Our team is ready to guide you through furniture options, styling ideas, and custom solutions.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => { onNavigate('contact'); window.scrollTo(0,0); }}
              className="bg-[#B99A65] text-[#191A18] hover:bg-[#a68856] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-colors"
            >
              Get in Touch
            </button>
            <button
              onClick={() => { onNavigate('services'); window.scrollTo(0,0); }}
              className="border border-white/30 hover:border-[#B99A65] text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-colors"
            >
              Explore Services
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
