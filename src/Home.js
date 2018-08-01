// Developer TODO: Define App component defintion here


import React, { Component } from 'react';
import SearchContainer from './SearchContainer';

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
		console.log(this.state.query, 'this is state in Home.js')
		return (
			<div>
				<h1>Hello, World!</h1>
				<SearchContainer searchChange={this.searchChange}/>
			</div>
		)
	}
}


export default Home