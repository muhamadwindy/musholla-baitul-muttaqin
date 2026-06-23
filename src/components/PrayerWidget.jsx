'use client';

import { useState, useEffect } from 'react';

const PRAYERS = [
  { key: 'Imsak',   label: 'Imsak'   },
  { key: 'Fajr',    label: 'Subuh'   },
  { key: 'Dhuhr',   label: 'Dzuhur'  },
  { key: 'Asr',     label: 'Ashar'   },
  { key: 'Maghrib', label: 'Maghrib' },
  { key: 'Isha',    label: 'Isya'    },
];

function getNextPrayer(timings) {
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  for (const p of PRAYERS.slice(1)) {
    const [h, m] = (timings[p.key] || '00:00').split(':').map(Number);
    if (h * 60 + m > nowMinutes) return p.label;
  }
  return 'Subuh';
}

export default function PrayerWidget() {
  const [data, setData] = useState(null);
  const [nextPrayer, setNextPrayer] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    fetch(
      `https://api.aladhan.com/v1/timingsByCity/${dd}-${mm}-${yyyy}?city=Semarang&country=Indonesia&method=8`
    )
      .then((r) => r.json())
      .then((json) => {
        if (json.code === 200) {
          setData(json.data);
          setNextPrayer(getNextPrayer(json.data.timings));
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true));
  }, []);

  if (error) return null;

  const hijri = data?.date?.hijri;
  const timings = data?.date ? data.timings : null;

  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/25 rounded-2xl p-4 text-white min-w-[200px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-white/20">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-green-300">
            Jadwal Sholat
          </p>
          <p className="text-[10px] text-green-200 mt-0.5">Muhammadiyah · Kab. Semarang</p>
        </div>
        {hijri && (
          <div className="text-right">
            <p className="text-[10px] text-amber-300 font-semibold leading-tight">
              {hijri.day} {hijri.month.en.split(' ')[0]}
            </p>
            <p className="text-[10px] text-green-200">{hijri.year} H</p>
          </div>
        )}
      </div>

      {/* Prayer times */}
      {timings ? (
        <ul className="space-y-1.5">
          {PRAYERS.map(({ key, label }) => {
            const isNext = label === nextPrayer;
            return (
              <li
                key={key}
                className={`flex items-center justify-between rounded-lg px-2.5 py-1.5 transition-all ${
                  isNext
                    ? 'bg-amber-400/20 border border-amber-400/40'
                    : 'hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2">
                  {isNext && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  )}
                  {!isNext && <span className="w-1.5 h-1.5 flex-shrink-0" />}
                  <span
                    className={`text-xs font-medium ${
                      isNext ? 'text-amber-300' : 'text-green-100'
                    }`}
                  >
                    {label}
                  </span>
                  {isNext && (
                    <span className="text-[9px] bg-amber-400 text-green-900 font-bold px-1.5 py-0.5 rounded-full leading-none">
                      Berikutnya
                    </span>
                  )}
                </div>
                <span
                  className={`text-xs font-bold tabular-nums ${
                    isNext ? 'text-amber-300' : 'text-white'
                  }`}
                >
                  {timings[key]}
                </span>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="space-y-2">
          {PRAYERS.map(({ label }) => (
            <div key={label} className="flex justify-between px-2.5">
              <span className="text-xs text-green-300">{label}</span>
              <span className="text-xs text-white/40 animate-pulse">--:--</span>
            </div>
          ))}
        </div>
      )}

      {/* KHGT link */}
      <a
        href="https://khgt.muhammadiyah.or.id/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 pt-2.5 border-t border-white/20 flex items-center justify-between group"
      >
        <span className="text-[10px] text-green-300 group-hover:text-white transition-colors">
          Kalender KHGT Muhammadiyah
        </span>
        <svg
          className="w-3 h-3 text-green-400 group-hover:text-white transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </div>
  );
}
