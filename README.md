# README

## INTRO

Este proyecto es un ecommerce simple realizado con React.js conectado a Firebase/Firestore

## FUNCIONAMIENTO

* Contiene un Home donde se pueden ver todos los productos de la tienda con imagen, nombre y opcion para comprar el producto.
* Se puede navegar por cada categoria (tortas, cookies y cuadraditos) denro del menu.
* En cuanto a cada producto, se puede ver el detalle con precio, descripcion y stock disponible. Dentro del detalle podemos proceder con la compra o seguir navegando; tambien contiene un count para sumar o restar productos. 
* Al proceder con la compra se abrira el cart desde el cual se puede proceder al checkout, seguir comprando. El cart contiene informacion de los productos seleccionados (imagen, valor, cantidad seleccionada y subtotal), se puede eliminar de a un producto o vaciar el cart completo.
* Al proceder al checkout se abrira un formulario para completar los datos del comprador y si los datos estan cargados de forma correcta se podra finalizar la compra presionando 'Fializar compra'.
* El stock es manejado por Firestore y se actualizara con cada orden creada, si un producto no tuviera stock al momento de finalizar la compra, no se creara la orden y aparecera un mensaje de error.


## INSTALACION
 
Para inicializar el proyecto debemos clonar el repositorio.

$ git clone https://github.com/szuviria/comision31190lumie.git
$ cd 'crear carpeta'
$ npm install
$ npm start

Built Using: Create-React-App

## LIBRERIAS UTILIZADAS

* Material UI  https://material-ui.com/ se utilizo para botones y spinner.
* React Bootstrap https://react-bootstrap.netlify.app/ se utilizo para la barra de navegacion y las Cards de manera responsive.
* Sweet Alert2 https://sweetalert2.github.io/ para notificaciones.
* React Hook Form https://react-hook-form.com/ para el formulario.

## VARIABLES DE ENTORNO

* Contiene variables de entorno para configuracionde firebase, ver ejemplo .env.example


![gif funcionamiento](./public/images/bakeryvideo.gif "gif")