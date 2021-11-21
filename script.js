//document.write(5/10);
//alert("hello");

function task1() {
	let phrase12 = document.getElementById("phrase12").textContent;
	let box6text = document.getElementById("box6text").textContent;
	document.getElementById("phrase12").textContent = box6text;
	document.getElementById("box6text").textContent = phrase12;
}

task1();
function task2() {
	var r=5
	document.getElementById("box5text").textContent+=r*Math.PI;
	
}
task2();


function task3(e) {
	e.preventDefault();
	let length1 = document.getElementById("length1").value;
	
	if (isNaN(length1) || 	length1 === "") {
		alert("Please, enter only numeric values");
	} else {				
		var min;
		min = Math.min(...length1.split(''));
			alert("Minimum digit in number is "+ min);
			createCookie("integer", min.toString());
	}
}


/*
if (document.cookie.indexOf("canMakeTriangle") != -1) {
	if (confirm("РљСѓРєС–Р·Рё: " + document.cookie + "\n" + "Р’РёРґР°Р»РёС‚Рё canMakeTriangle?")) {
		document.cookie = "canMakeTriangle=; expires=Thu, 21 Aug 2014 20:00:00 UTC";
	} else {
		document.getElementById("form3").style.display = 'none';
		alert("Р”Р»СЏ РІС–РґРѕР±СЂР°Р¶РµРЅРЅСЏ Р·Р°РІРґР°РЅРЅСЏ 3 РІР°Рј РїРѕС‚СЂС–Р±РЅРѕ РїРµСЂРµР·Р°РІР°РЅС‚Р°Р¶РёС‚Рё СЃС‚РѕСЂС–РЅРєСѓ С– РІРёРґР°Р»РёС‚Рё РєСѓРєС–Р·Рё");
	}
}*/
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

window.onload = function (ev) {
	if (readCookie("integer") != null) {
		if (confirm("integer=" + readCookie("integer"))) {
			eraseCookie("integer");
			alert("Cookie cleared");
		}
	}

	document.querySelector('#box6text').style.color = window.localStorage.getItem("localColor");

	window.localStorage.setItem("cashedTable", "");
};

document.querySelector('input[name=task3button]').addEventListener('click', task3);


document.querySelector("#hyinput").addEventListener("select", function (event){
	let data = document.querySelector('.s-10').value;
	document.querySelector('#box6text').style.color = data;
	window.localStorage.setItem("localColor", data);
});


const table = document.createElement("table");
table.classList.add("tabledic");
document.querySelector(".box6").appendChild(table);

function appendRow() {
	const tr = document.createElement("tr");
	tr.classList.add("trdic");
	const txt = document.createTextNode("dasgjnasgjka");
	table.appendChild(tr);
	tr.appendChild(txt);
}

function saveTable() {
	let cashedTable = [];
	for (let child of table.children) {
		cashedTable.push(child.textContent);
	}
	window.localStorage.setItem("cashedTable", cashedTable.toString());
}


const imgEL = document.querySelector("#img_billy");

imgEL.addEventListener("mouseout", function (e){
	e.preventDefault();
	appendRow();
	if (table.children.length % 2 === 0) {
		//css for 2 rows
		table.classList.add("anable_two_columns");
	} else {
		table.classList.remove("anable_two_columns");
	}
});






