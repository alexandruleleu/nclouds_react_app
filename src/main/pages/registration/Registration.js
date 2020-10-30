import React, { useRef, useEffect } from 'react';
import { handleEnterKeypres } from '../../../utils/utils';

//components
import RegistrationForm from '../../../components/registrationForm';

const Registration = ({
  loading,
  errors,
  messages,
  onSignUpUser,
  onResetErrors,
  onResetMessages,
}) => {
  const formEl = useRef(null);

  useEffect(() => {
    const handleEnterKeypresWrapper = (ev) => {
      handleEnterKeypres(ev, () => {
        const { firstName, lastName, email, password } = formEl.current;
        if (firstName.value && lastName.value && email.value && password.value) {
          formEl.current.dispatchEvent(new Event('submit'));
        }
      });
    };
    document.addEventListener('keydown', handleEnterKeypresWrapper);
    return () => {
      document.removeEventListener('keydown', handleEnterKeypresWrapper);
    };
  }, []);

  const handleSignUp = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password } = event.target.elements;
    onSignUpUser(firstName.value, lastName.value, email.value, password.value);
  };

  const onChange = () => {
    errors.length > 0 && onResetErrors();
    messages.length > 0 && onResetMessages();
  };

  const onClick = () => {
    errors.length > 0 && onResetErrors();
    messages.length > 0 && onResetMessages();
  };

  return (
    <RegistrationForm
      loading={loading}
      formRef={formEl}
      errorMessage={errors[errors.length - 1] || ''}
      successMessage={messages[messages.length - 1] || ''}
      onSubmit={handleSignUp}
      onChange={onChange}
      onClick={onClick}
    />
  );
};

export default Registration;
