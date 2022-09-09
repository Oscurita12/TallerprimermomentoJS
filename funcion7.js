function filtrarPlanos(planos,arrancarNave) {

    let filtro=planos.filter(function(plano){
        return plano>=1 & plano<=10
    })

    arrancarNave(filtro)
}

let planos = [1,210,320,400,500]
filtrarPlanos(planos,function(filtro){
    let cuenta = filtro.length
    if(cuenta > 0 ){
        console.log("Arrancando la nave")
    } else {
        console.log("Nos quedamos ")
    }

})