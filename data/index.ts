import products from './products.json'
export async function getProducts() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return products
  }