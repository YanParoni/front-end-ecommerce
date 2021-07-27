export async function getCategories() {
  const response = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  );
  return response.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endPoint = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const categories = await endPoint.json();
  return categories;
}