import React, { Component } from 'react';
export class TodoRows extends Component {
	render = () => (
		<tr>
			<td>{this.props.item.action}</td>
			<td>
				<input
					type="checkbox"
					onChange={() => this.props.callback(this.props.item)}
				/>
			</td>
		</tr>
	);
}