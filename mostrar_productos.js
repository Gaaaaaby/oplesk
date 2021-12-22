//  en ella mediante el uso de ciclos sea "for", "while" ó "map"
  //  crear un array que contenga los datos de los array mostrados
  //  de la siguiente forma:    
   
  //   [{
  //     tv:"1000usd"
  //   },
  //   {
  //     tablet:"500usd" 
  //   },
  //   {
  //     pc:"2000 usd"
  //   },
  //   {
  //     desktop:"700 usd"
  //   }]; 

const infoProductos = require("./productos")
const infoPrecios = require("./precios")
const precios = require("./precios")

console.log(infoPrecios)
console.log(infoProductos)

for(precio = 0; precio < precios.length; precio++){
    console.log(precios[precio])
}

for(producto = 0; producto < productos.length; producto++){
    console.log(productos[producto])
}
