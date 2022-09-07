import React, { Component } from "react";
import When from "./When";
import Where from "./Where";

class Sangeet extends Component {
	render() {
		return (
			<div id="sangeet" className="section-content">
				<h1>Sangeet Ceremony</h1>
				<p className="tag-style">Its the time to disco!!!</p>
				<p className="lighter">
					Join us in this pre-wedding event for to mark beginning of Wedding
					celebrations. There will be dance performances on Indian folk songs
					known as "Garba Ras" followed by dinner.{" "}
				</p>
				<div className="row lighter">
					<div className="col">
						<When
							day={"Saturday"}
							date={"26th"}
							month={"November"}
							year={"2022"}
							startTime={"7:00 PM"}
							endTime={"11:00 PM"}
						/>
					</div>
					<div className="col">
						<Where
							addressLine1={"Mahajan Banquet, Opp Kanakia "}
							addressLine2={"Police Station, Baverly Park, "}
							addressLine3={"Mira Road(E), Thane (India)."}
							location={"https://goo.gl/maps/wjLcyUxfzTy4jry9A"}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Sangeet;
