class Producto{
    static id = 0 ; 
    
    constructor(nombre,precio,cantidad){
    this.id =++Producto.id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad; 
    this.subtotal = precio * cantidad;
    }
    
    mostrarProducto(){
    
    return `N°: ${this.id}, Producto: ${this.nombre}, Precio: $${this.precio}, Cantidad: ${this.cantidad}, Subtotal: $${this.subtotal}`;
    }

    }



function eliminarUltimo() {
    if (productos.length === 0) {
        alert("📭 No hay productos para eliminar");
        return;
    }

    productos.pop();
    alert("🗑️ Último producto eliminado");
}

 function eliminarPrimero() {
    if (productos.length === 0) {
        alert("📭 No hay productos para eliminar");
        return;
    }

    productos.shift();
    alert("🗑️ Primer producto eliminado");
}

    
function ingresarProducto(){

      const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;
      let ingresoNombre =prompt("Ingrese el nombre del producto:(nada de caracteres solo letras y su 1er nombre sin espacion ni nada)");
      while(ingresoNombre !== null && !soloLetras.test(ingresoNombre)) {
            ingresoNombre = prompt("❌ Nombre inválido. Ingrese solo letras:");
      }


      let ingresoPrecio = parseInt(prompt("Ingrese el precio:"));
      while (!Number.isInteger(ingresoPrecio) || ingresoPrecio <= 0) {
            ingresoPrecio = parseInt(prompt("❌ Precio inválido. Ingrese un número entero positivo:"));
       }


      let ingresoCantidad = parseInt(prompt("Ingrese la cantidad que va a comprar:"));
      while (!Number.isInteger(ingresoCantidad) || ingresoCantidad <= 0 ){
           ingresoCantidad = parseInt(prompt("❌ Precio inválido.Ingrese un numero positivo:"));
      }
     
  
      let nuevoProducto = new Producto(ingresoNombre,ingresoPrecio,ingresoCantidad); // aca saco id y subtotal porque no se pide datos se calculan entonces no estoy pidiendo datos no va como parametro de Producto , simplemento calcula 
      
      productos.push(nuevoProducto);
      
}

function mostrarCatalogo(){

    if (productos.length === 0) {
        alert("📭 No hay productos cargados.");
        return;
    }

    let listado = "Catalogo:\n\n";

    productos.forEach((p, i) => {
        listado += `${i + 1}) N°:${p.id} | ${p.nombre} | $${p.precio} | Cant:${p.cantidad} | Subtotal:$${p.subtotal}\n\n`;
    });

    alert(listado);
}


//esta funcion es para ver si no hay nada cargado antes ni guardado en memoioria , que no haga nada , y si los hay que muestre que se cargo algo cuando inicio el programa 
function memoriaCatalogo() {

    const data = localStorage.getItem('productos');

    if (data) {
        // si ya hay datos guardados → los cargo
        productos = JSON.parse(data);
       console.log("📦Si hay algo guardado quedo en la memoria.");
    }
}


function eliminarProducto(){

    if (productos.length === 0) {
        alert("📭 No hay productos para eliminar");
        return;
    }

    let nombreEliminar = prompt("Ingrese el nombre del producto a eliminar");

    if (!nombreEliminar) return;

    nombreEliminar = nombreEliminar.trim();

    const indice = productos.findIndex(p => p.nombre === nombreEliminar); //recorre array x array y ejecuta una condficion

    if (indice === -1) {
        alert("❌ No existe un producto con ese nombre");
        return;
    }

    productos.splice(indice, 1);

    alert("🗑️ Producto eliminado");
}


function eliminarMemoria () {
    const data = localStorage.getItem("productos"); //leo lo qyue hayu guardado en localstorage con su clave "productos"

    if (!data) {
        alert("📭 No hay nada guardado en la memoria (localStorage).");
        return;
    }
    localStorage.removeItem("catalogo");   // vieja
    localStorage.removeItem("productos");  // actual
    

    productos.length = 0;

    alert("🧹 Memoria borrada: se eliminó 'productos' del localStorage y se vació el carrito.");

}

function finalizarCompra() {
    let total = 0;

    productos.forEach(p => total += p.subtotal);

    alert("🧾 Total a pagar: $" + total);
}

let productos = [] ;

function IngresoOpciones(){
    let opcion =prompt("Bienvenido al supermercado:\n1-Para ingresar productos\n2-Para Mostrar productos\n3- Para eliminar ultimo producto\n4-Eliminar primer producto\n5-Para guardar productos en la memoria\n6-Para eliminar un producto\n7 Borrar memoria (localStorage)\n0-Para salir del supermercado");

    while (opcion !=="0") {

    
    switch(opcion) {
    case "1":
        ingresarProducto();
        break;
    case "2":
        mostrarCatalogo();
        break;
    case "3":
        eliminarUltimo();
        break;
    case "4":
        eliminarPrimero();
        break;
    case "5":
        localStorage.setItem('productos', JSON.stringify(productos));   //si el usuario quiere guardar apreta 5 y guardar convierto el objeto econ json 
        alert("💾 Catálogo guardado");
        break;
    case "6":
        eliminarProducto();
        break;
    case "7" :
         eliminarMemoria();  
         break; 
    default:
        alert("Opción inválida");

    }

    
    prompt("Bienvenido al supermercado:\n1-Para ingresar productos\n2-Para Mostrar productos\n3- Para eliminar ultimo producto\n4-Eliminar primer producto\n5-Para guardar productos en la memoria\n6-Para eliminar un producto\n7 Borrar memoria (localStorage)\n0-Para salir del supermercado");
    
}
 
    alert("SALIENDO DEL SISTEMA");
    finalizarCompra();
}
//llamo al inicio dle programa si hay memoria muestra cargado sino hay no hace nada y entra al switch 
memoriaCatalogo();
IngresoOpciones();
Object.keys(localStorage);