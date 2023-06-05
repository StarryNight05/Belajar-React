import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const addUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword,
                role: role
            });
            navigate('/users');
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    return (
        <div className='container mt-5'>
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <h3 className="fw-bold">Users</h3>
                    <h5>Add New User</h5><hr />
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={addUser}>
                                <p className="badge bg-danger fw-bold p-2">{msg}</p>
                                <div className="form-group">
                                    <label className='fw-bold'>Name :</label>
                                    <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
                                </div>
                                <div className="form-group mt-3">
                                    <label className='fw-bold'>Email :</label>
                                    <input type="text" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                                </div>
                                <div className="form-group mt-3">
                                    <label className='fw-bold'>Password :</label>
                                    <input type="password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='*****' />
                                </div>
                                <div className="form-group mt-3">
                                    <label className='fw-bold'>Confirm Password :</label>
                                    <input type="password" className='form-control' value={confPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='*****' />
                                </div>
                                <div className="form-group mt-3">
                                    <label className='fw-bold'>Role :</label>
                                    <select className='form-select' value={role} onChange={(e) => setRole(e.target.value)}>
                                        <option value="">---</option>
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