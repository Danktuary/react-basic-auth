import React, { Component } from 'react';

import './NavBar.css';

class NavBar extends Component {
	render() {
		return (
			<nav id="nav">
				<button onClick={this.props.logout}>Logout</button>
			</nav>
		);
	}
}

export default NavBar;
