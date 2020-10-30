import React, { useRef, useContext, useEffect } from 'react';
import { Redirect } from 'react-router';
import { ROUTE_HOME } from '../../../utils/routes';

import { AuthContext } from '../../../components/auth';
import { handleEnterKeypres } from '../../../utils/utils';

import LoginForm from '../../../components/loginForm';

const Login = ({
  loading,
  errors,
  userRegistered,
  onSignInUser,
  onResetErrors,
  onResetUserRegistration,
}) => {
  const { currentUser } = useContext(AuthContext);
  const formEl = useRef(null);

  useEffect(() => {
    const handleEnterKeypresWrapper = (ev) => {
      handleEnterKeypres(ev, () => {
        const { email, password } = formEl.current;
        if (email.value && password.value) {
          formEl.current.dispatchEvent(new Event('submit'));
        }
      });
    };
    document.addEventListener('keydown', handleEnterKeypresWrapper);
    return () => {
      document.removeEventListener('keydown', handleEnterKeypresWrapper);
    };
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    onSignInUser(email.value, password.value);
    onResetUserRegistration();
  };

  const onChange = () => errors.length > 0 && onResetErrors();

  const onClick = () => errors.length > 0 && onResetErrors();

  if (currentUser && !userRegistered) {
    return <Redirect to={ROUTE_HOME} />;
  }

  return (
    <LoginForm
      loading={loading}
      formRef={formEl}
      errorMessage={errors[errors.length - 1] || ''}
      onSubmit={handleLogin}
      onChange={onChange}
      onClick={onClick}
    />
  );
};

export default Login;
