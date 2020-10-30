import { createSelector } from 'reselect';

const data = (state) => state.data;
const favoriteIds = (state) => state.favoriteIds;
const pageNumber = (state) => state.pageNumber;
const totalCount = (state) => state.totalCount;

export const getFavoriteCountries = createSelector([data, favoriteIds], (data, favoriteIds) => {
  let favoriteCountries = [];
  Object.keys(favoriteIds).forEach((id) => favoriteCountries.unshift(data[id]));
  return favoriteCountries;
});

export const getEvenCountries = createSelector([data], (data) => {
  return data.filter((item, index) => index % 2 === 0);
});

export const getLoadMoreVisibility = createSelector(
  [pageNumber, totalCount],
  (pageNumber = 1, totalCount = 250) => {
    return pageNumber !== totalCount - 1;
  }
);
