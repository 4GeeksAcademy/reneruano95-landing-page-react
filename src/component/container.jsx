import React from "react";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

const Container = () => {
    return (
        <div className="container" >
            <Jumbotron
                title='A Warm Welcome!'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                buttonLabel='Call to Action!'
            />
            <div className="container">
                <div className="row justify-content-center justify-content-sm-between justify-content-md-center justify-content-lg-between">
                    <Card
                        srcImg="https://fakeimg.pl/500x325?font=noto"
                        altTextImg="..."
                        cardTitle='Card Title'
                        cardText="Some quick example text to build on the card title and make up the bulk of the card' s content."
                        btnUrl="#"
                        btnText='Go Somewhere!'
                    />
                    <Card
                        srcImg="https://fakeimg.pl/500x325?font=noto"
                        altTextImg="..."
                        cardTitle='Card Title'
                        cardText="Some quick example text to build on the card title and make up the bulk of the card' s content."
                        btnUrl="#"
                        btnText='Go Somewhere!'
                    />
                    <Card
                        srcImg="https://fakeimg.pl/500x325?font=noto"
                        altTextImg="..."
                        cardTitle='Card Title'
                        cardText="Some quick example text to build on the card title and make up the bulk of the card' s content."
                        btnUrl="#"
                        btnText='Go Somewhere!'
                    />
                    <Card
                        srcImg="https://fakeimg.pl/500x325?font=noto"
                        altTextImg="..."
                        cardTitle='Card Title'
                        cardText="Some quick example text to build on the card title and make up the bulk of the card' s content."
                        btnUrl="#"
                        btnText='Go Somewhere!'
                    />
                </div>
            </div>
        </div >
    )
}

export default Container