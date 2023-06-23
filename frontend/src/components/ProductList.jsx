import React, { useState, useEffect } from 'react'
import { BiAddToQueue } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ProductList = () => {
    const [product, setProducts] = useState([]);

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
    }

    const deleteProduct = async (productId) => {
        await axios.delete(`http://localhost:5000/products/${productId}`);
        getProduct();
    }
    return (
        <div className='container mt-5'>
            <h2 className='fw-bold text-dark'>Products</h2>
            <div className="d-flex justify-content-between">
                <h5>List Product</h5>
                <a href="/products/add" className="btn fw-bold text-bg-dark"><BiAddToQueue></BiAddToQueue>&nbsp;Tambah</a>
            </div>
            <hr />
            <div className="table-responsive">
                <table className='table table-bordered table-hover table-striped'>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Username</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((product, index) => (
                            <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>Rp.{product.price.toLocaleString()}</td>
                                <td>{product.user.name}</td>
                                <td>
                                    <div className="d-flex justify-content-between">
                                        <Link to={`/products/edit/${product.id}`} className="btn btn-primary fw-bold">Edit</Link>
                                        <button onClick={() => deleteProduct(product.id)} className="btn btn-danger fw-bold" type="submit">Hapus</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default ProductList