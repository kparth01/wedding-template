import React, { Component } from "react";
import When from "./When";
import Where from "./Where";

class Reception extends Component {
	render() {
		return (
			<div id="reception" className="section-content">
				<h1>Reception</h1>
				<p>
					This function is for congratulating the newly weds in their new
					journey together. Please bless us with your presence as we begin the
					new chapter of our life. We will be waiting for you!!! :)
				</p>
				<div className="row">
					<div className="col">
						<When
							day={"Wednesday"}
							date={"30th"}
							month={"November"}
							year={"2022"}
							startTime={"7:00 PM"}
							endTime={"10:00 PM"}
						/>
					</div>
					<div className="col">
						<Where
							addressLine1={"Maxus Banquet Hall, 3rd Floor"}
							addressLine2={"Behind Maxus Shopping Mall, "}
							addressLine3={"Bhayandar (W), Thane (India)."}
							location={"https://goo.gl/maps/vZv9d15zjFCFrhh46	"}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Reception;
