import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

// class App extends Component {
//   constructor(){
//     super();
//      this.teste = this.teste.bind(this);    
//   }
//   teste(){
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'));
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload...
//         </p>
//         <Nav text="texto de teste123" />
//         <button onClick={this.teste}>Unmont</button>
//       </div>
//     );
//   }
// }

class App extends Component{
   render(){
      return(
         <div>
            <Header />
            <Main />
            <Footer />
         </div>
      );
   }
}
export default App;
