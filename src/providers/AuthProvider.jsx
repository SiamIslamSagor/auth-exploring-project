import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";

//
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  // observe auth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log("current value of the current user", currentUser);
      setUser(currentUser);
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

  const authInfo = { user, createUser, signInUser, logOut };
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
