import React from 'react';
import { PageId, ServiceItem } from '../types';
import { ArrowRight, MessageSquare, Phone } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: PageId) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const services: ServiceItem[] = [
    {
      id: 'living-room',
      title: 'Living Room Furniture',
      category: 'Furniture Curation',
      description: 'Carefully curated living room suites, coffee tables, media consoles, and accent pieces designed to anchor your home with style and warmth.',
      image: '/src/assets/images/service_living_room_1792945866092.jpg',
      features: ['Sofa and seating coordination', 'Coffee & side tables', 'Entertainment consoles', 'Lighting & decor elements'],
    },
    {
      id: 'sofas-seating',
      title: 'Sofas and Seating',
      category: 'Custom Upholstery',
      description: 'Spacious sectionals, executive armchairs, and custom upholstered seating crafted for exceptional comfort and refined aesthetics.',
      image: '/src/assets/images/gallery_featured_1792945865520.jpg',
      features: ['Sectional sofas', 'Accent armchairs', 'Ottomans & benches', 'Custom fabric selection'],
    },
    {
      id: 'fitted-kitchens',
      title: 'Fitted Kitchens',
      category: 'Interior Architecture',
      description: 'Custom fitted kitchen cabinetry and functional layout solutions that balance seamless storage, smooth workflows, and beautiful finishes.',
      image: '/src/assets/images/service_kitchen_1792945866207.jpg',
      features: ['Custom cabinetry & islands', 'Integrated storage solutions', 'Countertop coordination', 'Optimized workspace layouts'],
    },
    {
      id: 'bedroom-furniture',
      title: 'Bedroom Furniture',
      category: 'Residential Solutions',
      description: 'Serene bedroom suites, custom wardrobes, upholstered headboards, and bedside tables designed for ultimate relaxation.',
      image: '/src/assets/images/service_bedroom_1792945877639.jpg',
      features: ['Bespoke bed frames', 'Custom wardrobes & closets', 'Bedside tables & lighting', 'Dressing units'],
    },
    {
      id: 'interior-furnishing',
      title: 'Interior Furnishing',
      category: 'Complete Styling',
      description: 'Comprehensive furnishing solutions that tie together textiles, lighting, rugs, and decorative accessories into a cohesive environment.',
      image: '/src/assets/images/hero_complete_interior_1792945865493.jpg',
      features: ['Textile & rug coordination', 'Curtain & drapery styling', 'Wall art & accessories', 'Ambient lighting setup'],
    },
    {
      id: 'space-styling',
      title: 'Space Styling',
      category: 'Design Consultations',
      description: 'Professional spatial guidance to help arrange furniture, optimize room flow, and refresh the atmosphere of any room in your home.',
      image: '/src/assets/images/hero_contemporary_living_1792945865424.jpg',
      features: ['Room layout optimization', 'Color palette consultation', 'Furniture placement advice', 'Atmosphere enhancement'],
    },
    {
      id: 'furniture-coordination',
      title: 'Furniture Selection & Coordination',
      category: 'Expert Curation',
      description: 'Guidance in selecting individual furniture items that match your existing décor, scale, and personal taste.',
      image: '/src/assets/images/gallery_dining_1792945877056.jpg',
      features: ['Style matching', 'Scale & proportion assessment', 'Material durability advice', 'Catalog & finish review'],
    },
    {
      id: 'residential-solutions',
      title: 'Residential Interior Solutions',
      category: 'Full Home Solutions',
      description: 'Holistic interior design and furnishing support for newly built or renovated homes across Jos and Plateau State.',
      image: '/src/assets/images/hero_fitted_kitchen_1792945865410.jpg',
      features: ['Whole-home furnishing plans', 'Multi-room coordination', 'Custom design consultations', 'Direct enquiry support'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#191A18] pt-32 pb-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B99A65] font-semibold">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight">
            Interior Solutions & Furniture Curation
          </h1>
          <p className="text-base text-[#8A8176] leading-relaxed">
            Explore our proposed service categories. Contact JEMIS INTERIOR to discuss your specific requirements and receive personalized assistance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-[#D9D0C4] overflow-hidden flex flex-col justify-between shadow-sm group hover:border-[#B99A65] transition-all"
            >
              <div>
                <div className="aspect-[16/9] overflow-hidden bg-[#D9D0C4]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <span className="text-xs uppercase tracking-widest text-[#B99A65] block font-semibold">
                    {service.category}
                  </span>
                  <h3 className="text-2xl font-serif text-[#191A18]">{service.title}</h3>
                  <p className="text-sm text-[#8A8176] leading-relaxed">
                    {service.description}
                  </p>
                  <div className="pt-2 border-t border-[#D9D0C4]/40">
                    <span className="text-xs uppercase tracking-widest text-[#191A18] font-semibold block mb-3">
                      Key Highlights:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#8A8176]">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B99A65]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0 flex items-center justify-between gap-4 border-t border-[#D9D0C4]/20 mt-4">
                <button
                  onClick={() => { onNavigate('contact'); window.scrollTo(0,0); }}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#191A18] hover:text-[#B99A65] transition-colors pt-6"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`https://wa.me/2348100549618?text=Hello%20Jemis%20Interior,%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider bg-[#191A18] text-[#F7F4EE] hover:bg-[#B99A65] hover:text-[#191A18] px-4 py-2 transition-colors mt-6"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="bg-[#191A18] text-[#F7F4EE] p-10 md:p-14 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B99A65] font-semibold block">
            Custom Consultation
          </span>
          <h2 className="text-3xl font-serif">Have a Unique Project in Mind?</h2>
          <p className="text-sm text-[#D9D0C4] max-w-xl mx-auto leading-relaxed">
            Every home and workspace is distinct. Contact us to discuss your vision, dimensions, and preferred styles directly with our team in Jos.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => { onNavigate('contact'); window.scrollTo(0,0); }}
              className="bg-[#B99A65] text-[#191A18] hover:bg-[#a68856] px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
            >
              Request Consultation
            </button>
            <a
              href="tel:+2348100549618"
              className="border border-white/30 hover:border-[#B99A65] text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#B99A65]" />
              <span>Call 0810 054 9618</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
