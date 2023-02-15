import { useState, createContext, useEffect } from "react";
import { userAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext=createContext({
    user: null,
    setUser: () => {},    
})

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const unsubscribe = userAuthStateChangedListener((user)=>{
            if(user){
                createUserDocumentFromAuth(user);
            }
            setUser(user);
        })
        return unsubscribe
    },[])
    const value = {user};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}