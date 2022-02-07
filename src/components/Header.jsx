import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon
} from "@heroicons/react/outline"

function Header() {
  return (
    <header className="sticky">
      {/* Top Bar */}
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
          {/* Left - Icon*/}
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
              <Image 
                src="https://links.papareact.com/f90"
                width={150}
                height={40}
                objectFit="contain"
                className="cursor-pointer"                  
              />
          </div>
          {/* Center - Search*/}
          <div className="hidden sm:flex cursor-pointer flex-grow items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500">
            <input type="text" className="px-4 focus:outline-none rounded-l-md p-2 w-6 flex-grow flex-shrink"/>
            <SearchIcon className="h-12 p-4" />
          </div>
          {/* Right - Cart */}
          <div className="whitespace-nowrap mx-6 space-x-6 flex items-center text-white text-xs">
            <div className="link">
              <p>Hello kisser</p>
              <p className=" font-extrabold md:text-sm">Account & Lists</p>
            </div>
            <div className="link">
              <p>Return</p>
              <p className=" font-extrabold md:text-sm">& Orders</p>
            </div>
            <div className="relative link flex items-center">
              <span className="absolute top-0 right-0 md:right-10 bg-yellow-400 w-4 h-4 rounded-full text-center text-black font-bold">0</span>
              <ShoppingCartIcon className="h-10"/>
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
            </div>
          </div>
        </div>
      {/* Bottom Bar */}
      <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
        <p className=" link flex items-center">
          <MenuIcon className="h-6 mr-1"/>
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal</p>


      </div>
  </header>
)}

export default Header;
