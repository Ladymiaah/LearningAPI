import { NavLink } from "react-router-dom"
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../loader/CartContext";

 function Navigation() {
  const {getTotalQuantity} = useCart()

       
    return(
        <nav className="flex items-center justify-between p-4 bg-white-800 text-gray-400">
            <h1>AIKI</h1>
        <NavLink to ="/" className={({ isActive }) =>
          isActive
            ? "text-black bg-black-500 px-3 py-2 rounded"
            : "text-gray-400 hover:text-white hover:bg-gray-700 px-3 py-2 rounded"
        }>
                Home
        </NavLink>
        <NavLink to = "/Promo"  className={({ isActive }) =>
          isActive
            ? "text-black bg-black-500 px-3 py-2 rounded"
            : "text-gray-400 hover:text-white hover:bg-gray-700 px-3 py-2 rounded"
        }>
             Promo
        </NavLink>
        <NavLink to ="/Interior" className={({ isActive }) =>
          isActive
            ? "text-black bg-black-500 px-3 py-2 rounded"
            : "text-gray-400 hover:text-white hover:bg-gray-700 px-3 py-2 rounded"
        } > 
            Interior Design
        </NavLink>
        <NavLink to ="/Productrec"  className={({ isActive }) =>
          isActive
            ? "text-black bg-black-500 px-3 py-2 rounded"
            : "text-gray-400 hover:text-white hover:bg-gray-700 px-3 py-2 rounded"
        } >
            Product Recommendation
        </NavLink>
        <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="pl-10 pr-4 py-2 w-64 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="absolute left-3 text-gray-400" />
      </div>
      <div className="flex space-x-6">
      <FaHeart className="text-4xl cursor-pointer hover:text-red-500" />
        <FaShoppingCart className="text-4xl cursor-pointer " />
          {getTotalQuantity() > 0 && (
            <span className="absolute -bottom-3 text-sm text-center bg-gray-500 text-white rounded-full h-6 w-6 flex items-center justify-center">
              {getTotalQuantity()}
            </span>

           )} </div>

        </nav>
        
    )
 }

 export default Navigation