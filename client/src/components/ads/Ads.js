import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import AdItem from './AdItem';
import AdForm from './AdForm';
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
      <h1 className='large text-primary'>Ads</h1>
      <p className='lead'>
        <i className='fas fa-user'>Welcome to the community</i>
      </p>
      <AdForm />
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
