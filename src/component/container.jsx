import React from "react";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

const Container = () => {
    return (
        <div className="container">
            <Jumbotron />
            <div className="container">
                <div className="row justify-content-center justify-content-md-between">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Container