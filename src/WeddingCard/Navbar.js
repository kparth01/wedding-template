import React, { Component } from "react";
import logo from "./images/logo4.png";
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
								to="sangeet"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}>
								SANGEET
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								to="wedding"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}>
								WEDDING
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								to="reception"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}>
								RECEPTION
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
								FIND US?
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
