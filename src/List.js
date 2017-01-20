import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pagination from "react-js-pagination";
import ButtonInfo from './ButtonInfo.js';
import $ from 'jquery';

const maxResults = 12;

class BookImg extends Component{
	constructor(props){
		super(props);	
		let thumb = typeof(this.props.img) === 'object' ? this.props.img.smallThumbnail : '';	
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
	constructor(props){
		super(props);
		this.state = {data :"",activePage: 1, total: 0, query: ""};
		this._handlePageChange 	= this._handlePageChange.bind(this);
		this._ajaxRequire 	= this._ajaxRequire.bind(this);
	}	

	_ajaxRequire(value, page){
		page = page < 1 ? 0 : (page*maxResults)-maxResults;		
		value = value.replace(" ", "+");
		console.log('https://www.googleapis.com/books/v1/volumes?q='+value+'&startIndex='+page+'&maxResults='+maxResults);
		$.ajax({
			url: 'https://www.googleapis.com/books/v1/volumes?q='+value+'&startIndex='+page+'&maxResults='+maxResults,
			dataType: 'json',
			cache: false,
			success: function(data) {
				console.log(data);
				this.setState({data: data['items'], total: data['totalItems']});
				ReactDOM.render(
					<Pagination activePage={this.state.activePage} itemsCountPerPage={maxResults} totalItemsCount={this.state.total} pageRangeDisplayed={5} onChange={this._handlePageChange} />,
					document.getElementById("nav-page")
				);				
			}.bind(this),
				error: function(xhr, status, err) {
				console.error('https://www.googleapis.com/books/v1/volumes?q='+value+'&startIndex=0&maxResults=40', status, err.toString());
			}
		});		
	}
	_handlePageChange(pageNumber) {	
		this.setState({activePage: pageNumber});
		this._ajaxRequire(this.state.query,pageNumber)
	}
	componentWillReceiveProps(nextProps){		
		if(nextProps.value){
			this.setState({query:nextProps.value});
			this._ajaxRequire(nextProps.value,nextProps.page);	
		}else{
			this.setState({data: '', total: 0});			
		}
	}
	render(){
		if(this.state.data){
			var books = this.state.data.map((book) =>
				<div className="col-md-3" key={book.id}>				
					<BookImg img={book.volumeInfo.imageLinks} alt={book.volumeInfo.title} />
					<h2>{book.volumeInfo.title}</h2>
					<h3>{book.volumeInfo.authors}</h3>
					<p>{book.volumeInfo.description}</p>
					<ButtonInfo idBook={book.id} />
				</div>
			);
		}
		return(
			<div id="books">
				<div className="row">
					{books}			
				</div>
				<div id="nav-page"></div>
			</div>
		);
	}
}

export default List;