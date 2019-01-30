// Javascript code

function doFirst(){
	var button = document.getElementById("button");
	button.addEventListener("click", saveData, false);
	display();
}

function saveData(){
	var one = document.getElementById("one").value;
	var two = document.getElementById("two").value;
	sessionStorage.setItem(one,two);
	alert("Record Added Successfully!!")
	display();
	document.getElementById("one").value = "";
	document.getElementById("two").value = "";
}

function deleteData(){
	if(sessionStorage.key("key") === document.getElementById("one").value) {
		alert("Match found, record deleting!!");
		sessionStorage.removeItem(one);
		display();
	}
	for(var x=0; x<sessionStorage.length; x++){
		var a = sessionStorage.key(x);
		var b = sessionStorage.getItem(a);
	}
	// event.preventdefault();
	var one = document.getElementById("one").value;
	var two = document.getElementById("two").value;
	sessionStorage.removeItem(one,two);
	rightbox.innerHTML = "";
	display();
	document.getElementById("one").value = "";
	document.getElementById("two").value = "";
}

function display(){
	var rightbox = document.getElementById("rightbox");
	rightbox.innerHTML = "";
	for(var x = 0; x<sessionStorage.length; x++){
		var a = sessionStorage.key(x);
		var b = sessionStorage.getItem(a);
		rightbox.innerHTML += "Name: " + a + " | Value is: " + b + "<br/>" + "<hr/>";
	}
	// var two = sessionStorage.getItem(one);
	// rightbox.innerHTML = "Name of variable: " +one + "<br > Value is: " +two;
}

window.addEventListener("load", doFirst, false);
window.addEventListener("btnClick", deleteData, false);