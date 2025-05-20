// const BASE_URL_PRODUCTS = 'http://localhost:8769/products';
// const BASE_URL_PRODUCTS = 'https://product-microservicio-electro.onrender.com/products';

// const BASE_URL_CART = 'http://localhost:8763/api/carts';

const BASE_URL_PRODUCTS = import.meta.env.VITE_BASE_URL_PRODUCTS;
const BASE_URL_CART = import.meta.env.VITE_BASE_URL_CART;


export async function getAllProducts() {
    const res = await fetch(BASE_URL_PRODUCTS);
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
}

export async function getProductById(id) {
    const res = await fetch(`${BASE_URL_PRODUCTS}/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch product with id ${id}`);
    return res.json();
}

export async function createProduct(product) {
    const res = await fetch(BASE_URL_PRODUCTS, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    });
    if (!res.ok) throw new Error('Failed to create product');
    return res.text();
}

export async function updateProduct(id, product) {
    const res = await fetch(`${BASE_URL_PRODUCTS}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    });
    if (!res.ok) throw new Error(`Failed to update product with id ${id}`);
    return res.text();
}

export async function deleteProduct(id) {
    const res = await fetch(`${BASE_URL_PRODUCTS}/${id}`, {
        method: 'DELETE'
    });
    if (!res.ok) throw new Error(`Failed to delete product with id ${id}`);
    return res.text();
}

export async function decreaseStock(productId, quantity) {
    const res = await fetch(`${BASE_URL_PRODUCTS}/decreaseStock?productId=${productId}&quantity=${quantity}`, {
        method: 'POST'
    });
    if (!res.ok) throw new Error(`Failed to decrease stock for product ${productId}`);
    return res.text();
}

// ---------------------------------------------------------------------------------------------------------
//CART uris

export async function getAllCarts() {
    const res = await fetch(BASE_URL_CART);
    if (!res.ok) throw new Error('Failed to fetch carts');
    return res.json();
}

export const addToCart = async (cartId, productId, quantity, priceAtTime) => {
  // Verificación de tipos y valores
  console.log("Tipo de productId:", typeof productId);
  console.log("Valor de productId:", productId);
  
  if (!productId) {
    throw new Error("ID de producto es nulo o indefinido");
  }
  
  const body = { productId, quantity, priceAtTime };
  console.log("Enviando al backend:", body);
  console.log("Request body:", JSON.stringify(body, null, 2));

  // Resto de tu código...
};
// ---------------------------------------------------------------------------------------------------------
//SALES uris
