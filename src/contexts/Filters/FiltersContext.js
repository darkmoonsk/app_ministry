import { createContext, useState } from "react";

export const filterContext = createContext();

export default function FilterProvider({children}) {
    const [filter, setFilter] = useState("all");

    return (
        <filterContext.Provider value={{ filter, setFilter }}>
            {children}
        </filterContext.Provider>
    )
}