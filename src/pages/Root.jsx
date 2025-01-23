import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import { CartProvider } from "../loader/CartContext";


function RootLayout(){
    return(
        <>
        <Navigation />
        <main>
        <Outlet />
        </main>
        </>
    )
}

export default RootLayout;