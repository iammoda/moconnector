import axios from 'axios';
import { setAlert } from './alert';
import { GET_ADS, ADD_AD, DELETE_AD, GET_AD, AD_ERROR } from './types';

//Get ads
export const getAds = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/ads');

    dispatch({
      type: GET_ADS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Delete Ad
export const deleteAd = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/ads/${id}`);

    dispatch({
      type: DELETE_AD,
      payload: id,
    });
    dispatch(setAlert('Ad Removed', 'success'));
  } catch (err) {
    dispatch({
      type: AD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add Ad
export const addAd = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/ads', formData, config);

    dispatch({
      type: ADD_AD,
      payload: res.data,
    });

    dispatch(setAlert('Ad Created', 'success'));
  } catch (err) {
    dispatch({
      type: AD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get post
export const getAd = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/ads/${id}`);

    dispatch({
      type: GET_AD,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
