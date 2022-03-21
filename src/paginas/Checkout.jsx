import React from 'react';
import { getList, getTotalPrice } from '../services/carrinhoDeCompra';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      shoppingList: [],
      totalPagar: getTotalPrice(),
    };
  }

  async componentDidMount() {
    const list = getList();
    this.setState({ shoppingList: list });
    // await this.getTotal();
  }

  // getTotal = async () => {
  //   const { shoppingList } = this.state;
  //   let total = 0;
  //   shoppingList.forEach((item) => { total += item.quantility * item.price; });
  //   this.setState({ totalPagar: total });
  // }

  render() {
    const { shoppingList, totalPagar } = this.state;
    return (
      <div>
        <p>{`Total a pagar: ${totalPagar}`}</p>
        <p>Resumo das compras</p>
        {shoppingList.map((item) => (
          <div key={ item.id }>
            <p>{ item.title }</p>
            <img src={ item.thumbnail } alt={ item.name } />
            <p>{`Quantidade: ${item.quantility}`}</p>
          </div>
        ))}
        <form action="">
          <label htmlFor="nome">
            Nome:
            <input data-testid="checkout-fullname" id="nome" type="text" />
          </label>
          <label htmlFor="Email">
            Email:
            <input data-testid="checkout-email" id="Email" type="text" />
          </label>
          <label htmlFor="CPF">
            CPF:
            <input data-testid="checkout-cpf" id="CPF" type="text" />
          </label>
          <label htmlFor="Telefone">
            Telefone:
            <input data-testid="checkout-phone" id="Telefone" type="text" />
          </label>
          <label htmlFor="CEP">
            CEP:
            <input data-testid="checkout-cep" id="CEP" type="text" />
          </label>
          <label htmlFor="Endereço">
            Endereço:
            <input data-testid="checkout-address" id="Endereço" type="text" />
          </label>
        </form>
      </div>
    );
  }
}

export default Checkout;
