import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-texture overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Main Content Column */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1 bg-olive/10 text-olive text-sm font-semibold tracking-widest rounded-full uppercase">
                Bir Aile Mirası
              </div>
              <h2 className="text-4xl md:text-5xl text-stone-900 leading-tight font-serif italic">
                Geleneksel Tatlar, Doğal Dokunuş: <br />
                <span className="text-2xl md:text-3xl text-olive block mt-2 opacity-80 not-italic font-sans font-bold uppercase tracking-widest">
                  2003'den Bugüne Bir Babanın Hayali
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
              <p>
                Zindancık Kır Bahçesi & Restoran, doğanın huzurunu ve yöresel mutfağın zenginliğini bir araya getiren bir lezzet durağıdır. Bugün, yeni işletme anlayışımızla, köklü geleneklerimizi modern bir hizmet vizyonuyla harmanlıyoruz. Değişen sadece yönetim değil; hizmet kalitemizdeki çıtayı daha da yukarı taşıma sözümüzdür.
              </p>
              <p>
                Ateşin isini, toprağın bereketini ve her lokmada hissedilen o taze ruhu yeniden canlandırıyoruz. Bizim için her misafir, soframıza konuk olan bir dosttur. Yeni dönemimizde görüşleriniz bizim için çok değerli.
              </p>

              <div className="py-6 border-l-2 border-olive/30 pl-6 my-10 bg-stone-50/50 rounded-r-2xl">
                <p className="text-stone-900 font-serif italic text-xl mb-4">
                  "2003 yılında babamızın hayaliyle başlayan bu hikayeyi devralıyoruz."
                </p>
                <p className="text-base text-stone-500">
                  Köklerimizde filizlenen bu kıymetli mirası, kurucumuzun aziz hatırasına olan bağlılığımızla yeniden yuvamıza, asıl evine kavuşturduk. Bugün, babadan oğula geçen bu eşsiz ilhamı, modern bir vizyon ve bitmeyen bir tutkuyla yarınlara taşıyoruz.
                </p>
              </div>
            </div>

            {/* Founder's Corner Inline */}
            <div className="bg-stone-50 rounded-3xl p-8 border border-stone-100 flex flex-col md:flex-row gap-8 items-center md:items-start group transition-all duration-500 hover:shadow-xl">
              <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg shrink-0 border-2 border-olive/20 group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/kurucumuz.jpeg"
                  alt="Kurucumuz"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold font-serif mb-2 text-stone-900 italic">Kurucumuzun Anısına</h4>
                <div className="space-y-3">
                  <p className="text-stone-500 text-sm leading-relaxed italic">
                    "Zindancık'ta her gelen misafir değil, soframıza konuk olan bir dosttur."
                  </p>
                  <p className="text-olive font-serif text-lg italic font-bold">
                    "Efsane geri dönüyor..."
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-8 h-[1px] bg-stone-300"></div>
                  <span className="text-xs uppercase tracking-widest font-bold text-stone-400">Ahmet Koçer</span>
                </div>
              </div>
            </div>


          </div>

          {/* Media Column */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative group">
                  <img src="/kapama.jfif" alt="Dining" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative group">
                  <img src="/manzara2.webp" alt="Aile Mirası" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative group">
                  <img src="/yeni.jpg" alt="Vadi" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative group">
                  <img src="/manzara.webp" alt="View" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
              </div>
            </div>

            {/* Absolute badge */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full shadow-2xl flex items-center justify-center p-2 hidden xl:flex animate-spin-slow">
              <div className="w-full h-full rounded-full border-2 border-dashed border-olive/30 flex items-center justify-center text-center">
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 p-4 leading-tight">
                  Geleneksel Modern Hizmet Yenilenen Vizyon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
