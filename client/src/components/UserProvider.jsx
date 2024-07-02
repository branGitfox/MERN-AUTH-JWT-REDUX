import { createContext, useState } from "react";

const UserContext = createContext()

function UserProvider ({children}) {
    const [userData, setUserData] = useState({_id:'', name:''})

    const setCurrentUser = (current) => {
        setUserData(current)
    }
    return <>
        <UserContext.Provider value={{userData, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    </>
}

export default UserProvider