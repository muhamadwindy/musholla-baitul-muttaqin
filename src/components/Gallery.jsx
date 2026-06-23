'use client';

import { useState } from 'react';
import Image from 'next/image';

const photos = [
  {
    src: '/images/musholla-eksterior-1.png',
    alt: 'Tampak depan Musholla Baitul Muttaqin',
    caption: 'Tampak Depan Musholla',
    desc: 'Bangunan musholla yang kokoh dengan arsitektur khas',
    col: 'col-span-1',
    row: 'row-span-1',
    height: 'h-52 sm:h-64',
  },
  {
    src: '/images/musholla-iduladha.png',
    alt: 'Kegiatan Idul Adha bersama warga',
    caption: 'Kegiatan Idul Adha',
    desc: 'Gotong royong warga dalam kegiatan kurban Idul Adha',
    col: 'col-span-1',
    row: 'row-span-1',
    height: 'h-52 sm:h-64',
  },
  {
    src: '/images/musholla-sholat-berjamaah.png',
    alt: 'Jamaah shalat berjamaah di dalam musholla',
    caption: 'Shalat Berjamaah',
    desc: 'Jamaah yang khusyuk menunaikan shalat berjamaah',
    col: 'col-span-2',
    row: 'row-span-1',
    height: 'h-52 sm:h-64',
  },
  {
    src: '/images/musholla-eksterior-2.png',
    alt: 'Tampak depan musholla dari sudut lain',
    caption: 'Suasana Musholla',
    desc: 'Tampak depan musholla dengan halaman yang bersih dan asri',
    col: 'col-span-2',
    row: 'row-span-1',
    height: 'h-52 sm:h-64',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="galeri" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Galeri
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Suasana Musholla
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Musholla Baitul Muttaqin yang asri dan aktif — tempat berkumpul, beribadah, dan mempererat
            ukhuwah islamiyah warga Dusun Karang.
          </p>
        </div>

        {/* Main photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setLightbox(photo)}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 ${photo.col} ${photo.height}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-bold text-sm">{photo.caption}</p>
                <p className="text-green-200 text-xs mt-0.5 hidden sm:block">{photo.desc}</p>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Prasasti peresmian — featured card */}
        <button
          onClick={() =>
            setLightbox({
              src: '/images/musholla-prasasti.png',
              alt: 'Prasasti peresmian Musholla Baitul Muttaqin oleh Bupati Semarang',
              caption: 'Prasasti Peresmian Resmi',
              desc: 'Prasasti marmer yang dipasang sejak peresmian 4 Maret 2003 / 1 Muharram 1424 H oleh H. Bambang Guritno, S.E., M.B.A.',
            })
          }
          className="w-full group focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-2xl"
        >
          <div className="relative overflow-hidden rounded-2xl border-2 border-amber-200 bg-amber-50 flex flex-col sm:flex-row gap-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
            {/* Photo side */}
            <div className="relative w-full sm:w-1/2 h-56 sm:h-72 flex-shrink-0 overflow-hidden">
              <Image
                src="/images/musholla-prasasti.png"
                alt="Prasasti peresmian Musholla Baitul Muttaqin"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-amber-50/20 sm:block hidden" />
            </div>

            {/* Text side */}
            <div className="flex-1 p-6 sm:p-8 text-left flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full border border-amber-200">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Prasasti Resmi
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Prasasti Peresmian<br />
                <span className="text-amber-700">oleh Bupati Semarang</span>
              </h3>

              <div className="space-y-2 mb-5">
                <p className="text-gray-700 text-sm leading-relaxed font-medium tracking-wide uppercase">
                  Musholla Baitul Muttaqin<br />
                  Karang · Ujung-Ujung · Pabelan
                </p>
                <div className="border-t border-amber-200 pt-2">
                  <p className="text-amber-800 text-sm font-semibold">
                    Diresmikan Bupati Semarang
                  </p>
                  <p className="text-gray-600 text-sm">
                    1 Muharram 1424 H / 4 Maret 2003 M
                  </p>
                  <p className="text-gray-800 text-sm font-bold mt-1">
                    H. Bambang Guritno, S.E., M.B.A.
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 text-amber-700 text-sm font-semibold group-hover:gap-2.5 transition-all">
                Lihat prasasti
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </button>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ paddingBottom: '60%' }}>
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white font-bold text-lg">{lightbox.caption}</p>
              <p className="text-gray-300 text-sm mt-1">{lightbox.desc}</p>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Tutup"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
