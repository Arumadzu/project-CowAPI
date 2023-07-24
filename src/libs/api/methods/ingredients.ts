export async function getIngredients() {
  const response = await fetch(import.meta.env.VITE_BASE_URL + '/ingredients', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();

  return data;
}
