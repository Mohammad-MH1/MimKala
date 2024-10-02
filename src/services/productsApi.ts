const API_URL = 'http://localhost:8000/products';

export async function getProducts(params?: {
  page?: number;
  perPage?: number;
}) {
  let parameters = `?`;

  if (params) {
    if (params.page) parameters += `_page=${params.page}&`;
    if (params.perPage) parameters += `_per_page=${params.perPage}&`;
  }

  const res = await fetch(`${API_URL}${parameters}`);
  if (!res.ok) throw Error('Failed getting Products');
  const { data } = await res.json();

  return data;
}

export async function getProduct(id: number) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw Error('Failed getting Product');
  const data = await res.json();
  return data;
}
