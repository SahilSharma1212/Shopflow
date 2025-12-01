'use client'
import { useState } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeContextProvider({children}:{children:React.ReactNode}){

    const [theme,setTheme] = useState('light');
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}