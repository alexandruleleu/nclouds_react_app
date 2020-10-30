import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonButton, IonInput, IonItem, IonLabel, IonSpinner } from '@ionic/react';
import { ROUTE_REGISTRATION } from '../../utils/routes';

const LoginForm = ({ loading, errorMessage, formRef, onSubmit, onChange, onClick }) => {
  let history = useHistory();

  const commonIonItemProps = {
    color: 'transparent',
    className: 'ion-item ion-padding-horizontal ',
  };

  const commonIonLabelProps = {
    position: 'floating',
    color: 'light',
  };

  const commonIonInputProps = {
    color: 'light',
    required: true,
    onIonChange: onChange,
  };

  return (
    <form ref={formRef} className="form-container" onSubmit={onSubmit}>
      <div>
        <IonItem {...commonIonItemProps}>
          <IonLabel {...commonIonLabelProps}>Email</IonLabel>
          <IonInput name="email" type="email" {...commonIonInputProps} />
        </IonItem>
        <IonItem {...commonIonItemProps} style={{ marginTop: 18 }}>
          <IonLabel {...commonIonLabelProps}>Password</IonLabel>
          <IonInput name="password" type="password" {...commonIonInputProps} />
        </IonItem>
        {errorMessage ? (
          <ion-text color="danger">
            <div className="error-container">
              <p className="">{errorMessage}</p>
            </div>
          </ion-text>
        ) : (
          ''
        )}
      </div>
      <div>
        <IonButton
          expand="block"
          type="submit"
          className="button-login"
          style={{ margin: '4rem 0 1rem 0' }}
        >
          {loading ? <IonSpinner name="dots" /> : 'Log in'}
        </IonButton>
        <div
          className="redirect-signup-container"
          onClick={(e) => {
            e.preventDefault();
            onClick();
            history.push(ROUTE_REGISTRATION);
          }}
        >
          <p>Don't have an account?</p>
          <h6>Sign Up</h6>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
