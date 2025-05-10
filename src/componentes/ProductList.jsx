import React, { useState, useEffect } from 'react';
import { getAllProducts, getProductById, deleteProduct } from '../services/Api';

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchId, setSearchId] = useState('');

    useEffect(() => {
        getAllProducts()
            .then(setProducts)
            .catch(err => console.error(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteProduct(id);
            setProducts(products.filter(p => p.id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    const handleSearchById = async () => {
        try {
            const product = await getProductById(searchId);
            setSelectedProduct(product);
        } catch (err) {
            console.error(err);
            setSelectedProduct(null);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Product List</h1>

            {/* Search by ID */}
            <div className="mb-4">
                <input
                    type="text"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    placeholder="Enter product ID"
                    className="border px-2 py-1 mr-2"
                />
                <button
                    onClick={handleSearchById}
                    className="bg-blue-500 text-white px-4 py-1 rounded"
                >
                    Search by ID
                </button>
            </div>

            {/* Show selected product if any */}
            {selectedProduct && (
                <div className="mb-4 p-4 border rounded shadow bg-green-100">
                    <h2 className="text-xl font-bold">Found Product:</h2>
                    <p>Name: {selectedProduct.name}</p>
                    <p>Description: {selectedProduct.description}</p>
                    <p>Price: ${selectedProduct.price}</p>
                    <p>ID: {selectedProduct.id}</p>
                </div>
            )}

            {/* List of all products */}
            {products.map(product => (
                <div key={product.id} className="mb-4 p-4 border rounded shadow">
                    <h2 className="text-xl">{product.name}</h2>
                    <p>{product.description}</p>
                    <p className="font-bold">${product.price}</p>
                    <button
                        onClick={() => handleDelete(product.id)}
                        className="mt-2 bg-red-500 text-white px-4 py-1 rounded"
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}
