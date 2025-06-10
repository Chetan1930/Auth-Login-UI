import React, {  createContext, useState } from "react";


export const AuthContext = createContext();


export const AuthProvider = ({children})=>{

    const [user,setUser] = useState({Name:"", email:"", password:""});
    const [isauth,setIsauth]= useState(false);

    function login (){
        setIsauth(true);
        
    };

    function logout(){
        setIsauth(false);
    };

    return(
        <AuthContext.Provider value={{user,login,logout,isauth}}>
            {children}
        </AuthContext.Provider>
    );
};