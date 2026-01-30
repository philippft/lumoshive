import Card from "../components/Card";


export default function AllProductLists({ products, onDelete }) {
  // console.log("PROPS: ", products);
  return (
    <div className="p-6 bg-slate-600">
      <h1 className="text-2xl font-bold mb-6 text-white">Testing</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <Card key={item.id} product={item} onDelete={onDelete}/>
        ))}
      </div>
    </div>
  );
}