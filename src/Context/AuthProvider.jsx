import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContex"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { auth } from "../firebase/firebase.init"

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // SingUp
    const signUp=(email,password)=>{
        setLoading(true)
      return  createUserWithEmailAndPassword(auth,email,password)
    }
    // SingIn 
    const signIn = (email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }
    // SingOut 
    const logOut = ()=>{
        setLoading(true)
      return signOut(auth)
    }
    // update profile 
    const updateUser = (currenteuser,obj)=>{
        return updateProfile(currenteuser,obj)
    }
    useEffect(() => {
    const unsubscribe=  onAuthStateChanged(auth,(crrentUser)=>{
        setUser(crrentUser)
        setLoading(false)
      })
      return unsubscribe
    }, [])
    const value = {user,signIn,signOut,signUp,logOut,loading,updateUser}
    return <AuthContext value={value}>
        {children}
    </AuthContext>
}