const stats = [
  { value: '65+', label: 'Tahun Berdiri', sublabel: 'Sejak 1960' },
  { value: '3x', label: 'Renovasi Besar', sublabel: '1990 · 2002 · 2003' },
  { value: '4+', label: 'Kegiatan Rutin', sublabel: 'TPA, Kajian & lainnya' },
];

export default function About() {
  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">
              Tentang Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Pusat Kegiatan Islam{' '}
              <span className="text-green-700">Masyarakat Dusun Karang</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Musholla Baitul Muttaqin berdiri atas semangat gotong royong warga Dusun Karang yang ingin memiliki
              tempat untuk belajar dan mendalami nilai-nilai Islam. Sejak berdiri pada tahun 1960, musholla ini
              menjadi pusat kegiatan keagamaan dan sosial masyarakat.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Berlokasi di atas tanah wakaf dari Mbah Marinah, musholla ini terus berkembang melalui semangat
              swadaya masyarakat hingga menjadi bangunan permanen yang kokoh dan megah seperti saat ini, setelah
              diresmikan oleh Bupati Semarang pada 4 Maret 2003.
            </p>
            <a
              href="#sejarah"
              className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 group"
            >
              Baca selengkapnya
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-green-50 border border-green-100 rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-green-700 mb-1">{stat.value}</div>
                  <div className="font-semibold text-gray-800 text-sm mb-1">{stat.label}</div>
                  <div className="text-gray-500 text-xs">{stat.sublabel}</div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-2xl p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-900" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold mb-1">Tanah Wakaf</div>
                  <p className="text-green-100 text-sm leading-relaxed">
                    Musholla ini berdiri di atas tanah yang diwakafkan oleh <strong className="text-white">Mbah Marinah</strong>,
                    ibunda dari tokoh agama setempat Bapak Rojikan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
