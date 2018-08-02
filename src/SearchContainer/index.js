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

	searchGiphy = async (input) => {
		try{
			//fetch from GIPHY based on user submission
			const results = fetch('https://api.giphy.com/v1/gifs/search?q=' + this.state.search + '&api_key=7PwS2s7iHMZGB1IhnWXKHW3qC2FKR71L&limit=5');	
			const resultsJSON = results.json();	
			//only render the results page after results come back	
			this.setState({	
				search: input,
				results: resultsJSON,	
				resultsFetch: true	
			})
		} catch(err) {
		// 	return err
			console.error(err, ' searchGiphy() in SearchContainer')
		}
	}

	render() {
		return(
			<div>
				{ this.state.resultsFetch ? <Results results={this.state.results}/> : <Search handleSubmit={this.handleSubmit}/>  }
			</div>
		)
	}
}


export default SearchContainer