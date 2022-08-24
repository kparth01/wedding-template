import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { useEffect } from "react";
import Announcement from "./components/Annoucement";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import Reception from "./components/Reception";
import Sangeet from "./components/Sangeet";
import Wedding from "./components/Wedding";
import "./fonts/cavolini/CAVOLINI.TTF";
import NavBar2 from "./components/NavBar2";

function App() {
	useEffect(() => {
		AOS.init({ duration: 1200 });
	}, []);

	return (
		<div className="App font-face-gm">
			<NavBar2 />
			{/* <Navbar /> */}
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
