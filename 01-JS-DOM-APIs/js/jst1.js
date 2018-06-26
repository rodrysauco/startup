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
	/*Uncomment the next line to test matrixFunc and receive the joke*/
	//testingMatrix();
	let data = {
		method: "GET",
		url:"http://api.icndb.com/jokes/random",
		async:true,
	};
	ajaxCall(data).then(promiseToJoke,errorHandler);
}
//Receives the Promise content
function promiseToJoke(data){
	let text = document.getElementById("hi");
	text.innerHTML = data.value.joke;
	text.parentElement.style.backgroundColor = "white";
}

function ajaxCall(config){
	let promiseObj = new Promise (function (resolve, reject){
		let request;
		if (window.XMLHttpRequest) {
    // code for modern browsers
    	request = new XMLHttpRequest();
 		} else {
    // code for old IE browsers
    	request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(config.method == "GET"){
    	request.open(config.method,config.url,config.async);
    	request.send();
    }else{
    	request.open(config.method,config.url,config.async);
			request.setRequestHeader("Content-type","application/x-ww-form-urlencoded");
			request.send(config.data);
    }
    request.onreadystatechange = function(){
    	if (request.readyState == 4) {
    		if (request.status == 200) {
    			let response = JSON.parse(request.responseText);
    			resolve(response);
    		} else {
    			reject(request.status);
    		}
    	} else {
    		console.log("Still processing the request");
    	}
    }
	});
	return promiseObj;
}
//Variaton to ex 7
function ajaxCallUsingFetch(config){
	let header = new Headers();
	let init = {
		method: config.method,
		headers: header,
		mode: "cors",
		cache: "default",
	};
	let request = new Request(config.url,init)
	fetch(request).then(promiseToList);
}
// Ex. 9 - 10
function gitSearch(){
	let param = document.getElementById("search");
	let data = {
		url : "https://api.github.com/search/repositories",
		param : "",
		method : "GET",
		async : true,
	}
	if (param.value.length > 0) {
		if(data.method == "GET"){
			data.url += "?q="+ param.value;
		}else{
			data.param = data.value;
		}
		ajaxCallUsingFetch(data).then(promiseToList,errorHandler);
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
	let table = document.createElement('table');
	table.className = "generatedTable";
	table.style.width = "50%";
	table.style.marginLeft = "25%";
	table.style.marginTop = "20px";
	for (let row of matrix){
		//create the child node
		let tableRow = document.createElement('tr');
		for (let col of row){
			//Create the grandchild
			let tableCol = document.createElement('td');
			let text = document.createTextNode(col);
			//Sticking the text to the td
			tableCol.appendChild(text);
			tableRow.appendChild(tableCol);
		}
		table.appendChild(tableRow);
	}
	let body = document.getElementsByTagName("body");
	let ifExists = document.getElementsByClassName("generatedTable");
	//We create if the table wasnt created before
	if(ifExists.length < 1){
		/*Both funcs return an array with all elements that
		match with the parameter*/
		let footer = document.getElementsByClassName("footer");
		//To fix this, we put [0]
		body[0].insertBefore(table,footer[0]);
	}else{
		//We replace the table if was already created
		body[0].replaceChild(table,ifExists[0]);
	}
}

function testingMatrix(){
	let matrix = [];
	for(let r = 0; r < 6; r++){
		matrix[r] = [];
		for(let c = 0; c < 4; c++){
			matrix[r][c] = Math.floor((Math.random() * 100) + 1);
		}
	}
	matrixToTable(matrix);
}