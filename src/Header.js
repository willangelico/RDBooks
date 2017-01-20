import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

class Header extends Component{
	//constructor(props){
	//	super(props);			
	//}

	render(){
		return(
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
		);
	}
}
export default Header;