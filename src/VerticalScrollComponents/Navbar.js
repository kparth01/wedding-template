import React, { Component } from "react";
import logo from "../images/logo_symbol.png";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
	scrollToTop = () => {
		scroll.scrollToTop();
	};

	render() {
		return (
			<nav className="nav" id="navbar">
				<div className="nav-content">
					<img
						src={logo}
						className="nav-logo"
						alt="Logo"
						onClick={this.scrollToTop}
					/>
					<ul className="nav-items">
						<li className="nav-item">
							<Link
								activeClass="active"
								to="home"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}>
								HOME
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								to="aboutus"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}>
								ABOUT US
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								to="contact"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}>
								CONTACT
							</Link>
						</li>
						{/* <li className="nav-item">
							<Link
								activeClass="active"
								to="section1"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}>
								SECTION1
							</Link>
						</li> */}
					</ul>
				</div>
			</nav>
		);
	}
}
