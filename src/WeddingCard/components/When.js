import React from "react";

function When(props) {
	return (
		<div
			id="when"
			className="section-content section-dark"
			data-aos="fade-right">
			<h2>When</h2>
			<p>
				{props.day}
				<br />
				{props.date} {props.month} {props.year}
				<br />
				From: {props.startTime} till {props.endTime}
			</p>
		</div>
	);
}

export default When;
