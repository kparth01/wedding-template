function Where(props) {
	return (
		<div id="where" className="section-content" data-aos="fade-left">
			<h2>Where</h2>
			<p>
				{props.addressLine1}
				<br />
				{props.addressLine2}
				<br />
				{props.addressLine3}
			</p>
		</div>
	);
}

export default Where;
