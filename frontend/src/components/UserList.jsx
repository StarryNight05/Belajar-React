import React from 'react'
import { BiAddToQueue } from 'react-icons/bi';

const UserList = () => {
    return (
        <div className='container mt-5'>
            <h2 className='fw-bold text-dark'>Users</h2>
            <div className="d-flex justify-content-between">
                <h5>List User</h5>
                <a href="/users/add" className="btn fw-bold text-bg-dark"><BiAddToQueue></BiAddToQueue>&nbsp;Tambah</a>
            </div>
            <hr />
            <div className="table-responsive">
                <table className='table table-bordered table-hover table-striped'>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
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

export default UserList