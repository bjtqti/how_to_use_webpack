if(module.hot){
	// module.hot.accept(function(err){
	// 	console.log(err)
	// })
}
require('./app.css');

function bootstart(){
	var app = document.querySelector('#app');
	var date = Date.now();
	app.innerHTML = `
		<h3> hello app hot ...</h3>
		<footer>&copy;${date}</footer>
	`
}

window.addEventListener('DOMContentLoaded',bootstart,false);
 
module.exports = {
	bootstart
}