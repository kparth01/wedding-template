import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
import logo from "../images/logo4.png";
import { animateScroll as scroll } from "react-scroll";

function scrollToTop() {
	scroll.scrollToTop();
}

function BasicExample() {
	return (
		<Navbar
			collapseOnSelect
			className="ms-auto"
			bg="light"
			expand="lg"
			fixed="top">
			<Container fluid>
				<Navbar.Brand href="#carousel" className="justify-content-center">
					<img
						src={logo}
						className="nav-logo"
						alt="Logo"
						onClick={scrollToTop}
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						/* className="justify-content-center"
						style={{ width: "100%" }} */
						navbarScroll>
						<Nav.Link href="#sangeet">SANGEET</Nav.Link>
						<Nav.Link href="#wedding">WEDDING</Nav.Link>
						<Nav.Link href="#reception">RECEPTION</Nav.Link>
						<Nav.Link href="#contact">FIND US?</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default BasicExample;
