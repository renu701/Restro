import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispach = useDispatch();
  const hadleClearCart = () => {
    dispach(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className=" w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={hadleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1 className="font-bold text-lg">
            Your cart is empty. Please add items in your cart.
          </h1>
        )}
        <ItemList data={cartItems}></ItemList>
      </div>
    </div>
  );
};

export default Cart;
