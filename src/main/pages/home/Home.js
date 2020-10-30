import React, { useContext, useState, Suspense, lazy } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { AuthContext } from '../../../components/auth';
import {
  IonItem,
  IonLabel,
  IonCheckbox,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonNote,
  IonSpinner,
} from '@ionic/react';
import ModalWrapper from '../../../components/modalWrapper';
import ModalContent from '../../../components/modalContent';

const Home = ({ onlyEven, onSignOut, onSetOnlyEven }) => {
  const { currentUser } = useContext(AuthContext);
  let { filter } = useParams();
  let history = useHistory();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [btnColor, setBtnColor] = useState('');
  const [modalLabel, setModalLabel] = useState('');

  const onClickBtn = (btn, label, param) => {
    const color = getComputedStyle(document.documentElement).getPropertyValue(`--color-${btn}`);
    setIsOpen(true);
    setBtnColor(color);
    setModalLabel(label);
    history.push(`/home/${param}`);
  };

  const closeModal = () => {
    setIsOpen(false);
    history.push(`/home`);
  };

  const modalWrapperProps = {
    modalIsOpen,
    color: btnColor,
    closeModal: closeModal,
    modalLabel,
  };

  const headerSection = () => (
    <IonHeader>
      <IonToolbar color="primary" className="custom-header">
        <IonNote slot="start" color="light">
          Greetings, <b>{currentUser.displayName}</b>
        </IonNote>
        <IonButtons slot="end">
          <IonButton color="light" onClick={() => onSignOut()}>
            Sign out
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );

  const mainSection = () => {
    return (
      <main className="home-main-container">
        <div className="btn-a">
          <IonButton size="large" onClick={() => onClickBtn('btn-a', 'All Country code', 'all')}>
            All Country Codes
          </IonButton>
        </div>
        <div className="btn-b">
          <IonButton
            size="large"
            onClick={() => onClickBtn('btn-b', 'Favorite country code', 'favorites')}
          >
            Fav Country Codes
          </IonButton>
        </div>
      </main>
    );
  };

  // eslint-disable-next-line
  const lazyLoadModalContentComponent = () => {
    if (!filter) return null;
    const ModalContent = lazy(() => import('../../../components/modalContent'));
    return (
      <Suspense
        fallback={
          <div className="modal-spinner-container">
            <IonSpinner name="dots" />
          </div>
        }
      >
        <ModalContent />
      </Suspense>
    );
  };
  const renderOnlyEvenSection = () => {
    if (filter !== 'all') return '';
    return (
      <IonItem>
        <IonLabel>Only even</IonLabel>
        <IonCheckbox
          slot="end"
          checked={onlyEven}
          onIonChange={(e) => onSetOnlyEven(e.detail.checked)}
        />
      </IonItem>
    );
  };

  return (
    <div className="home-container">
      {headerSection()}
      {mainSection()}
      <ModalWrapper {...modalWrapperProps}>
        {/* MODAL HEADER -> CAN BE WRAPPED INTO A SEPARATE COMPONENT */}
        <section className="modal-header">
          <h4>{modalLabel}</h4>
          {renderOnlyEvenSection()}
        </section>
        {/* MODAL CONTENT */}
        <section className="modal-content">
          <ModalContent />
        </section>
        {/* MODAL FOOTER */}
        <section className="modal-footer">
          <IonButton onClick={() => onClickBtn('btn-a', 'All Country code', 'all')}>All</IonButton>
          <IonButton onClick={() => onClickBtn('btn-b', 'Favorite country code', 'favorites')}>
            Favorites
          </IonButton>
          <IonButton onClick={closeModal}>Close</IonButton>
        </section>
      </ModalWrapper>
    </div>
  );
};

export default Home;
