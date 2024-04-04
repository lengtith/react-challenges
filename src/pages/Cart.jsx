import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector(state => state)

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr)=> acc + curr.price, 0));
  }, [cart])

  return (
    <div>
      Cart
    </div>
  )
}

export default Cart