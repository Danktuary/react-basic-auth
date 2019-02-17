import React, { Component } from 'react';

import './App.css';
import http from './http.js';
import Home from './views/Home.js';
import NavBar from './views/partials/NavBar.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: JSON.parse(localStorage.getItem('react-user')) || {},
		};
	}

	login = async ({ username, password } = {}) => {
		const { user } = this.state;
		if (user && user.id) return console.log('You\'re already logged in.');

		try {
			const { data } = await http.post('/login', { username, password });

			this.setState({ user: data.user });
			http.setAuthHeader(data.user.token);
			localStorage.setItem('react-user', JSON.stringify(data.user));
		} catch (error) {
			console.error(error);
		}
	}

	logout = () => {
		if (!this.state.user.id) return console.log('You\'re not logged in.');

		localStorage.removeItem('react-user');
		this.setState({ user: {} });
	}

	render() {
		return (
			<div>
				<header className="wrapper">
					<NavBar logout={this.logout} />
				</header>
				<main>
					<Home login={this.login} user={this.state.user} />
				</main>
			</div>
		);
	}
}

export default App;
