import Card from "../components/Card";
import Modal from "../components/Modal";


export default function AllProductLists({ products, onDelete, modalConfig, setModalConfig }) {
  // console.log("PROPS: ", products);
  return (
    <div className="p-6 bg-slate-600">
      <h1 className="text-2xl font-bold mb-2 text-white">Produk API</h1>
      <span className="text-lg font-bold bg-slate-800 border border-white rounded-lg text-white p-1">
        Banyak Produk: {products.length}
      </span>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 sm:grid-cols-2">
        {products.map((item) => (
          <Card
            key={item.id}
            product={item}
            onDelete={() =>
              setModalConfig({
                isOpen: true,
                mode: "delete",
                title: "Konfirmasi Hapus",
                message: `Apakah Anda yakin ingin menghapus produk ${item.title}?`,
                onConfirm: () => onDelete(item.id),
              })
            }
          />
        ))}
      </div>

      <Modal
        isOpen={modalConfig.isOpen}
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
        {...modalConfig}
        onDelete={onDelete}
      />
    </div>
  );
}