import React, { Component } from 'react';

class Annoucements extends Component {
	render() {
		return (
			<div className="visuallyHidden"
				aria-live="polite"
				aria-atomic="true">
					{this.props.message}
			</div>
		);
	}
}

export default Annoucements