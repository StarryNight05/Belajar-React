import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/products', {
                name: name,
                price: price
            });
            navigate('/products');
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <div className='container mt-5'>
            <h3 className="fw-bold">Products</h3>
            <h5>Add New Product</h5>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={saveProduct}>
                        <p className="badge bg-danger fw-bold p-2">{msg}</p>
                        <div className="form-group">
                            <label className='fw-bold'>Product Name :</label>
                            <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)} placeholder='Product Name' />
                        </div>
                        <div className="form-group mt-3">
                            <label className='fw-bold'>Price :</label>
                            <input type="number" className='form-control' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Rp. ---' />
                        </div>
                        <div className="form-group mt-3 d-flex justify-content-center">
                            <button type="submit" className='btn btn-primary fw-bold text-light' style={{ width: "200px" }}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct