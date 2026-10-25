export type PageId = 'home' | 'about' | 'services' | 'gallery' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Living Rooms' | 'Sofas and Seating' | 'Kitchens' | 'Bedroom Interiors' | 'Furniture Details' | 'Completed Spaces';
  image: string;
  description: string;
}

export interface BusinessInfo {
  name: string;
  phone: string;
  phoneDisplay: string;
  whatsappUrl: string;
  address: string;
  hours: { days: string; time: string }[];
}
