import React from 'react'
import { BiLogIn, BiMailSend, BiLock } from 'react-icons/bi';

const Login = () => {
    return (
        <section className='mt-5'>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <form className='card'>
                            <div className="card-body">
                                <div className="d-flex justify-content-center">
                                    <h1 className="title fw-bold">Login</h1>
                                </div>
                                <div className="form-group">
                                    <label className='fw-bold'><BiMailSend></BiMailSend>Email :</label>
                                    <input type="text" className='form-control' placeholder='Email' />
                                </div>
                                <div className="form-group mt-3">
                                    <label className='fw-bold'><BiLock></BiLock>Password :</label>
                                    <input type="password" className='form-control' placeholder='*****' />
                                </div>
                                <div className="form-group mt-3 d-flex justify-content-center">
                                    <button type="submit" className='btn btn-primary fw-bold text-light' style={{ width: "200px" }}><BiLogIn></BiLogIn>Login</button>
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