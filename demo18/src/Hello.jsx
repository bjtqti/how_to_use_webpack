import React, { Component } from 'react';
 

export default class Hello extends Component {
  render() {
  	const date = Date.now();
    return (
    	<div className="container">
      		<h1>Hello World !<e>date:{date}</e></h1>
      		<p>body hmr ......</p>
      		<footer>&copy; 2017-03</footer>
    	</div>
    );
  }
}
