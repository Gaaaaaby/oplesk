
// // // const a = [100, 200, 300, 400, 500];

// // // var arregloA = a.map((numero)=>{
// // //     return numero 
// // // });
// // // console.log(arregloA)
// // // console.log(a)


// // // Mediante la función map iterar estos elementos del array 
// // // y pasarlo a un array nuevo.


// // // ======================================================================================
// // const x = [100, 200, 300];
// // const y = [400, 500, 600];
// // // Hacer un Object Merge de estos dos array es decir funcionarlos,
// // // fundirlos en 1 solo array, hacerlo de 2 formas diferentes.

// // const nuevoArrayXY = [...x,...y]
// // console.log(nuevoArrayXY)
// // // 1 una forma: [...a, ...b];
// // // 2 segunda forma: object.assign({}, a, b);

// // // ====================================================================================== 
// // const z = [100, 300, 400, 500, 600, 700];
// // // Agregar el elemento 800 al final del array 
// // // Anexar el elemento 50 al inicio del array 
// // // Ingresar el elemento 200 despues del elemento 100
// // function agregarElementoAZ(){
// //     z.push(800)
// //     console.log(z)
// // }
// // agregarElementoAZ()


// // function agregarElementoFZ(){
// //     z.unshift(50)
// //     console.log(z)
// // }
// // agregarElementoFZ()

// // function agregarIntermedio(){
// //     z.splice(2,0,200)
// //     console.log(z)
// // }
// // agregarIntermedio()


// // // ======================================================================================
// const n = ["foo", "bar", "baz", "boot", "qux", "origin"];
// // Seleccionar todos los elemento que inician con la letra "b"
// // y enviarlos aun array nuevo
// const nuevoArrayN = n.filter(palabra => palabra.includes('b'))
// console.log(nuevoArrayN)

// // // ======================================================================================
// const p = ["foo", "zi", "man"];

// // // Mediante un ciclo "for" iterar los elementos del array p
// // // crear un nuevo array, luego mostrar el nombre de fooziman en mayúscula
// // // "FOOZIMAN"
// let i =0 
// let lenp = p.length
// var NuevoArray= []

// for(i; i <lenp; i++){
//    console.log(p[i])
//    NuevoArray.push(p[i])


// }
// var enMayus = NuevoArray.join('', p[i])
// console.log(enMayus.toLocaleUpperCase())

// console.log(NuevoArray)





// // ======================================================================================
r = [100, 200, 300, 400, 500];
// // Empleando el ciclo "for" hacer un recorrido inverso del array
// emitir la siguiente salida:
for(j = 4; j  > r.length; j--){
    console.log(r[j])
}

// // 500
// // 400
// // 300
// // // 200
// // // 100 

// // // ======================================================================================
// const mascotaBuck = {
//      'nombre':"buck",
//      'edad':3,
//      'sexo': "macho"
//    };

//    const mascotaFix = {
//     'nombre':"fix",
//     'edad': 4, 
//     'sexo': "hembra"
//   };
 
// // mascotaBuck.vacunado=true
// // console.log(mascotaBuck)

// // mascotaFix.vacunado=false
// // console.log(mascotaFix)

// // function agregarMascotas(mascotaBuck, mascotaFix){
// // const mascota1 = [1,2]
// // const mascota2 = [5,5]
// // const familia3 = {...mascota1,...mascota2}
// // console.log(familia3)
// var familia = {...mascotaFix,...mascotaBuck}

// console.log(familia)



// // console.log(agregarMascotas(mascotaBuck,mascotaFix))
// // Se desea agregar estas 2 mascota en un nuevo contenedor/objeto, llamado 
// // familia, const familia = {};

// // Adicional, se debe anexar la propiedad vacunado:true para buck y  vacunado:false
// // para Fix

// // mostrar por pantalla.

// // ======================================================================================
// const barco = {
//      nombre:"imperio", 
//      cantidadDePersonas:100,
//      activo:true,
//      costo:"1 Millon USD",
//      disponibleParaViajar:["argentina", "brasil", "colombia"]
//    };

// let barquito=0

// let lenbarco= barco.length
   
// for(barquito; barquito < lenbarco; barquito++){
//     console.log(barco.barquito)
// }
//        // if( barco.b == 'disponibleParaViajar')
//        // console.log(barco.b)
//        // // disponibleParaViajar.push('chile', 'ecuador')
   
   

// // Se requiere crear una función para anexar 2 elementos empleando el iterador "for" recorrer el objeto 
// // y buscar la propiedad disponibleParaViajar y agregar "chile", "ecuador"
// // luego mostrar en pantalla el objeto, con los 2 elementos agregados
// let b=0

// let lenb= barco.length

// for(b; b < lenb; b++){
//     console.log(barco.b)
// }
//     // if( barco.b == 'disponibleParaViajar')
//     // console.log(barco.b)
//     // // disponibleParaViajar.push('chile', 'ecuador')


// // // ======================================================================================
const fichaPersona = {
     nombre:"karen",
     correo:"karen@karen.com",
     alias:"lakarinz",
     pais:"bananero",
     vive:true     
   };

// Debes eliminar la propiedad pais de la ficha persona

delete fichaPersona.pais 
console.log(fichaPersona)

// // ======================================================================================
// const t = ["t1", "t2", "t3", "t4", "t5"];
// // mediante la función "find" buscar si "t4" existe
// const buscarT4 = t.find(palabra => palabra == 't4');
// console.log(`se consiguio en el arreglo t, el elemento: ${buscarT4}`)



// // ======================================================================================
// const v = ["v1", "v1", "v2", "v3", "v1", "v4", "v5"];
// // Mediante la función "filter" excluir a todos los elementos "v1"
// // anexar el nuevo array sin esos valores de "v1"
// const extraccionElementosNoV1 = v.filter(elementoV => elementoV != 'v1')
// console.log(extraccionElementosNoV1)
// // ======================================================================================
// const f = ["f1", "f2", "f3", "f4", "f5"];
// // Con el ciclo "While" iterar cada uno de estos elementos 
// let h=0
// let lenf= f.length
// while (h < lenf ) {
//     console.log(f[h])
//     h++
    
// }




   
