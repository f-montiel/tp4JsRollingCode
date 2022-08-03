class Producto {
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    ImprimeDatos(){
        document.write(`Codigo: ${this.codigo}</br>Nombre: ${this.nombre}</br>Precio: $${this.precio}</br>`);
    }
}
let productos = [];
productos[0] = new Producto(12345, "Cafe", 450);    
productos[1] = new Producto(12346, "Leche", 200);
productos[2] = new Producto(12347, "Chocolate", 150);
for(i=0; i<productos.length; i++){
    productos[i].ImprimeDatos();
}