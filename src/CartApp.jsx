import { Navigate, Route, Routes } from "react-router-dom";
import { CartView } from "./components/CartView"
import { CatalogView } from "./components/CatalogView"
import { useItemsCart } from "./hooks/useItemsCart"
import { Navbar } from "./components/Navbar";
import { CartRoutes } from "./routes/CartRoutes";



export const CartApp = () => {

    const {cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart();


    return (
        <>
            <Navbar/>
            <div className="container my-4">

                <h1>Cart Aapp</h1>
                
                <CartRoutes 
                    cartItems={cartItems} 
                    handlerAddProductCart={handlerAddProductCart} 
                    handlerDeleteProductCart={handlerDeleteProductCart}/>

            </div>
        </>
    )
}