import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {

    const [loading, setLoading] = useState(false);
    const [foods, setFoods] = useState([]);
    
    const fetchFoods = async (search) => {
        try {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`)

            if (response.ok) {
                const data= await response.json();
                setFoods(data?.data?.recipes);
                setLoading(false);
            }

        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <GlobalContext.Provider value={{ fetchFoods, foods, loading }}>
            {children}
        </GlobalContext.Provider>
    )
}