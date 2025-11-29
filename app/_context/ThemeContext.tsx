import { createContext } from "react";

interface ThemeContextType {
    theme: string | null;
    setTheme: (theme: string) => void;
}


const ThemeContext = createContext<ThemeContextType>(
    {
        theme: 'light',
        setTheme: () => { },
    }
);

export default ThemeContext;