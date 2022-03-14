import React from 'react';
import Card from '../Components/Card';

class ShoppingCart extends React.Component {


  render() {
    const { shoppingList } = this.props
    return (
      <div>
        <p data-testId="shopping-cart-product-quantity">{shoppingList.length}</p>
        {shoppingList.length === 0 ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p> : (
        shoppingList.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          image={product.thumbnail}
          price={product.price}
          onButton={false}
          id={product.id}
          testid={"shopping-cart-product-name"}
        />)))}
      </div>
    );
  }
}

export default ShoppingCart;
