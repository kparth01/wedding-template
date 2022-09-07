import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { Component } from "react";
import { useEffect } from "react";
import Announcement from "./components/Annoucement";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import "./assets/fonts/cavolini/CAVOLINI.TTF";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import dataJson from "./data.json";

class App extends Component {
	componentDidMount() {
		AOS.init({ duration: 1200 });
	}

	render() {
		const data = dataJson.data;
		return (
			<div className="App font-face-gm">
				<NavBar />
				{/* <Navbar /> */}
				<Carousel />
				<br />
				<div data-aos="zoom-in">
					<Announcement />
				</div>
				<div data-aos="zoom-in">
					<Section
						id="sangeet"
						heading={data[0].heading}
						tagLine={data[0].tagLine}
						description={data[0].description}
						day={data[0].when.day}
						date={data[0].when.date}
						month={data[0].when.month}
						year={data[0].when.year}
						startTime={data[0].when.startTime}
						endTime={data[0].when.endTime}
						addressLine1={data[0].where.addressLine1}
						addressLine2={data[0].where.addressLine2}
						addressLine3={data[0].where.addressLine3}
						location={data[0].where.location}
					/>
				</div>
				<div data-aos="zoom-in">
					<Section
						id="wedding"
						heading={data[1].heading}
						tagLine={data[1].tagLine}
						description={data[1].description}
						day={data[1].when.day}
						date={data[1].when.date}
						month={data[1].when.month}
						year={data[1].when.year}
						startTime={data[1].when.startTime}
						endTime={data[1].when.endTime}
						addressLine1={data[1].where.addressLine1}
						addressLine2={data[1].where.addressLine2}
						addressLine3={data[1].where.addressLine3}
						location={data[1].where.location}
					/>
				</div>
				<div data-aos="zoom-in">
					<Section
						id="reception"
						heading={data[2].heading}
						tagLine={data[2].tagLine}
						description={data[2].description}
						day={data[2].when.day}
						date={data[2].when.date}
						month={data[2].when.month}
						year={data[2].when.year}
						startTime={data[2].when.startTime}
						endTime={data[2].when.endTime}
						addressLine1={data[2].where.addressLine1}
						addressLine2={data[2].where.addressLine2}
						addressLine3={data[2].where.addressLine3}
						location={data[2].where.location}
					/>
				</div>
				<div data-aos="zoom-in">
					<Contact />
				</div>
				<Copyright />
			</div>
		);
	}
}

export default App;
