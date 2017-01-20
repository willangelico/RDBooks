import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
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
		const modalInstance = (
			<div className="static-modal">
				<Modal.Dialog>
					<Modal.Header>
						<Modal.Title>Modal title</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>{this.props.idBook}</p>
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
			<button type="button" className="btn btn-success" onClick={this._handleClick}>mais informações</button>
		);
	}
}

export default ButtonInfo;