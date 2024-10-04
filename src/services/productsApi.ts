// const API_URL = 'http://localhost:8000/products';
const API_URL = 'https://four-gaudy-passenger.glitch.me/products';

export async function getProducts(params?: {
  page?: number;
  perPage?: number;
  categoryID?: string;
  price?: string;
  query?: string;
}) {
  let parameters = `?`;

  if (params) {
    if (params.page) parameters += `_page=${params.page}&`;
    if (params.perPage) parameters += `_limit=${params.perPage}&`;
    if (params.categoryID) parameters += `category.id=${params.categoryID}&`;
    if (params.price) {
      if (params.price === '1') parameters += `price_lte=25&`;
      if (params.price === '2') parameters += `price_gte=25&price_lte=50&`;
      if (params.price === '3') parameters += `price_gte=50&price_lte=75&`;
      if (params.price === '4') parameters += `price_gte=75&price_lte=100&`;
      if (params.price === '5') parameters += `price_gte=100&`;
    }

    if (params.query) parameters += `q=${params.query}`;
  }

  const res = await fetch(`${API_URL}${parameters}`);
  if (!res.ok) throw Error('Failed getting Products');

  const data = await res.json();
  const total = res.headers.get('x-total-count');

  return [data, total];
}

export async function getProduct(id: string | undefined) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw Error('Failed getting Product');
  const data = await res.json();
  return data;
}
