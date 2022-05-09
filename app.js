var contenedor = document.getElementById('contenedor')
var Datos = []

var Balance = (Datos) => {
 var Ingresos = 0
 var Egresos = 0
 var Balance = document.getElementById('Balance')
 Datos.forEach((element) => {
  if (element.Tipo == 'Ingreso') {
   Ingresos = Ingresos + parseInt(element.Dinero)
  } else {
   Egresos = Egresos + parseInt(element.Dinero)
  }

  Balance.innerHTML = `Total: ${Ingresos - Egresos}`
 })
}

document.getElementById('product-form').addEventListener('submit', (e) => {
 e.preventDefault()
 var Tipo = document.getElementById('Tipo').value
 var Dinero = document.getElementById('Dinero').value
 var Año = document.getElementById('Año').value
 var Texto = document.getElementById('Texto').value
 var dato = { Tipo, Dinero, Año, Texto }
 Datos.push(dato)

 var nuevo = document.createElement('div')
 if (Tipo == 'Ingreso') {
  nuevo.style.background = 'green'
 } else {
  nuevo.style.background = 'red'
 }
 nuevo.innerHTML = `
 <p>${Tipo}</p>
 <p>${Dinero}</p>
 <p>${Año}</p>
 <p>${Texto}</p>
 `
 contenedor.appendChild(nuevo)
 Balance(Datos)
})
