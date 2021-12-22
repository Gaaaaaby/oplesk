const c = [{pies:"pies"},[["cabeza"]],function(){return "cuerpo"}];

//  dado el array loco anterior, mostrar lo siguiente
//  por la consola:

//  "cabeza"
//  "cuerpo"
//  "pies"  

//  se recomienda usar el ciclo "for" como medio de iteración
for(i =0; i < c.length; i++){
    console.log(c[i][2]())
}
