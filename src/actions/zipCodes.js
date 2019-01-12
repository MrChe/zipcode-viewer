import action from '../utils/createAction';
import ZIP_CODE from '../types';

// api
export const requestZipCode = () => action(ZIP_CODE.REQUESTED);
export const requestZipCodeSuccess = (payload) => action(ZIP_CODE.REQUESTED_SUCCESS, payload);
export const requestZipCodeError = (payload) => action(ZIP_CODE.REQUESTED_FAILED, payload);

// structure
export const onAddPlace = (payload) => action(ZIP_CODE.ADD_PLACE, payload);
export const onRemovePlace = (payload) => action(ZIP_CODE.REMOVE_PLACE, payload);
export const onChangeZipCode = (payload) => action(ZIP_CODE.CHANGE_ZIP_CODE, payload);

export const fetchZipCode = (code) => {
  return (dispatch, getState) => { // dispatch, getState from thunk
    dispatch(requestZipCode());
    fetch(`https://api.zippopotam.us/us/${code}`)
      .then(res => res.json())
      .then(
        data => dispatch(requestZipCodeSuccess(data)),
        err => dispatch(requestZipCodeError(err))
      )
      .catch(
        err =>  dispatch(requestZipCodeError(err))
      )
  }
};
