# 🌿 Tenang

**Tenang** adalah Progressive Web App (PWA) yang membantu pengguna usia 15–30 tahun membangun kesadaran dan mengurangi doom scrolling. Semua data tersimpan **100% lokal** — tanpa akun, tanpa server, tanpa tracking.

---

## Cara Menjalankan

```bash
# Masuk ke folder
cd tenang

# Install dependensi
npm install

# Jalankan development server
npm run dev

# Build untuk produksi
npm run build

# Jalankan tests
npm test
```

---

## Struktur Proyek

```
src/
├── components/
│   ├── ui/           # Primitif: Button, Card, Modal, Slider, MoodPicker, dll
│   └── layout/       # PageShell, BottomNav, TopBar
├── features/
│   ├── onboarding/   # Alur onboarding 4 langkah
│   ├── dashboard/    # Dashboard harian
│   ├── session/      # Session Timer dengan notifikasi
│   ├── manual-log/   # Pencatatan manual
│   ├── stats/        # Statistik & chart
│   ├── focus/        # Mode Fokus (Fase 2)
│   ├── settings/     # Pengaturan
│   └── more/         # Menu lainnya + privasi
├── hooks/            # useTheme, useNotification
├── i18n/             # id.ts (default), struktur siap en.ts (Fase 5)
├── lib/              # dateUtils, seedData, dailyRecord
├── storage/          # Dexie/IndexedDB schema
├── store/            # Zustand: userStore, timerStore, statsStore
├── test/             # Vitest unit tests
└── types/            # TypeScript interfaces
```

---

## Fitur yang Sudah Ada (Fase 1)

| Fitur | Status |
|---|---|
| Onboarding 4 langkah (tujuan, batas, jam rawan, konfirmasi) | ✅ |
| Seed data demo | ✅ |
| Dashboard harian (limit, streak, summary, sapaan) | ✅ |
| Session Timer (niat, durasi, countdown, notifikasi) | ✅ |
| Pencatatan manual (durasi + mood) | ✅ |
| Statistik (harian/mingguan/bulanan, heatmap jam) | ✅ |
| Pengaturan (nama, limit, tema, hapus data) | ✅ |
| Dark mode + Light mode + System | ✅ |
| PWA (installable, offline-ready) | ✅ |
| i18n siap (Bahasa Indonesia, stub English) | ✅ |
| Aksesibilitas (ARIA, keyboard nav, reduced-motion) | ✅ |

## Roadmap

- **Fase 2**: Mindful Pause, Latihan Napas, Teknik Grounding, Mode Fokus, Digital Sunset
- **Fase 3**: Bank Aktivitas, Jurnal, Gamifikasi, Tantangan Mingguan
- **Fase 4**: Feed Berujung, Kuis, Halaman Edukasi
- **Fase 5**: Ekspor/Impor data, Laporan Mingguan, Terjemahan English

---

## Tech Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** – desain sage green, mobile-first
- **Zustand** – state management (persisted ke localStorage)
- **Dexie** (IndexedDB) – penyimpanan sesi & statistik
- **Recharts** – grafik statistik
- **Framer Motion** – animasi & transisi halaman
- **React Router v6** – routing
- **vite-plugin-pwa** – PWA dengan Workbox
- **Vitest** + **React Testing Library** – unit tests

---

## Privasi

> Semua data tersimpan hanya di perangkat pengguna. Tidak ada request ke server eksternal. Tidak ada tracking pihak ketiga.
