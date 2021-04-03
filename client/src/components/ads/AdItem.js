import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteAd } from '../../actions/ad';

const AdItem = ({
  //actions
  deleteAd,
  auth,
  ad: { _id, address, price, text, name, avatar, user, date },
  showActions,
}) => (
  <div class='post bg-white p-1 my-1'>
    <div>
      <Link to={`/profile/${user}`}>
        <img class='round-img' src={avatar} alt='' />
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <p class='my-1'>Address: {address}</p>
      <p class='my-1'>Price: {price}</p>
      <p class='my-1'>Description: {text}</p>
      <p class='post-date'>
        Posted on <Moment format='DD/MM/YYYY'>{date}</Moment>
      </p>
      {showActions && (
        <Fragment>
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={(e) => deleteAd(_id)}
              type='button'
              class='btn btn-danger'
            >
              <i class='fas fa-times'></i>
            </button>
          )}
        </Fragment>
      )}
    </div>
  </div>
);

AdItem.defaultProps = {
  showActions: true,
};

AdItem.propTypes = {
  ad: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,

  deleteAd: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteAd })(AdItem);
