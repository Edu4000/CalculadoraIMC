

function calc_IMC() {

	var peso = document.getElementById('peso').value;
	var estatura = document.getElementById('estatura').value;

	console.log(peso)
	console.log(estatura)
	var imc;
	imc = estatura / peso**2

	var resultado = "Tu IMC es de " + imc

	if (imc === NaN) {
		resultado += ".\nPor favor introduzca valore validos."

	} else if (imc < 18.6) {
		resultado += ".\nUsted tiene peso bajo."

	} else if (imc < 25) {
		resultado += ".\nUsted tiene peso saludable."

	} else if (imc < 30) {
		resultado += ".\nUsted tiene sobrepeso."

	} else if (imc < 35) {
		resultado += ".\nUsted tiene obesidad de grado 1."

	} else if (imc < 40) {
		resultado += ".\nUsted tiene obesidad de grado 2."

	} else {
		resultado += ".\nUsted tiene obesidad morbida."
	}

	console.log(resultado)
	
	document.getElementById('respuesta').innerText = resultado
}