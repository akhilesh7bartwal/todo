import React, { Component } from 'react';
export class Navbar extends Component {
	render = () => (
		<div >
			<h2>
				{this.props.name}
			</h2>
		</div>
	);
}