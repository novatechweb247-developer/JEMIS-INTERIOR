import React, { useState } from 'react';
import { GalleryItem, PageId } from '../types';
import { X, ZoomIn, ArrowRight } from 'lucide-react';

interface GalleryProps {
  onNavigate: (page: PageId) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'Living Rooms',
    'Sofas and Seating',
    'Kitchens',
    'Bedroom Interiors',
    'Furniture Details',
    'Completed Spaces',
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Contemporary Living Room Suite',
      category: 'Living Rooms',
      image: '/src/assets/images/hero_contemporary_living_1792945865424.jpg',
      description: 'A sophisticated contemporary living room featuring a spacious sectional sofa and coordinated furnishings.',
    },
    {
      id: '2',
      title: 'Modern Fitted Kitchen Design',
      category: 'Kitchens',
      image: '/src/assets/images/hero_fitted_kitchen_1792945865410.jpg',
      description: 'Clean cabinetry, refined quartz surfaces, and integrated under-cabinet lighting.',
    },
    {
      id: '3',
      title: 'Luxury Interior Space',
      category: 'Completed Spaces',
      image: '/src/assets/images/hero_complete_interior_1792945865493.jpg',
      description: 'Coordinated furniture, deep charcoal accents, and warm ivory tones.',
    },
    {
      id: '4',
      title: 'Plush Sofa & Accent Seating',
      category: 'Sofas and Seating',
      image: '/src/assets/images/service_living_room_1792945866092.jpg',
      description: 'Warm stone toned interior with comfortable upholstered seating.',
    },
    {
      id: '5',
      title: 'Custom Fitted Kitchen Island',
      category: 'Kitchens',
      image: '/src/assets/images/service_kitchen_1792945866207.jpg',
      description: 'Sleek dark cabinetry paired with natural warm wood accents.',
    },
    {
      id: '6',
      title: 'Upholstered Master Bed Suite',
      category: 'Bedroom Interiors',
      image: '/src/assets/images/service_bedroom_1792945877639.jpg',
      description: 'Bespoke headboard with warm bedside lighting and neutral linens.',
    },
    {
      id: '7',
      title: 'Showcase Living Room Arrangement',
      category: 'Living Rooms',
      image: '/src/assets/images/gallery_featured_1792945865520.jpg',
      description: 'Rich velvet sofa and artisanal wooden coffee table styling.',
    },
    {
      id: '8',
      title: 'Modern Bedroom Wardrobe Suite',
      category: 'Bedroom Interiors',
      image: '/src/assets/images/gallery_bedroom_1792945876818.jpg',
      description: 'Custom wooden cabinetry and integrated wardrobe lighting.',
    },
    {
      id: '9',
      title: 'Dining Room Chandelier Setup',
      category: 'Completed Spaces',
      image: '/src/assets/images/gallery_dining_1792945877056.jpg',
      description: 'Solid wood dining table with coordinated upholstered chairs.',
    },
    {
      id: '10',
      title: 'Fine Furniture Woodwork Detail',
      category: 'Furniture Details',
      image: '/src/assets/images/gallery_details_1792945877632.jpg',
      description: 'Meticulous joinery, textured upholstery fabric, and champagne gold trim hardware.',
    },
  ];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#191A18] pt-32 pb-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B99A65] font-semibold">
            Visual Archive
          </span>
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight">
            Furniture & Interior Gallery
          </h1>
          <p className="text-base text-[#8A8176] leading-relaxed">
            Browse our selected portfolio of living rooms, fitted kitchens, bedroom suites, and fine furniture details.
          </p>
        </div>

        {/* Category Filters (Interactive buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all rounded-none ${
                activeCategory === cat
                  ? 'bg-[#191A18] text-[#F7F4EE] shadow-sm'
                  : 'bg-white text-[#8A8176] hover:text-[#191A18] border border-[#D9D0C4]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer bg-white border border-[#D9D0C4] overflow-hidden rounded-xl shadow-sm hover:border-[#B99A65] transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-[#191A18]/80 text-[#F7F4EE] p-3 rounded-full">
                    <ZoomIn className="w-5 h-5 text-[#B99A65]" />
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#B99A65] font-semibold block">
                  {item.category}
                </span>
                <h3 className="text-xl font-serif text-[#191A18]">{item.title}</h3>
                <p className="text-xs text-[#8A8176] leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-10 animate-fade-in">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-[#B99A65] p-3 bg-white/10 hover:bg-white/20 transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-w-4xl w-full bg-[#191A18] text-[#F7F4EE] overflow-hidden border border-[#B99A65]/30 shadow-2xl flex flex-col md:flex-row">
              <div className="md:w-3/5 bg-black flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:w-2/5 p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#B99A65] font-semibold block">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-2xl font-serif text-white">{selectedImage.title}</h3>
                  <p className="text-sm text-[#D9D0C4] leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-white/10">
                  <button
                    onClick={() => { setSelectedImage(null); onNavigate('contact'); window.scrollTo(0,0); }}
                    className="w-full bg-[#B99A65] text-[#191A18] hover:bg-[#a68856] py-3 text-xs uppercase tracking-[0.2em] font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Enquire About Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
