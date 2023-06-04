import React from 'react';
import { useSelector } from 'react-redux';

const Welcome = () => {
    const { user } = useSelector((state) => state.auth);
    return (
        <div className='container mt-5'>
            <h3 className='fw-bold'>Dashboard</h3>
            <h5>Welcome back <strong>{user && user.name}</strong></h5>
        </div>
    )
}

export default Welcome