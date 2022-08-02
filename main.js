// Cuento de la "Buena Pipa" - Bucle Utilizando la Expresión "WHILE".

let solicitudNombre = prompt("Hola! Cómo es tu nombre?");

let mensajeInicio = prompt(solicitudNombre + ", Conocés el cuento de la buena pipa?");

while(mensajeInicio != "Bazinga!"){
   
    if(mensajeInicio == ""){
        
        alert(solicitudNombre + ", por favor, contestame.");
        
    } else alert("Yo no te dije '" + mensajeInicio + "'. Te pregunté si conocés el cuento de la buena pipa.");

    mensajeInicio = prompt("Conocés el cuento de la buena pipa?");
}