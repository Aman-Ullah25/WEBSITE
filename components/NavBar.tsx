import About from "@/app/About/page"
import Home from "../app/Home/page"
import ProductPage from "@/app/ProductPage/page"
export default function NavBar() {
return(
<header className="bg-white shadow py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="Logo"
              className="w-10 h-10"
            />
            <h1 className="ml-3 text-xl font-bold">Comforty</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="/Home" className="text-gray-600 hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/ProductPage" className="text-gray-600 hover:text-blue-500">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Pages
                </a>
              </li>
              <a href="/About" className="text-gray-600 hover:text-blue-500"> About</a>
            </ul>
          </nav>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Cart</button>
        </div>
      </header>)}