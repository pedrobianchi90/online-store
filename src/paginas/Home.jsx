import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '../Componentes/Card';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Categories from '../Componentes/Categories';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      category: '',
      inputText: '',
      productList: [],
    };
  }

  searchProduct = async () => {
    const { inputText, category } = this.state;
    const list = await getProductsFromCategoryAndQuery(category, inputText);
    this.setState({
      productList: list.results,
    });
  }

  handleInput = ({ target }) => {
    const { value } = target;
    this.setState({
      inputText: value,
    });
  }

  handleRadio = ({ target }) => {
    const { id } = target;
    this.setState({
      category: id,
    });
    this.searchProduct();
  };

  render() {
    const { productList } = this.state;
    const { handleButton } = this.props;
    return (
      <div>
        <aside>
          <Categories
            handleRadio={ this.handleRadio }
          />
        </aside>
        <input
          data-testid="query-input"
          type="text"
          onChange={ this.handleInput }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.searchProduct }
        >
          Procurar
        </button>
        <Link to="/shoppingcart" data-testid="shopping-cart-button">
          Carrinho de Compras
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {productList.length === 0 ? <p>Nenhum produto foi encontrado</p> : (
          productList.map((product) => (
            <Card
              key={ product.id }
              title={ product.title }
              price={ product.price }
              image={ product.thumbnail }
              handleButton={ handleButton }
              product={ product }
            />
          )))}
      </div>
    );
  }
}
Home.propTypes = {
  handleButton: PropTypes.func.isRequired,
};

export default Home;
