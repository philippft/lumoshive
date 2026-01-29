// import testImg from '../assets/testing1.jpg';
import Button from './Button';
import { Link } from "react-router-dom";


export default function Card ({product}) {
    // console.log(product);
    return (
        <div className="flex items-center flex-row p-4 bg-slate-800 text-sky-50 border rounded-xl">
            <img src={product.image} alt="Testing" className="w-24 h-24 border rounded-full"/>

            <div className="flex flex-col min-w-[125px] m-4">
                <h1 className="text-xl font-semibold mb-1">{product.title}</h1>
                <p className="">Info</p>
            </div>
            
            <div className="flex flex-col gap-3 ml-4">
                <Button className="bg-sky-600 hover:bg-sky-700 border rounded-md text-sm p-1" text="Edit"/>
                <Button className="bg-rose-700 hover:bg-rose-800 border rounded-md text-sm p-1" text="Delete"/>
                <Link to={`/product/${product.id}`}>
                    <Button className="bg-sky-600 hover:bg-sky-700 border rounded-md text-xs p-1" text="Detail Info"></Button>
                </Link>
            </div>
            
        </div>
    )
}