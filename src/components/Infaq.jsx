const infaqItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    label: 'Listrik & Operasional',
    desc: 'Kebutuhan listrik, air, dan biaya operasional musholla setiap bulannya',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    label: 'Perawatan Bangunan',
    desc: 'Pemeliharaan kebersihan, renovasi kecil, dan perbaikan fasilitas musholla',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    label: 'Kegiatan TPA & Kajian',
    desc: 'Perlengkapan belajar, modul TPA, dan kebutuhan kegiatan kajian rutin',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Fasilitas Musafir & I\'tikaf',
    desc: 'Penyediaan tempat istirahat, perlengkapan, dan kebutuhan tamu musafir',
  },
];

export default function Infaq() {
  return (
    <section id="infaq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Info */}
          <div>
            <span className="inline-block text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">
              Mari Berinfaq
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Jadilah Bagian dari{' '}
              <span className="text-green-700">Pemakmur Masjid</span>
            </h2>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6">
              <p className="text-amber-800 text-sm leading-relaxed italic text-right mb-2" style={{ direction: 'rtl', fontFamily: 'Georgia, serif' }}>
                مَثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ
              </p>
              <p className="text-amber-700 text-sm leading-relaxed">
                <em>&ldquo;Perumpamaan orang yang menginfakkan hartanya di jalan Allah seperti sebutir biji yang menumbuhkan tujuh tangkai, pada setiap tangkai ada seratus biji...&rdquo;</em>
                <span className="font-semibold block mt-1">— QS. Al-Baqarah [2]: 261</span>
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Setiap rupiah yang Anda infaqkan akan digunakan sepenuhnya untuk memakmurkan Musholla Baitul
              Muttaqin — mulai dari operasional harian, kegiatan TPA, kajian rutin, hingga memfasilitasi
              musafir dan pelaksanaan i&apos;tikaf.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Infaq bisa dilakukan secara langsung ke musholla atau melalui kontak takmir. Setiap infaq
              akan dicatat dan dilaporkan secara transparan kepada jamaah.
            </p>

            <a
              href="https://wa.me/6287834500246?text=Assalamu%27alaikum%2C%20saya%20ingin%20berinfaq%20untuk%20Musholla%20Baitul%20Muttaqin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Infaq via WhatsApp Takmir
            </a>
          </div>

          {/* Right: Infaq breakdown */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6">
              <h3 className="font-bold text-gray-900 mb-5">Infaq Anda Digunakan untuk:</h3>
              <ul className="space-y-4">
                {infaqItems.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center text-green-700 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 text-sm">{item.label}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-700 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-bold">Infaq Langsung</span>
              </div>
              <p className="text-green-100 text-sm leading-relaxed mb-3">
                Infaq dapat diserahkan langsung ke kotak infaq yang tersedia di musholla setiap saat,
                atau dikirimkan melalui takmir.
              </p>
              <div className="border-t border-green-600 pt-3">
                <p className="text-green-200 text-xs mb-1">Hubungi Takmir Musholla</p>
                <a
                  href="https://wa.me/6287834500246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-amber-300 hover:text-amber-200"
                >
                  +62 878-3450-0246
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
