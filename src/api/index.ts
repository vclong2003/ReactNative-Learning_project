const baseUrl = 'https://61dc2ac8591c3a0017e1a75f.mockapi.io';

const api = {
  getProduct: baseUrl + '/product',
  getDetailProduct: (id: string | number) => `${baseUrl}/product/${id}`,
  createProduct: baseUrl + '/product',
  updateProduct: baseUrl + '/product',
  deleteProduct: (id: string | number) => `${baseUrl}/product/${id}`,
};

export default api;
