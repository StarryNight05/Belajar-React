import React from 'react'

const ProductList = () => {
    return (
        <div className='container mt-5'>
            <h2 className='fw-bold text-dark'>Products</h2>
            <h5>List Product</h5><hr />
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