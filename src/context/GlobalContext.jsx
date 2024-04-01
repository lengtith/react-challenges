import { createContext, useState } from "react";

const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    const [foods, setFoods] = useState([])
    return (
        <GlobalContext.Provider value={{ foods }}>
            {children}
        </GlobalContext.Provider>
    )
}