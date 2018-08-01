import React, {Component} from 'react'


class Search extends Component {
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
		this.props.search(this.state.search)
	}


	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type='text' name='search' value={this.state.search} onChange={this.handleChange} placeholder='Search Term'/>
				<button>Search</button>
			</form>
		)
	}
}


export default Search