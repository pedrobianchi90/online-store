import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
      productList: [],
    };
  }

  searchProduct = async () => {
    const { inputText } = this.state;
    const categoria = '';
    const list = await getProductsFromCategoryAndQuery(categoria, inputText);
    // console.log(list);
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

  render() {
    const { productList } = this.state;
    return (
      <div>
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
            />
          )))}
      </div>
    );
  }
}

export default Home;
