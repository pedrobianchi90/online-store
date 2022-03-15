import React from 'react';
import PropTypes from 'prop-types';

class Reviews extends React.Component {
  render() {
    const { review, email, rating } = this.props;
    return (
      <div>
        <p>Avalicões:</p>
        <p>{review}</p>
        <p>{ email }</p>
        <p>{ rating }</p>
      </div>
    );
  }
}

Reviews.propTypes = {
  review: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Reviews;
