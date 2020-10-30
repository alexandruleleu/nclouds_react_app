import React, { useContext } from 'react';
import { IonSpinner } from '@ionic/react';
import { AuthContext } from '../../components/auth';

const MainLayout = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const showSpinner = (
    <div className="spinner-container">
      <IonSpinner name="dots" />
    </div>
  );
  if (currentUser === undefined) return showSpinner;

  return (
    <div className="app-container">
      <header className="app-container-title">
        <h1>nClouds React App</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
