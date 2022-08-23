import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
//import Section from "./Section";
//import dummyText from "./DummyText";
import Wedding from "./components/Wedding";
import Contact from "./components/Contact";
import Carousel from "./components/Carousel";
import Sangeet from "./components/Sangeet";
import Announcement from "./components/Annoucement";
import Reception from "./components/Reception";
import Copyright from "./components/Copyright";
import "./fonts/cavolini/CAVOLINI.TTF";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
	useEffect(() => {
		AOS.init({ duration: 1200 });
	}, []);

	return (
		<div className="App font-face-gm">
			<Navbar />
			<Carousel />
			<br />
			<div data-aos="zoom-in">
				<Announcement />
			</div>
			<div data-aos="zoom-in">
				<Sangeet />
			</div>
			<div data-aos="zoom-in">
				<Wedding />
			</div>
			<div data-aos="zoom-in">
				<Reception />
			</div>
			<div data-aos="zoom-in">
				<Contact />
			</div>
			<Copyright />
			{/* <Section
					title="Section 1"
					subtitle={dummyText}
					dark={false}
					id="section1"
				/> */}
		</div>
	);
}

export default App;
