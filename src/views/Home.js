import React, { Component } from 'react';

import Login from './partials/Login.js';

class Home extends Component {
	render() {
		const { user } = this.props;

		return (
			<div className="wrapper">
				{user && user.username ? `Welcome back, ${user.username}` : <Login submit={this.props.login} />}
			</div>
		);
	}
}

export default Home;
