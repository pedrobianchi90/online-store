import React from 'react';
import PropTypes from 'prop-types';
// import { excluirProduDaLista } from '../services/carrinhoDeCompra';
// import { Link } from 'react-router-dom';

class CardShopping extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     quantidade: 0,
  //   };
  // }

  // componentDidMount() {
  //   const { quantity } = this.props;
  //   this.setState({ quantidade: quantity.quantidade });
  // }

  // handleButtonSubtract = async () => {
  //   const { quantidade } = this.state;
  //   if (quantidade > 1) {
  //     await this.setState((prevState) => ({ quantidade: prevState.quantidade - 1 }));
  //   }
  // }

  // handleButtonAdd = async () => {
  //   await this.setState((prevState) => ({ quantidade: prevState.quantidade + 1 }));
  // }

  // handleButtonExcluir = async () => {
  //   const { quantity } = this.props;
  //   await excluirProduDaLista(quantity);
  // }

  render() {
    // const { quantidade } = this.state;
    const { title, image, price } = this.props;
    return (
      <div data-testid="product">
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <img src={ image } alt={ title } />
        {/* <p>{ (price * quantidade) }</p> */}
        <p>{ price }</p>
        <button
          onClick={ this.handleButtonSubtract }
          type="button"
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        {/* <span>{quantidade}</span> */}
        <button
          onClick={ this.handleButtonAdd }
          type="button"
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <button
          onClick={ this.handleButtonExcluir }
          type="button"
        >
          x
        </button>
      </div>
    );
  }
}

CardShopping.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  // quantity: PropTypes.shape({
  //   quantidade: PropTypes.number.isRequired,
  // }).isRequired,
  // excluirProduDaLista: PropTypes.func.isRequired,
};

export default CardShopping;
