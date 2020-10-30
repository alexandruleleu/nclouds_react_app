import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonInput, IonItem, IonLabel, IonButton, IonSpinner } from '@ionic/react';
import { ROUTE_LOGIN } from '../../utils/routes';

const RegistrationForm = ({
  loading,
  successMessage,
  errorMessage,
  formRef,
  onSubmit,
  onChange,
  onClick,
}) => {
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
          <IonLabel {...commonIonLabelProps}>First name</IonLabel>
          <IonInput name="firstName" type="text" {...commonIonInputProps} />
        </IonItem>
        <IonItem {...commonIonItemProps}>
          <IonLabel {...commonIonLabelProps}>Last name</IonLabel>
          <IonInput name="lastName" type="text" {...commonIonInputProps} />
        </IonItem>
        <IonItem {...commonIonItemProps}>
          <IonLabel {...commonIonLabelProps}>Email</IonLabel>
          <IonInput name="email" type="email" {...commonIonInputProps} />
        </IonItem>
        <IonItem {...commonIonItemProps}>
          <IonLabel {...commonIonLabelProps}>Password</IonLabel>
          <IonInput name="password" type="password" {...commonIonInputProps} />
        </IonItem>
        {successMessage ? (
          <ion-text color="success">
            <div className="success-container">
              <p>{successMessage}</p>
            </div>
          </ion-text>
        ) : (
          ''
        )}
        {errorMessage ? (
          <ion-text color="danger">
            <div className="error-container">
              <p>{errorMessage}</p>
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
          style={{ margin: '4rem 0 0 0' }}
        >
          {loading ? <IonSpinner name="dots" /> : 'Sign up'}
        </IonButton>
        <div className="redirect-signin-container">
          <h6
            onClick={(e) => {
              e.preventDefault();
              onClick();
              history.push(ROUTE_LOGIN);
            }}
          >
            Back
          </h6>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;
