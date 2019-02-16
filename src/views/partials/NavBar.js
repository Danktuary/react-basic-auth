import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
	login = () => {
		this.props.login({ name: 'Sanctuary' });
	}

	logout = () => {
		this.props.logout();
	}

	render() {
		return (
			<nav id="nav">
				<button onClick={this.login}>Login</button> | <button onClick={this.logout}>Logout</button>
			</nav>
		);
	}
}

export default NavBar;
