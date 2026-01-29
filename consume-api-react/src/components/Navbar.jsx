import { Link, NavLink } from "react-router-dom";

export default function Navbar () { 
  return (
    <nav className="bg-slate-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-wide hover:text-slate-300">
          FakeStore CRUD
        </Link>

        <div className="flex gap-6">
          <NavLink to="/" className={({ isActive }) => `hover:text-slate-300 transition ${ isActive ? "font-semibold underline" : "" }`}>
            Lihat Produk
          </NavLink>

          <NavLink to="/products/add" className={({ isActive }) => `hover:text-slate-300 transition ${ isActive ? "font-semibold underline" : "" }`}>
            Tambah Produk
          </NavLink>
        </div>
      </div>
    </nav>
  );
};


