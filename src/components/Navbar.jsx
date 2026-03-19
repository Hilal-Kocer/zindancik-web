import React, { useState, useEffect } from 'react';
import { 
  IS_MENU_LIVE, 
  IS_GALLERY_LIVE, 
  IS_CONTACT_LIVE 
} from '../config';

const AnnouncementBar = () => (
  <div className="bg-red-900 text-white py-3 px-4 text-center text-sm font-bold uppercase tracking-[0.2em] relative z-[60] animate-pulse-soft shadow-inner">
    <span className="flex items-center justify-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
      Tadilat Sürecindeyiz: Zindancık Kır Bahçesi Çok Yakında Yeni Yüzüyle Hizmetinizde!
    </span>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hakkımızda', href: '#about' },
    ...(IS_MENU_LIVE ? [{ name: 'Menü', href: '#menu' }] : []),
    ...(IS_GALLERY_LIVE ? [{ name: 'Galeri', href: '#gallery' }] : []),
    ...(IS_CONTACT_LIVE ? [{ name: 'İletişim', href: '#contact' }] : []),
  ];

  return (
    <header className="fixed w-full z-50">
      <AnnouncementBar />
      <nav className={`w-full transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col leading-none">
            <div className={`text-3xl font-serif font-black tracking-tighter transition-colors duration-300 ${isScrolled || isMenuOpen ? 'text-olive' : 'text-white'}`}>
              ZİNDANCIK
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className={`text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${isScrolled || isMenuOpen ? 'text-stone-400' : 'text-white/60'}`}>
                Kır Bahçesi & Restoran
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${isScrolled ? 'text-stone-900 hover:text-olive' : 'text-white hover:text-cream'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled || isMenuOpen ? 'text-stone-700' : 'text-white'} transition-colors duration-300`}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <div className={`md:hidden absolute w-full bg-white shadow-2xl transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-[400px] border-t border-stone-100' : 'max-h-0'}`}>
          <div className="flex flex-col p-8 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-stone-900 text-lg font-bold uppercase tracking-widest hover:text-olive transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
