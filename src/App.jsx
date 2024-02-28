import React from "react";
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import Container from "./component/container/container";

//create your first component
const App = () => {
	return (
		<div className="min-vh-100 d-flex flex-column justify-content-between">
			<Navbar />
			<Container />
			<Footer />
		</div>

	);
};

export default App;
