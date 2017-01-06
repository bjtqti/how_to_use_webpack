import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello.jsx';

function bootstart(){
	var app = document.querySelector('#app');
	ReactDOM.render(<Hello />, app);
}

window.addEventListener('DOMContentLoaded',bootstart,false);
 
 