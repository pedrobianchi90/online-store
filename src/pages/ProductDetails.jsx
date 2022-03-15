import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductId } from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      productPrice: '',
      productImg: '',
      // productDetails: [],
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const product = await getProductId(id);
    console.log(product);
    this.setState({
      productName: product.title,
      productPrice: product.price,
      productImg: product.thumbnail,
      // productDetails: [...product.attributes],
    });
  }

  render() {
    const { productName, productPrice, productImg } = this.state;
    return (
      <div data-testid="product-detail-name">
        <img src={ productImg } alt={ productName } />
        <h3>{productName}</h3>
        <p>{ productPrice }</p>
        {/* <ul>
          { productDetails.map(({ value_name: marca, id }) => (
            <li key={ id }>{ marca }</li>
          ))}
        </ul> */}
        <Link
          data-testid="product-detail-link"
          to="/ShoppingCart"
        >
          <button type="button">
            Carrinho de Compras
          </button>
        </Link>
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
