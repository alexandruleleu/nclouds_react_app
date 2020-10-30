import React from 'react';

// app router
import Router from './router';

//auth component
import AuthProvider from '../../components/auth';

// ----------------------------
// Root Component
// ----------------------------

const App = () => (
  <AuthProvider>
    <Router />
  </AuthProvider>
);

export default App;
