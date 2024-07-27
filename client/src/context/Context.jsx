import { useState } from "react";
import { createContext } from "react";

export const Context = createContext();

Context.displayName = 'Context';

export const ContextProvider = ({ children }) => {
    const [authData, setAuthData] = useState();

    function setContextAuthData(data) {
        setAuthData({...data});
    }

    function clearContextAuthData() {
        setAuthData();
    }

    return (
        <Context.Provider value={{ authData, setContextAuthData, clearContextAuthData}}>
            {children}
        </Context.Provider>
    );
};