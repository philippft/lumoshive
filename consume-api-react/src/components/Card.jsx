// import testImg from '../assets/testing1.jpg';
import Button from './Button';
import { Link } from "react-router-dom";


export default function Card ({ product, onDelete }) {
    // console.log(product);
    return (
      <div className="flex items-center flex-row p-4 bg-slate-800 text-sky-50 border rounded-xl h-full shadow-lg">
        <img
          src={product.image}
          alt="Testing"
          className="w-16 h-16 md:w-20 md:h-20 border rounded-full object-contain p-2 bg-white shrink-0"
        />

        <div className="flex flex-col flex-1 mx-4 min-w-0">
          <h1 className="text-sm md:text-base font-semibold mb-1 line-clamp-2 leading-tight">
            {product.title}
          </h1>
        </div>

        <div className="flex flex-col gap-3 ml-4 shrink-0">
          <Link to={`product/edit/${product.id}`} className="w-full">
            <Button
              className="bg-sky-600 hover:bg-sky-700 border rounded-md text-sm p-1 w-full"
              text="Edit"
            />
          </Link>
          <Button
            className="bg-rose-700 hover:bg-rose-800 border rounded-md text-sm p-1"
            text="Delete"
            onClick={() => onDelete(product.id)}
          />
          <Link to={`/product/${product.id}`}>
            <Button
              className="bg-sky-600 hover:bg-sky-700 border rounded-md text-xs p-1"
              text="Detail Info"
            ></Button>
          </Link>
        </div>
      </div>
    );
}