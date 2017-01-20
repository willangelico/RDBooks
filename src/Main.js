import React, { Component } from 'react';
import List from './List.js';
import $ from 'jquery';


class Main extends Component{
	constructor(props){
		super(props);	
		this.state = {value: '', data: '', page: 0, total: 0};
		this._handleChange 	= this._handleChange.bind(this);
		this._handleSubmit 	= this._handleSubmit.bind(this); 	
		this._renderNav 	= this._renderNav.bind(this); 	
	}
	_handleChange(event) {
    	this.setState({value: event.target.value});
  	}

	_handleSubmit(event){
		event.preventDefault();
		$.ajax({
			url: 'https://www.googleapis.com/books/v1/volumes?q='+this.state.value+'&startIndex='+this.state.page+'&maxResults=12',
			dataType: 'json',
			cache: false,
			success: function(data) {
				console.log(data);
				this.setState({data: data['items'], total: data['totalItems']});

				// this.chooseRandomQuote();
			}.bind(this),
				error: function(xhr, status, err) {
				console.error('https://www.googleapis.com/books/v1/volumes?q='+this.state.value+'&startIndex=0&maxResults=40', status, err.toString());
			}.bind(this)
		});
		//alert('A name was submitted: ' + this.state.value);    			
	}
	_renderNav(){
		"<div>teste</div>";

	}
	render(){
		return(
			<main>
				<div className="container">
					<h1>Books</h1>
					<form method="POST" role="form" onSubmit={this._handleSubmit}>
						<div className="input-group">
							<label htmlFor="inputSearch" className="sr-only">label</label>
							<input type="text"  onKeyUp={this._handleSubmit} className="form-control" id="inputSearch" placeholder="Search books..." value={this.state.value} onChange={this._handleChange}  />
							<span className="input-group-btn">
								<button type="submit" className="btn btn-primary">
									<span className="glyphicon glyphicon-search"></span>
								</button>
							</span>
						</div>												
					</form>
				</div>
				<div className="container">					
					<List data={this.state.data} />
					{this._renderNav}
				</div>
			</main>
		);
	}
}
export default Main;