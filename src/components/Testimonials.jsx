import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Selin Yılmaz",
      date: "2 hafta önce",
      source: "Google",
      rating: 5,
      comment: "Zindancık Kır Bahçesi-Restoran'ta yediğimiz akşam yemeği tek kelimeyle kusursuzdu. Manzara büyüleyici, servis ise çok nazikti. Özellikle kuzu kapamasını mutlaka denemelisiniz!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: 2,
      name: "Murat Can",
      date: "1 ay önce",
      source: "TripAdvisor",
      rating: 5,
      comment: "Beypazarı'nda gidilebilecek en kaliteli mekan. Doğanın içinde, huzur dolu bir atmosfer. Yemeklerin lezzeti kadar sunumu da çok başarılıydı.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: 3,
      name: "Ayşe Demir",
      date: "3 hafta önce",
      source: "Google",
      rating: 5,
      comment: "Ailecek gittik ve çok memnun kaldık. Çocuklar için bile harika bir alan var. Kahvaltısı çok zengin ve her şey çok taze. Kesinlikle tavsiye ederim.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
    }
  ];

  return (
    <section className="section-padding bg-cream/30 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-olive/5 rounded-full -ml-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-200/50 rounded-full -mr-48 -mb-48 blur-3xl"></div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="text-olive font-bold uppercase tracking-[0.3em] text-sm mb-4 block animate-fade-in">Deneyimler</span>
          <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-6 animate-fade-in-up">Misafirlerimizin <span className="italic">Gözünden</span></h2>
          <div className="w-24 h-1 bg-olive mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="group bg-white p-8 md:p-10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-stone-100 relative mt-8 first:mt-8">
              {/* Avatar on Top */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-2xl overflow-hidden border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
              </div>

              <div className="pt-8 text-center">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-stone-600 mb-8 italic leading-relaxed text-lg">"{review.comment}"</p>

                <div className="mt-auto border-t border-stone-50 pt-6">
                  <h4 className="font-bold text-stone-900">{review.name}</h4>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="text-xs text-stone-400 uppercase tracking-widest">{review.date}</span>
                    <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                    <div className="flex items-center gap-1">
                      {review.source === "Google" ? (
                        <svg className="w-4 h-4 text-stone-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-1.04 3.4-2.4 4.16-1.36.76-3.24 1.16-5.44 1.16-4.44 0-8-3.56-8-8s3.56-8 8-8c2.12 0 4.04.8 5.48 2.12l2.48-2.48c-2.12-1.92-4.96-3.12-7.96-3.12-6.64 0-12 5.36-12 12s5.36 12 12 12c6.96 0 12-4.8 12-12 0-.8-.12-1.56-.36-2.28h-11.64z" /></svg>
                      ) : (
                        <svg className="w-4 h-4 text-stone-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" /></svg>
                      )}
                      <span className="text-[10px] font-bold uppercase tracking-tighter text-stone-400">{review.source}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://maps.app.goo.gl/CsE5Ses6GzZsJNmG6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-stone-900 font-bold uppercase tracking-[0.2em] text-sm hover:text-olive transition-all group"
          >
            Tüm Yorumları Google'da Gör
            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
