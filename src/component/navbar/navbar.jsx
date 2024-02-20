import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary border-bottom border-body" data-bs-theme="dark" >
            <div className="container">
                <a className="navbar-brand fw-semibold" href="#">Navbar Bootsrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02" >
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">About</a>
                        <a className="nav-link" href="#">Services</a>
                        <a className="nav-link" href="#">Contact</a>

                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar