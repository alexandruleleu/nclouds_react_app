import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IonSpinner, IonIcon, IonImg } from '@ionic/react';
import { starOutline, star } from 'ionicons/icons';

const ModalContent = ({
  loading,
  onlyEven,
  data,
  favoriteCountries,
  onlyEvenCountries,
  onSetLoading,
  onSetFavorite,
  onFetchMetadata,
}) => {
  const { filter } = useParams();
  useEffect(() => {
    onFetchMetadata();
    // eslint-disable-next-line
  }, [onFetchMetadata]);

  useEffect(() => {
    onSetLoading(true);
    setTimeout(() => {
      onSetLoading(false);
    }, 0);
  }, [onlyEven, onSetLoading]);

  const onRowClick = (index) => {
    console.log(index);
  };

  if (loading)
    return (
      <div className="modal-spinner-container">
        <IonSpinner name="dots" />
      </div>
    );

  const renderCountries = (data) => {
    const tableHeaderCellsAll = ['Favorites', 'Code', 'Country'];
    return (
      <div style={{ height: '100%' }}>
        <div className="table-header">
          {tableHeaderCellsAll.map((item) => (
            <div className="table-header-cell" key={item}>
              {item}
            </div>
          ))}
        </div>
        <div className="table-body">
          {data.map((item, index) => (
            <div className="table-body-row" key={item.Alpha3Code} onClick={() => onRowClick(index)}>
              <div className="table-body-row-cell">
                <div className="row-index">{item.Id}</div>
                <IonIcon
                  icon={item.Favorite ? star : starOutline}
                  onClick={(ev) => {
                    ev.stopPropagation();
                    onSetFavorite(!item.Favorite, index);
                  }}
                ></IonIcon>
              </div>
              <div className="table-body-row-cell">{item.Alpha3Code}</div>
              <div className="table-body-row-cell">{item.Name}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderFavoritesCountries = () => {
    if (!favoriteCountries.length)
      return <div className="no-favorite">No Favorite Countries...</div>;
    const tableHeaderCellsFav = ['Flag', 'Code', 'Country'];
    return (
      <div style={{ height: '100%' }}>
        <div className="table-header">
          {tableHeaderCellsFav.map((item) => (
            <div className="table-header-cell" key={item}>
              {item}
            </div>
          ))}
        </div>
        <div className="table-body">
          {favoriteCountries.map((item, index) => (
            <div className="table-body-row" key={item.Alpha3Code} onClick={() => onRowClick(index)}>
              <div className="table-body-row-cell">
                <div className="row-index">{item.Id}</div>
                <div className="row-img">
                  <IonImg src={item.FlagPng} />
                </div>
              </div>
              <div className="table-body-row-cell">{item.Alpha3Code}</div>
              <div className="table-body-row-cell">{item.Name}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const content = {
    all: renderCountries,
    favorites: renderFavoritesCountries,
  };

  return filter ? content[filter].call(this, !onlyEven ? data : onlyEvenCountries) : '';
};

export default ModalContent;
