import React, { Component } from "react";
import "./App.css";
import Carousel from "../Carousel";
import Navbar from "./Navbar";

class App extends Component {
	render() {
		return (
			<div>
				<Carousel />
				<Navbar />
			</div>
		);
	}
}

export default App;
