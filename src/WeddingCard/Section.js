import React from "react";

export default function Section({ title, content, when, where, dark, id }) {
	return (
		<div className={"section" + (dark ? " section-dark" : "")}>
			<div className="section-content" id={id}>
				<h1>{title}</h1>
				<p>{content}</p>
			</div>
		</div>
	);
}
