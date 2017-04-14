import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index.js";

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = { 
			term:"",
			country:""
		};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);


	}

	onInputChange(event){
		let searchResult = event.target.value.split(",");
		console.log("the array", searchResult);

		this.setState({ term:searchResult[0], country:searchResult[1] });
	}

	onFormSubmit(event){
		event.preventDefault();

		this.props.fetchWeather(this.state.term,this.state.country);

		this.setState({term:"", country:""});
	}

	render(){
		return(
			<div>
			<h1>React Dynamic Search Forecast</h1>
				<form onSubmit={this.onFormSubmit} className="input-group">
					<input
						placeholder="Get a five-day forecast in your favorite cities, separate by comma the country e.g. Rio de Janeiro, Brazil"
					 	className = "form-control"
					 	value = {this.state.term}
					 	onChange={this.onInputChange}
					 />
					<span className="input-group-btn">
						<button type="submit" className="btn btn-secondary"> Submit </button> 
					</span>
				</form>
			</div>
		);
	}
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps) (SearchBar);