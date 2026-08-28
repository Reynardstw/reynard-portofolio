# WebPorto

Portfolio satu halaman berbasis Next.js, TypeScript, dan Tailwind CSS. Konten situs dipisahkan dari komponen tampilan agar mudah diganti.

## Menjalankan lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Mengganti konten

Edit `src/data/portfolio.ts`. Konten Indonesia dan Inggris berada dalam objek `id` dan `en`. Ganti CV di folder `public` bila ada versi terbaru.

Untuk menambah proyek, tambahkan satu objek baru ke `projectCatalog`. Sediakan teks `id` dan `en`; kartu, nomor urut, tautan, dan layout responsif akan dibuat otomatis.

Simpan screenshot proyek di `public/projects`, lalu tambahkan `image: { src: "/projects/nama-file.png", alt: { id: "...", en: "..." } }` pada objek proyek. Tanpa gambar, kartu akan menampilkan placeholder otomatis.

## Deploy ke Vercel

Push repository ke GitHub, impor repository tersebut di Vercel, lalu deploy dengan konfigurasi bawaan Next.js.

## Struktur

```text
src/
├── app/          halaman, metadata, dan global style
├── components/   komponen tampilan
├── data/         seluruh konten portfolio
└── types/        kontrak data TypeScript
```
