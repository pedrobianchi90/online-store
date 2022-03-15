import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: [],
    };
  }

  handleButton = (id) => {
    const { shoppingList } = this.state;
    const list = shoppingList.map((prod) => prod);
    list.push(id);
    this.setState({
      shoppingList: list,
    });
  }

  render() {
    const { shoppingList } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ () => <Home handleButton={ this.handleButton } /> }
            />
            <Route
              path="/ShoppingCart"
              render={ () => <ShoppingCart shoppingList={ shoppingList } /> }
            />
            <Route
              exact
              path="/productdetails/:id"
              render={ (props) => (<ProductDetails { ...props } />) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
