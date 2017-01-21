import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import $ from 'jquery';

class ButtonInfo extends Component{
	constructor(props){
		super(props);	
	
		this._handleClick 	= this._handleClick.bind(this);			
		this._hideModal 	= this._hideModal.bind(this);


	}
	_hideModal() {
	     $("#modal").hide();
	}
	_handleClick(){
		if(!this.props.idBook){
			return;
		}
		
		var list = [];
		if(localStorage.getItem("fav")){
			list = JSON.parse(localStorage.getItem("fav"));
		}
		var exist = false;
		var pidBook = this.props.idBook;
		console.log(this.props.idBook);
		list.forEach(function(book) {
			if( book.idBook === pidBook){
				exist = true;
				console.log(book.idBook +' === '+pidBook);
			}
		});
		
		if(!exist){
			list.unshift({ "idBook" : this.props.idBook });

			var jsonStr = JSON.stringify(list);
			localStorage.setItem("fav",jsonStr);
		}

		const modalInstance = (
			<div className="static-modal">
				<Modal.Dialog>
					<Modal.Header>
						<Modal.Title>Modal title</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>{this.props.idBook} Adicionado com sucesso</p>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this._hideModal}>Close</Button>						
					</Modal.Footer>
				</Modal.Dialog>
			</div>
		);
		ReactDOM.render(modalInstance, document.getElementById("modal"));
		$("#modal").show();
	}
	render(){
		return(
			<button type="button" className="btn btn-success" onClick={this._handleClick}>
				<Glyphicon glyph="glyphicon glyphicon-heart-empty" />
			</button>
		);
	}
}

export default ButtonInfo;