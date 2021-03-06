import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import AdItem from './AdItem';
import { getAds } from '../../actions/ad';

const Ads = ({
  //action function
  getAds,
  //redux state variables
  adStateValues: { ads, loading },
  //other input variables
}) => {
  useEffect(() => {
    getAds();
  }, [getAds]);
  console.log(ads);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Housing Ads</h1>
      <p className='lead'>
        <i className='fas fa-user'>Welcome to the housing community</i>
      </p>
      <div className='dash-buttons'>
        <Link to='/add-ad' className='btn btn-light'>
          <i className='fab fa-black-tie text-primary'></i> Add Ad
        </Link>
        <Link to='/my-ads' className='btn btn-light'>
          <i className='fab fa-black-tie text-primary'></i> My Ads
        </Link>
      </div>
      <div className='posts'>
        {ads.map((item, index) => (
          <AdItem key={index} ad={item} />
        ))}
      </div>
    </Fragment>
  );
};

Ads.propTypes = {
  getAds: PropTypes.func.isRequired,
  adStateValues: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  adStateValues: state.adReducer,
});

export default connect(mapStateToProps, { getAds })(Ads);
