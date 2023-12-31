import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";

//
export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signInGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // observe auth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log("current value of the current user", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  //   useEffect(() => {
  //     const unSubscribe = onAuthStateChanged(auth, currentUser => {
  //       setUser(currentUser);
  //       console.log(
  //         "observing current user inside useEffect of AuthProvider",
  //         currentUser
  //       );
  //     });

  //     return () => {
  //       unSubscribe();
  //     };
  //   }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signInGoogle,
    signInGithub,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;

/**
 * 1. create context and export it
 * 2. set provider with value
 * 3. use the auth provider in the main.jsx file
 * 4. access children in the auth provider component as children and use it in the middle of the provider
 */
