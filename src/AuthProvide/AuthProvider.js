import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const AuthContext= createContext()
const auth= getAuth(app);

const AuthProvider = ({children}) => {
  const GoogleProvider = new GoogleAuthProvider(auth)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const[userRole,setUserRole]=useState("")

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const updateProfileInfo = (userName, photUrl) => {
    setLoading(true)
    return updateProfile(auth.currentUser, { displayName: userName, photoURL: photUrl })
  }
  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleSignUp = () => {
    setLoading(true)
    return signInWithPopup(auth, GoogleProvider)
  }

  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  const logOut = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  useEffect(()=>{
    fetch(`https://car-seller-server-nine.vercel.app/user/${user?.email}`)
    .then(res => res.json())
    .then(data => setUserRole(data?.data?.role))
  },[user])

  // console.log(userRole)

  const authInfo = {
    user,
    loading,
    createUser,
    updateProfileInfo,
    login,
    googleSignUp,
    forgetPassword,
    logOut,
    userRole
  }

  return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
  );
};

export default AuthProvider;