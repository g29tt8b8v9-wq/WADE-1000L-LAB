console.log("===== LABORATORIO DE JAVASCRIPT ====="); // ==========================================
// 1. VARIABLES Y LOS TIPOS DE DATOS
// ==========================================

let nombre = "Juan";
let edad = 27;
let estudiante = true;
let promedio = 95.5;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("¿Es estudiante?:", estudiante);
console.log("Promedio:", promedio);

// ==========================================
// ARREGLOS DEL CODIGO JSS
// ==========================================

let tecnologias = [
	"HTML",
	"CSS",
	"Bootstrap",
	"JavaScript"
];

console.log("Tecnologías:", tecnologias);

console.log(
	"Primera tecnología:",
	tecnologias[0]
);

// Añadir elemento al arreglo
tecnologias.push("SQL");

console.log(
	"Arreglo actualizado:",
	tecnologias
);

// ==========================================
// CONDICIONES
// ==========================================

let puntuacion = 85;

if (puntuacion >= 90) {

	console.log("Calificación: Excelente");

} else if (puntuacion >= 80) {

	console.log("Calificación: Muy bien");

} else if (puntuacion >= 70) {

	console.log("Calificación: Satisfactorio");

} else {

	console.log("Calificación: Necesita mejorar");

}

// ==========================================
// BUCLE FOR
// ==========================================

console.log("----- Bucle FOR -----");

for (let i = 0; i < tecnologias.length; i++) {

	console.log(
		"Tecnología:",
		tecnologias[i]
	);

}

// ==========================================
// BUCLE WHILE
// ==========================================

console.log("----- Bucle WHILE -----");

let contador = 1;

while (contador <= 5) {

	console.log(
		"Contador:",
		contador
	);

	contador++;
}

// ==========================================
// BUCLE DO...WHILE
// ==========================================

console.log("----- Bucle DO...WHILE -----");

let numero = 1;

do {

	console.log(
		"Número:",
		numero
	);

	numero++;

} while (numero <= 3);

// ==========================================
// FUNCIONES JSS
// ==========================================

function sumar(numero1, numero2) {

	return numero1 + numero2;

}

let resultadoSuma = sumar(10, 5);

console.log(
	"Resultado de la suma:",
	resultadoSuma
);

// ==========================================
// ALCANCE DE LAS VARIABLES
// ==========================================

let mensajeGlobal = "Soy una variable global";

function mostrarAlcance() {

	let mensajeLocal =
		"Soy una variable local";

	console.log(mensajeGlobal);

	console.log(mensajeLocal);
}

mostrarAlcance();

console.log(mensajeGlobal);

// ==========================================
// CLAUSURAS
// ==========================================

function crearContador() {

	let cuenta = 0;

	return function () {

		cuenta++;

		return cuenta;
	};
}

let miContador = crearContador();

console.log(
	"Closure:",
	miContador()
);

// ==========================================
// INTERACCIONES EN LA WEB
// ==========================================

const boton =
	document.getElementById("botonSaludo");

const resultado =
	document.getElementById("resultado");


boton.addEventListener("click", function () {

	resultado.textContent =
		"¡JavaScript funciona correctamente!";

	console.log(
		"El usuario presionó el botón."
	);

});

console.log(
	"Closure:",
	miContador()
);

console.log(
	"Closure:",
	miContador()
);
