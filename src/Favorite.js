import React, { Component } from 'react';

class Favorite extends Component{
	constructor(props){
		
		super(props);	
		this.state = {teste: this.props.teste};
		
	}
	render(){
		return(

			<div>{this.state.teste} </div>
		);
	}

}

export default Favorite;