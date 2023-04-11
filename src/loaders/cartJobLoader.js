import { getShoppingCart } from "../utilities/fakedb";

const cartJobLoader =async() =>{

    const loadedProduct = await fetch('/jobs.json')
    const products = await loadedProduct.json();
    console.log(products)


    const storedCart = getShoppingCart();
//   console.log(storedCart)
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id == id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);}}
// console.log(savedCart)
    return savedCart
}

export default cartJobLoader ;