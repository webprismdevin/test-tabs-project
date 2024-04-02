import products from './products.json'
/**
 * Gets a list of products by fetching from a local JSON file. 
 * Adds a 500ms delay before resolving to simulate async request.
*/
export async function getProducts() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return products
}