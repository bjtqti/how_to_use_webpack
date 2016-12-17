import React, { Component } from 'react';

export default class App extends Component {
  render() {
  	const date = Date.now();
    return (
      <h1>Hello World !<e>date:{date}</e></h1>
    );
  }
}
