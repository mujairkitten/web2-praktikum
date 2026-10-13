export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Biodata Mahasiswa
        </h1>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Nama</p>
            <p className="text-lg font-semibold text-gray-800">Sammy Anders Soesanto</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">NIM</p>
            <p className="text-lg font-semibold text-gray-800">52024007</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Motivasi Mengikuti Mata Kuliah</p>
            <p className="text-gray-700 leading-relaxed">
              Saya ingin memahami dasar pengembangan web modern agar bisa
              membuat aplikasi yang bermanfaat.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}