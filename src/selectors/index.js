import { createSelector } from 'reselect';
import { PAGE_LIMIT } from '../utils/constants';

const data = (state) => state.modalContentReducer.data;
const favoriteIds = (state) => state.modalContentReducer.favoriteIds;
const pageNumber = (state) => state.modalContentReducer.pageNumber;
const totalCount = (state) => state.modalContentReducer.totalCount;
const searchText = (state) => state.homeReducer.searchText;

export const getFavoriteCountries = createSelector([data, favoriteIds], (data, favoriteIds) => {
  let favoriteCountries = [];
  Object.keys(favoriteIds).forEach((id) => favoriteCountries.unshift(data[id - 1]));
  return favoriteCountries;
});

export const getEvenCountries = createSelector([data], (data) => {
  return data.filter((item) => item.Id % 2 === 0);
});

export const getLoadMorePermission = createSelector(
  [pageNumber, totalCount],
  (pageNumber = 1, totalCount = 250) => {
    return pageNumber * PAGE_LIMIT <= totalCount;
  }
);

export const getFilteredDataByCountry = createSelector([searchText, data], (searchText, data) => {
  return data.filter((item) => item.Name.toLowerCase().includes(searchText.toLowerCase()));
});

export const getFilteredFavoritesData = createSelector(
  [searchText, getFavoriteCountries],
  (searchText, favoriteData) => {
    return favoriteData.filter((item) =>
      item.Name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
);
