import React, { useEffect, useRef } from 'react';
import _ from 'lodash';
import { useParams } from 'react-router-dom';
import { IonSpinner, IonIcon, IonImg } from '@ionic/react';
import { starOutline, star } from 'ionicons/icons';

const ModalContent = ({
  loading,
  loadingMore,
  onlyEven,
  favoriteCountriesFiltered,
  onlyEvenCountries,
  loadMorePermission,
  filteredDataByCountry,
  onSetLoading,
  onSetFavorite,
  onFetchMetadata,
  onFetchMoreMetadata,
}) => {
  const { filter } = useParams();
  const scrollableContainer = useRef(null);
  const handler = () => {
    const comp = scrollableContainer.current;
    const bottom = comp.scrollHeight - comp.scrollTop === comp.clientHeight;
    if (bottom) {
      loadMorePermission && onFetchMoreMetadata();
    }
  };
  const handleScroll = _.throttle(handler, 100);

  useEffect(() => {
    onFetchMetadata();
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
      <div style={{ height: '90%', position: 'relative' }}>
        <div className="table-header">
          {tableHeaderCellsAll.map((item) => (
            <div className="table-header-cell" key={item}>
              {item}
            </div>
          ))}
        </div>
        <div className="table-body" ref={scrollableContainer} onScroll={handleScroll}>
          {data.map((item) => (
            <div
              className="table-body-row"
              key={item.Alpha3Code}
              onClick={() => onRowClick(item.Id)}
            >
              <div className="table-body-row-cell">
                <div className="row-index">{item.Id}</div>
                <IonIcon
                  icon={item.Favorite ? star : starOutline}
                  onClick={(ev) => {
                    ev.stopPropagation();
                    onSetFavorite(!item.Favorite, item.Id);
                  }}
                ></IonIcon>
              </div>
              <div className="table-body-row-cell">{item.Alpha3Code}</div>
              <div className="table-body-row-cell">{item.Name}</div>
            </div>
          ))}
        </div>
        {loadingMore ? (
          <div className="table-spinner-container">
            <IonSpinner name="dots" />
          </div>
        ) : (
          ''
        )}
      </div>
    );
  };

  const renderFavoriteCountries = () => {
    if (!favoriteCountriesFiltered.length)
      return <div className="no-favorite">No Favorite Countries...</div>;
    const tableHeaderCellsFav = ['Flag', 'Code', 'Country'];
    return (
      <div style={{ height: '90%' }}>
        <div className="table-header">
          {tableHeaderCellsFav.map((item) => (
            <div className="table-header-cell" key={item}>
              {item}
            </div>
          ))}
        </div>
        <div className="table-body">
          {favoriteCountriesFiltered.map((item, index) => (
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
    favorites: renderFavoriteCountries,
  };

  return filter
    ? content[filter].call(this, !onlyEven ? filteredDataByCountry : onlyEvenCountries)
    : '';
};

export default ModalContent;
