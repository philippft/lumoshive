import AllProductCard from "../components/AllProductCard";

export default function AllProductsPage() {
    return (
      <div className="mt-25 min-h-screen w-full bg-white">
        <div className="font-saira flex flex-col justify-center items-center gap-5">
          <h1 className="text-4xl font-semibold">All Product</h1>
          <p className="flex text-center text-base font-normal">
            The products we provide only for you as our service are selected <br />
            from the best products with number 1 quality in the world
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10 mt-10">
            <AllProductCard />
            <AllProductCard />
            <AllProductCard />
            <AllProductCard />
        </div>
      </div>
    );
}