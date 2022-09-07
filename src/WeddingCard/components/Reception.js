import React, { Component } from "react";
import When from "./When";
import Where from "./Where";

class Reception extends Component {
	render() {
		return (
			<div id="reception" className="section-content">
				<h1>Reception</h1>
				<p className="tag-style">
					Lo Safar Shuru Ho Gaya Hum Safar Tu Hogaya!!!
				</p>
				<p className="lighter">
					In this post-wedding event all the family memebers &amp; friends are
					invited for a nice evening to welcome the bride at her new home. All
					the invited guest meets the new member(Bride) of family in this event
					&amp; congratulates the couple as they start a new journey together.
					Please bless us with your presence as we begin the new chapter of our
					life. We will be waiting for you!!! :)
				</p>
				<div className="row lighter">
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
