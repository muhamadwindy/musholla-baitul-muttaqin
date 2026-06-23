import Image from 'next/image';

const quickLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Sejarah', href: '#sejarah' },
  { label: 'Program Kegiatan', href: '#program' },
  { label: 'Infaq', href: '#infaq' },
  { label: "I'tikaf & Musafir", href: '#itikaf' },
  { label: 'Lokasi', href: '#lokasi' },
];

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Musholla Baitul Muttaqin"
                width={140}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-green-200 text-sm leading-relaxed mb-4">
              Pusat kegiatan Islam dan tempat ibadah masyarakat Dusun Karang sejak 1960. Berdiri di atas
              semangat gotong royong dan nilai kebersamaan warga.
            </p>
            <p className="text-green-300 text-xs">
              Diresmikan 4 Maret 2003 / 1 Muharram 1424 H<br />
              oleh Bupati Semarang H. Bambang Guritno, S.E., M.B.A.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigasi</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-green-200 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Kontak & Lokasi</h3>
            <address className="not-italic text-green-200 text-sm leading-relaxed mb-4">
              Dusun Karang, RT.02, RW.02<br />
              Kel. Ujung-Ujung, Kec. Pabelan<br />
              Kab. Semarang, 50771
            </address>
            <a
              href="https://wa.me/6287834500246"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-200 hover:text-white text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              +62 878-3450-0246
            </a>
            <div className="mt-3">
              <a
                href="https://maps.app.goo.gl/QxmXh5rehBFqYV7HA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-200 hover:text-white text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Lihat di Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-green-400 text-xs">
            © {new Date().getFullYear()} Musholla Baitul Muttaqin. Semua hak dilindungi.
          </p>
          <p className="text-green-500 text-xs">
            Dusun Karang · Ujung-Ujung · Pabelan · Kab. Semarang
          </p>
        </div>
      </div>
    </footer>
  );
}
