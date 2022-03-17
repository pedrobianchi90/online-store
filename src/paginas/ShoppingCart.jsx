import React from 'react';
// import PropTypes from 'prop-types';
// import Card from '../Componentes/Card';
import CardShopping from '../Componentes/CardInShopCart';
import {
  aumentarQuantProdList,
  diminuirQuantProdList,
  excluirProduDaLista,
  getList } from '../services/carrinhoDeCompra';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      shoppingList: '',
    };
  }

  componentDidMount() {
    const list = getList();
    this.setState({ shoppingList: list });
  }

  handleButtonDelete = async (id) => {
    excluirProduDaLista(id);
    const list = getList();
    await this.setState({ shoppingList: list });
  }

  handleButtonAdd = async (id) => {
    aumentarQuantProdList(id);
    const list = getList();
    await this.setState({ shoppingList: list });
  }

  handleButtonSubtract= async (id) => {
    diminuirQuantProdList(id);
    const list = getList();
    await this.setState({ shoppingList: list });
  }

  render() {
    const { shoppingList } = this.state;
    return (
      <div>
        <p>
          {shoppingList.length}
        </p>
        {shoppingList.length === 0 ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>) : (
          shoppingList.map((product) => (
            <CardShopping
              key={ product.id }
              title={ product.title }
              image={ product.thumbnail }
              price={ product.price }
              quantility={ product.quantility }
              id={ product.id }
              handleButtonDelete={ this.handleButtonDelete }
              handleButtonSubtract={ this.handleButtonSubtract }
              handleButtonAdd={ this.handleButtonAdd }
            />)))}
      </div>
    );
  }
}

export default ShoppingCart;
