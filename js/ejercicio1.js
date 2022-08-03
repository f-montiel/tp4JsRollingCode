let auto = {
    color: "Rojo",
    marca: "Audi",
    modelo: "A1",
    estado: "Auto apagado",
    encender(){
        this.estado = "Auto encendido";
        document.write(this.estado);
    },
    apagar(){
        this.estado = "Auto apagado"
        document.write(this.estado);
    }
}
