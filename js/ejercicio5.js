class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, natalicio){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.natalicio = new Date(natalicio);
    }
    mostrarGeneracion(){
        let anioNacimiento = this.natalicio.getFullYear();
        if(anioNacimiento >= 1930 && anioNacimiento<= 1948){
            document.write(`<p>Generacion: Silent Generation</p></br><p>Rasgo Caracteristico: Austeridad</p>`)
        }
        if(anioNacimiento >= 1949 && anioNacimiento <= 1968){
            document.write(`<p>Generacion: Baby Boom</p></br><p>Rasgo Caracteristico: Ambicion</p>`)
        }
        if(anioNacimiento >= 1969 && anioNacimiento <= 1980){
            document.write(`<p>Generacion: Generación X</p></br><p>Rasgo Caracteristico: Obsesión por el éxito</p>`)
        }
        if(anioNacimiento >= 1981 && anioNacimiento <= 1993){
            document.write(`<p>Generacion: Generación Y</p></br><p>Rasgo Caracteristico: Frustración</p>`)
        }
        if(anioNacimiento >= 1994 && anioNacimiento <= 2010){
            document.write(`<p>Generacion: Generación Z</p></br><p>Rasgo Caracteristico: Irreverencia</p>`)
        }
    }
    esMayorDeEdad(){
        if(this.edad>=18){
            alert("Es Mayor de Edad!!");
        }
    }
    mostarDatos(){
        document.write(`<p>Nombre: ${this.nombre}</p></br><p>Edad: ${this.edad}</p></br><p>DNI: ${this.dni}</p></br>
        <p>Sexo: ${this.sexo}</p></br><p>Peso: ${this.peso}</p></br><p>Altura: ${this.altura}</p></br>
        <p>Fecha de Nacimiento: ${this.natalicio}</p></br>`)
    }
    generarDni() {
        let dni = Math.trunc(Math.random() * (99999999 + 1 - 10000000) + 10000000);
    }
}
