export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-700"
    >
      {/* Decorative geometric pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="islamic-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <polygon points="40,0 80,20 80,60 40,80 0,60 0,20" fill="none" stroke="white" strokeWidth="1" />
              <polygon points="40,10 70,25 70,55 40,70 10,55 10,25" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="8" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
        </svg>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-20">
        {/* Arabic title */}
        <div className="mb-4">
          <span className="inline-block text-amber-300 text-4xl sm:text-5xl font-arabic tracking-wide">
            بَيْتُ الْمُتَّقِيْن
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          Musholla
          <span className="block text-amber-300">Baitul Muttaqin</span>
        </h1>

        <p className="text-green-100 text-base sm:text-lg max-w-2xl mx-auto mb-3">
          Rumah ibadah dan pusat kegiatan Islam masyarakat Dusun Karang sejak tahun 1960
        </p>

        <p className="text-green-200 text-sm mb-10 flex items-center justify-center gap-2">
          <svg className="w-4 h-4 text-amber-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          Dusun Karang, RT.02/RW.02, Ujung-Ujung, Pabelan, Kab. Semarang
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#sejarah"
            className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-green-900 font-semibold px-8 py-3 rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            Lihat Sejarah
          </a>
          <a
            href="#lokasi"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/60 hover:border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-xl transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Lihat Lokasi
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
