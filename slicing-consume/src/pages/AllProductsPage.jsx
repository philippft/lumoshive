import AllProductCard from "../components/AllProductCard";
import Pagination from "../components/Pagination";

export default function AllProductsPage({ data }) {
  console.log("data all products page:", data);

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
          {data?.map ((product)=>(
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
          <Pagination current="1" total="5" onChange={(page) => console.log("Halaman ke:", page)} />
        </div>
      </div>
    );
}