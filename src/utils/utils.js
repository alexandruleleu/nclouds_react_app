import api from '../api';
import { BASE_URL, PAGE_LIMIT } from './constants';

export const handleEnterKeypres = (event, action) => {
  const ENTER_KEY = 13;
  switch (event.keyCode) {
    case ENTER_KEY:
      action();
      break;
    default:
      break;
  }
};

export async function getMetadataPaginated(pageNumber) {
  try {
    const data = await api.get(BASE_URL, {
      pLimit: PAGE_LIMIT,
      pPage: pageNumber,
    });
    return data.Response;
  } catch (err) {
    // eslint-disable-next-line
    throw {
      message: err.error || err.message || err.errors[0].message || 'Something went wrong',
      type: err.type || 'error',
    };
  }
}
