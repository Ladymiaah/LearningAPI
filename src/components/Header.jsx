import { Link, useLoaderData } from "react-router-dom"
import { FaClock, FaTruck } from "react-icons/fa";


function Header(){

    const {products} = useLoaderData();

    return(
        <>
        <section className="flex items-start justify-between p-8">
           <div className="w-1/2 text-left">
        <h1 className="text-4xl md:text-5xl  leading-tight text-gray-800">
          Discover elegant & affordable accessories <br/>for all body type
        </h1>
        <p className="text-gray-600 mt-4">
          Transform your body with sophisticated and  stylish <br/> pieces,
          because your body is a temple.
        </p>
        <div className="flex items-center gap-4 mt-16">
        <div>
        <Link to ="/Product" className="text-white text-semibold bg-black"> Shop Now</Link>
        </div>
        <div className="flex items-center gap-1">
            <FaTruck className="text-green-500" />
            <p className="text-sm text-black"> Free Delivery</p>
            <FaClock className="text-orange-500" />
            <p className="text-sm text-black"> Always on Time</p>
            </div>
        </div>
      </div>
            <div className="w-1/2 grid grid-cols-2 gap-8">
            {products && products.length > 0 ? (
          products.slice(4,8).map((product) => (
            <div key={product.id} className="p-4 border rounded-lg shadow-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-48 h-24 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {product.title}
              </h3>
              <p className="text-lg font-semibold text-gray-800">
                ${product.price}
              </p>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}

            <p className="mt-2 text-lg text-gray-500 hover:underline"></p>
            </div>
        </section>
        </>
    )
}

export default Header;