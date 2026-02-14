import Button from '../components/Button'


export default function Search () {
    return (
      <section className="-mt-7 flex justify-center gap-3">
        <input
          type="text"
          placeholder="Tambah Tugas Baru"
          className="w-full max-w-184 p-4 rounded-lg border border-gray-300 bg-white"
        />
        <Button className="flex items-center justify-center gap-2 w-27.75 bg-[#1E6F9F] text-white rounded-lg " text="Tambah" tambah="tambah" />
      </section>
    );
}