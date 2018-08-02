import React, { Component } from 'react'
import Search from '../Search'
import Results from '../Results'

class SearchContainer extends Component {
	constructor() {
		super();
		this.state = {
			search: '', 
			resultsFetch: false,
			results: []
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		//console.log(e.target.childNodes[0].value)
		//set the state

		const input = e.target.childNodes[0].value;
		e.target.childNodes[0].value = '';
		// this.setState({
		// 	search: input
		// })
		//set the state of the parent state of the search term
		// this.props.searchChange(e.target.childNodes[0].value);
		//set the submit box to ''
		this.searchGiphy(input);
		// return 
	}

	searchGiphy = (input) => {
		//fetch from GIPHY based on user submission
		fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=7PwS2s7iHMZGB1IhnWXKHW3qC2FKR71L&limit=5`).then((data) => {
			data.json().then(dataJSON => {
				
				this.setState({	
					search: input,
					results: dataJSON.data,	
					resultsFetch: true	
				})
			})
		});	

			//const resultsJSON = results.json();	
			//only render the results page after results come back	
	}

	render() {
		console.log(this.state.results[0])
		return(
			<div>

				{ this.state.resultsFetch ? this.state.results.map((result, i) => <Results keys={i} result={result}/>) : <Search handleSubmit={this.handleSubmit}/>  }
			</div>
		)
	}
}


export default SearchContainer