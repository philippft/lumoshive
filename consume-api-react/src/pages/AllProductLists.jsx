import Card from "../components/Card";


export default function AllProductLists({ products, onDelete }) {
  // console.log("PROPS: ", products);
  return (
    <div className="p-6 bg-slate-600">
      <h1 className="text-2xl font-bold mb-2 text-white">Produk API</h1>
      <span className="text-lg font-bold bg-slate-800 border border-white rounded-lg text-white p-1">Banyak Produk: {products.length}</span>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {products.map((item) => (
          <Card key={item.id} product={item} onDelete={onDelete}/>
        ))}
      </div>
    </div>
  );
}