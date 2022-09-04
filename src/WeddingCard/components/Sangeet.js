import React, { Component } from "react";
import When from "./When";
import Where from "./Where";

class Sangeet extends Component {
	render() {
		return (
			<div id="sangeet" className="section-content">
				<h1>Sangeet Ceremony</h1>
				<p>
					{" "}
					It marks the first-event in the Wedding celebrations. A combination
					dinner and dancing on Indian folk songs.{" "}
				</p>
				<div className="row">
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
