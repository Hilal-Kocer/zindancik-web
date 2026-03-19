import React from 'react';

const Menu = () => {
  const regionalFavorites = [
    { name: 'Köy Kahvaltısı', desc: 'Tamamen doğal, el yapımı reçeller, zeytinler ve yöresel peynirler.', price: '450₺' },
    { name: 'Ege Otları Kavurması', desc: 'Mevsimlik taze otlar, sızma zeytinyağı ve sarımsaklı yoğurt ile.', price: '180₺' },
    { name: 'Fırın Mantar', desc: 'Köy tereyağı ve taze kekik ile toprak kapta pişirilmiş.', price: '210₺' },
  ];

  const grillSelection = [
    { name: 'Zindancık Kebabı', desc: 'Özel marine edilmiş kuzu eti, köz patlıcan ve lavaş ile.', price: '520₺' },
    { name: 'Meşe Ateşinde Köfte', desc: 'Kasap tarzı, baharatlı ve közlenmiş biber-domates eşliğinde.', price: '380₺' },
    { name: 'Kuzu İncik', desc: 'Ağır ateşte 8 saat lokum kıvamında pişmiş.', price: '590₺' },
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
    <section id="menu" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl text-stone-900 mb-6 font-serif">Mutfak Hazinemiz</h2>
          <p className="text-stone-500 max-w-2xl mx-auto italic text-lg">
            Geleneksel tariflerin modern dokunuşlarla buluştuğu, her lokmada doğayı hissedeceğiniz özel seçimlerimiz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Yöresel Lezzetler */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <span className="w-12 h-[2px] bg-olive"></span>
              <h3 className="text-3xl font-serif text-olive italic">Yöresel Lezzetler</h3>
            </div>
            <div className="space-y-8">
              {regionalFavorites.map((item, idx) => (
                <MenuItem key={idx} {...item} />
              ))}
            </div>
          </div>

          {/* Ateşten Izgaralar */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <span className="w-12 h-[2px] bg-olive"></span>
              <h3 className="text-3xl font-serif text-olive italic">Ateşten Izgaralar</h3>
            </div>
            <div className="space-y-8">
              {grillSelection.map((item, idx) => (
                <MenuItem key={idx} {...item} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <button className="group relative px-12 py-4 rounded-full border-2 border-stone-800 text-stone-800 font-bold uppercase tracking-widest text-sm hover:text-white transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Tüm Menüyü Gör</span>
            <div className="absolute inset-0 bg-stone-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
