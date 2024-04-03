import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <main className='max-w-6xl mx-auto mt-10 grid grid-cols-3 lg:grid-cols-3 gap-10'>
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => (
          <div key={item.id} className="flex flex-col w-full overflow-hidden bg-white/75 shadow-xl border-2 rounded-2xl border-white">
            <div className="h-40 flex justify-center overflow-hidden items-center rounded-t-lg">
              <img src={item?.image_url} alt="recipe item" className="block w-full" />
            </div>
            <div className="p-4">
              <span className="text-sm text-cyan-700 font-medium">
                {item?.publisher}
              </span>
              <h3 className="font-bold text-2xl truncate text-black">
                {item?.title}
              </h3>
              <Link
                to={`/${item?.id}`}
                className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
              >
                Recipe Details
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added in favorites.
          </p>
        </div>
      )}
    </main>
  )
}

export default Favorites