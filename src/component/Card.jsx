import React from "react";


const Card = () => {
    return (

        <div className="card col-sm-8 col-md-5 col-lg-3 mx-1 my-2"
            style={{ width: "14rem" }}
        >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-footer d-flex justify-content-center bg-transparent">
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>


    )
}

export default Card