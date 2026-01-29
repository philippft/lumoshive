import Button from "../components/Button"
import Input from "../components/Input"

export default function AddProductPage () {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] p-6">
            <h1 className="bg-slate-700 p-2 w-112 text-center text-white text-2xl fborder rounded-md ont-bold mb-8">Add Product Page</h1>

            <form className="w-full max-w-md flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-md border border-slate-100">
                <Input type="text" placeholder="Masukan Nama Barang" pText="Nama Barang: "/>
                <Input type="number" placeholder="Masukan Harga Barang" pText="Harga Barang: "/>
                
                <Button text="Tambah Barang" className="bg-slate-700 hover:bg-slate-800 border border-transparent rounded-lg py-3 text-white font-semibold transition-all mt-2" />
            </form>
        </div>
    )
}