import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
//import Section from "./Section";
//import dummyText from "./DummyText";
import Home from "../Home";
import AboutUs from "../AboutUs";
import Contact from "../Contact";
import Carousel from "../Carousel";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Carousel />
				<Navbar />
				<Home />
				<AboutUs />
				<Contact />
				{/* <Section
					title="Section 1"
					subtitle={dummyText}
					dark={false}
					id="section1"
				/> */}
			</div>
		);
	}
}

export default App;
