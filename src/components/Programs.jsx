const programs = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    title: 'TPA',
    subtitle: 'Taman Pendidikan Al-Quran',
    description:
      'Program belajar membaca dan menulis Al-Quran untuk anak-anak. Kegiatan ini telah berjalan sejak musholla pertama kali berdiri pada tahun 1960 dan terus aktif hingga saat ini.',
    schedule: 'Rutin setiap hari',
    badge: 'Anak-anak',
    color: 'amber',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: 'Kajian Ahad Malam',
    subtitle: 'Pengajian Rutin Mingguan',
    description:
      'Kajian keagamaan yang diadakan setiap malam Ahad (Minggu malam). Terbuka untuk seluruh warga masyarakat sebagai sarana menambah ilmu dan mempererat ukhuwah islamiyah.',
    schedule: 'Setiap Malam Ahad',
    badge: 'Mingguan',
    color: 'green',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'Kajian Ahad Legi',
    subtitle: 'Pengajian Ahad Legi Siang',
    description:
      'Pengajian khusus yang diadakan pada hari Ahad Legi (berdasarkan kalender Jawa). Kegiatan ini menjadi tradisi yang sudah berlangsung sejak lama dan selalu dinantikan masyarakat.',
    schedule: 'Setiap Ahad Legi Siang',
    badge: 'Bulanan',
    color: 'green',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    title: 'Kegiatan Kemasyarakatan',
    subtitle: 'Musyawarah & Kegiatan Sosial',
    description:
      'Berbagai kegiatan sosial kemasyarakatan seperti musyawarah warga, perayaan hari besar Islam, serta kegiatan sosial lainnya yang mempererat silaturahmi antar warga.',
    schedule: 'Sesuai jadwal',
    badge: 'Kondisional',
    color: 'blue',
  },
];

const badgeColors = {
  amber: 'bg-amber-100 text-amber-700',
  green: 'bg-green-100 text-green-700',
  blue: 'bg-blue-100 text-blue-700',
};

const iconBgColors = {
  amber: 'bg-amber-50 text-amber-600',
  green: 'bg-green-50 text-green-700',
  blue: 'bg-blue-50 text-blue-600',
};

export default function Programs() {
  return (
    <section id="program" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Kegiatan Rutin
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Program Musholla
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Musholla Baitul Muttaqin aktif menyelenggarakan berbagai kegiatan yang telah berlangsung sejak
            berdirinya musholla hingga saat ini.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${iconBgColors[program.color]}`}
              >
                {program.icon}
              </div>

              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-gray-900 text-lg leading-tight">{program.title}</h3>
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ml-2 ${
                    badgeColors[program.color]
                  }`}
                >
                  {program.badge}
                </span>
              </div>

              <p className="text-sm font-medium text-gray-500 mb-3">{program.subtitle}</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">{program.description}</p>

              <div className="flex items-center gap-2 text-xs text-gray-500 border-t border-gray-50 pt-4">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {program.schedule}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-green-50 border border-green-100 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 mb-1">Ingin bergabung atau mengetahui info kegiatan?</h3>
            <p className="text-gray-600 text-sm">Hubungi takmir musholla untuk informasi jadwal terkini.</p>
          </div>
          <a
            href="https://wa.me/6287834500246"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-3 rounded-xl transition-colors flex-shrink-0"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
