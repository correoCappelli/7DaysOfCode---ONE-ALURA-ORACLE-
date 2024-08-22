// Qué tal, ? ¿Conseguiste resolver el desafío de ayer?

// ¡Estoy seguro que sí! Pero, para que te sientas con más confianza, al final de este correo te dejo cómo yo resolvería el desafío, ¿vale?
// ¿Sabes cuando te registras en un site y, justo después, al iniciar sesión, te llama por tu nombre? Eso es lo que harás en el desafío de hoy.
// Cuando creas un sistema, site o aplicación, es común querer agregar algunos toques personalizados para hacer la experiencia en tu aplicación más rica y dinámica.
// Hacer esto mediante programación puede no ser una tarea fácil. Dependiendo del nivel de personalización que quieras implementar, la cantidad de código que necesitarás escribir puede ser inmensa.
// Pero, por supuesto, puedes comenzar de una manera más sencilla. Para ello, lo importante es entender cómo capturar y almacenar valores dentro de variables. ¡Y en eso te voy a ayudar hoy!
// Las variables son los bloques básicos de construcción de cualquier sistema y son esenciales para procesar cualquier tipo de información, ya sea de una persona que ha iniciado sesión en el sistema o incluso para mostrar detalles de productos en un catálogo de comercio electrónico.
// Por eso, hoy te voy a enseñar a desarrollar un programa simulando una de esas aplicaciones. Debe pedir al usuario responder 3 preguntas:

 

// - ¿Cuál es tu nombre?
// - ¿Cuántos años tienes?
// - ¿Qué lenguaje de programación estás estudiando?

let nombreUsuario=prompt("¿Cuál es tu nombre?")
let edadUsuario=prompt("¿Cuántos años tienes?")
let lenguajeUsuario=prompt("¿Qué lenguaje de programación estás estudiando?")

// A medida que se hagan las preguntas, la persona que esté usando el programa debe responder cada una de ellas.

// Al final, el sistema mostrará el mensaje:

if(nombreUsuario!=''&&edadUsuario!=''&&lenguajeUsuario!=''){
console.log (`Hola ${nombreUsuario}, tienes ${edadUsuario} años y ya estás aprendiendo ${lenguajeUsuario}!`)
} else{
 console.log("falta ingresar alguna respuesta")
}

// Observa que cada información entre [ ] es una de las respuestas dadas por la persona.

//  EJERCICIO OPCIONAL

// Si deseas profundizar en el tema de hoy, tengo otro ejercicio para ti.
// Pero es 100% opcional.
// Vas a complementar el código para que, después de mostrar el mensaje anterior, el programa pregunte:


// ¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO.

let gustaLenguaje=parseInt(prompt(`¿Te gusta estudiar ${lenguajeUsuario}? Responde con el número 1 para SÍ o 2 para NO.`))

// Y luego, dependiendo de la respuesta, debería mostrar uno de los siguientes mensajes:


// 1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.
// 2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?

//  CONSEJO 

// Puedes agregar tantas preguntas como desees y aprovechar las respuestas de los usuarios en el mensaje que se mostrará.
// Para imprimir y recibir valores, puedes usar tanto console.log, prompt y alert, como también HTML y CSS si ya tienes conocimiento en estas dos tecnologías.
// Puedes usar la estructura condicional if para resolver el Ejercicio Opcional. Algo como:

if (gustaLenguaje == 1) {

    alert('¡Muy bien! Sigue estudiando y tendrás mucho éxito.')

}

if (gustaLenguaje == 2) {

    // da la respuesta negativa
    alert('Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?')

}

//   EXTRA  

// Tanto alert() como prompt() se utilizan para crear cuadros de diálogo e interactuar con el usuario, pero son diferentes entre sí.
// El alert() se utiliza para mostrar un mensaje simple al usuario.

// Ejemplo:

// alert("¡Hola, todos!");

// El prompt() requiere que el usuario ingrese algún valor, que podrás manipular.

// Ejemplo:

// const ciudad = prompt("Escribe tu ciudad:");
// const msg = `¡Eres de ${ciudad}!`;
// alert(msg);

// Prueba los códigos anteriores e intenta adaptarlos a tu programa.

//   RESPUESTA DEL DESAFÍO DEL DÍA 1  

// Puedes ver en el [] mi solución para el desafío de ayer:
// - Solución del Día 1:
// No olvides compartir tu programa en tu GitHub y en tus redes sociales con el hashtag #7DaysOfCode.
// ¡Buen trabajo y hasta mañana!

// Jose Gonzalez
// Instructor Front-End en Alura Latam