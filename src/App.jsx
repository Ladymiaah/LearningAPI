import { createBrowserRouter,RouterProvider } from "react-router-dom"

import HomePage from "./pages/Home"
import InteriorPage from "./pages/Interior"
import ProductrecPage from "./pages/Productrec"
import RootLayout from "./pages/Root"
import PromoPage from "./pages/Promo"
import Footer from "./components/Footer"
import {MainLoader} from "./loader/MainLoader"
import { CartProvider } from "./loader/CartContext"

const router = createBrowserRouter([
  {path: "/", 
    element: <RootLayout />,
    errorElement: <p>Something went wrong!</p>,
    children:[
  {path: 'home', element: <HomePage/>, loader: MainLoader, },
  {path: 'Promo', element: <PromoPage/> },
  {path: 'Interior', element: <InteriorPage/> },
  {path: 'Productrec', element: <ProductrecPage/> },
    ],
  },
]) 
function App() {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="bg-white max-w-7xl m-auto shadow-lg rounded-lg">
       <CartProvider>
    <RouterProvider router={router}  />
    </ CartProvider>
    <Footer />
    </div>
    </div>
  )
}

export default App