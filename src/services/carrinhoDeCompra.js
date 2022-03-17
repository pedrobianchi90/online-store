let shoppingList = [];
let productDetailsList = [];

export const excluirProduDaLista = (selected) => {
  const newList = shoppingList.filter((product) => product.id !== selected.id);
  shoppingList = [newList];
};

export const handleButton = (selected) => {
  console.log(selected);
  const contem = shoppingList.some((product) => product.id === selected.id);
  if (contem) {
    // const item = shoppingList.filter((product) => product.id === selected.id)[0];
    // item.selected += 1;
    // excluirProduDaLista(selected);
    shoppingList.push(selected);
    console.log('fiu fiu');
    // shoppingList = [...item];
  } else {
    // const item = selected;
    // const quandidade = s
    shoppingList.push(selected);
    console.log(shoppingList);
    // shoppingList = [quandidade];
    // console.log(shoppingList);

    const list = productDetailsList.map((prod) => prod);
    list.push(selected);
    productDetailsList = [list];
  }
};

export const interar = (list) => {
  shoppingList = list;
  console.log(shoppingList);
};

export const getList = () => shoppingList;
