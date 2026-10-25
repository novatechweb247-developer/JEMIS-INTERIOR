import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'services', label: 'SERVICES' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHome = currentPage === 'home';
  const headerBackground = isScrolled || !isHome
    ? 'bg-[#191A18]/95 backdrop-blur-md text-[#F7F4EE] shadow-sm py-4'
    : 'bg-transparent text-[#191A18] lg:text-[#F7F4EE] py-6';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 md:px-12 flex items-center justify-between ${headerBackground}`}>
        {/* Brand Zone */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="text-xl md:text-2xl font-serif tracking-widest block font-medium group-hover:text-[#B99A65] transition-colors">
            JEMIS INTERIOR
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#B99A65] block">
            Jos, Nigeria
          </span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] font-medium">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors relative py-1 whitespace-nowrap shrink-0 hover:text-[#B99A65] ${
                  isActive ? 'text-[#B99A65]' : 'opacity-90'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B99A65]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action / CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+2348100549618"
            className="flex items-center gap-2 text-xs tracking-wider uppercase bg-[#B99A65] text-[#191A18] px-5 py-2.5 rounded-none font-semibold hover:bg-[#a68856] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>0810 054 9618</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg focus:outline-none text-[#B99A65] hover:bg-black/10 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#191A18] text-[#F7F4EE] flex flex-col justify-center px-8 py-20 md:hidden animate-fade-in">
          <div className="space-y-6 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B99A65] block mb-2">
              Menu
            </span>
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <div key={item.id} className="border-b border-white/10 pb-4">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`text-2xl font-serif tracking-wider w-full py-1 transition-colors ${
                      isActive ? 'text-[#B99A65]' : 'text-[#F7F4EE]'
                    }`}
                  >
                    {item.label}
                  </button>
                </div>
              );
            })}

            <div className="pt-6">
              <a
                href="tel:+2348100549618"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#B99A65] text-[#191A18] py-3 text-sm font-semibold uppercase tracking-wider"
              >
                <Phone className="w-4 h-4" />
                <span>Call: 0810 054 9618</span>
              </a>
            </div>

            <div className="text-xs text-[#8A8176] pt-8 tracking-wider">
              No. 23 Gwarandok, Jos, Plateau State, Nigeria
            </div>
          </div>
        </div>
      )}
    </>
  );
};
