import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
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
        <aside>
          <Categories />
        </aside>
      </div>
    );
  }
}

export default Home;
