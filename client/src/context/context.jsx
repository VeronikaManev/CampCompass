import { useState } from "react";
import { createContext } from "react";

export const Context = createContext();

Context.displayName = 'Context';

export const ContextProvider = ({ children }) => {
    const [contextData, setContextData] = useState({});

    return (
        <Context.Provider value={{ contextData, setContextData }}>
            {children}
        </Context.Provider>
    );
};