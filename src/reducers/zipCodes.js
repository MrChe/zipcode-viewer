import ZIP_CODE from '../types';

const initialState = {
  zipCodeNumber: '',
  loading: false,
  error: false,
  errorMessage: '',
  zipCodeInfo: null,
  listPlace: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ZIP_CODE.REQUESTED:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ZIP_CODE.REQUESTED_SUCCESS:
      const newArr = [...state.listPlace, ...payload.places];
      const placeName = newArr.map(el => el["place name"]);
      const newPayload = newArr.filter((item, pos) => {
        return placeName.indexOf(item["place name"]) === pos;
      }); // remove duplicate items
      return {
        ...state,
        zipCodeInfo: payload,
        listPlace: newPayload,
        loading: false,
        error: false,
      };
    case ZIP_CODE.REQUESTED_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: payload,
      };

    case ZIP_CODE.CHANGE_ZIP_CODE:
      return {
        ...state,
        zipCodeNumber: payload
      };

    case ZIP_CODE.REMOVE_PLACE:
      return {
        ...state,
        listPlace: state.listPlace.filter((item, index) => {
          return index !== payload
        })
      };

    default:
      return state;
  }
};
