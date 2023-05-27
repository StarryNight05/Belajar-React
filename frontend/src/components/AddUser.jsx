import React from 'react'

const AddUser = () => {
    return (
        <div className='container mt-5'>
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <h3 className="fw-bold">Users</h3>
                    <h5>Add New User</h5><hr />
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label className='fw-bold'>Name :</label>
                                    <input type="text" className='form-control' placeholder='Name' />
                                </div>
                                <div className="form-group mt-3">
                                    <label className='fw-bold'>Email :</label>
                                    <input type="text" className='form-control' placeholder='Email' />
                                </div>
                                <div className="form-group mt-3">
                                    <label className='fw-bold'>Password :</label>
                                    <input type="password" className='form-control' placeholder='*****' />
                                </div>
                                <div className="form-group mt-3">
                                    <label className='fw-bold'>Confirm Password :</label>
                                    <input type="password" className='form-control' placeholder='*****' />
                                </div>
                                <div className="form-group mt-3">
                                    <label className='fw-bold'>Role :</label>
                                    <select className='form-select'>
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </select>
                                </div>
                                <div className="form-group mt-3 d-flex justify-content-center">
                                    <button type="submit" className='btn btn-primary fw-bold text-light' style={{ width: "200px" }}>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser