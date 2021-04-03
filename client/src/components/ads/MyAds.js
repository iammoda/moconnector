import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import AdItem from './AdItem';
import { getAd } from '../../actions/ad';

const Ads = ({
  //action function
  getAds,
  //redux state variables
  adStateValues: { ads, loading },
  //other input variables
}) => {
  useEffect(() => {
    getAd();
  }, [getAd]);
  console.log(ads);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Your Ads</h1>
      <Link className='btn btn-light my-1' to='/ads'>
        Go Back
      </Link>
      <div className='posts'>
        {ads.map((item, index) => (
          <AdItem key={index} ad={item} />
        ))}
      </div>
      <Link className='btn btn-light my-1' to='/ads'>
        Go Back
      </Link>
    </Fragment>
  );
};

Ads.propTypes = {
  getAd: PropTypes.func.isRequired,
  adStateValues: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  adStateValues: state.adReducer,
});

export default connect(mapStateToProps, { getAd })(Ads);
