import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './paginas/Home';
import ShoppingCart from './paginas/ShoppingCart';
import ProductDetails from './paginas/ProductDetails';
import Checkout from './paginas/Checkout';
import './App.css';
// import { interar } from './services/carrinhoDeCompra';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     shoppingList: [],
  //   };
  // }

  // handleButton = (id) => {
  //   const { shoppingList } = this.state;
  //   const list = shoppingList.map((prod) => prod);
  //   list.push(id);
  //   this.setState({
  //     shoppingList: list,
  //   });
  //   interar(shoppingList);
  // }

  render() {
    // const { shoppingList } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ () => <Home /> }
            />
            <Route
              path="/ShoppingCart"
              render={ () => <ShoppingCart /> }
            />
            <Route
              exact
              path="/productdetails/:id"
              render={ (props) => (
                <ProductDetails { ...props } />) }
            />
          </Switch>
          <Route path="/checkout" component={ Checkout } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
