import React, { useState, useEffect } from 'react'
import { BiAddToQueue } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UserList = () => {
    const [user, setUsers] = useState([]);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
    }

    const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:5000/users/${userId}`);
        getUser();
    }
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
                        {user.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <div className="d-flex justify-content-between">
                                        <Link to={`/users/edit/${user.id}`} className="btn btn-primary fw-bold">Edit</Link>
                                        <button onClick={() => deleteUser(user.id)} className="btn btn-danger fw-bold" type="submit">Hapus</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList