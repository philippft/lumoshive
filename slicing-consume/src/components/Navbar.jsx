
export default function Navbar() {
    return (
      <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-8 bg-transparent">
        <div className="mt-3 ml-5 text-white text-[36px] font-bold font-inter tracking-tight">
          FurniShop
        </div>

        <ul className="flex space-x-10 text-white/90 gap-9 font-medium font-inter mr-13">
          <li className="hover:text-white cursor-pointer transition-colors">
            Home
          </li>
          <li className="hover:text-white cursor-pointer transition-colors">
            About
          </li>
          <li className="hover:text-white cursor-pointer transition-colors">
            Features
          </li>
          <li className="hover:text-white cursor-pointer transition-colors">
            Contact
          </li>
        </ul>
      </nav>
    );
}