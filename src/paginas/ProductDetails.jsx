import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductId } from '../services/api';
import Form from '../Componentes/Form';
import { handleButton, getquantilityItem } from '../services/carrinhoDeCompra';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      productPrice: '',
      productImg: '',
      prod: {},
      totalItem: getquantilityItem(),
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const product = await getProductId(id);
    this.setState({
      productName: product.title,
      productPrice: product.price,
      productImg: product.thumbnail,
      prod: product,
    });
  }

  render() {
    const { productName, productPrice, productImg, prod, totalItem } = this.state;
    return (
      <div data-testid="product-detail-name">
        <img src={ productImg } alt={ productName } />
        <h3 data-testid="shopping-cart-product-name">{productName}</h3>
        <p>{ productPrice }</p>
        <button
          type="button"
          onClick={ () => handleButton(prod) }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar
        </button>
        <Link
          data-testid="shopping-cart-button"
          to="/ShoppingCart"
        >
          {/* <button
            data-testid="shopping-cart-button"
            type="button"
          > */}
          Carrinho de Compras:
          <span data-testid="shopping-cart-size">
            {totalItem}
          </span>
          {/* </button> */}
        </Link>
        <Form />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
