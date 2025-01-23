import { useLoaderData } from "react-router-dom"
import Category from "../components/Category"
import Header from "../components/Header"
import Products from "../components/Products"

function HomePage() {
    const { headerData, categories } = useLoaderData(); 
    return(
        <div> 
         < Header headerData={headerData} />
        <Products />
        <Category categories={categories} />
         </div>
    )   
}

export default HomePage