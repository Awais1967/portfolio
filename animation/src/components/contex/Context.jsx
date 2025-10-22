import React, { createContext, useState } from 'react'

export const Navbarcontext = createContext();

const Context = ({children}) => {
    const [nav, setnav] = useState(false);
    return (
        <Navbarcontext.Provider value={{ nav, setnav }}>
            {children}
        </Navbarcontext.Provider>
    );
}

export default Context
