import React from "react";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

const Container = () => {
    return (
        <div className="container">
            <Jumbotron
                title='A Warm Welcome!'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                buttonLabel='Call to Action!'
            />
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