import { useLoaderData } from "react-router-dom";
import { useCart } from "../loader/CartContext";

function Category() {

    const {products} = useLoaderData();
     const { addToCart } = useCart()
    return(
        <div className="mt-32">
            <p className="text-left ">CATEGORY</p>
            <h1 className="text-left md:text-5xl  leading-tight text-gray-800"> Design your perfect home</h1>

            <div className="w-full grid grid-cols-4 gap-4">
                {products.slice(9,13).map((product) => (
                    <div key={product.id} className="p-4 border rounded-lg shadow-lg">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover mb-4"
                    />
               <div className="p-4 flex justify-between">
      <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
      <p className="text-lg font-semibold text-gray-800">${product.price}</p>
      </div>
              <button
            className="bg-gray-500 text-gray-300 px-4 py-2 rounded hover:bg-gray-600"
            onClick={() => addToCart(product)} // Add product to cart
          >
            Add to Cart
          </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category;