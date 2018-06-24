function changeMe(){
	let text = document.getElementById("hi");
	text.hidden = false;
}
function getJoke(){
	let url = "http://api.icndb.com/jokes/random";
	let joke = "Hola";
	 // We do a try-catch block to 
	try{
		let response;
		// We create a new Request
		let request = new XMLHttpRequest();
		/*Open the request with the Method and the url,
			last boolean is for asynchronous operation*/
		request.open('Get',url,false);
		//No parameters needed
		request.send(null);
		//Number 200 means OK
		if (request.status == 200) {
			response = request.response;
			joke = response['type'];
		}
	}catch (e){

	}
	document.getElementById("jokeResponse").innerHTML = joke;
}