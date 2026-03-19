import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', alt: 'Grill' },
    { url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800', alt: 'Cocktail' },
    { url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800', alt: 'Dining area' },
    { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800', alt: 'Fine dining' },
    { url: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=800', alt: 'Local food' },
    { url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800', alt: 'Table spread' },
  ];

  return (
    <section id="gallery" className="section-padding bg-cream">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-stone-900 mb-6 font-serif">Görsel Bir Yolculuk</h2>
          <div className="w-24 h-[2px] bg-olive mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedImage(img)}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-xl cursor-pointer"
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <span className="text-white border-2 border-white/50 px-8 py-3 rounded-full transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 uppercase text-xs tracking-widest font-bold">
                  Büyüt
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-stone-950/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-10 right-10 text-white hover:text-olive transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <img 
            src={selectedImage.url.replace('w=800', 'w=1600')} 
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-fade-in-up"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
