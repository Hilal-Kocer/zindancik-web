import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { url: '/IMG_9838.jpg', alt: 'uruş kapama' },
    { url: '/arkaa.jpeg', alt: 'Manzara' },
    { url: '/IMG_9910.jpg', alt: 'Kahvaltı' },
    { url: '/IMG_9358.jpg', alt: 'Manzara' },
    { url: '/IMG_9827.jpg', alt: 'Kamelya' },
    { url: '/IMG_9400.jpg', alt: 'Manzara' },
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

        <div className="mt-16 text-center">
          <a href="#tum-fotograflar" className="group relative inline-block px-12 py-4 rounded-full border-2 border-stone-800 text-stone-800 font-bold uppercase tracking-widest text-sm hover:text-white transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Daha Fazla Fotoğraf</span>
            <div className="absolute inset-0 bg-stone-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0"></div>
          </a>
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
