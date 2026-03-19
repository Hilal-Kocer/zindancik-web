import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-stone-50 bg-texture">
      <div className="section-container">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-stone-200">
          <div className="grid md:grid-cols-2">
            {/* Left Column: Visual/Call to Action */}
            <div className="bg-stone-900 p-12 lg:p-20 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-olive/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl mb-8 font-serif leading-tight">Bize <span className="text-olive">Ulaşın</span></h2>
                <p className="text-stone-400 mb-12 leading-relaxed text-xl font-light">
                  Lezzet dolu bir deneyim için bizi doğrudan arayabilirsiniz.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-olive group-hover:border-olive transition-smooth shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-1">Rezervasyon Hattı</p>
                      <a href="tel:+905555555555" className="text-2xl font-bold hover:text-olive transition-colors underline underline-offset-8 decoration-stone-700">+90 (555) 555 55 55</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-green-600 group-hover:border-green-600 transition-smooth shrink-0">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.942-.001-3.841-.481-5.538-1.391l-6.459 1.699zm6.366-3.61c1.55.933 3.393 1.433 5.305 1.434 5.753.003 10.435-4.679 10.437-10.433.001-2.788-1.084-5.409-3.056-7.382s-4.594-3.056-7.382-3.058c-5.756 0-10.438 4.682-10.44 10.432-.001 1.986.518 3.923 1.503 5.62l-.991 3.62 3.71-.973zm11.776-6.494c-.262-.132-1.554-.766-1.794-.853-.241-.087-.417-.132-.593.132-.176.264-.679.853-.831 1.029-.153.176-.305.198-.567.066-.262-.132-1.103-.406-2.1-.1.297-1.424-2.583-1.424-2.583-1.616-.297-.101-.297-.433 0-.564.133-.132.222-.264.444-.222.087-.132.175-.241.132-.416-.044-.087-.132-.176-.417-.831-.766-.176-.241-.176-.241-.555-.222-1.411-.222-1.411.087-.354.241-.176.417-.417-.132-.593-.132-.176-.132-.593 0-.769-.176-.176-.441-.176-.306 0-.593.132-.265.176-.241-.022.066.022.132.109.285.306.417.439.52.544.105.105.285.105.285.149 0 .175-.022.285-.109.132-.066-.46-.35-1.554-.766-1.794-.853-.24-.088-.474-.088-.636-.088l-.241-.004c-.176 0-.46.066-.701.33-.241.264-.921.901-.921 2.199s.943 2.55 1.075 2.726c.132.176 1.857 2.835 4.5 3.98.63.226 1.12.361 1.503.483.633.201 1.21.173 1.664.105.507-.076 1.554-.636 1.773-1.25.219-.614.219-1.141.154-1.25-.065-.109-.241-.176-.503-.307z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-1">WhatsApp Mesaj</p>
                      <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold hover:text-green-500 transition-colors underline underline-offset-8 decoration-stone-700">Canlı Destek Başlat</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Info/Hours */}
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-stone-900 mb-8 uppercase tracking-widest border-l-4 border-olive pl-6">Çalışma Saatlerimiz</h3>
              <div className="space-y-6 mb-12">
                <div className="flex justify-between items-center border-b border-stone-100 pb-4">
                  <span className="text-stone-600 font-medium">Pazartesi - Cuma</span>
                  <span className="text-stone-900 font-bold">09:00 - 23:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-100 pb-4">
                  <span className="text-stone-600 font-medium">Cumartesi - Pazar</span>
                  <span className="text-stone-900 font-bold">10:00 - 00:00</span>
                </div>
              </div>

              <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
                <h4 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-olive" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Adres:
                </h4>
                <p className="text-stone-600 leading-relaxed italic">
                  İnozu Vadisi Kalınyol Sk 3. km no 53,<br />
                  06730 Beypazarı, Ankara
                </p>
                <a href="https://maps.app.goo.gl/CsE5Ses6GzZsJNmG6" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 text-olive font-bold uppercase tracking-widest text-sm hover:translate-x-2 transition-transform duration-300">
                  Yol Tarifi Al →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Bar */}
        <div className="mt-12 text-center animate-fade-in">
          <p className="text-stone-500 mb-6">Sorularınız için bize e-posta yoluyla da ulaşabilirsiniz:</p>
          <a href="mailto:info@zindancik.com" className="text-stone-900 font-bold hover:text-olive transition-colors text-lg">info@zindancik.com</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
