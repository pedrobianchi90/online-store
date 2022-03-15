import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductId } from '../services/api';
import Form from '../components/Form';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      productPrice: '',
      productImg: '',
      prod: {},
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
    const { productName, productPrice, productImg, prod } = this.state;
    const { handleButton } = this.props;
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
          data-testid="product-detail-link"
          to="/ShoppingCart"
        >
          <button
            data-testid="shopping-cart-button"
            type="button"
          >
            Carrinho de Compras
          </button>
        </Link>
        <Form />
        {/* <BrowserRouter>
          <Route
            path="/Form"
            render={ () => <Form reviewList={ reviewList } /> }
          />
        </BrowserRouter> */}
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
  handleButton: PropTypes.func.isRequired,
};

export default ProductDetails;
