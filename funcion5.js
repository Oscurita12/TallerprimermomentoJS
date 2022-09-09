function calculo (x){
    let total=((((1500000 + 3500000) * 0.05) * x) + 3500000)
    return total
}
let licencias=calculo(3)
console.log(licencias)