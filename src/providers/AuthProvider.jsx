import { createContext } from "react";
import PropTypes from "prop-types";

//
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const authInfo = { name: "Mr. Jodu Miya" };
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
