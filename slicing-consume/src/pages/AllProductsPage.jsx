import AllProductCard from "../components/AllProductCard";
import Pagination from "../components/Pagination";

export default function AllProductsPage({ data, onChange }) {
  console.log("data all products page:", data);
  if (!data) {
    return <div>Loading...</div>;
  }
    return (
      <div className="mt-25 min-h-screen w-full bg-white">
        <div className="font-saira flex flex-col justify-center items-center gap-5">
          <h1 className="text-4xl font-semibold">All Product</h1>
          <p className="flex text-center text-base font-normal">
            The products we provide only for you as our service are selected <br />
            from the best products with number 1 quality in the world
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10 mt-12">
          {data?.products.map ((product)=>(
            <AllProductCard 
              key={product.id}
              img={product.image}
              title={product.title}
              price={product.price}
              priceDiscount={product.price_after_discount}
            />
          ))}
        </div>

        <div>
          <Pagination current={data?.page} total={data?.totalPages} onChange={onChange} />
        </div>
      </div>
    );
}