const BASE_URL = 'http://localhost:8769/products';

export async function getAllProducts() {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
}

export async function getProductById(id) {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch product with id ${id}`);
    return res.json();
}

export async function createProduct(product) {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    });
    if (!res.ok) throw new Error('Failed to create product');
    return res.text();
}

export async function updateProduct(id, product) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    });
    if (!res.ok) throw new Error(`Failed to update product with id ${id}`);
    return res.text();
}

export async function deleteProduct(id) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    });
    if (!res.ok) throw new Error(`Failed to delete product with id ${id}`);
    return res.text();
}

export async function decreaseStock(productId, quantity) {
    const res = await fetch(`${BASE_URL}/decreaseStock?productId=${productId}&quantity=${quantity}`, {
        method: 'POST'
    });
    if (!res.ok) throw new Error(`Failed to decrease stock for product ${productId}`);
    return res.text();
}
