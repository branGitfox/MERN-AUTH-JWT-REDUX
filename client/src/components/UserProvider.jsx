import React,  { createContext, useState, useContext } from "react";

const UserContext = createContext(null)

export const useUser = () => React.useContext(UserContext);

export const UserProvider = ({children}) => {
    const [userData, setUserData] = useState({_id:'',name:'', email:''})

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