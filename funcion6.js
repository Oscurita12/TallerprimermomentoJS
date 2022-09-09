function crearAprendiz(nombre,planeta,edad,estatura,clasificarAprendiz){

    let datosAprendiz = {
        nombre: nombre,
        planeta: planeta,
        edad: edad,
        estatura:estatura
    }
    clasificarAprendiz(datosAprendiz)
}

crearAprendiz('Clara','Tierra', 18, 1.72, function(aprendiz){
    if(aprendiz>=15){
        console.log("Usted se va para la clase de sable de luz")
    }
    else {
        console.log("Usted se va para la clase de la fuerza")
    }
})