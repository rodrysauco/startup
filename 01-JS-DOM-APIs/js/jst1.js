function changeMe(){
	let text = document.getElementById("hi");
	text.hidden = false;
}

// Ex. 6
function getJoke(){
	let url = "http://api.icndb.com/jokes/random";
	let joke = "No response received";
	 /* We do a try-catch block to manage the 
	 type of response*/
	try{
		let response;
		let request;
		// We create a new Request
		if (window.XMLHttpRequest) {
    // code for modern browsers
    	request = new XMLHttpRequest();
 		} else {
    // code for old IE browsers
    	request = new ActiveXObject("Microsoft.XMLHTTP");
}		/*Open the request with the Method and the url,
			last boolean is for asynchronous operation*/
		request.open('Get',url,true);
		//No parameters needed
		request.send(null);
		/*Now we do a function that allow the browser to
		continue working */
		request.onreadystatechange = function(event){
			if (request.readyState == 4) {
				//Number 200 means OK
				if (request.status == 200) {
					console.log("Request done");
					response = JSON.parse(request.response);
					joke = response.value.joke;
					document.getElementById("jokeResponse").innerHTML = joke;
				}
			}else{
				console.log("Making the request");
			}
		};
		
	}catch (e){
		console.log("Error");
	}
	
}

function errorHandler(statusCode){
	let text = document.getElementById('hi').parentElement;
	text.style.backgroundColor = "red";
 console.log("Failed with status: ", statusCode);
}

//Ex. 7
function jokeWithPromise(){
	let url = "http://api.icndb.com/jokes/random";
	ajaxCall(url).then(promiseToJoke,errorHandler);
}
//Receives the Promise content
function promiseToJoke(data){
	let text = document.getElementById("hi");
	text.innerHTML = data.value.joke;
	text.parentElement.style.backgroundColor = "white";
}

function ajaxCall(url){
	let promiseObj = new Promise (function (resolve, reject){
		let request;
		let response;
		if (window.XMLHttpRequest) {
    // code for modern browsers
    	request = new XMLHttpRequest();
 		} else {
    // code for old IE browsers
    	request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open("GET",url,true);
    request.send();
    request.onreadystatechange = function(){
    	if (request.readyState == 4) {
    		if (request.status == 200) {
    			console.log("Request done");
    			response = JSON.parse(request.responseText);
    			resolve(response);
    		} else {
    			reject(request.status);
    			console.log("No connection");
    		}
    	} else {
    		console.log("Still processing the request");
    	}
    }
    console.log("Done");
	});
	return promiseObj;
}
// Ex. 9 - 10
function gitSearch(){
	let url = "https://api.github.com/search/repositories";
	let param = document.getElementById("search");
	if (param.value.length > 0) {
		url += "?q=" + param.value;
		ajaxCall(url).then(promiseToList,errorHandler);
	}else{
		param.placeholder = "Empty search";
		console.log("Empty param");
	}
}

function promiseToList(data){
	let field = document.getElementById("list");
	field.innerHTML = "Search results: ";
	let items = data.items;
	for (let item of items){
		let node = document.createElement('li');
		node.innerHTML = item.full_name;
		field.appendChild(node);
		console.log(item.full_name);
	}
	field.hidden = false;
}

//12
function matrixToTable(matrix){
	//Create the father node
	for (let row of matrix.row){
		//create the child node
		for (let col of row.col){
			//Create the grandchild

		}
	}
}