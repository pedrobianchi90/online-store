import React from 'react';
import { Link } from 'react-router-dom';
// import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  // componentDidMount(){

  // };

  render() {
    return (
      <div>
        <input type="text" />
        <Link to="/shoppingcart" data-testid="shopping-cart-button">
          <button type="button">
            Carrinho de Compras
          </button>
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
