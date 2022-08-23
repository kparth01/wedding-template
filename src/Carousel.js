import React, { Component } from "react";
import image1 from "./images/la.jpeg";
import image2 from "./images/chicago.jpeg";
import image3 from "./images/ny.jpeg";

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
					<button
						type="button"
						data-bs-target="#demo"
						data-bs-slide-to="2"></button>
				</div>

				<div className="carousel-inner">
					<div className="carousel-item active">
						{/*<img src="la.jpg" alt="Los Angeles" class="d-block" style="width:100%"></img> */}
						<img
							src={image1}
							alt="Los Angeles"
							className="d-block"
							style={{ width: "100%" }}
						/>
					</div>
					<div className="carousel-item">
						<img
							src={image2}
							alt="Chicago"
							className="d-block"
							style={{ width: "100%" }}
						/>
					</div>
					<div className="carousel-item">
						<img
							src={image3}
							alt="New York"
							className="d-block"
							style={{ width: "100%" }}
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
