import React, { Component } from "react";
import { Route, NavLink, HashRouter, Routes } from "react-router-dom";
import Home from "../Home";
import AboutUs from "../AboutUs";
import Contact from "../Contact";

class Navbar extends Component {
	render() {
		return (
			<HashRouter>
				<div>
					<ul className="header">
						<li>
							<NavLink exact to="/">
								HOME
							</NavLink>
						</li>
						<li>
							<NavLink to="/aboutus">ABOUT US</NavLink>
						</li>
						<li>
							<NavLink to="/contact">CONTACT</NavLink>
						</li>
					</ul>
					<div className="content">
						<Routes>
							<Route path="/" element={<Home />} exact />
							<Route path="/aboutus" element={<AboutUs />} />
							<Route path="/contact" element={<Contact />} />
						</Routes>
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default Navbar;
