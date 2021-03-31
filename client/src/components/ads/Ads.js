import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import AdItem from './AdItem';
import AdForm from './AdForm';
import { getAds } from '../../actions/ad';

const Ads = ({ getAds, ad: { ads, loading } }) => {
  useEffect(() => {
    getAds();
  }, [getAds]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Posts</h1>
      <p className='lead'>
        <i className='fas fa-user'>Welcome to the community</i>
      </p>
      <PostForm />
      <div className='posts'>
        {ads.map((ad) => (
          <PostItem key={ad._id} ad={ad} />
        ))}
      </div>
    </Fragment>
  );
};

Ads.propTypes = {
  getAds: PropTypes.func.isRequired,
  ad: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ad: state.post,
});

export default connect(mapStateToProps, { getAds })(Ads);
