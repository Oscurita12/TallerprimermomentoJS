//Declarando la función 
function obtenerNombre (codigo){
    let resultado = codigo.split(":")[1]+codigo.split(":")[0]
    return resultado
}

//Llamando a la función 
let resultado=obtenerNombre("1025640454: Clara Restrepo ")
console.log("El piloto se llama "+resultado)