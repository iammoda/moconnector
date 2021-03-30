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
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case GET_AD:
      return {
        ...state,
        post: payload,
        loading: false,
      };
    case ADD_AD:
      return {
        ...state,
        posts: [payload, ...state.posts],
      };
    case DELETE_AD:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
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
