import React from "react";

const Jumbotron = () => {
    return (
        <div className="ps-5 pe-5 mb-2 mt-4 bg-body-tertiary rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-6 fw-bold">Custom jumbotron</h1>
                <p className="col-12 fs-5">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                <button className="btn btn-primary btn-lg" type="button">Example button</button>
            </div>
        </div>
    )
}

export default Jumbotron