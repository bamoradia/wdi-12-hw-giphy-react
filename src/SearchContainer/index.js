import React, {Component} from 'react'
import Search from '../Search'

class SearchContainer extends Component {
	constructor() {
		super();
		this.state = {
			search: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			search: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		//console.log(e.target.childNodes[0].value)
		this.props.searchChange(e.target.childNodes[0].value);
		e.target.childNodes[0].value = '';
	}


	render() {
		return (
			<Search handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
		)
	}
}


export default SearchContainer