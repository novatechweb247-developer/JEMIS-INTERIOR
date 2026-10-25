import React from 'react';
import { PageId } from '../types';
import { Phone, MapPin, MessageSquare } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#191A18] text-[#F7F4EE] pt-20 pb-12 px-6 md:px-16 border-t border-[#B99A65]/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
        
        {/* Col 1: Brand */}
        <div className="space-y-4 md:col-span-1">
          <h3 className="text-2xl font-serif tracking-widest text-[#F7F4EE]">
            JEMIS INTERIOR
          </h3>
          <p className="text-xs uppercase tracking-[0.2em] text-[#B99A65]">
            Furniture & Interior Solutions
          </p>
          <p className="text-sm text-[#D9D0C4] leading-relaxed pt-2">
            Bringing furniture and interior inspiration together to help customers in Jos and beyond create spaces that feel comfortable, functional, and refined.
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-[0.25em] text-[#B99A65] font-semibold">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm text-[#D9D0C4]">
            <li>
              <button onClick={() => { onNavigate('home'); window.scrollTo(0,0); }} className="hover:text-[#B99A65] transition-colors">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => { onNavigate('about'); window.scrollTo(0,0); }} className="hover:text-[#B99A65] transition-colors">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => { onNavigate('services'); window.scrollTo(0,0); }} className="hover:text-[#B99A65] transition-colors">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => { onNavigate('gallery'); window.scrollTo(0,0); }} className="hover:text-[#B99A65] transition-colors">
                Gallery
              </button>
            </li>
            <li>
              <button onClick={() => { onNavigate('contact'); window.scrollTo(0,0); }} className="hover:text-[#B99A65] transition-colors">
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Contact Info */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-[0.25em] text-[#B99A65] font-semibold">
            Contact & Location
          </h4>
          <div className="space-y-3 text-sm text-[#D9D0C4]">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#B99A65] shrink-0 mt-1" />
              <span>No. 23 Gwarandok, Jos 930251, Plateau State, Nigeria.</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#B99A65] shrink-0" />
              <a href="tel:+2348100549618" className="hover:text-[#B99A65] transition-colors">
                0810 054 9618
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MessageSquare className="w-4 h-4 text-[#B99A65] shrink-0" />
              <a href="https://wa.me/2348100549618" target="_blank" rel="noopener noreferrer" className="hover:text-[#B99A65] transition-colors">
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>

        {/* Col 4: Enquiries Note */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-[0.25em] text-[#B99A65] font-semibold">
            Client Enquiries
          </h4>
          <p className="text-sm text-[#D9D0C4] leading-relaxed">
            We welcome direct enquiries for custom furniture selection, fitted kitchens, and complete residential interior solutions.
          </p>
          <div className="pt-2">
            <button
              onClick={() => { onNavigate('contact'); window.scrollTo(0,0); }}
              className="text-xs uppercase tracking-wider text-[#191A18] bg-[#B99A65] hover:bg-[#a68856] px-4 py-2 font-semibold transition-colors block text-center"
            >
              Request Consultation
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#8A8176]">
        <div>
          © {new Date().getFullYear()} JEMIS INTERIOR. All rights reserved.
        </div>
        <div className="mt-4 md:mt-0 tracking-wider">
          Thoughtfully Designed · Beautifully Furnished in Jos, Nigeria
        </div>
      </div>
    </footer>
  );
};
