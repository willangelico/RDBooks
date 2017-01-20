import React, { Component } from 'react';

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
export default List;