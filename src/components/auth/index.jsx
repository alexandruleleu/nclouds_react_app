import React, { useState, useEffect } from 'react';
import firebaseProvider from '../../config/Firebase';

// available info for every child component
export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    firebaseProvider
      .auth()
      .onAuthStateChanged((currentUser) => setCurrentUser(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
