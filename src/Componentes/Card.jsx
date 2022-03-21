import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const { title, image, price, handleButton, onButton, product, testid } = this.props;
    const { free_shipping: shipping } = product.shipping;
    return (
      <div className="cartHome" data-testid="product">
        <Link data-testid="product-detail-link" to={ `/productdetails/${product.id}` }>
          <p data-testid={ testid }>{ title }</p>
          {shipping ? (
            <img
              data-testid="free-shipping"
              className="freteGratis"
              src="https://cdn.simplo7.net/static/37412/galeria/155681041950147.png"
              alt="Frete Grátis"
            />
          ) : false}
          <img className="imgProduto" src={ image } alt={ title } />
          <p>{ price }</p>
        </Link>
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
  product: PropTypes.shape({
    id: PropTypes.string,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }),
};

Card.defaultProps = {
  onButton: true,
  testid: 'product-detail-name',
  product: {
    id: '',
  },
  handleButton: () => {},
};

export default Card;
