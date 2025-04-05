import { createContext, useState ,useContext} from "react";

export const NavContext = createContext();
export const useTab = () => useContext(NavContext);

export const NavProvider = ({children}) => {

    const [activeTab, setActiveTab] = useState("About Me");

    return (
        <NavContext.Provider value={{activeTab, setActiveTab}}>
            {children}
        </NavContext.Provider>
    )
}
