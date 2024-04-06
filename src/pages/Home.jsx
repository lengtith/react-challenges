import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cart-slice";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      if (response.ok) {
        const data = await response.json();
        setLoading(false);
        setProducts(data);
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product.id))
  }

  if (loading) {
    return (
      <p>Loading ...</p>
    )
  }

  return (
    <main className='max-w-6xl mx-auto'>
      <div className="grid grid-cols-3 gap-5 mt-10">
        {products.length > 0 ?
          products.map(item => (
            <div key={item.id} className="flex flex-col w-full overflow-hidden bg-white/75 shadow-xl border-2 rounded-2xl border-white">
              <div className="h-40 flex justify-center overflow-hidden items-center rounded-t-lg">
                <img src={item?.image} alt="recipe item" className="block w-full" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-2xl truncate text-black">
                  {item?.title}
                </h3>
                <button
                  className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
                  onClick={() => cart.some(cartItem => cartItem.id === item.id) ? handleRemoveFromCart(item.id) : handleAddToCart(item)}
                >
                  {
                    cart.some(cart => cart.id === item.id) ? 'Remove from cart' : 'Add to cart'
                  }
                </button>
              </div>
            </div>
          ))
          : <p>Foods not found</p>
        }
      </div>
    </main>
  )
}

export default Home