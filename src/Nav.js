import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <div>
    Hello, {formatName(user)}!
  </div>
);


class Nav extends Component{
	constructor(props) {
	    super(props);
	    this.state = {element: element};
	    console.log("constructor");
	}

	  componentDidMount() {
	  	this.setState({
	    	element: "did"    	
	    });	  	
	    console.log("did");	   
	    this.teste = this.teste.bind(this); 
	  }
	
		componentWillMount() {	  
			this.setState({
	    	element: "willM"	    	
	    });	  
			
	    console.log("willM");
		}

	  componentWillUnmount() {
	  	this.setState({
	    	element: "willU"	    	
	    });	  
	    console.log("willu");
	    
	  }
	  teste(){
	  	this.setState({
	    	element: "teste"
	    });	
	    ReactDOM.render(
		  <Toggle txt={element} />,
		  document.getElementById('hour')
		);			
	}

	render(){
		return(
			<div id="remove">
				<div>{this.props.text}</div>
				<div>{this.state.element}</div>
				<div id="testando">State: <Toggle txt={this.state.element} /></div>
				<button onClick={this.teste}>Teste</button>
			</div>
		);
	}
}

class Toggle extends Component{
	render(){
		return(
			<div>{this.props.txt}</div>
		);
	}
}

ReactDOM.render(
  <Toggle txt="Hora" />,
  document.getElementById('hour')
);

export default Nav;