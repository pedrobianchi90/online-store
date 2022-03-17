import React from 'react';
// import PropTypes from 'prop-types';
// import Card from '../Componentes/Card';
import CardShopping from '../Componentes/CardInShopCart';
import { getList } from '../services/carrinhoDeCompra';

class ShoppingCart extends React.Component {
  render() {
    // const { shoppingList } = this.props;
    const shoppingList = getList();
    return (
      <div>
        <p data-testid="shopping-cart-product-quantity">
          {`Itens no carrinho: ${shoppingList.length}`}
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
              id={ product.id }
            />)))}
      </div>
    );
  }
}

// ShoppingCart.propTypes = {
//   shoppingList: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default ShoppingCart;
