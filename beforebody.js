window.onload = function () {
	//Crea una serie elements de  por cada tag encontrado
	let encabezados = document.createElement("h1");
	let text = document.createTextNode("¿Quieres ser mi morrita?");

	encabezados.appendChild(text);
	document.body.appendChild(encabezados);
};
