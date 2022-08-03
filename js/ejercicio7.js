class Agenda {
    constructor(tamanio = 10){
        this.tamanio = tamanio;
        this.contactos = [];
    }
    agregarContacto(contacto){
        if(this.agendaLlena()){
            alert("La agenda esta llena");
        } else if(this.existeContacto(contacto)){
            alert("El contacto ya existe")
        } else {
            this.contactos.push(contacto);
        }
    }
    existeContacto(contacto){
        for(let indice = 0; indice < this.contactos.length; indice++){
            if(this.contactos[indice].nombre.toLowerCase() == contacto.nombre.toLowerCase()){
                return true;
            } else {
                return false;
            }
        }
    }
    listarContactos(){
        document.write("<ul>");
        for(let indiceContactos = 0; indiceContactos < this.contactos.length; indiceContactos++){
            document.write(`<li>${this.contactos[indiceContactos].nombre}: ${this.contactos[indiceContactos].telefono}</li>`)
        }
        document.write("</ul>");
    }
    buscarContactos(nombre){
        for(let i = 0; i<this.contactos.length; i++){
            if(nombre.toLowerCase() == this.contactos[i].nombre.toLowerCase()){
                return this.contactos[i];
            }
        }
        alert("Contacto No encontrado");
    }
    eliminarContactos(contacto){
        for(let i = 0; i < this.contactos.length; i++){
            if(contacto == this.contactos[i]){
                this.contactos = this.contactos.slice(i,1);
                alert("Contacto contacto eliminado");
                break
            }
            alert("Contacto no encontrado");
        }
    }
    agendaLlena(){
        if(this.tamanio == this.contactos.length){
            return true
        } else {
            return false
        }
    }
    huecosLibres(){
        let huecosLibres = this.tamanio - this.contactos.length;
        return huecosLibres;
    }
}
class Contacto {
    constructor(nombre, telefono){
        this.nombre = nombre;
        this.telefono = telefono;
    }
}