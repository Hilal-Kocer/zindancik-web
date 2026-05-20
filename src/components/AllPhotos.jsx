import React, { useState, useEffect } from 'react';

const AllPhotos = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sayfa yüklendiğinde en üste çıkması için
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allImages = [
    { url: '/IMG_9838.jpg', alt: 'Uruş Kapama' },
    { url: '/arkaa.jpeg', alt: 'Manzara' },
    { url: '/IMG_9910.jpg', alt: 'Kahvaltı' },
    { url: '/IMG_9358.jpg', alt: 'Manzara' },
    { url: '/IMG_9827.jpg', alt: 'Kamelya' },
    { url: '/IMG_9400.jpg', alt: 'Manzara' },
    { url: '/IMG_9346.jpg', alt: 'Zindancık' },
    { url: '/mekan.JPG', alt: 'Mekan' },
    { url: '/park.JPG', alt: 'Park' },
    { url: '/masa.JPG', alt: 'Masa' },
    { url: '/giriş.JPG', alt: 'Giriş' },
    { url: '/arkaplannn.jpeg', alt: 'Manzara' },
    { url: '/IMG_9354.jpg', alt: 'Manzara' },
    { url: '/IMG_9360.jpg', alt: 'Tesis' },
    { url: '/IMG_9405.jpg', alt: 'Manzara' },
    { url: '/IMG_9845.jpg', alt: 'Manzara' },
    { url: '/IMG_9848.jpg', alt: 'Manzara' },
    { url: '/IMG_9938.jpg', alt: 'Manzara' },
  ];

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header & Back Button */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <a
            href="#"
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-stone-300 hover:border-olive text-stone-600 hover:text-olive transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-bold uppercase tracking-wider text-sm">Geri Dön</span>
          </a>

          <div className="text-center md:text-right">
            <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-2">Tüm Fotoğraflar</h1>
            <div className="w-24 h-[2px] bg-olive md:ml-auto"></div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(img)}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <span className="text-white border-2 border-white/50 px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 uppercase text-xs tracking-widest font-bold">
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
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-olive transition-colors z-[101]"
            onClick={() => setSelectedImage(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <img
            src={selectedImage.url}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-fade-in-up"
          />
        </div>
      )}
    </div>
  );
};

export default AllPhotos;
