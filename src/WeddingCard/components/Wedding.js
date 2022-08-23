import React, { Component } from "react";
import When from "./When";
import Where from "./Where";

class Wedding extends Component {
	render() {
		return (
			<div id="wedding" className="section-content" data-aos="zoom-in">
				<h1>Wedding Bells</h1>
				<p>
					This is the main event in which the groom and bride tie the knot with
					all the rituals. The groom comes to the brides home with all his
					relatives and family typically known as "Baraat". The groom's family
					will dance again at the door of the bride's house. The brides family
					will welcome and greet the groom and his family. It a party time and
					without you the celebrations will be incomplete. Do join us in the
					Wedding and give your blessing to newly weds.
				</p>
				<div className="row">
					<div className="col">
						<When />
					</div>
					<div className="col">
						<Where />
					</div>
				</div>
			</div>
		);
	}
}

export default Wedding;
