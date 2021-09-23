import React, { createContext, useState, FC } from 'react';

export type AppContextType = {
    searchQuery: string;
    searchQueryFunc: (name: string) => void;
}

const appDeafaultValues: AppContextType ={
    searchQuery: "",
    searchQueryFunc: () => {},
}

export const appContext = createContext<AppContextType>(appDeafaultValues);

const AppProvider: FC = ({ children }) => {
    
    const [searchQuery, setSearchQuery] = useState(appDeafaultValues.searchQuery);

    const searchQueryFunc = (newQuery: string) => setSearchQuery(newQuery);
    
    return(
         <appContext.Provider value={{searchQuery, searchQueryFunc}}>
             {children}
        </appContext.Provider>
    )
}

export default AppProvider;