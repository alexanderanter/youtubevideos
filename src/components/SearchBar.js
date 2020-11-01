//import React
import React from 'react';

// create a class component named Searchbar
class SearchBar extends React.Component {
	// initalize state with a term property with value of an empty string
	state = { term: '' };
	// write an onInputChange arrow function that takes in event as a parameter
	onInputChange = (event) => {
		// inside onpinputchange, change the state of the term to get the target.value of the event
		this.setState({ term: event.target.value });
	};
	// create an onFormSubmit arrow function that takes in event as a paramenter

	onFormSubmit = (event) => {
		// preventdefault behaviour of the event

		event.preventDefault();
		// call the onFormSubmit that was passed down to this component as a prop from the parent
		// make sure you send the term that is set on the current state.

		this.props.onFormSubmit(this.state.term);
	};
	// create a render function with a return statment
	render() {
		return (
			<div className="ui segment search-bar">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Video Search</label>
						<input
							type="text"
							value={this.state.term}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

//export
export default SearchBar;
