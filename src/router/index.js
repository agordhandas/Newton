import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import LoginScreen from '../components/LoginScreen'

class Routes extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path="/" component={LoginScreen}/>
					<Route path="/dashboard" component={Dashboard}/>
				</div>
			</BrowserRouter>
		)
	}
}

export default Routes;