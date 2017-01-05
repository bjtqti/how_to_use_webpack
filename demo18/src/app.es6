require('./app.css');

window.onload=function(){
	var app = document.querySelector('#app');
	var date = Date.now();
	app.innerHTML = `
		<h3> hello app hot .1</h3>
		<footer>&copy;${date}</footer>
	`
}

module.exports = {

}