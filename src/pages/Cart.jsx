import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/cart-slice";

const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id))
  }

  return (
    <div className="grid grid-cols-2 gap-24">
      {
        cart && cart.length
          ? (
            <div className="w-full flex flex-col gap-5">
              {cart.map(item => (
                <div key={item.id} className="flex w-full overflow-hidden bg-white/75 shadow-xl border-2 rounded-2xl border-white p-2.5 gap-2.5">

                  <img src={item?.image} alt="recipe item" className="block h-10 w-10 object-contain" />

                  <div className="flex flex-col flex-grow overflow-hidden gap-2">
                    <h3 className="text-base truncate text-black">
                      {item?.title}
                    </h3>
                    <h1 className="text-lg font-bold">${item?.price}</h1>
                    <button
                      className="text-sm py-2 px-3 rounded-lg uppercase tracking-wider shadow-md bg-black text-white w-fit"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )
          : (
            <div>Empty cart</div>
          )
      }

      <div className="w-full flex flex-col gap-5">
        <h3 className="text-2xl text-red-500">Your cart summary</h3>
        <p>Total item: <strong>{cart.length}</strong></p>
        <p>Total amount: <strong>{totalCart}</strong></p>
      </div>
    </div>
  )
}

export default Cart