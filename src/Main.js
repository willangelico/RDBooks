import React, { Component } from 'react';
import List from './List.js';



class Main extends Component{
	constructor(props){
		super(props);	
		this.state = {value: '', data: ''};
		this._handleChange 	= this._handleChange.bind(this);
		this._handleSubmit 	= this._handleSubmit.bind(this); 			
	}
	_handleChange(event) {
		 this.setState({value: event.target.value});
    	// this.setState({value: event.target.value});    	
  	}

	_handleSubmit(event){
		event.preventDefault();
		this.setState({value: event.target.value});
	}

	render(){
		return(
			<main>
				<div className="container">
					<h1>Books</h1>
					<form method="POST" role="form" onSubmit={this._handleSubmit}>
						<div className="input-group">
							<label htmlFor="inputSearch" className="sr-only">label</label>
							<input type="text" onKeyUp={this._handleSubmit} className="form-control" id="inputSearch" placeholder="Search books..." value={this.state.value} onChange={this._handleChange}  />
							<span className="input-group-btn">
								<button type="submit" className="btn btn-primary">
									<span className="glyphicon glyphicon-search"></span>
								</button>
							</span>
						</div>												
					</form>
				</div>
				<div className="container">	
					<List value={this.state.value} page="0" />
				</div>
			</main>
		);
	}
}
export default Main;