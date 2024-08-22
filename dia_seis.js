// ¡Hola, !

// ¿Conseguiste resolver el ejercicio de ayer?
// ¡Creo que fue uno de los más divertidos hasta ahora!
// Si quieres ver mi solución, está, como siempre, al final de este correo electrónico.
// ¿Recuerdas el pequeño programa que creaste ayer para hacer tu propia lista de compras? 
// ¡Hoy tu desafío es hacerlo aún más interesante!
// Ya viste cómo trabajar con arrays de forma sencilla, añadiendo elementos a tu lista de compras.
// Otra operación muy común es la eliminación de elementos de la lista, y por eso es muy importante 
// que sepas cómo hacerlo.
// Pensándolo bien, existen muchas maneras de eliminar un elemento de una lista. Puedes eliminar el primer 
// elemento, el último, o cualquier otro del medio de la lista. Cada una de estas operaciones tiene su propio 
// método en la documentación de arrays de Javascript. Vamos a hablar más sobre estos métodos en la sección 
// de "Consejos".

let frutas=[]; 
let lácteos=[]; 
let congelados=[]; 
let dulces=[];

let agregarProducto='agregar';

function eliminarProducto(array,item) {
    if(array.includes(item)){
        array.splice(array.indexOf(item),1);
      }
}

function mostrarLista() {
    alert(`
        Lista de Compras:
        frutas : ${frutas}
        lacteos : ${lácteos}
        congelados : ${congelados}
        dulces : ${dulces}`);
}

while(agregarProducto==='agregar'){

    agregarProducto=prompt('deseas agregar o eliminar un alimento a tu lista de compras? (agregar), (eliminar), (no) para salir');
    
    if(agregarProducto==='agregar'){
      let productoNuevo=prompt('Introduce el producto a agregar a la lista de compras');  
      let categoriaDeProducto=prompt(`en qué categoría se encaja ese alimento: frutas, lácteos, congelados, dulces`)    
        switch (categoriaDeProducto) {
            case 'frutas':
                frutas.push(productoNuevo);
                break;
            case 'lácteos':
                lácteos.push(productoNuevo);
                break;    
            case 'congelados':
                congelados.push(productoNuevo);
                break;    
            case 'dulces':
                dulces.push(productoNuevo);
                break;    
            default:
                alert("Error");
                break;
        }
    }else if(agregarProducto==='no'){
        alert('Gracias por tu compra');
        break;
    }else if(agregarProducto==='eliminar'){
        
        alert(`Que producto quieres eliminar ?`);
        
        mostrarLista();

        productoAEliminar=prompt("Ingresa el producto de la lista a eliminar");

        if(frutas.includes(productoAEliminar)==false&&lácteos.includes(productoAEliminar)==false&&
           congelados.includes(productoAEliminar)==false&&dulces.includes(productoAEliminar)==false){

           alert('no existe el producto a eliminar');

            }else{
                eliminarProducto(frutas,productoAEliminar);
                eliminarProducto(lácteos,productoAEliminar);
                eliminarProducto(congelados,productoAEliminar);
                eliminarProducto(dulces,productoAEliminar);

                mostrarLista();
            }
        agregarProducto='agregar';    

    }else{
        alert('No se reconoce ');
        agregarProducto='agregar';
    }

}

mostrarLista();

// Deberás crear la opción de eliminar algún elemento de la lista, que se mostrará junto con la pregunta: 
// “¿deseas añadir un alimento a la lista de compras?”.

// A partir de ahí, si la persona elige esa opción, el programa imprimirá los elementos 
// presentes en la lista actual, y la persona deberá escribir cuál de ellos desea eliminar.

// Después de eso, el programa eliminará el elemento de la lista e imprimirá la confirmación de que el 
// elemento realmente ya no está allí.

// Finalmente, el programa volverá al ciclo inicial de preguntas.

// Si, al intentar eliminar el elemento, este no se encuentra en la lista, deberás mostrar un mensaje
// advirtiendo de ello.
// Por ejemplo: “¡No fue posible encontrar el elemento en la lista!”.

// Recuerda que la opción de eliminar un elemento solo deberá estar disponible a partir del momento 
// en que exista al menos un elemento en la lista de compras.

//  CONSEJO 

// Puedes buscar el elemento que la persona desea eliminar de la forma que prefieras, utilizando 
// métodos de Javascript para ello.
// Existe el método .includes(elemento), que devuelve true o false si el array en cuestión contiene dicho 
// elemento o no.

// Existe también el método .indexOf(elemento), que devuelve la posición de ese elemento dentro del array, 
// o `-1` si no lo encuentra.

// Para la eliminación en sí, existen diferentes métodos. El método shift, por ejemplo, elimina siempre el 
// primer elemento de la lista; el método pop elimina el último; mientras que el método splice elimina un cierto 
// número de elementos a partir de una determinada posición. 
// Elige el que consideres que tiene más sentido para tu pequeño programa.

//  EXTRA 

// Para aprender más sobre métodos para arrays en Javascript, echa un vistazo a este site.
// Recuerda que siempre puedes personalizar tu pequeño programa de la manera que te parezca 
// mejor, y no olvides compartirlo en tu GitHub y en tus redes sociales con la etiqueta #7DaysOfCode.


// Jose Gonzalez
// Instructor Front-End en Alura Latam