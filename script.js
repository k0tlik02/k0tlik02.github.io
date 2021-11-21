//document.write(5/10);
//alert("hello");
document.querySelector('.b-2').addEventListener('click', () => {
		let data = document.querySelector('.s-10').value;
		document.querySelector('#box6text').style.color = data;
		document.querySelector('.out-2').innerHTML = data;
		})
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
	
	if (isNaN(length1) || 	length1 == "") {
		alert("Please, enter only numeric values");
	} else {				
		var min;
		min = Math.min(...length1.split(''));
			alert("Minimum digit in number is "+ min);
			document.cookie = "all is ok";
	}
}

/*
function task4(e)  {
	document.querySelector('.b-2').addEventListener('click', () => {
		let data = document.querySelector('.s-10').value;
		document.querySelector('#box6text').style.color = data;
		//document.querySelector('.out-2').innerHTML = data;
	})
}*/



/*
if (document.cookie.indexOf("canMakeTriangle") != -1) {
	if (confirm("РљСѓРєС–Р·Рё: " + document.cookie + "\n" + "Р’РёРґР°Р»РёС‚Рё canMakeTriangle?")) {
		document.cookie = "canMakeTriangle=; expires=Thu, 21 Aug 2014 20:00:00 UTC";
	} else {
		document.getElementById("form3").style.display = 'none';
		alert("Р”Р»СЏ РІС–РґРѕР±СЂР°Р¶РµРЅРЅСЏ Р·Р°РІРґР°РЅРЅСЏ 3 РІР°Рј РїРѕС‚СЂС–Р±РЅРѕ РїРµСЂРµР·Р°РІР°РЅС‚Р°Р¶РёС‚Рё СЃС‚РѕСЂС–РЅРєСѓ С– РІРёРґР°Р»РёС‚Рё РєСѓРєС–Р·Рё");
	}
}*/

document.querySelector('input[name=task3button]').addEventListener('click', task3);
//sdocument.querySelector('input[name=btask4]').addEventListener('Select', task4);