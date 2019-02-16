import React, { Component } from 'react';

import './App.css';
import Home from './views/Home.js';
import NavBar from './views/partials/NavBar.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: JSON.parse(localStorage.getItem('react-user')) || {},
		};
	}

	login = (data = {}) => {
		const { user } = this.state;
		if (user && user.name) return console.log('You\'re already logged in.');

		localStorage.setItem('react-user', JSON.stringify(data));
		this.setState({ user: data });
	}

	logout = () => {
		const { user } = this.state;
		if (!user.name) return console.log('You\'re not logged in.');

		localStorage.removeItem('react-user');
		this.setState({ user: {} });
	}

	render() {
		return (
			<div>
				<header className="wrapper">
					<NavBar login={this.login} logout={this.logout} />
				</header>
				<main>
					<Home user={this.state.user} />
				</main>
			</div>
		);
	}
}

export default App;
