import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import logo from "../assets/images/logo.png";
import pdf from "../assets/invitation2.pdf";
import { animateScroll as scroll } from "react-scroll";

function scrollToTop() {
	scroll.scrollToTop();
}

function NavBar() {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="light" fixed="top">
				<Container>
					<Navbar.Brand href="#carousel" className="justify-content-center">
						<img
							src={logo}
							className="nav-logo"
							alt="Logo"
							onClick={scrollToTop}
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#sangeet">SANGEET</Nav.Link>
							<Nav.Link href="#wedding">WEDDING</Nav.Link>
							<Nav.Link href="#reception">RECEPTION</Nav.Link>
							<Nav.Link href="#contact">FIND US?</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href={pdf} target="_blank" download={pdf}>
								DOWNLOAD CARD
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavBar;
