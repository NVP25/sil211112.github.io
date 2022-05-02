importarScript('app.js')
let MiCanvas = document.getElementById('MiGrafica').getContext('2d')

var chart = new chart(MiCanvas, {
 type: 'line',
 data: {
  labels: ['Ingresos', 'Egresos'],
  datasets: [
   {
    label: 'Mi Presupuesto',
    backgroundColor: 'rgb(0,0,0)',
    data: [Dinero],
   },
  ],
 },
})
