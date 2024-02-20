import React from "react";

const Jumbotron = (props) => {
    return (
        <div className="px-2 mb-2 mt-4 bg-body-tertiary rounded-3">
            <div className="container-fluid py-4">
                <h1 className="display-6 fw-semibold">{props.title}</h1>
                <p className="col-12 fs-5">{props.description}</p>
                <button className="btn btn-primary btn-lg" type="button">{props.buttonLabel}</button>
            </div>
        </div>
    )
}

export default Jumbotron