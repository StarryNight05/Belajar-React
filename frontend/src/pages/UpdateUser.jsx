import React, { useEffect } from 'react'
import Layout from './Layout'
import EditUser from '../components/EditUser'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

const UpdateUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError, user } = useSelector((state => state.auth));

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            navigate("/");
        }
        if (user && user.role !== "admin") {
            navigate("/dashboard");
        }
    }, [isError, user, navigate]);
    return (
        <Layout>
            <EditUser></EditUser>
        </Layout>
    )
}

export default UpdateUser