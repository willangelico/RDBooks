import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";

class BookImg extends Component{
	constructor(props){
		super(props);	
		let thumb = typeof(this.props.img) == 'object' ? this.props.img.smallThumbnail : '';	
		let name = this.props.alt;

		this.state = {thumb: thumb, name: name};
	}
	render(){		
		return(
			<div className="thumbnail">
				<img src={this.state.thumb} alt={this.state.name} />
			</div>
		);
	}
}

class List extends Component{	
	render(){
		if(this.props.data){
			var books = this.props.data.map((book) =>
				<div className="col-md-3" key={book.id}>				
					<BookImg img={book.volumeInfo.imageLinks} alt={book.volumeInfo.title} />
					<h2>{book.volumeInfo.title}</h2>
					<h3>{book.volumeInfo.authors}</h3>
					<p>{book.volumeInfo.description}</p>
				</div>
			);
		}
		return(
			<div className="row">
				{books}
			</div>
		);
	}
}

class Header extends Component{
	constructor(props){
		super(props);	
		this.state = {value: '', data: ''};
		this._handleChange = this._handleChange.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this); 	
	}

	_handleChange(event) {
    	this.setState({value: event.target.value});
  	}

	_handleSubmit(event){
		event.preventDefault();
		$.ajax({
			url: 'https://www.googleapis.com/books/v1/volumes?q='+this.state.value+'&startIndex=0&maxResults=40',
			dataType: 'json',
			cache: false,
			success: function(data) {
				console.log(data);
				this.setState({data: data['items']});
				// this.chooseRandomQuote();
			}.bind(this),
				error: function(xhr, status, err) {
				console.error('https://www.googleapis.com/books/v1/volumes?q='+this.state.value+'&startIndex=0&maxResults=40', status, err.toString());
			}.bind(this)
		});
		//alert('A name was submitted: ' + this.state.value);    			
	}


	render(){
		return(
			<div>
				<header>
					<nav className="navbar navbar-default">
						<div className="btn-group pull-right" role="group" aria-label="Menu">
							<button className="btn btn-default btn-lg">
								<span className="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
								<span className="sr-only">Favoritos:</span> Meus Favoritos
							</button>
							<button className="btn btn-default btn-lg">Sobre</button>
						</div>
					</nav>
				</header>
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
					</div>
				</main>
			</div>
		);
	}
}
export default Header;