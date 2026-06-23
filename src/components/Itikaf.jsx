const facilities = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    label: 'Tempat Bermalam',
    desc: 'Tersedia area untuk beristirahat dan bermalam bagi musafir dan peserta i\'tikaf',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    label: 'Tempat Wudhu & Toilet',
    desc: 'Fasilitas wudhu dan kamar mandi yang bersih tersedia untuk jamaah',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    label: 'Penerangan 24 Jam',
    desc: 'Musholla terbuka dengan penerangan sepanjang malam untuk kenyamanan jamaah',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Sambutan Hangat Warga',
    desc: 'Warga Dusun Karang dikenal ramah dan siap membantu setiap tamu yang datang',
  },
];

const steps = [
  { step: '01', title: 'Hubungi Takmir', desc: 'Konfirmasi kedatangan via WhatsApp takmir sebelum tiba' },
  { step: '02', title: 'Niat & Persiapan', desc: 'Bawa perlengkapan ibadah pribadi dan kebutuhan selama i\'tikaf' },
  { step: '03', title: 'Tiba di Musholla', desc: 'Disambut warga, registrasi, dan langsung mulai beribadah' },
  { step: '04', title: 'Nikmati Ketenangan', desc: 'Fokus ibadah dalam suasana desa yang tenang dan asri' },
];

export default function Itikaf() {
  return (
    <section id="itikaf" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">
            I&apos;tikaf & Musafir
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Anda Sangat Welcome di Sini
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Musholla Baitul Muttaqin membuka pintu selebar-lebarnya bagi siapa pun — baik untuk i&apos;tikaf,
            singgah beribadah, maupun musafir yang membutuhkan tempat beristirahat.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-14">
          {/* I'tikaf info */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-xl">I&apos;tikaf di Musholla</h3>
                <p className="text-gray-500 text-sm">Berdiam diri untuk ibadah dan mendekat kepada Allah</p>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-4 mb-5">
              <p className="text-green-800 text-sm leading-relaxed italic text-right mb-2" style={{ direction: 'rtl', fontFamily: 'Georgia, serif' }}>
                كَانَ النَّبِيُّ ﷺ يَعْتَكِفُ فِي الْعَشْرِ الْأَوَاخِرِ مِنْ رَمَضَانَ
              </p>
              <p className="text-green-700 text-xs">
                <em>&ldquo;Nabi ﷺ biasa beri&apos;tikaf pada sepuluh hari terakhir bulan Ramadhan.&rdquo;</em>
                <span className="font-semibold"> — HR. Bukhari & Muslim</span>
              </p>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Musholla Baitul Muttaqin menyambut siapa saja yang ingin melaksanakan i&apos;tikaf, terutama
              pada 10 malam terakhir Ramadhan. Suasana desa yang tenang dan jauh dari keramaian kota
              sangat mendukung kekhusyukan ibadah.
            </p>

            <ul className="space-y-2 mb-6">
              {['Terbuka sepanjang tahun, utamanya Ramadhan', 'Tersedia ruang khusus untuk i\'tikaf', 'Lingkungan kondusif dan tenang', 'Didampingi warga dan jamaah setempat'].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/6287834500246?text=Assalamu%27alaikum%2C%20saya%20ingin%20bertanya%20mengenai%20i%27tikaf%20di%20Musholla%20Baitul%20Muttaqin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
            >
              Tanya Info I&apos;tikaf
            </a>
          </div>

          {/* Musafir info */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-xl">Ramah Musafir</h3>
                <p className="text-gray-500 text-sm">Singgah, beristirahat, dan bermalam dengan nyaman</p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-4 mb-5">
              <p className="text-amber-800 text-sm leading-relaxed italic text-right mb-2" style={{ direction: 'rtl', fontFamily: 'Georgia, serif' }}>
                وَفِي أَمْوَالِهِمْ حَقٌّ لِّلسَّائِلِ وَالْمَحْرُومِ
              </p>
              <p className="text-amber-700 text-xs">
                <em>&ldquo;Dan pada harta-harta mereka ada hak untuk orang miskin yang meminta dan orang yang tidak mempunyai apa-apa.&rdquo;</em>
                <span className="font-semibold"> — QS. Adz-Dzariyat [51]: 19</span>
              </p>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Bagi Anda yang sedang dalam perjalanan dan membutuhkan tempat singgah, shalat, atau bahkan
              bermalam — Musholla Baitul Muttaqin siap menyambut dengan hangat. Warga Dusun Karang
              dikenal dengan keramahan dan gotong royong yang tinggi.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {['Boleh bermalam', 'Fasilitas wudhu', 'Lingkungan aman', 'Warga ramah'].map((f) => (
                <div key={f} className="bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700 font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>

            <div className="border border-gray-100 rounded-xl p-4 bg-gray-50">
              <p className="text-gray-600 text-sm mb-2 font-medium">Hubungi takmir sebelum tiba:</p>
              <a
                href="https://wa.me/6287834500246?text=Assalamu%27alaikum%2C%20saya%20musafir%20yang%20ingin%20singgah%20di%20Musholla%20Baitul%20Muttaqin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-700 font-bold hover:text-green-800"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                +62 878-3450-0246
              </a>
            </div>
          </div>
        </div>

        {/* Facilities grid */}
        <div className="bg-green-800 rounded-2xl p-8 mb-10">
          <h3 className="font-bold text-white text-xl mb-6 text-center">Fasilitas yang Tersedia</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {facilities.map((f) => (
              <div key={f.label} className="bg-white/10 border border-white/20 rounded-xl p-5 text-white">
                <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center text-green-900 mb-3">
                  {f.icon}
                </div>
                <div className="font-semibold text-sm mb-1">{f.label}</div>
                <div className="text-green-200 text-xs leading-relaxed">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div>
          <h3 className="font-bold text-gray-900 text-xl text-center mb-8">Cara Singgah / I&apos;tikaf</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  {s.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{s.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
