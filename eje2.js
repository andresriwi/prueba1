let horas = 46
let esCoder =false

let precioInicial=3000
let precioAdicional=2000
let total = 0

total= precioInicial +(horas -1) *precioAdicional
if (total>20000) {
total=20000    
}
if (esCoder) {
    total =total*.85
}
console.log("El total a pagar es $" + total)

/*
Ya son las 2 pm y no alcancé a hcaerlo con inquierer
*/