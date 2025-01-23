import { useProducts } from "./UseProduct"


function Products() {
    const {products, loading, error} = useProducts();
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error:{error}</p>

    return(
        <div>
            <p className="text-center">POPULAR</p>
            <h1 className="text-center md:text-5xl  leading-tight text-gray-800"> Accessories Sales Now On!</h1>
            <div className=" flex justify-center items-right mt-8">
                <div className="flex space-x-6">  
                <div className="grid grid-cols-3 grid-rows-2 gap-4">
  {products.slice(14, 20).map((product) => (
    <div key={product.id} className="p-4 border rounded-lg shadow-lg">
      <img
        src={product.image}
        alt={product.title}
        className="w-64 h-48 object-cover mb-4"
      />
      <div className="p-4 flex justify-between">
      <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
      <p className="text-lg font-semibold text-gray-800">${product.price}</p>
      </div>
    </div>
  ))}
</div>

            </div>
        </div>
        </div>
        
    )
}

export default Products;