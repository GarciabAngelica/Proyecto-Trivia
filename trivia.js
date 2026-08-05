const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


let puntaje = 0;
let indice = 0;

let preguntas = [
	{
	pregunta: "1 ¿Qué significa WSL?",
	opciones: ["1) Windy Sunny Lazy 2) Windows Subsystem for Linux 3) Windows Subway Line"],
	respuestaCorrecta: 2 
	},
	{
	pregunta: "2 ¿Qué significa el comando “ls”?",
	opciones: ["1) List 2) Lose 3) Lost"],
	respuestaCorrecta: 1
	},
	{
	pregunta: "3 ¿Qué significa el comando “mkdir”?",
        opciones: ["1) Markeup Directory 2) Making Direction 3) Make Directory"],
        respuestaCorrecta: 3
        },
	{
	pregunta: "4 ¿Qué hace el comando “cd”?",
        opciones: ["1) Cambia a la carpeta indicada 2) Devuelve el nombre de una ciudad 3) Elimina archivos"],
        respuestaCorrecta: 1
        },
	{
	pregunta: "5 ¿Cuál es el comando de Linux para saber la shell de la terminal?",
        opciones: ["1) echo $SHELL 2) Languague 3) SHELL –Version"],
        respuestaCorrecta: 1
        },
	{
	pregunta: "6 ¿Cuál es el comando para salir del modo VIM?",
        opciones: ["1) :q 2) :w 3) :x"],
        respuestaCorrecta: 1
        },
	{
	pregunta: "7 ¿Qué hace el comando “pwd”?",
        opciones: ["1) Paint Word Done 2) Print Working Directory 3) Print Word Directory"],
        respuestaCorrecta: 2
        },
	{
	pregunta: "8 ¿Para que sirve el comando “tree”?",
        opciones: ["1) Para dibujar un árbol 2) Para ver como están acomodados archivos y directorios 3) Para crear un árbol nuevo"],
        respuestaCorrecta: 2
        },
	{
	pregunta: "9 ¿Qué crea el comando “touch”?",
        opciones: ["1) Un directorio 2) Un archivo con la palabra touch dentro 3) Un archivo"],
        respuestaCorrecta: 3
        },
	{
	pregunta: "10 ¿El comando mv sirve para …?",
        opciones: ["1) Mover y renombrar 2) Mover y borrar 3) Renombrar y crear"],
        respuestaCorrecta: 1
        },

];
console.log ("=====Bienvenido a la trivia sobre terminal WSL =====");
console.log ("Instrucciones: Lee atentamente cada pregunta y responde con el número de la respuesta que consideres correcta.\n Cada respuesta sumará 1 punto, al final te dará tu puntuación.\n Buena suerte :)"); 
function hacerPregunta(){
	if(indice < preguntas.length) {
 		console.log("\n" + preguntas[indice].pregunta);
 		console.log(preguntas[indice].opciones);

	rl.question("Escribe tu respuesta(1, 2, 3) : ", (respuesta) => {
	let numeroRespuesta = parseInt(respuesta);

	if (numeroRespuesta === preguntas[indice].respuestaCorrecta) {
	console.log("Correcto");
		puntaje = puntaje + 1;
	} else {
		console.log("Incorrecto");
	}
	
	indice = indice + 1;

	hacerPregunta();
});

} else {

	console.log("Juego terminado");
	console.log("Puntaje final: " + puntaje);
	console.log("Gracias por jugar, sigue aprendiendo :)");
	
	rl.close();
	}
}

hacerPregunta();
