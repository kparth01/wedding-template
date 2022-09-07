import React from "react";
import When from "./When";
import Where from "./Where";

export default function Section(props) {
	return (
		<div id={props.id} className="section-content">
			<h1>{props.heading}</h1>
			<p className="tag-style">{props.tagLine}</p>
			<p className="lighter">{props.description}</p>
			<div className="row lighter">
				<div className="col">
					<When
						day={props.day}
						date={props.date}
						month={props.month}
						year={props.year}
						startTime={props.startTime}
						endTime={props.endTime}
					/>
				</div>
				<div className="col">
					<Where
						addressLine1={props.addressLine1}
						addressLine2={props.addressLine2}
						addressLine3={props.addressLine3}
						location={props.location}
					/>
				</div>
			</div>
		</div>
	);
}
