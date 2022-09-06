import React, { Component } from "react";
import When from "./When";
import Where from "./Where";

class Wedding extends Component {
	render() {
		return (
			<div id="wedding" className="section-content" data-aos="zoom-in">
				<h1>Wedding Bells</h1>
				<p>
					In this event the groom arrives to the bride's home with all his
					friends &amp; family typically known as "Baraat". Groom and Bride will{" "}
					<i>tie-the-knot</i> with all the rituals. Bless us with your presence
					in the most joyfull day of our lives!!!
				</p>
				<div className="row">
					<div className="col">
						<When
							day={"Monday"}
							date={"28th"}
							month={"November"}
							year={"2022"}
							startTime={"10:00 AM"}
							endTime={"6:00 PM"}
						/>
					</div>
					<div className="col">
						<Where
							addressLine1={"VIP Road, Near Gopuri Square,"}
							addressLine2={"Nalwadi, Wardha (India) - 442001"}
							location={"https://goo.gl/maps/ckfSjo9kHbLd3qug9"}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Wedding;
