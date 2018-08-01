import React, {Component} from 'react'


class Search extends Component {
	render() {
		return (
			<form>
				<input type='text' name='search' placeholder='Search Term'/>
				<button>Search</button>
			</form>
		)
	}
}


export default Search