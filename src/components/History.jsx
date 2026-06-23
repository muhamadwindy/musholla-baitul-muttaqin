import Image from 'next/image';

const timeline = [
  {
    year: '1960',
    title: 'Pendirian Musholla',
    description:
      'Atas inisiatif para tokoh dan aparat desa setempat, didirikan sebuah bangunan yang terdiri dari 3 bagian: tempat sholat, tempat berkumpul dan kajian, serta tempat belajar baca tulis Al-Quran. Bangunan ini dibangun dari kayu, papan, dan genteng hasil swadaya masyarakat di atas tanah wakaf Mbah Marinah.',
    details: ['Bangunan kayu & bambu', 'Lantai "Dampar" (anyaman bambu)', 'Beralaskan tikar mendong'],
    color: 'amber',
  },
  {
    year: '1990-an',
    title: 'Renovasi Pertama — Bangunan Permanen',
    description:
      'Bangunan direnovasi dari kayu dan bambu menjadi bangunan permanen/beton dengan desain arsitektur/tukang bangunan bernama Mbah Jumar dari Dusun Kalangan. Pada masa ini, banyak warga dari dalam maupun luar desa menimba ilmu di sini sehingga tempat ini terkenal sebagai "Madrasah Baitul Muttaqin".',
    details: ['Bangunan beton permanen', 'Desain oleh Mbah Jumar', 'Dikenal sebagai Madrasah Baitul Muttaqin'],
    color: 'green',
  },
  {
    year: '2002',
    title: 'Renovasi Kedua — Penyempurnaan',
    description:
      'Dengan semangat gotong royong, bangunan direnovasi kembali menjadi full permanen: mengganti genteng biasa dengan genteng beton, memasang plafon, dan penyempurnaan lainnya. Atap dibuat lebih megah sesuai keinginan tokoh masyarakat agar tempat sholat lebih tinggi dari bangunan rumah warga.',
    details: ['Genteng beton', 'Pemasangan plafon', 'Atap lebih megah & tinggi'],
    color: 'green',
  },
  {
    year: '4 Maret 2003',
    hijri: '1 Muharram 1424 H',
    title: 'Peresmian Resmi',
    description:
      'Tepat pada tanggal 4 Maret 2003 atau 1 Muharram 1424 H, Musholla Baitul Muttaqin diresmikan oleh Bupati Semarang periode 1999–2006, Bapak H. Bambang Guritno, S.E., M.M. Peresmian ini diabadikan dalam prasasti yang terpasang di bagian depan bangunan.',
    details: ['Diresmikan Bupati Semarang', 'H. Bambang Guritno, S.E., M.M.', 'Prasasti terpasang hingga kini'],
    color: 'amber',
    highlight: true,
  },
];

