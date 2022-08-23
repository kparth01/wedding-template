import React, { Component } from "react";
import image1 from "../images/Image1.jpeg";
import image3 from "../images/Image3.jpg";
import "../App.css";

class Carousel extends Component {
	render() {
		return (
			<div id="demo" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#demo"
						data-bs-slide-to="0"
						className="active"></button>
					<button
						type="button"
						data-bs-target="#demo"
						data-bs-slide-to="1"></button>
					{/*<button
						type="button"
						data-bs-target="#demo"
						data-bs-slide-to="2"></button> */}
				</div>

				<div
					className="carousel-inner"
					style={{ height: "800px", background: "white" }}>
					<div className="carousel-item active card">
						<div
							class="card-img-overlay"
							style={{ textAlign: "center", marginTop: "400px" }}>
							<b>Parth and Siddhi</b>
							<br />
							<p>Inviting You To Celebrate Their Wedding</p>
						</div>
						{/*<img src="la.jpg" alt="Los Angeles" class="d-block" style="width:100%"></img> */}
						<img
							src={image1}
							alt="Los Angeles"
							className="d-block"
							style={{
								height: "900px",
								width: "80%",
								marginLeft: "auto",
								marginRight: "auto",
								opacity: "0.4",
							}}
						/>
					</div>
					<div
						className="carousel-item"
						style={{ height: "800px", background: "white" }}>
						<img
							src={image3}
							alt="Los Angeles"
							className="d-block"
							style={{
								height: "900px",
								width: "40%",
								marginLeft: "auto",
								marginRight: "auto",
								opacity: "0.4",
							}}
						/>
					</div>
				</div>

				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#demo"
					data-bs-slide="prev">
					<span className="carousel-control-prev-icon"></span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#demo"
					data-bs-slide="next">
					<span className="carousel-control-next-icon"></span>
				</button>
			</div>
		);
	}
}

export default Carousel;
