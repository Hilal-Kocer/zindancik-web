import React from 'react';

const SocialFeed = () => {
  const instagramPosts = [
    { id: 1, url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80', likes: '1.2k', comments: '42' },
    { id: 2, url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80', likes: '850', comments: '12' },
    { id: 3, url: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80', likes: '2.1k', comments: '64' },
    { id: 4, url: 'https://images.unsplash.com/photo-1547825407-2d060104b7f8?auto=format&fit=crop&q=80', likes: '940', comments: '28' },
    { id: 5, url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80', likes: '1.5k', comments: '31' },
    { id: 6, url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80', likes: '3.2k', comments: '88' },
  ];

  return (
    <section className="py-24 bg-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <span className="text-olive font-bold uppercase tracking-[0.3em] text-sm mb-4 block animate-fade-in">Yaşam Tarzımız</span>
        <h2 className="text-4xl md:text-6xl text-white font-serif mb-6 animate-fade-in-up">Instagram'da Bizi <span className="italic">Keşfedin</span></h2>
        <p className="text-stone-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          Zindancık Kır Bahçesi-Restoran'ın benzersiz atmosferini ve yöresel lezzetlerini anlık olarak takip etmek için sosyal medyada yanımızda olun.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 px-2 md:px-0">
        {instagramPosts.map((post) => (
          <div key={post.id} className="group relative aspect-square overflow-hidden bg-stone-800 cursor-pointer">
            <img
              src={post.url}
              alt="Instagram Feed"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-6 text-white font-bold">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                  {post.likes}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
                  {post.comments}
                </span>
              </div>
            </div>
            {/* Instagram Icon on top-right */}
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-1.5 rounded-lg border border-white/20">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-8 items-center">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-10 py-5 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white rounded-2xl font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-4"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
          <span className="relative z-10">Bizi Instagram'da Takip Edin</span>
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-6 py-5 bg-stone-800 text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-blue-600 transition-all duration-300 flex items-center gap-4"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
        </a>
      </div>
    </section>
  );
};

export default SocialFeed;
