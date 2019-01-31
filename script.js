// Javascript code

function doFirst(){
	var button = document.getElementById("button");
	button.addEventListener("click", saveData, false);
	display();
}

// peice of code to search data availability
function checkData(){
	var one = document.getElementById("one").value; 
	for(var x = 0; x<sessionStorage.length; x++){
		var a = sessionStorage.key(x);
		var b = sessionStorage.getItem(a);

		if(one == a && b){
			alert("Record exists in the session storage!!");
			document.getElementById("one").value = "";
			document.getElementById("two").value = "";
			return one;
		}
	}

	if(one != a && b){
		alert("Record not found!!");
		document.getElementById("one").value = "";
		document.getElementById("two").value = "";
		return one;
	}

	if(document.getElementById("one").value == ""){
		alert("Enter something to search in the storage!!");
	}
}
// peice of code to search data availability



// peice of code to save data
function saveData(){
	var one = document.getElementById("one").value; 
	for(var x = 0; x<sessionStorage.length; x++){
		var a = sessionStorage.key(x);
		var b = sessionStorage.getItem(a);
		if(one == a && b){
			alert("Record already exists, Please save another record!!");
			document.getElementById("one").value = "";
			document.getElementById("two").value = "";
			return one;
		}
	}

	if(document.getElementById("one").value == ""){
	alert("Enter something to sava record!!");
	sessionStorage.removeItem(one);
	}
	else{
	var one = document.getElementById("one").value;
	var two = document.getElementById("two").value;
	sessionStorage.setItem(one,two);
	alert("Record Added Successfully!!");
	display();
	document.getElementById("one").value = "";
	document.getElementById("two").value = "";
	}
}
// peice of code to save data


// peice of code to delete data
function deleteData(){
	if(document.getElementById("one").value == ""){
		alert("Enter something to delete record!!");
		sessionStorage.removeItem(one);
		return one;
	}

	var one = document.getElementById("one").value; 
	for(var x = 0; x<sessionStorage.length; x++){
		var a = sessionStorage.key(x);
		var b = sessionStorage.getItem(a);
		if(one == a && b){
			alert("Match found, record deleting!!");
			sessionStorage.removeItem(one);
			document.getElementById("one").value = "";
			document.getElementById("two").value = "";
			display();
			return one;
		}
	}

	if(document.getElementById("one").value != sessionStorage.key("key")) {
		alert("Match not found, to delete anything!!");
		sessionStorage.removeItem(one);
		document.getElementById("one").value = "";
		document.getElementById("two").value = "";
	}

	

	// if(document.getElementById("one").value == sessionStorage.key("key")) {
	// 	alert("Match found, record deleting!!");
	// 	sessionStorage.removeItem("key");
	// 	display();
	// }

	

	// if(document.getElementById("one").value != sessionStorage.key("key")){
	// 	alert("Match does not exist in the session storage!!");
	// 	document.getElementById("one").value = "";
	// 	document.getElementById("two").value = "";
	// 	return one;
	// }
		
	var one = document.getElementById("one").value;
	var two = document.getElementById("two").value;
	sessionStorage.removeItem(one,two);
	rightbox.innerHTML = "";
	display();
	document.getElementById("one").value = "";
	document.getElementById("two").value = "";
}
// peice of code to delete data


// peice of code to display data
function display(){
	var rightbox = document.getElementById("rightbox");
	rightbox.innerHTML = "";
	for(var x = 0; x<sessionStorage.length; x++){
		var a = sessionStorage.key(x);
		var b = sessionStorage.getItem(a);
		rightbox.innerHTML += "key: " + a + " | value is: " + b + "<br/>" + "<hr/>";
	}
}
// peice of code to display data


window.addEventListener("load", doFirst, false);
window.addEventListener("btnClick", deleteData, false);