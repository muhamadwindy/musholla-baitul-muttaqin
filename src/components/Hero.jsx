'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import PrayerWidget from './PrayerWidget';

const hadiths = [
  {
    arabic:
      'إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ وَأَقَامَ الصَّلَاةَ وَآتَى الزَّكَاةَ',
    translation:
      'Sesungguhnya yang memakmurkan masjid-masjid Allah hanyalah orang yang beriman kepada Allah dan hari akhir, serta tetap mendirikan shalat dan menunaikan zakat...',
    source: 'QS. At-Taubah [9]: 18',
    type: 'Al-Quran',
  },
  {
    arabic: 'مَنْ بَنَى مَسْجِدًا لِلَّهِ بَنَى اللَّهُ لَهُ فِي الْجَنَّةِ مِثْلَهُ',
    translation:
      'Barangsiapa membangun sebuah masjid karena Allah, maka Allah akan membangunkan untuknya yang semisalnya di surga.',
    source: 'HR. Bukhari & Muslim',
    type: 'Hadits Shahih',
  },
  {
    arabic: 'رَجُلٌ قَلْبُهُ مُعَلَّقٌ بِالْمَسَاجِدِ',
    translation:
      'Di antara tujuh golongan yang mendapat naungan Allah di hari kiamat adalah "seorang laki-laki yang hatinya selalu terpaut dan mencintai masjid."',
    source: 'HR. Bukhari & Muslim',
    type: 'Hadits Shahih',
  },
  {
    arabic:
      'مَا تَوَضَّأَ أَحَدُكُمْ فَأَحْسَنَ وُضُوءَهُ ثُمَّ خَرَجَ إِلَى الْمَسْجِدِ إِلَّا كَانَ بِكُلِّ خَطْوَةٍ يَرْفَعُ بِهَا دَرَجَةً',
    translation:
      'Tidaklah seseorang berwudhu dengan sempurna lalu keluar menuju masjid, melainkan dengan setiap langkahnya Allah mengangkat satu derajatnya dan menghapus satu kesalahannya.',
    source: 'HR. Muslim',
    type: 'Hadits Shahih',
  },
];

const highlights = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    label: 'TPA Aktif',
    sub: 'Belajar Al-Quran',
    href: '#program',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Kajian Rutin',
    sub: 'Ahad Malam & Legi',
    href: '#program',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    label: "I'tikaf",
    sub: 'Terbuka & Welcome',
    href: '#itikaf',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    label: 'Tempat Bermalam',
    sub: 'Gratis untuk Musafir',
    href: '#itikaf',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
    label: 'Ramah Musafir',
    sub: 'Singgah & Istirahat',
    href: '#itikaf',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Infaq Terbuka',
    sub: 'Transparan & Amanah',
    href: '#infaq',
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i) => {
    setActive(i);
    setAnimKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((prev) => {
        setAnimKey((k) => k + 1);
        return (prev + 1) % hadiths.length;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden"
    >
      {/* ── Background photo ── */}
      <div className="absolute inset-0">
        <Image
          src="/images/musholla-eksterior-2.jpg"
          alt="Musholla Baitul Muttaqin"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Green gradient overlay — maintains brand while showing photo */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/82 to-green-700/78" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 via-transparent to-transparent" />
      </div>

      {/* ── Islamic pattern overlay ── */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <polygon points="40,0 80,20 80,60 40,80 0,60 0,20" fill="none" stroke="white" strokeWidth="1" />
              <circle cx="40" cy="40" r="8" fill="none" stroke="white" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-10 flex flex-col gap-8">

        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="Musholla Baitul Muttaqin"
            width={280}
            height={100}
            className="h-24 w-auto drop-shadow-2xl"
            priority
          />
        </div>

        {/* ── Main content + Prayer times ── */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">

          {/* Left: title + CTAs */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-3">
              <span
                className="text-amber-300 text-3xl sm:text-4xl drop-shadow-lg"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                بَيْتُ الْمُتَّقِيْن
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3 drop-shadow-lg">
              Musholla
              <span className="block text-amber-300">Baitul Muttaqin</span>
            </h1>
            <p className="text-green-100 text-sm sm:text-base mb-1.5">
              Rumah ibadah dan pusat kegiatan Islam masyarakat sejak 1960
            </p>
            <p className="text-green-200 text-xs sm:text-sm flex items-center justify-center lg:justify-start gap-1.5 mb-6">
              <svg className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Dusun Karang, RT.02/RW.02, Ujung-Ujung, Pabelan, Kab. Semarang
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="#sejarah"
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-green-900 font-semibold px-6 py-3 rounded-xl transition-all transform hover:scale-105 shadow-lg text-sm"
              >
                Lihat Sejarah
              </a>
              <a
                href="#lokasi"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-xl transition-all text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Lihat Lokasi
              </a>
              <a
                href="https://tarjih.or.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm"
              >
                <svg className="w-4 h-4 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Kalender KHGT
              </a>
            </div>
          </div>

          {/* Right: Prayer times widget */}
          <div className="w-full lg:w-auto lg:flex-shrink-0">
            <PrayerWidget />
          </div>
        </div>

        {/* ── Quick highlights ── */}
        <div>
          <p className="text-center text-green-300 text-xs font-semibold uppercase tracking-widest mb-3">
            Fasilitas &amp; Program
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
            {highlights.map((h) => (
              <a
                key={h.label}
                href={h.href}
                className="flex flex-col items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-2 py-3 text-center transition-all group"
              >
                <div className="text-amber-300 group-hover:text-amber-200 transition-colors">
                  {h.icon}
                </div>
                <span className="text-white text-xs font-semibold leading-tight">{h.label}</span>
                <span className="text-green-200 text-[10px] leading-tight hidden sm:block">{h.sub}</span>
              </a>
            ))}
          </div>
        </div>

        {/* ── Hadith carousel ── */}
        <div
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 sm:p-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
              {hadiths[active].type}
            </span>
            <span className="text-green-300 text-xs">{hadiths[active].source}</span>
          </div>

          <div key={animKey} className="hadith-animate">
            <p
              className="text-amber-200 text-base sm:text-lg leading-loose mb-3 text-right"
              style={{ fontFamily: 'Georgia, serif', direction: 'rtl' }}
            >
              {hadiths[active].arabic}
            </p>
            <p className="text-green-100 text-sm leading-relaxed italic">
              &ldquo;{hadiths[active].translation}&rdquo;
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 mt-4">
            {hadiths.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Hadith ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === active ? 'w-6 h-2 bg-amber-400' : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
