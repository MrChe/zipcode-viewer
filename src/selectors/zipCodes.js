import { createSelector, createStructuredSelector } from 'reselect';
import _ from 'lodash';

export const getZipCodes = (state) => state.zipCodes;

export const getZipCodeNumber = createSelector(
  getZipCodes,
  (zipCodes) => _.get(zipCodes, 'zipCodeNumber'),
);

export const getZipCodeInfo = createSelector(
  getZipCodes,
  (zipCodes) => _.get(zipCodes, 'zipCodeInfo'),
);

export const getListPlace = createSelector(
  getZipCodes,
  (zipCodes) => _.get(zipCodes, 'listPlace'),
);


export const getLoadingStatus = createSelector(
  getZipCodes,
  (zipCodes) => _.get(zipCodes, 'loading'),
);

export const getErrorStatus = createSelector(
  getZipCodes,
  (zipCodes) => _.get(zipCodes, 'error'),
);

export const getErrorMessage = createSelector(
  getZipCodes,
  (zipCodes) => _.get(zipCodes, 'errorMessage'),
);


export default createStructuredSelector({
  loadingStatus: getLoadingStatus,
  errorStatus: getErrorStatus,
  errorMessage: getErrorMessage,
  zipCodeNumber: getZipCodeNumber,
  zipCodeInfo: getZipCodeInfo,
  listPlace: getListPlace,
});

