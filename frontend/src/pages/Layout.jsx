import React from 'react';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            <div className="row mt-5 bg-dark" style={{ minHeight: "100vh" }}>
                <div className="col-md-12 d-flex justify-content-center">
                    <main>
                        {children}
                    </main>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Layout