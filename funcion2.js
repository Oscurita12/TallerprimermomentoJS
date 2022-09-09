let naves = []
function registrarNave(nave){
    let clave = nave.split(":")[0]
    let nombre = nave.split(":")[1]
    let objNave = {
        "nombre" : nombre,
        "clave" : clave
    }
    naves.push(objNave)
}
function obtenerNave(codigo){
    let nombre = ""
    naves.forEach(function(nave){
        if (codigo == nave.clave) {
            nombre = "El director de la nave es : "+nave.nombre
        }
    })
    if (nombre == "") {
        nombre = "No hay resultados encontrados"
    }
    return nombre
}
//Llamando a la función 
//let resultado=obtenerNombre("1025640454: Clara Restrepo ")
//console.log("El piloto se llama "+resultado)

let registro1 = registrarNave("000: Clara Restrepo ")
let registro2 = registrarNave("123: meee ")
let registro3 = registrarNave("456: teoooo ")
let registro4 = registrarNave("789: grupo ")

let buscar = obtenerNave("456")
console.log(buscar);






/* //Declarando la función 
function obtenerNombre (codigo){
    let resultado = codigo.split(":")[1]+codigo.split(":")[0]
    return resultado
}

//Llamando a la función 
let resultado=obtenerNombre("1025640454: Clara Restrepo ")
console.log("El piloto se llama "+resultado)

let piloto = [] */