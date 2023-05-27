import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { BsPersonFill, BsTagFill, BsHouseDoorFill, BsArrowLeft } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Logout, reset } from "../features/authSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const logout = () => {
        dispatch(Logout());
        dispatch(reset());
        navigate("/");
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top" style={{ background: "#252529", boxShadow: "0 0 4px #fff" }}>
                <div className="container">
                    <NavLink to="/dashboard" className="navbar-brand fw-bold" style={{ color: "#F94A29" }}>Admin</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <NavLink to={"/dashboard"} className="me-3 nav-link" style={{ color: "#fff" }}><BsHouseDoorFill className='me-2'></BsHouseDoorFill>Home</NavLink>
                            <NavLink to={"/products"} className="me-3 nav-link" style={{ color: "#fff" }}><BsTagFill className='me-2'></BsTagFill>Products</NavLink>
                            {user && user.role === "admin" && (
                                <div>
                                    <NavLink to={"/users"} className="me-3 nav-link" style={{ color: "#fff" }}><BsPersonFill className='me-2'></BsPersonFill>Users</NavLink>
                                </div>
                            )}
                            <button type="submit" onClick={logout} className="btn fw-bold" style={{ background: "#F94A29", color: "#fff" }}>
                                <BsArrowLeft className='me-2'></BsArrowLeft>Log out
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar