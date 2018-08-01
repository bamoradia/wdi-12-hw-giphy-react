// Developer TODO: Define App component defintion here


import React, { Component } from 'react';
import Search from './Search';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			query: ''
		}
	}

	searchChange = (input) => {
		this.setState({
			query: input
		})
		return
	}

	render() {
		console.log(this.state.query)
		return (
			<div>
				<h1>Hello, World!</h1>
				<Search search={this.searchChange}/>
			</div>
		)
	}
}


export default Home