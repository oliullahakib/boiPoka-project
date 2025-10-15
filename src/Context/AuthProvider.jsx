import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContex"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../firebase/firebase.init"

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // const [loading, setLoading] = useState(true)

    // SingUp
    const signUp=(email,password)=>{
      return  createUserWithEmailAndPassword(auth,email,password)
    }
    // SingIn 
    const signIn = (email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }
    // SingOut 
    const logOut = ()=>{
      return signOut(auth)
    }
    useEffect(() => {
    const unsubscribe=  onAuthStateChanged(auth,(crrentUser)=>{
        setUser(crrentUser)
      })
      return unsubscribe
    }, [])
    const value = {user,signIn,signOut,signUp,logOut}
    return <AuthContext value={value}>
        {children}
    </AuthContext>
}