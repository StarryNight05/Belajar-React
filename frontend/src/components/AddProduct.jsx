import React from 'react'

const AddProduct = () => {
    return (
        <div className='container mt-5'>
            <h3 className="fw-bold">Products</h3>
            <h5>Add New Product</h5>
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label className='fw-bold'>Product Name :</label>
                            <input type="text" className='form-control' placeholder='Product Name' />
                        </div>
                        <div className="form-group mt-3">
                            <label className='fw-bold'>Price :</label>
                            <input type="number" className='form-control' placeholder='Rp. ---' />
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