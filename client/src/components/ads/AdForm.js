import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addAd } from '../../actions/ad';

const AdForm = ({ addAd }) => {
  const [formData, setFormData] = useState({
    address: '',
    price: '',
    description: '',
  });

  const { address, price, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='large text-primary'>Add Your Housing Ad</h1>
      <p className='lead'>
        <i className='fas fa-code-branch'></i> Add a single room or house to
        rent.
      </p>
      <small>* = required field</small>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addAd(formData);
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Address'
            name='Address'
            value={address}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Price per room or per house'
            name='price'
            value={price}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Description'
            name='description'
            value={description}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/ads'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AdForm.propTypes = {
  addAd: PropTypes.func.isRequired,
};

export default connect(null, { addAd })(withRouter(AdForm));

//   return (
//     <div className='post-form'>
//       <div className='bg-primary p'>
//         <h3>Say Something...</h3>
//       </div>
//       <form
//         className='form my-1'
//         onSubmit={(e) => {
//           e.preventDefault();
//           addAd({ text });
//           setText('');
//         }}
//       >
//         <textarea
//           name='text'
//           cols='30'
//           rows='5'
//           placeholder='Create an Ad'
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           required
//         />
//         <input type='submit' className='btn btn-dark my-1' value='Submit' />
//       </form>
//     </div>
//   );
// };

// AdForm.propTypes = {
//   addAd: PropTypes.func.isRequired,
// };

// export default connect(null, { addAd })(AdForm);
