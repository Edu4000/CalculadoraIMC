
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
		document.getElementById("img").src="";

	} else if (imc < 18.6) {
		resultado += ".\nUsted tiene peso bajo."
		document.getElementById("res").style.backgroundColor = "lightblue";
		document.getElementById("img").src="./src/bajo.png";

	} else if (imc < 25) {
		resultado += ".\nUsted tiene peso saludable."
		document.getElementById("res").style.backgroundColor = "green";
		document.getElementById("img").src="./src/saludable.png";

	} else if (imc < 30) {
		resultado += ".\nUsted tiene sobrepeso."
		document.getElementById("res").style.backgroundColor = "yellow";
		document.getElementById("img").src="./src/sobrepeso.png";

	} else if (imc < 35) {
		resultado += ".\nUsted tiene obesidad de grado 1."
		document.getElementById("res").style.backgroundColor = "orange";
		document.getElementById("img").src="./src/obesidadI.png";

	} else if (imc < 40) {
		resultado += ".\nUsted tiene obesidad de grado 2."
		document.getElementById("res").style.backgroundColor = "orangered";
		document.getElementById("img").src="./src/obesidadII.png";

	} else {
		resultado += ".\nUsted tiene obesidad morbida."
		document.getElementById("res").style.backgroundColor = "red";
		document.getElementById("img").src="./src/obesidadIII.png";
	}

	console.log(resultado)
	
	document.getElementById('respuesta').innerText = resultado
}