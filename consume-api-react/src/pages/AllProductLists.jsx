import Card from "../components/Card";


export default function AllProductLists({ products }) {
  // console.log("PROPS PRODUCTS:", products);
  // console.log("IS ARRAY?", Array.isArray(products));
  return (
    <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">
            Testing
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <Card key={item.id} product={item} />
          ))}
        </div>

    </div>
  );
}