class Rectangulo {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
    modificar(nuevoAlto = null, nuevoAncho = null){
        if(nuevoAlto!==null){
            this.alto = nuevoAlto;
        }
        if(nuevoAncho!==null){
            this.ancho = nuevoAncho;
        }
        document.write(`<p>El alto del rectango es: ${this.alto}</p></br><p>El ancho del rectango es: ${this.ancho}`);
    }
    mostrar(){
        document.write(`<p>El alto del rectango es: ${this.alto}</p></br><p>El ancho del rectango es: ${this.ancho}`);
    }
    calcularPerimetro(){
        let perimetro = 2 * (this.alto + this.ancho);
        document.write(`<p>El perimetro del rectangulo es: ${perimetro}</p>.`);
    }
    calcularArea(){
        let area = this.alto * this.ancho;
        document.write(`<p></br>El area del rectangulo es: ${area}.</p>`)
    }
}