import React from "react";


const Card = (props) => {
    return (

        <div className="card col-sm-8 col-md-5 col-lg-3 mx-1 my-2 px-0"
            style={{ width: "14rem" }}
        >
            <img src={props.srcImg} className="card-img-top img-fluid" alt={props.altTextImg} />
            <div className="card-body text-center px-1 pb-1">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
            </div>
            <div className="card-footer d-flex justify-content-center bg-transparent">
                <a href={props.btnUrl} className="btn btn-primary">{props.btnText}</a>
            </div>
        </div>


    )
}

export default Card