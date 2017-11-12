import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginScreen extends Component {
	render() {
		console.log(this.props.match)
		return (
			<Link to="/dashboard">
				<div className="btn btn-info" role="button">Link Button</div>
			</Link>
		)
	}
}

export default LoginScreen;