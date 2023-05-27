import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginUser, reset } from "../features/authSlice";
import { BiLogIn, BiMailSend, BiLock } from 'react-icons/bi';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user || isSuccess) {
            navigate("/dashboard");
        }
        dispatch(reset());
    }, [user, isSuccess, dispatch, navigate]);

    const Auth = (e) => {
        e.preventDefault();
        dispatch(LoginUser({ email, password }));
    }

    return (
        <section className='mt-5'>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <form onSubmit={Auth} className='card'>
                            {isError && <p className='text-center'>{message}</p>}
                            <div className="card-body">
                                <div className="d-flex justify-content-center">
                                    <h1 className="title fw-bold">Login</h1>
                                </div>
                                <div className="form-group">
                                    <label className='fw-bold'><BiMailSend></BiMailSend>&nbsp;Email :</label>
                                    <input type="text" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
                                </div>
                                <div className="form-group mt-3">
                                    <label className='fw-bold'><BiLock></BiLock>&nbsp;Password :</label>
                                    <input type="password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='*****' required />
                                </div>
                                <div className="form-group mt-3 d-flex justify-content-center">
                                    <button type="submit" className='btn btn-primary fw-bold text-light' style={{ width: "200px" }}><BiLogIn></BiLogIn>&nbsp;{isLoading ? 'Loading...' : 'Login'}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login