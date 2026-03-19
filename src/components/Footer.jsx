import React from 'react';
import {
  IS_MENU_LIVE,
  IS_GALLERY_LIVE,
  IS_CONTACT_LIVE
} from '../config';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          <div className="md:col-span-2">
            <div className="group cursor-default">
              <div className="text-5xl font-serif font-black tracking-tighter text-white mb-0 leading-none">
                ZİNDANCIK
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="h-[1px] w-4 bg-olive/50"></div>
                <div className="text-[13px] font-bold tracking-[0.2em] uppercase text-olive whitespace-nowrap">
                  Kır Bahçesi & Restoran
                </div>
              </div>
            </div>
            <div className="text-[9px] font-medium tracking-[0.3em] uppercase text-stone-600 mt-6 mb-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-olive/40"></span>
              Est. 2003 — Bir Aile Mirası
            </div>
            <p className="text-stone-400 max-w-sm mb-8">
              Yöresel lezzetler, doğal atmosfer ve unutulmaz anılar için her gün aynı tutkuyla kapılarımızı açıyoruz.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-olive">Bağlantılar</h4>
            <ul className="space-y-4 text-stone-400">
              <li><a href="#about" className="hover:text-white transition-colors">Hakkımızda</a></li>
              {IS_MENU_LIVE && <li><a href="#menu" className="hover:text-white transition-colors">Menü</a></li>}
              {IS_GALLERY_LIVE && <li><a href="#gallery" className="hover:text-white transition-colors">Galeri</a></li>}
              {IS_CONTACT_LIVE && <li><a href="#contact" className="hover:text-white transition-colors">İletişim</a></li>}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-olive">Konum</h4>
            <div className="text-stone-400 space-y-4">
              <p>İnozu Vadisi Kalınyol Sk 3. km no 53, 06730 Türkiye<br />Beypazarı, Ankara</p>
              <a
                href="https://maps.app.goo.gl/CsE5Ses6GzZsJNmG6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-olive transition-colors underline underline-offset-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Haritada Gör
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-stone-500 text-sm">
          <p>© 2026 Zindancık Kır Bahçesi-Restoran. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
