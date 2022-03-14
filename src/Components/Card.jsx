import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { title, image, price, handleButton, onButton, product, testid } = this.props;
    return (
      <div data-testid="product">
        <p data-testid={ testid }>{ title }</p>
        <img src={ image } alt={ title } />
        <p>{ price }</p>
        { !onButton ? false : (
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => handleButton(product) }
          >
            Adicionar
          </button>
        )}
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleButton: PropTypes.func,
  testid: PropTypes.string,
  onButton: PropTypes.bool,
  product: PropTypes.shape({}),
};

Card.defaultProps = {
  onButton: true,
  testid: '',
  product: '',
  handleButton: () => {},
};

export default Card;
