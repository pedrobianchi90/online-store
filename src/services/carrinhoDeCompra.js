let shoppingList = [];

export const excluirProduDaLista = (id) => {
  const newList = shoppingList.filter((product) => product.id !== id);
  shoppingList = newList;
};

export const aumentarQuantProdList = (id) => {
  // const item = shoppingList.filter((product) => product.id === id)[0];
  // item.quantility += 1;
  // excluirProduDaLista(id);
  // shoppingList.push(item);
  shoppingList.forEach((item, index) => {
    if (item.id === id) shoppingList[index].quantility += 1;
  });
};

export const diminuirQuantProdList = (id) => {
  const prodc = shoppingList.filter((product) => product.id === id)[0];
  if (prodc.quantility > 1) {
    shoppingList.forEach((item, index) => {
      if (item.id === id) shoppingList[index].quantility -= 1;
    });
  }
  //   item.quantility -= 1;
  //   excluirProduDaLista(id);
  //   shoppingList.push(item);
};

export const handleButton = (selected) => {
  const contem = shoppingList.some((product) => product.id === selected.id);
  if (contem) {
    aumentarQuantProdList(selected.id);
  } else {
    const item = selected;
    item.quantility = 1;
    shoppingList.push(item);
  }
};

export const getquantilityItem = () => {
  let totalItem = 0;
  shoppingList.forEach((item) => { totalItem += item.quantility; });
  return totalItem;
};

export const getTotalPrice = () => {
  let totalPrice = 0;
  shoppingList.forEach((item) => { totalPrice += item.quantility * item.price; });
  return totalPrice;
};

export const getList = () => shoppingList;
