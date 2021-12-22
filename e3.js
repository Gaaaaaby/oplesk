const nombres = [{nombre:"foo"},{nombre:"bar"},{nombre:"qux"},{nombre:"ram"}];

// hacer 3 procedimientos de iteración mediante los ciclos:
// map, while y for.
   
// emitir:

//    1- nombre: foo
//    2- nombre: bar
//    3- nombre: qux
//    4- nombre: ram

// const iteracionNombres = nombres.map(function(nombre){
//     return nombre
// });
// console.log(iteracionNombres)

// function usandoWhile(nombres){
// let i =0
// let lenNombres= nombres.length
//     while (i < lenNombres) {
//         console.log(nombres[i])
//         i++
//     }
// }
// usandoWhile(nombres)

function usandoFor(nombres){
    let j =0
    let lennombres=nombres.length
for(; j < lennombres; j++){
    console.log(nombres[j])
}
}
usandoFor(nombres)