// iteracion 1
// Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra
// "Camiseta". Usa la función .includes de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

function allProducts() {
    for (let i = 0; i < products.length; i++) {
      if (products[i].includes("Camiseta")) {
        console.log(products[i]);
      }
    }
  }
  
  allProducts(products);