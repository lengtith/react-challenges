import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext';

const FoodDetail = () => {
  const { id } = useParams();
  const [foodDetail, setFoodDetail] = useState();

  const { handleAddToFavorite, favoritesList } = useContext(GlobalContext);


  useEffect(() => {
    const getFoodDetail = async () => {
      try {
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);

        if (response.ok) {
          const data = await response.json();
          setFoodDetail(data?.data);
        }
      } catch (error) {
        console.log(error.message)
      }
    }

    getFoodDetail();
  }, [id]);

  return (
    <main className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10'>
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={foodDetail?.recipe?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
            alt='Image'
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {foodDetail?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {foodDetail?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavorite(foodDetail?.recipe)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
          >
            {favoritesList && favoritesList.length > 0 && favoritesList.findIndex(
              (item) => item.id === foodDetail?.recipe?.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"
            }
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {foodDetail?.recipe?.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span className="text-base font-semibold text-black">
                  {ingredient.quantity} - {ingredient.unit}
                </span>
                <span className="text-base font-semibold text-black">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}

export default FoodDetail