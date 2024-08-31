import { Navigate, Route, Routes } from "react-router-dom"
import { NavbarComponents } from "./components/NavbarComponents"
import { ProductosPage } from "./pages/ProductosPage"
import { CarritoPage } from "./pages/CarritoPage"
import { ProductProvider } from "./context/ProductProvider"
import { CartProvider } from "./context/CartProvider"

export const CarritoApp = () => {
    return (
        <ProductProvider>
            <CartProvider>
                <NavbarComponents />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ProductosPage />}></Route>
                        <Route path="/carrito" element={<CarritoPage />}></Route>
                        <Route path="/*" element={<Navigate to='/' />}></Route>
                    </Routes>
                </div>
            </CartProvider>
        </ProductProvider>
    )
}
