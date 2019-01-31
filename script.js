// Javascript code

function doFirst(){
	var button = document.getElementById("button");
	button.addEventListener("click", saveData, false);
	display();
}

// peice of code to save data
function saveData(){
	var one = document.getElementById("one").value; 
	for(var x = 0; x<localStorage.length; x++){
		var a = localStorage.key(x);
		var b = localStorage.getItem(a);
		if(one == a && b){
			alert("Record already exists, Please save another record!!");
			document.getElementById("one").value = "";
			document.getElementById("two").value = "";
			return one;
		}
	}

	if(document.getElementById("one").value == ""){
	alert("Enter something to sava record!!");
	localStorage.removeItem(one);
	}
	else{
	var one = document.getElementById("one").value;
	var two = document.getElementById("two").value;
	localStorage.setItem(one,two);
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
		localStorage.removeItem(one);
		return one;
	}

	var one = document.getElementById("one").value; 
	for(var x = 0; x<localStorage.length; x++){
		var a = localStorage.key(x);
		var b = localStorage.getItem(a);
		if(one == a && b){
			alert("Match found, record deleting!!");
			localStorage.removeItem(one);
			document.getElementById("one").value = "";
			document.getElementById("two").value = "";
			display();
			return one;
		}
	}

	if(document.getElementById("one").value != localStorage.key("key")) {
		alert("Match not found, to delete anything!!");
		localStorage.removeItem(one);
		document.getElementById("one").value = "";
		document.getElementById("two").value = "";
	}
		
	var one = document.getElementById("one").value;
	var two = document.getElementById("two").value;
	localStorage.removeItem(one,two);
	rightbox.innerHTML = "";
	display();
	document.getElementById("one").value = "";
	document.getElementById("two").value = "";
}
// peice of code to delete data



// peice of code to search data availability
function searchData(){
	var one = document.getElementById("one").value; 
	for(var x = 0; x<localStorage.length; x++){
		var a = localStorage.key(x);
		var b = localStorage.getItem(a);

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



// peice of code to display data
function display(){
	var rightbox = document.getElementById("rightbox");
	rightbox.innerHTML = "";
	for(var x = 0; x<localStorage.length; x++){
		var a = localStorage.key(x);
		var b = localStorage.getItem(a);
		rightbox.innerHTML += "key: " + a + " | value is: " + b + "<br/>" + "<hr/>";
	}
}
// peice of code to display data


window.addEventListener("load", doFirst, false);
window.addEventListener("btnClick", deleteData, false);