const API_URL = 'http://localhost:8000/products';

export async function getProducts(id: string = '') {
  const res = await fetch(`${API_URL}/${id}`);

  if (!res.ok) throw Error('Failed getting Products');

  const data = await res.json();
  const limitedData = data.slice(1, 41);
  return limitedData;
}
