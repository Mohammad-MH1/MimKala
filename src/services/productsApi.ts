const API_URL = 'http://localhost:8000/products';

export async function getProducts() {
  const res = await fetch(`${API_URL}`);
  if (!res.ok) throw Error('Failed getting Products');
  const data = await res.json();
  return data;
}

export async function getProduct(id: number) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw Error('Failed getting Product');
  const data = await res.json();
  return data;
}
