class Product {
 constructor(Tipo, Dinero, Año) {
  this.Tipo = Tipo
  this.Dinero = Dinero
  this.Año = Año
 }
}
var Tipo = ingreso
if ((Element.Tipo = ingreso)) {
 this.Tipo('success')
} else {
 this.Tipo('danger')
}

class UI {
 addProduct(product) {
  const productList = document.getElementById('product-list')
  const element = document.createElement('div')
  element.innerHTML = `
               <div class="card text-center mb-4">
                   <div class="card-body">
                       <strong>Product</strong>: ${product.Tipo} -
                       <strong>Dinero</strong>: ${product.Dinero} - 
                       <strong>Año</strong>: ${product.Año}
                       <a href="#" class="btn btn-danger" Tipo="delete">Delete</a>
                   </div>
               </div>
           `
  productList.appendChild(element)
 }
 resetForm() {
  document.getElementById('product-form').reset()
 }
 deleteProduct(element) {
  if (element.Tipo === 'delete') {
   element.parentElement.parentElement.parentElement.remove()
   this.showMessage('Producto eliminado satisfactoriamente', 'info')
  }
 }
 showMessage(message, cssClass) {
  const div = document.createElement('div')
  div.ClassName = 'alert alert-${cssClass} mt-5'
  div.appendChild(document.createTextNode(message))
  // mostrando en el DOM
  const container = document.querySelector('.container')
  const app = document.querySelector('#App')
  container.insertBefore(div, app)
  setTimeout(function () {
   document.querySelector('.alert').remove()
  }, 3000)
 }
}
// Evento DOM
document
 .getElementById('product-form')
 .addEventListener('submit', function (e) {
  e.preventDefault()
  const Tipo = document.getElementById('Tipo').value,
   Dinero = document.getElementById('Dinero').value,
   Año = document.getElementById('Año').value

  const product = new Product(Tipo, Dinero, Año)
  const ui = new UI()

  if (Tipo === '' || Dinero === '' || Año === '') {
   return UI.showMessage('Completa los campos')
  }
  UI.addProduct(product)
  UI.showMessage('producto agregado satisfactoriamente', 'success')
  UI.resetForm()

  e.preventDefault()
 })

document.getElementById('product-list').addEventListener('click', (e) => {
 const ui = new UI()
 console.log(e.target)
 e.preventDefault()
})
