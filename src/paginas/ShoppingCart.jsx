import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import Card from '../Componentes/Card';
import CardShopping from '../Componentes/CardInShopCart';
import {
  aumentarQuantProdList,
  diminuirQuantProdList,
  excluirProduDaLista,
  getList,
  getquantilityItem } from '../services/carrinhoDeCompra';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      shoppingList: '',
      totalItem: '',
    };
  }

  componentDidMount() {
    const list = getList();
    const total = getquantilityItem();
    this.setState({ shoppingList: list, totalItem: total });
  }

  handleButtonDelete = async (id) => {
    excluirProduDaLista(id);
    const list = getList();
    const total = getquantilityItem();
    await this.setState({ shoppingList: list, totalItem: total });
  }

  handleButtonAdd = async (id) => {
    aumentarQuantProdList(id);
    const list = getList();
    const total = getquantilityItem();
    await this.setState({ shoppingList: list, totalItem: total });
  }

  handleButtonSubtract= async (id) => {
    diminuirQuantProdList(id);
    const list = getList();
    const total = getquantilityItem();
    await this.setState({ shoppingList: list, totalItem: total });
  }

  render() {
    const { shoppingList, totalItem } = this.state;
    return (
      <div>
        <p data-testid="shopping-cart-size">
          {totalItem}
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
        <Link to="/checkout" data-testid="checkout-products">Finalizar Compras</Link>
      </div>
    );
  }
}

export default ShoppingCart;
