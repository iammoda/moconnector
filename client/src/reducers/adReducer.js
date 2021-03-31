import { ADD_AD, DELETE_AD, GET_AD, GET_ADS, AD_ERROR } from '../actions/types';

const initialState = {
  ads: [],
  ad: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ADS:
      console.log('test', payload);
      return {
        ...state,
        ads: payload,
        loading: false,
      };
    case GET_AD:
      return {
        ...state,
        ad: payload,
        loading: false,
      };
    case ADD_AD:
      return {
        ...state,
        ads: [payload, ...state.ads],
      };
    case DELETE_AD:
      return {
        ...state,
        ads: state.ads.filter((ad) => ad._id !== payload),
        loading: false,
      };
    case AD_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
