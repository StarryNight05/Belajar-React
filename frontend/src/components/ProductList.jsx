import React from 'react'
import { BiAddToQueue } from 'react-icons/bi'

const ProductList = () => {
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
                            <th>Username</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductList