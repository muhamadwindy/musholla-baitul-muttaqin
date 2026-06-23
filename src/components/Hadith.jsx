const hadiths = [
  {
    type: 'Ayat Al-Quran',
    source: 'QS. At-Taubah [9]: 18',
    arabic:
      'إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ وَأَقَامَ الصَّلَاةَ وَآتَى الزَّكَاةَ وَلَمْ يَخْشَ إِلَّا اللَّهَ ۚ فَعَسَىٰ أُولَٰئِكَ أَن يَكُونُوا مِنَ الْمُهْتَدِينَ',
    translation:
      '"Sesungguhnya yang memakmurkan masjid-masjid Allah hanyalah orang yang beriman kepada Allah dan hari akhir, serta tetap mendirikan shalat, menunaikan zakat, dan tidak takut kepada siapapun selain kepada Allah. Maka mudah-mudahan mereka termasuk orang-orang yang mendapat petunjuk."',
    color: 'amber',
  },
  {
    type: 'Hadits Shahih',
    source: 'HR. Bukhari & Muslim',
    arabic: 'مَنْ بَنَى مَسْجِدًا لِلَّهِ بَنَى اللَّهُ لَهُ فِي الْجَنَّةِ مِثْلَهُ',
    translation:
      '"Barangsiapa membangun sebuah masjid karena Allah, maka Allah akan membangunkan untuknya yang semisalnya di surga."',
    color: 'green',
  },
  {
    type: 'Hadits Shahih',
    source: 'HR. Bukhari & Muslim',
    arabic: 'رَجُلٌ قَلْبُهُ مُعَلَّقٌ بِالْمَسَاجِدِ',
    translation:
      'Di antara tujuh golongan yang mendapat naungan Allah di hari kiamat — ketika tidak ada naungan selain naungan-Nya — adalah "seorang laki-laki yang hatinya selalu terpaut dan mencintai masjid."',
    color: 'green',
  },
  {
    type: 'Hadits Shahih',
    source: 'HR. Muslim',
    arabic:
      'مَا تَوَضَّأَ أَحَدُكُمْ فَأَحْسَنَ وُضُوءَهُ ثُمَّ خَرَجَ إِلَى الْمَسْجِدِ، لَا يُخْرِجُهُ إِلَّا الصَّلَاةُ، إِلَّا كَانَ بِكُلِّ خَطْوَةٍ يَخْطُوهَا يَرْفَعُ بِهَا دَرَجَةً، وَيَحُطُّ عَنْهُ بِهَا خَطِيئَةً',
    translation:
      '"Tidaklah salah seorang dari kalian berwudhu dengan sempurna kemudian keluar menuju masjid — dengan tidak ada yang mendorongnya kecuali shalat — melainkan dengan setiap langkahnya Allah mengangkat satu derajatnya dan menghapus satu kesalahannya."',
    color: 'green',
  },
];

const cardColors = {
  amber: {
    badge: 'bg-amber-100 text-amber-700',
    border: 'border-amber-200',
    arabicBg: 'bg-amber-50',
  },
  green: {
    badge: 'bg-green-100 text-green-700',
    border: 'border-green-100',
    arabicBg: 'bg-green-50',
  },
};

export default function Hadith() {
  return (
    <section id="keutamaan" className="py-20 bg-green-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hadith-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <polygon points="30,0 60,15 60,45 30,60 0,45 0,15" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hadith-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-amber-300 font-semibold text-sm uppercase tracking-widest mb-3">
            Dalil & Keutamaan
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Memakmurkan Masjid dalam Al-Quran & Hadits
          </h2>
          <p className="text-green-200 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Allah dan Rasul-Nya ﷺ menjanjikan ganjaran yang luar biasa bagi siapa saja yang ikut memakmurkan
            rumah Allah. Mari kita menjadi bagian dari orang-orang yang dicintai Allah.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {hadiths.map((item, index) => {
            const colors = cardColors[item.color];
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 border ${colors.border} flex flex-col gap-4`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.badge}`}>
                    {item.type}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">{item.source}</span>
                </div>

                <div className={`rounded-xl p-4 ${colors.arabicBg} text-right`}>
                  <p
                    className="text-gray-800 leading-loose text-lg"
                    style={{ fontFamily: 'Georgia, serif', direction: 'rtl' }}
                  >
                    {item.arabic}
                  </p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed italic">{item.translation}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 text-center">
          <p className="text-amber-300 text-lg font-arabic italic mb-2" style={{ direction: 'rtl' }}>
            وَمَنْ أَحْسَنُ قَوْلًا مِّمَّن دَعَا إِلَى اللَّهِ وَعَمِلَ صَالِحًا
          </p>
          <p className="text-green-100 text-sm">
            &quot;Siapakah yang lebih baik perkataannya daripada orang yang menyeru kepada Allah dan mengerjakan
            amal yang saleh...&quot; — QS. Fussilat [41]: 33
          </p>
        </div>
      </div>
    </section>
  );
}
