import { IS_CONTACT_LIVE } from '../config';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="/arkaplan.jpg"
          alt="Zindancık Manzarası"
          className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-hero-gradient z-10"></div>
      </div>

      {/* Content with Float Animation */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto animate-float">
        <div className="mb-6 inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-fade-in">
          <span className="text-cream text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
            Doğanın Kalbinde Bir Lezzet Serüveni
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl text-white mb-8 font-serif leading-tight tracking-tight">
          <span className="block animate-fade-in-up">
            Yöresel Lezzetlerle <span className="text-cream drop-shadow-sm italic">Yeniden Doğuş</span>
          </span>
          <span className="text-cream/90 italic font-light block mt-4 animate-fade-in-up delay-300 text-xl md:text-2xl lg:text-3xl tracking-wide">
            Efsane Geri Dönüyor!
          </span>
        </h1>

        <p className="text-base md:text-xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-400">
          İnözü Vadisi'nin ruhunu, yenilenen yüzümüz ve hizmet anlayışımızla tabağınıza taşımaya hazırlanıyoruz. Tadilatımız biter bitmez sizi ağırlamak için sabırsızlanıyoruz.
        </p>

        {IS_CONTACT_LIVE && (
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-600">
            <a
              href="#contact"
              className="group relative px-10 py-5 bg-olive text-white rounded-full font-bold overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(107,114,64,0.4)]"
            >
              <span className="relative z-10 uppercase tracking-widest">BİZE ULAŞIN</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>
          </div>
        )}
      </div>

      {/* Modernized Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-scroll-bounce opacity-70 hover:opacity-100 transition-opacity">
        <a href="#about" className="flex flex-col items-center gap-3">
          <span className="text-[10px] text-white uppercase tracking-[0.4em] font-bold">Keşfet</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
