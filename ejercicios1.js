// 1. Hacer una función que pida la edad y si es mayor de 18 años indica que ya puede conducir.
// */
// Ejemplo:
// car edad = 21;
// validarEdad(edad);
// //=> puede conducir

console.log('Ejercicio  1️⃣')


function mayorEdad(edad){
    if(edad > 18){
        console.log(`tu edad es ${edad} y ya puedes conducir`)
    }
}
mayorEdad(19)



// 2. Listar los siguientes datos y pedir una nota(número).
// Mostrar la calificación según la nota:
// Ejemplo:

// var nota = 7;
// calificar(nota)


// 3. Mostrar en corchete la nota del rango enviado y en mayuscula
// 0-3: Muy deficiente
// 3-5: Insuficiente
// 5-6: Suficiente
// 6-7: [BIEN]  
// 7-9: Notable
// 9-10: Sobresaliente

console.log('Ejercicio  2️⃣')

function calificacion(nota){
    switch (true) {
        case ( nota > 0 && nota < 3):
            console.log(`su nota es ${nota} y es muy deficiente`)
            break;
        case ( nota > 3 && nota < 5):
            console.log(`su nota es ${nota} y es insuficiente`)
            break;
        case ( nota > 5 && nota < 6):
            console.log(`su nota es ${nota} y es suficiente`)
            break;
        case ( nota > 6 && nota < 7):
            console.log(`su nota es ${nota} y es buena`)
            break;
        case ( nota > 7 && nota < 9 ):
            console.log(`su nota es ${nota} y es notable` )
            break;
        case ( nota > 9 && nota < 10):
            console.log(`su nota es ${nota} y es sobresaliente`)
            break;
        default:
            console.log(`la nota ${nota} es incorrecta, introduzca otra `)
            break;
    }
}
calificacion(6.7)



// 4. Crear una función que al enviar un valor lo calcule x 2

// Ejemplo:
// calcularPorDos(2) // => 4


console.log('Ejercicio  3️⃣')

function calculoAlDoble(numero){
    var resultado = numero * 2 
    return `el doble del numero ${numero} es ${resultado}`
}

console.log(calculoAlDoble(3))


// 5. Dado el siguiente array multi dimensional, mostrar por consola "hola mundo desde javascript"

console.log('Ejercicio  4️⃣')
const a = ["mundo",[["hola"]],"desde",["javascript"]];

function mostrarArray(a){
    console.log(a[1], a[0], a[2], a[3])
    
}
mostrarArray(a)

// 6. Crear una función que permita agregar un nuevo nombre al final del array
// y al principio del array.
// */
console.log('Ejercicio  5️⃣')
const nombres = ["karen", "nicky", "michael", "frank"];

function agregarElemento(nuevoElemento){
    nombres.push(nuevoElemento)
    console.log(`este es el nuevo elemento agregado al final del arreglo ${nuevoElemento}`)
    console.log(nombres)
}
agregarElemento('homero')
// Ejemplo:
// agregarNombre("foo") // => ["foo", "karen", "nicky", "michael", "frank", "foo"];


// /*
console.log('Ejercicio  6️⃣')
let listaDeNombres = ["karen", "nicky", "michael", "frank"];
// Eliminar el primer y ultimo nombre ò elemento del array;
// */

// Ejemplo:
// eliminarPrimerMasUltimoNombre() //=> ["nicky", "michael"];

// function eliminacionElemento(decision){
// var decision;
//      if (decision=='primero'){
//          listaDeNombres.shift()
//          console.log(`el primer elemento ${listaDeNombres[0]} ha sido eliminado, ${listaDeNombres}`)
//     }else if(decision=='ultimo'){
//         listaDeNombres.pop()
//         console.log(`el ultimo elemento ${listaDeNombres.lenght-1}, ${listaDeNombres}`)
//     }else if(decision=='ambos'){
//         listaDeNombres.shift()
//         listaDeNombres.pop()
//         console.log(`el ultimo ${listaDeNombres.lenght-1} y el primer elemento ${listaDeNombres[0]} han sido eliminados: ${listaDeNombres} `)
//     } else{
//         console.log('operacion invalida')
//     }
// }

// eliminacionElemento(ultimo)
// 8. Crear una lista de números mediante el ciclo "for" desde el 10 hasta el 15
console.log('Ejercicio  7️⃣')
var numeros =[]

for (let index = 10; index < 16; index++) {
    numeros.push(index)
    
    
}
console.log(numeros)
// Ejemplo:
// 10
// 11
// 12
// 13
// 14
// 15


// /*
// //////////////////////////////////////////////////////////////////////
console.log('Ejercicio  8️⃣')
let comidas = ["ensalada", "pasta", "sopa", "pizza", "papas fritas"];

// 9. Iterar la siguiente lista mediante un ciclo / loop "for", se va a emitir
// antes de mostrar la lista un mensaje en upper LISTA DE COMIDAS, adicional
// la salida de la lista va a poseer un diseño, el cual debe cumpliar al
// momento de mostrar la salida.
// */
function mostrarEmojisDeComida(){
    console.log('🥗 🥘 🍕 🍝')
}
var mensaje = 'lista de comidas disponibles'
console.log(mensaje.toUpperCase()) 
mostrarEmojisDeComida()
function iteracionDeComidas(){
for (var comida =0; comida < 4; comida++){
    console.log(`✅ ${comidas[comida]}`)
    }
}

iteracionDeComidas()
mostrarEmojisDeComida()

// Ejemplo:
// -----------------------------
// LISTA DE COMIDAS
// -----------------------------
// [1] - ensalada
// [2] - pasta
// [3] - sopa
// [4] - pizza
// [5] - papas fritas
// -----------------------------

// /*
// 10. Con ciclos "for" listar unos productos con sus detalles, el cual
// se debe ver en pantalla con el diseño dado del ejemplo.
// adicional, debe crear una función donde se reciba el nombre y país
// del usuario que solicita la lista de productos
console.log('Ejercicio  9️⃣')
function mostrarEmoji(){

}
let candidatos = [["tv", 1000, "pantalla plana de 50 pulgadas"],["smartphone", 150, "samsung con bluetooth"],["tablet", 200, "hitachi de 14 pulgadas"],["keyboard", 50, "con teclas led de 10 colores"]];

console.log(`productos listados`)

function listarProductos(){

for( var i =0; i < candidatos.lenght; i++){

    for(var j=0; j<candidatos[i].lenght; j++) {

        console.log(candidatos[i][j])
    }
}}
listarProductos()
// Ejemplo:
// solicitudDeProductos("karen", "bananero");

// Salida: =>  la salida debe ser como se muestra en la parte inferior
// se recomienda emplear template string el uso de estas comillas:
//  ``
// `${variable}`  
// para una mayor agilidad.
// */
// --------------------------------------------------
// PRODUCTOS LISTADOS: 4
// --------------------------------------------------
// [1] - TV / PRECIO: $100 usd
//     - DETALLE: pantalla plana de 50 pulgadas
// ---
// [2] - SMARTPHONE / PRECIO: $150 usd
//     - DETALLE: samsung con bluetooth
// ---
// [3] - TABLET / PRECIO: $200 usd
//     - DETALLE: hitachi de 14 pulgadas
// ---
// [4] - KEYBOARD / PRECIO: $50 usd  
//     - DETALLE: con teclas led de 10 colores        
// ---------------------------------------------------
// NOMBRE DEL USUARIO: karen
// PAIS: bananero
// ---------------------------------------------------
