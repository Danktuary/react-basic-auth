import React, { Component } from 'react';

class Home extends Component {
	render() {
		const { user } = this.props;

		return (
			<div className="wrapper">
				{user && user.name ? `Welcome back, ${user.name}` : 'You aren\'t logged in.'}
			</div>
		);
	}
}

export default Home;
