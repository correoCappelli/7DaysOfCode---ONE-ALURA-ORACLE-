// ¡Guau! ¡Ya hemos llegado al último día de #7DaysOfCode! ¿Lo crees?
// Estoy muy orgulloso de tu progreso hasta aquí.
// ¡Espero que disfrutes mucho de esta última propuesta! ¿Vamos allá?
// El desafío de ayer fue una continuación del anterior, algo que aún no había propuesto antes. 
// Si quieres ver mi solución, como siempre, podrás encontrarla al final de este correo.
// Esta ha sido una semana y tanto, ¿verdad?
// Has practicado muchas cosas sobre lógica de programación con Javascript, pero aún falta 
// algo muy importante: organizar tu código.
// Y sí, esto es algo obligatorio para aprender como desarrollador, pues tarde o temprano 
// en tu carrera necesitarás dar mantenimiento al código que creaste, o incluso arreglar algo 
// en el código que escribió otra persona.
// ¿Te imaginas si ese código estuviera todo desordenado?
// Una excelente práctica es siempre separar cada sección de tu código que realice una 
// función específica en bloques de código aún más pequeños, que podrán ser reutilizados y llamados
// en cualquier otro momento a lo largo de tu programa. Son las llamadas funciones.

// Para el ejercicio de hoy: ¿te has detenido a pensar cómo funciona una calculadora?

// Te pide que ingreses un número, luego seleccionas un tipo de operación, otro número, y ella sola 
// realiza el cálculo para mostrarte el resultado. ¡Increíble, verdad?
// En este último desafío, mi propuesta para ti es: crea tu propia calculadora, pero con un detalle 
// muy importante: cada operación debe ser una función diferente en tu código.

// Primero, la persona debe elegir una opción de operación impresa por el programa en la pantalla.

let continuar=true;
let memoria=[];

function sumarValores(valor1,valor2) {
    return valor1+valor2;
}
function restarValores(valor1,valor2) {
    return valor1-valor2;
}
function multiplicarValores(valor1,valor2) {
    return valor1*valor2;
}
function dividirValores(valor1,valor2) {
    return valor1/valor2;
}

while (continuar==true){
    let operacionARealizar=parseInt(prompt('Indicar operación a realizar: SUMA (1) RESTA (2) MULTIPLICACION (3) DIVISION (4) o SALIR (5)'));
// Luego, debe ingresar los dos valores que desea utilizar, y el programa imprimirá el resultado de la 
// operación en cuestión.
    if (operacionARealizar==5){
        alert('Hasta la proxima');
        continuar=false;
} else {
    let valorUno=parseInt(
        prompt(`Ingrese el primer valor a ${operacionARealizar===1?'sumar'
            :operacionARealizar===2?'restar'
            :operacionARealizar===3?'multiplicar'
            :operacionARealizar===4?'dividir':'error'} o utilizar el valor en memoria : ${memoria}`));
    let valorDos=parseInt(
        prompt(`Ingrese el segundo valor a ${operacionARealizar===1?'sumar'
            :operacionARealizar===2?'restar'
            :operacionARealizar===3?'multiplicar'
            :operacionARealizar===4?'dividir':'error'} o utilizar el valor en memoria : ${memoria}`));        
 
    switch (operacionARealizar) {
            case 1:
                alert(sumarValores(valorUno,valorDos));
                memoria.push(sumarValores(valorUno,valorDos));
            break;
            case 2:
                alert(restarValores(valorUno,valorDos));
                memoria.push(restarValores(valorUno,valorDos));
            break;
            case 3:
                alert(multiplicarValores(valorUno,valorDos));
                memoria.push(multiplicarValores(valorUno,valorDos));
            break;
            case 4:
                alert(dividirValores(valorUno,valorDos));
                memoria.push(dividirValores(valorUno,valorDos));
            break;
            default:
                alert('error');
            break;
    }        
continuar=true;
}    

}

// Luego, debe ingresar los dos valores que desea utilizar, y el programa imprimirá el resultado de la 
// operación en cuestión.

// Las opciones disponibles deben ser: suma, resta, multiplicación, división, y salir. 
// En esta última, el programa debe detenerse y mostrar un mensaje "Hasta la próxima".

//  CONSEJO 

// Cada operación debe tener una función diferente en tu código, que recibirá los valores ingresados 
// como parámetros y devolverá el resultado de la operación.
// No olvides usar estructuras de repetición para que la calculadora imprima la elección de operación 
// hasta que la persona desee detener el programa.
// Recuerda también que, además de if y else, también tenemos switch, que es muy interesante de utilizar 
// en casos como este, de múltiples opciones.
// Personaliza tu calculadora de la manera que te parezca más adecuada, y no olvides compartirla en tu 
// GitHub y en tus redes sociales con el hashtag #7DaysOfCode.

//  EXTRA 

// Para aprender más sobre funciones en Javascript, echa un vistazo a este site.
// Si aún no has estudiado sobre el `switch`, también revisa este site.

//   RESPUESTA DEL DESAFÍO DEL DÍA 6 

// - Solución del Día 6
// ¡No puedo creer que hemos llegado al final de esta jornada!
// ¡Espero mucho que hayas disfrutado del proyecto! Siéntete libre de darme un comentario en Instagram 
// (@aluralatam), ¡me hará feliz escucharte!
// Aprovecha este momento para desafiar a un amigo. Será una gran manera de que comparen sus proyectos y, 
// quién sabe, ¡quizás creen el próximo juntos!

// Pronto te enviaré un formulario para saber qué piensas de estos desafíos, si tienes algún comentario o 
// sugerencia.

// ¡Gracias por la compañía y buen trabajo!

// Jose Gonzalez
// Instructor Front-End en Alura Latam