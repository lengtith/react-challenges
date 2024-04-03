import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom"

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [foods, setFoods] = useState([]);
    const [favoritesList, setFavoritesList] = useState([]);

    const fetchFoods = async (search) => {
        try {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`)

            if (response.ok) {
                const data = await response.json();
                setFoods(data?.data?.recipes);
                setLoading(false);
                navigate('/');
            }

        } catch (error) {
            console.log(error.message)
        }
    }

    const handleAddToFavorite = (food) => {
        let cpyFavoritesList = [...favoritesList];
        const index = cpyFavoritesList.findIndex(item => item.id === food.id)

        if (index === -1) {
            cpyFavoritesList.push(food)
        } else {
            cpyFavoritesList.splice(index)
        }

        setFavoritesList(cpyFavoritesList)
    }

    return (
        <GlobalContext.Provider value={{ fetchFoods, foods, loading, handleAddToFavorite, favoritesList }}>
            {children}
        </GlobalContext.Provider>
    )
}