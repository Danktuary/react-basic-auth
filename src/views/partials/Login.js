import React, { Component } from 'react';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = { username: '', password: '' };
	}

	updateInput = event => {
		this.setState({ [event.target.name]: event.target.value });
	}

	submit = event => {
		event.preventDefault();
		this.props.submit({ ...this.state });
	}

	render() {
		return (
			<form onSubmit={this.submit}>
				<div>
					<label htmlFor="username">Username:</label>
					<input id="username" type="text" name="username" value={this.state.username} onChange={this.updateInput} />
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input id="password" type="password" name="password" value={this.state.password} onChange={this.updateInput} />
				</div>
				<div>
					<input type="submit" />
				</div>
			</form>
		);
	}
}

export default Login;
