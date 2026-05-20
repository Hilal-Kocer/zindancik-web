import React, { useState, useEffect } from 'react';
import {
  IS_MENU_LIVE,
  IS_GALLERY_LIVE,
  IS_CONTACT_LIVE
} from '../config';



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
      <nav className={`w-full transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-1.5 group">
            <div className={`transition-all duration-700 overflow-hidden flex-shrink-0 ${isScrolled || isMenuOpen ? 'w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 opacity-100' : 'w-0 h-16 sm:h-20 md:h-28 opacity-0 -ml-4 md:-ml-10'}`}>
              <img
                src="/logo_arkaplan_yok.png"
                alt="Zindancık Logo"
                className="w-full h-full object-contain drop-shadow-sm"
              />
            </div>
            <div className="flex flex-col leading-none">
              <div className={`whitespace-nowrap text-xl sm:text-2xl md:text-3xl font-serif font-black tracking-tighter transition-colors duration-300 ${isScrolled || isMenuOpen ? 'text-olive' : 'text-white'}`}>
                ZİNDANCIK
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className={`whitespace-nowrap text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${isScrolled || isMenuOpen ? 'text-stone-400' : 'text-white/60'}`}>
                  Kır Bahçesi & Restoran
                </div>
              </div>
            </div>
          </div>

          <div className={`hidden md:flex items-center space-x-6 px-8 py-2.5 rounded-full transition-all duration-500 ${isScrolled ? 'bg-transparent' : 'bg-black/20 backdrop-blur-md border border-white/10 shadow-xl'}`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link group relative text-sm font-bold uppercase tracking-[0.15em] px-3 py-1.5 transition-all duration-300 rounded-full ${isScrolled ? 'text-stone-800 hover:text-olive hover:bg-stone-100/50' : 'text-white hover:text-white hover:bg-white/10'
                  }`}
              >
                {link.name}
                <span className={`absolute bottom-1 left-1/2 w-0 h-[2px] -translate-x-1/2 transition-all duration-300 group-hover:w-1/2 ${isScrolled ? 'bg-olive' : 'bg-white'}`}></span>
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
