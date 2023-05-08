
import { NavBar } from "../components/NavBar";
import { useItemsCart } from "../hooks/useItemsCart"
import { CartRoutes } from "../routes/CartRoutes";





export const CartApp = () => {

    // const [cartItems, setCarItems] = useState(initialCartItems);

    const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart();

    return (
        <>
            <NavBar />
            <div className="container my-4">

                <h3>Cart App</h3>
                <CartRoutes
                    cartItems={cartItems}
                    handlerAddProductCart={handlerAddProductCart}
                    handlerDeleteProductCart={handlerDeleteProductCart}
                />

            </div>
        </>
    )
}