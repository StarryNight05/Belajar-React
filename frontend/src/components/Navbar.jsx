import React from 'react'
import { NavLink } from 'react-router-dom';
import { BsPersonFill, BsTagFill, BsHouseDoorFill, BsArrowLeft } from 'react-icons/bs'

const Navbar = () => {
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
                            <NavLink to={"/dashbaord"} className="me-3 nav-link" style={{ color: "#fff" }}><BsHouseDoorFill className='me-2'></BsHouseDoorFill>Home</NavLink>
                            <NavLink to={"/products"} className="me-3 nav-link" style={{ color: "#fff" }}><BsTagFill className='me-2'></BsTagFill>Products</NavLink>
                            <NavLink to={"/users"} className="me-3 nav-link" style={{ color: "#fff" }}><BsPersonFill className='me-2'></BsPersonFill>Users</NavLink>
                            <button type="submit" className="btn fw-bold" style={{ background: "#F94A29", color: "#fff" }}>
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