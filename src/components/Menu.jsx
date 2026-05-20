import React from 'react';

const Menu = () => {
  const regionalFavorites = [
    { name: 'Köy Kahvaltısı', desc: 'Peynir, zeytin, bal, kaymak, tahin, pekmez, reçel çeşitleri, kalem böreği, pişi, yağlı bazlama, simit, beypazarı kurusu, patates kızartması, sucuklu yumurta, domates, salatalık, yeşillik, mevsim meyvesi, acılı ezme, çay. Kahvaltımız en az 2 kişiliktir.', price: '600₺' },
  ];

  const grillSelection = [
    { name: 'Uruş Kapaması', desc: 'Toprak testide pişen kuzu veya dana eti, pirinç ve özel baharatların muhteşem uyumuyla hazırlanan geleneksel Beypazarı/Uruş lezzeti. En az 2 kişi için servis edilir.', price: '' },
    { name: 'Beypazarı Güveci (Dana)', desc: 'Etli yöresel Beypazarı güveci.', price: '550₺' },
    { name: 'Beypazarı Yaprak Sarması', desc: 'Etli yöresel Beypazarı yaprak sarması.', price: '450₺' },
    { name: 'Beypazarı Höşmerim Tatlısı', desc: 'Yöresel şerbetli Beypazarı tatlısı.', price: '300₺' },
  ];

  const kapamaOptions = [
    { name: 'Kuzu Etli', desc: '2 kişilik servis fiyatı', price: '1300₺' },
    { name: 'Dana Etli', desc: '2 kişilik servis fiyatı', price: '1100₺' },
  ];

  const breakfastExtras = [
    { name: 'Menemen', desc: '', price: '250₺' },
    { name: 'Mumbarlı Yumurta', desc: '', price: '350₺' },
    { name: 'Mumbar', desc: '', price: '300₺' },
    { name: 'Patates Kızartması', desc: '', price: '200₺' },
    { name: 'Sucuklu Yumurta', desc: '', price: '350₺' },
    { name: 'Gözleme', desc: '', price: '200₺' },
  ];

  const MenuItem = ({ name, desc, price }) => (
    <div className="flex justify-between items-start border-b border-stone-200 pb-4 mb-4 hover:border-olive transition-colors group">
      <div className="flex-1 pr-4">
        <h4 className="text-xl font-medium text-stone-800 group-hover:text-olive transition-colors">{name}</h4>
        <p className="text-stone-500 text-sm mt-1">{desc}</p>
      </div>
      <div className="text-olive font-bold text-lg">{price}</div>
    </div>
  );

  return (
    <section id="menu" className="section-padding bg-cream">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl text-stone-900 mb-6 font-serif">Mutfak Hazinemiz</h2>
          <p className="text-stone-500 max-w-2xl mx-auto italic text-lg">
            Geleneksel tariflerin modern dokunuşlarla buluştuğu, her lokmada doğayı hissedeceğiniz özel seçimlerimiz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Kahvaltı */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <span className="w-12 h-[2px] bg-olive"></span>
              <h3 className="text-3xl font-serif text-olive italic">Kahvaltı</h3>
            </div>

            <div className="space-y-8">
              <MenuItem {...regionalFavorites[0]} />
            </div>

            {/* Kahvaltı Ekstraları */}
            <div className="mt-8 mb-10 pl-6 md:pl-8 border-l-2 border-olive/20">
              <h4 className="text-xl font-serif text-olive italic mb-6">Kahvaltı Ekstraları</h4>
              <div className="space-y-6">
                {breakfastExtras.map((item, idx) => (
                  <MenuItem key={idx} {...item} />
                ))}
              </div>
            </div>

          </div>

          {/* Yöresel Lezzetler */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <span className="w-12 h-[2px] bg-olive"></span>
              <h3 className="text-3xl font-serif text-olive italic">Yöresel Lezzetler</h3>
            </div>
            <div className="space-y-8">
              <MenuItem {...grillSelection[0]} />
            </div>

            {/* Kapama Seçenekleri */}
            <div className="mt-8 mb-10 pl-6 md:pl-8 border-l-2 border-olive/20">
              <h4 className="text-xl font-serif text-olive italic mb-6">Et Seçenekleri</h4>
              <div className="space-y-6">
                {kapamaOptions.map((item, idx) => (
                  <MenuItem key={idx} {...item} />
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {grillSelection.slice(1).map((item, idx) => (
                <MenuItem key={idx} {...item} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <a href="/menü.jpeg" target="_blank" rel="noopener noreferrer" className="group relative inline-block px-12 py-4 rounded-full border-2 border-stone-800 text-stone-800 font-bold uppercase tracking-widest text-sm hover:text-white transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Tüm Menüyü Gör</span>
            <div className="absolute inset-0 bg-stone-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
