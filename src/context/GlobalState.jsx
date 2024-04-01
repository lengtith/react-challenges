import { createContext } from "react";

const FoodContext = createContext(null);

export default function GlobalState({children}) {

    return (
        <FoodContext.Provider>
            {children}
        </FoodContext.Provider>
    )
}