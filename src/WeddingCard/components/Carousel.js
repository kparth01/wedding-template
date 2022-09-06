import React, { Component } from "react";
import image1 from "../assets/images/Image1.jpeg";
import image3 from "../assets/images/Image3.jpg";
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
							<h1>
								<b>
									Parth{" "}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-hearts"
										viewBox="0 0 16 16">
										<path
											fill-rule="evenodd"
											d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015Zm6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343ZM7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358Z"
										/>
									</svg>{" "}
									Siddhi
								</b>
							</h1>
							<h3>
								<p>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-balloon-heart"
										viewBox="0 0 16 16">
										<path
											fill-rule="evenodd"
											d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"
										/>
									</svg>{" "}
									Inviting You To Celebrate Our Wedding{" "}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-balloon-heart"
										viewBox="0 0 16 16">
										<path
											fill-rule="evenodd"
											d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"
										/>
									</svg>
								</p>
							</h3>
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
