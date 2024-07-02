import React,  { createContext, useState, useContext } from "react";

const UserContext = createContext()

export const useUser = () => React.useContext(UserContext);

export const UserProvider = ({children}) => {
    const [userData, setUserData] = useState(null)

    const setCurrentUser = (current) => {
        setUserData(current)
    }

    return (
      <UserContext.Provider value={{userData, setCurrentUser}} >
            {children}
      </UserContext.Provider>
    )
}

export default UserContext