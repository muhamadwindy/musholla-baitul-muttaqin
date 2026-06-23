'use client';

import { useState } from 'react';
import Image from 'next/image';

const photos = [
  {
    src: '/images/musholla-eksterior-1.jpg',
    alt: 'Tampak depan Musholla Baitul Muttaqin',
    caption: 'Tampak Depan Musholla',
    desc: 'Bangunan musholla yang kokoh dengan arsitektur khas',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/musholla-iduladha.jpg',
    alt: 'Kegiatan Idul Adha bersama warga di Musholla Baitul Muttaqin',
    caption: 'Kegiatan Idul Adha',
    desc: 'Gotong royong warga dalam kegiatan kurban Idul Adha',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/musholla-sholat-berjamaah.jpg',
    alt: 'Jamaah shalat berjamaah di dalam musholla',
    caption: 'Shalat Berjamaah',
    desc: 'Jamaah yang khusyuk menunaikan shalat berjamaah',
    span: 'col-span-1 row-span-1 sm:col-span-2',
  },
  {
    src: '/images/musholla-eksterior-2.jpg',
    alt: 'Tampak depan musholla dari sudut lain',
    caption: 'Suasana Musholla',
    desc: 'Tampak depan musholla dengan halaman yang bersih dan asri',
    span: 'col-span-1 row-span-1 sm:col-span-2',
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

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setLightbox(photo)}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 ${photo.span}`}
              style={{ minHeight: '200px' }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-bold text-sm">{photo.caption}</p>
                <p className="text-green-200 text-xs mt-0.5 hidden sm:block">{photo.desc}</p>
              </div>
              {/* Zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden"
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
