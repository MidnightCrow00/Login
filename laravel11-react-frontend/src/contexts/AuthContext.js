import { useNavigate } from "react-router";
import { myAxios } from "../api/myAxios"
import { createContext, useState } from "react";

export const AuthContext=createContext("")
export const AuthProvider=(children)=>{

    const[user, setUser]= useState("")
    const navigate = useNavigate()
    const csrf = () => myAxios.get("/sanctum/csrf-cookie")

  const regisztacio = async({...adat})=>{
    await csrf();
    try{
      await myAxios.post("/register", adat)
      getUser()
    }catch(error){
      console.log(error)
      navigate("/")
    }
  }

  const logout = async({...adat})=>{
    await csrf();
    try{
      await myAxios.post("/logout", adat)
    }catch(error){
      console.log(error)
      navigate("/login")
    }
  }

  const getUser = async()=> {
    const {data} = await myAxios.get("/api/user")
    console.log(data)
    setUser(data)
  }

    return <AuthContext.AuthProvider value={{regisztacio,user, logout}}>
        {{children}}
    </AuthContext.AuthProvider>
}