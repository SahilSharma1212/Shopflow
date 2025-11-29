'use client'
import { useState } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeContextProvider({children}:{children:React.ReactNode}){

    const [theme,setTheme] = useState('dark');
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}