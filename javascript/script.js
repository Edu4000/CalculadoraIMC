
function calc_IMC() {

	var peso = document.getElementById('peso').value;
	var estatura = document.getElementById('estatura').value;

	console.log(peso)
	console.log(estatura)
	var imc;
	imc = (peso / estatura**2).toFixed(2)

	var resultado = "Tu IMC es de " + imc

	if (isNaN(imc) || !isFinite(imc)) {
		resultado += ".\nPor favor introduzca valore validos."
		document.getElementById("res").style.backgroundColor = "gray";

	} else if (imc < 18.6) {
		resultado += ".\nUsted tiene peso bajo."
		document.getElementById("res").style.backgroundColor = "blue";

	} else if (imc < 25) {
		resultado += ".\nUsted tiene peso saludable."
		document.getElementById("res").style.backgroundColor = "green";

	} else if (imc < 30) {
		resultado += ".\nUsted tiene sobrepeso."
		document.getElementById("res").style.backgroundColor = "yellow";

	} else if (imc < 35) {
		resultado += ".\nUsted tiene obesidad de grado 1."
		document.getElementById("res").style.backgroundColor = "orange";

	} else if (imc < 40) {
		resultado += ".\nUsted tiene obesidad de grado 2."
		document.getElementById("res").style.backgroundColor = "orangered";

	} else {
		resultado += ".\nUsted tiene obesidad morbida."
		document.getElementById("res").style.backgroundColor = "red";
	}

	console.log(resultado)
	
	document.getElementById('respuesta').innerText = resultado
}