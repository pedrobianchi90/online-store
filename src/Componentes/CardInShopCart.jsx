import React from 'react';
import PropTypes from 'prop-types';

class CardShopping extends React.Component {
  render() {
    const {
      title,
      image,
      price,
      id,
      quantility,
      handleButtonDelete,
      handleButtonSubtract,
      handleButtonAdd,
    } = this.props;
    return (
      <div data-testid="product">
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <img src={ image } alt={ title } />
        <p>{ (price * quantility) }</p>
        <p>{ price }</p>
        <button
          onClick={ () => handleButtonSubtract(id) }
          type="button"
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <span data-testid="shopping-cart-product-quantity">{ quantility }</span>
        <button
          onClick={ () => handleButtonAdd(id) }
          type="button"
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <button
          onClick={ () => handleButtonDelete(id) }
          type="button"
        >
          x
        </button>
      </div>
    );
  }
}

CardShopping.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  quantility: PropTypes.number.isRequired,
  handleButtonDelete: PropTypes.func.isRequired,
  handleButtonAdd: PropTypes.func.isRequired,
  handleButtonSubtract: PropTypes.func.isRequired,
};

export default CardShopping;
