import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token)=>{},
    logout: ()=>{}
});

function AuthContextProvider({children}){

    const  [authtOken, setAuthToken] = useState();

    function authenticate(token){
        setAuthToken(token);
        AsyncStorage.setItem('token', token)
    }

    function logout(){
        setAuthToken(null)
        AsyncStorage.removeItem('token')
    }

    const value = {
        token: authtOken,
        isAuthenticated : !!authtOken,
        authenticate:authenticate,
        logout:logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}


export default AuthContextProvider;