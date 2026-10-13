import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-blue-800">
      Selamat Datang di Praktikum Web 2
      </h1>
      <p className="mt-4 text-gray-600">
      Nama: [Sammy Anders Soesanto] — NIM: [52024007]
      </p>
      <Link
        href="/about"
        className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
      >
        Lihat Biodata
      </Link>
    </main>
  );
}