export default function History() {
  return (
    <section id="sejarah" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Perjalanan Waktu
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Sejarah Pendirian Musholla
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Dari bangunan kayu sederhana hingga menjadi musholla permanen yang kokoh — sebuah perjalanan panjang
            penuh semangat gotong royong dan keikhlasan.
          </p>
        </div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-green-200" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex flex-col sm:flex-row gap-6 sm:gap-8 ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-6 w-3 h-3 rounded-full bg-green-700 border-4 border-white shadow-md z-10" />

                {/* Date badge */}
                <div
                  className={`sm:w-1/2 pl-12 sm:pl-0 flex ${
                    index % 2 === 0 ? 'sm:justify-end sm:pr-8' : 'sm:justify-start sm:pl-8'
                  } items-start pt-4`}
                >
                  <div className="text-right">
                    <span
                      className={`inline-block font-bold text-lg px-4 py-1.5 rounded-full ${
                        item.color === 'amber'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {item.year}
                    </span>
                    {item.hijri && (
                      <div className="text-sm text-gray-500 mt-1">{item.hijri}</div>
                    )}
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`sm:w-1/2 pl-12 sm:pl-0 ${
                    index % 2 === 0 ? 'sm:pl-8' : 'sm:pr-8'
                  }`}
                >
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-sm border ${
                      item.highlight ? 'border-amber-200 shadow-amber-100' : 'border-gray-100'
                    }`}
                  >
                    {item.highlight && (
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-amber-500">★</span>
                        <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide">
                          Peresmian Resmi
                        </span>
                      </div>
                    )}
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
                    <ul className="space-y-1 mb-4">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-xs text-gray-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    {item.highlight && (
                      <div className="relative w-full h-36 rounded-xl overflow-hidden border border-amber-100">
                        <Image
                          src="/images/musholla-prasasti.png"
                          alt="Prasasti peresmian Musholla Baitul Muttaqin oleh Bupati Semarang H. Bambang Guritno"
                          fill
                          className="object-cover object-center"
                          sizes="400px"
                        />
                        <div className="absolute inset-0 bg-amber-900/10" />
                        <div className="absolute bottom-2 left-2 right-2">
                          <span className="text-[10px] bg-amber-900/70 text-amber-100 px-2 py-0.5 rounded-full font-medium">
                            Prasasti marmer yang terpasang hingga saat ini
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full history text */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-900 text-xl mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
            </span>
            Sejarah Lengkap
          </h3>
          <div className="prose prose-sm max-w-none text-gray-600 space-y-4 leading-relaxed">
            <p>
              Pendirian musholla ini berawal dari masyarakat yang pada saat itu semakin banyak orang yang tertarik
              untuk belajar dan mendalami nilai-nilai islam untuk meningkatkan pemahaman agama dan spiritualitas.
              Tokoh-tokoh muslim setempat berinisiatif untuk membentuk kegiatan keagamaan seperti belajar baca tulis
              al qur&apos;an, kajian bersama, diskusi, doa dan menciptakan atmosfer kebersamaan yang erat di antara
              warga desa.
            </p>
            <p>
              Kegiatan tersebut pada sebelumnya berjalan dengan baik dan dilakukan dirumah warga atau di tempat sholat
              kecil yang biasa disebut langgar. Dalam memaksimalkan kegiatan tersebut tentunya perlu tempat khusus agar
              bisa berjalan dengan baik. Atas inisiatif dari para tokoh dan aparat desa setempat, sekitar tahun 1960
              didirikanlah sebuah bangunan yang terdiri dari 3 bagian yaitu tempat sholat, tempat berkumpul dan kajian
              dan tempat belajar baca tulis al quran.
            </p>
            <p>
              Bangunan tersebut berdiri di atas tanah yang diwakafkan oleh <strong>Mbah Marinah</strong> yang dimana
              beliau adalah ibunda dari tokoh agama setempat yang bernama <strong>Bapak Rojikan</strong>. Bangunan
              tersebut dibangun dengan menggunakan kayu, papan dan genteng yang berasal dari swadaya masyarakat.
              Menurut masyarakat sekitar, tempat sholat dan TPA yang ada pada waktu itu masih beralaskan tanah
              sehingga dibuatkan anyaman bambu yang dianyam atau disusun sehingga membentuk persegi panjang yang
              dibawahnya diberi batu besar di keempat sisinya supaya warga bisa beraktifitas diatasnya dan warga sekitar
              biasa menyebutnya dengan &quot;<em>Dampar</em>&quot;. Seiring berjalannya waktu tempat tersebut diberikan tikar
              bermerk &quot;<em>mendong</em>&quot; agar bisa beraktifias dengan lebih nyaman.
            </p>
            <p>
              Setelah sekitar tahun 1990-an tempat tersebut direnovasi dari yang semula terbuat dari kayu dan bambu
              menjadi bangunan permanen/beton dengan desain seorang arsitektur/tukang bangunan yang bernama{' '}
              <strong>Mbah Jumar</strong> yang berasal dari dusun kalangan. Pada kala itu banyak sekali warga
              masyarakat sekitar bahkan dari luar desa menimba ilmu di tempat tersebut mulai dari anak-anak yang
              mulai belajar baca alquran, kegiatan kajian remaja sampai dengan pengajian ahad malam dan ahad legi
              siang hari sehingga tempat tersebut terkenal dengan nama <strong>madrasah atau madrosah Baitul
              Muttaqin</strong>.
            </p>
            <p>
              Dengan semangat gotong royong dan rasa tanggung jawab terhadap keberlanjutan kegiatan keagamaan, pada
              tahun 2002 bangunan tersebut direnovasi kembali dengan membuat bangunan menjadi full permanen, mengganti
              genteng biasa dengan genteng beton, memasang plafon dan lain-lain. Ada cerita masyarakat setempat bahwa
              tokoh masyarakat dahulu ingin jika tempat yang dibuat sholat itu selayaknya lebih tinggi atau setara dari
              bangunan rumah warga.
            </p>
            <p>
              Pada saat selesainya renovasi tepatnya tanggal <strong>4 Maret 2003 atau 1 Muharram 1424 H</strong>,
              tempat ini langsung diresmikan oleh bupati semarang periode 1999-2006 yaitu bapak{' '}
              <strong>H. Bambang Guritno, S.E., M.M.</strong> yang dimana kegiatan itu diabadikan dalam prasasti
              yang saat ini dipasang di depan bangunan dengan nama <strong>Musholla Baitul Muttaqin</strong>.
            </p>
            <p>
              Sampai saat ini tempat tersebut masih mengadakan kegiatan rutin dari jaman berdirinya musholla ini pada
              1960an sampai dengan saat ini yaitu TPA, kajian rutin ahad malam dan ahad legi siang dan kegiatan
              masyarakat lainnya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
