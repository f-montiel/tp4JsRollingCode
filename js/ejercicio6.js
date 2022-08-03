class Libro {
    constructor(isbn, titulo, autor, paginas){
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }
    get obtenerIsbn(){
        return this.isbn;
    }
    set actualizarIsbn(Nuevoisbn){
        this.isbn = Nuevoisbn;
    }
    get obtenerTitulo(){
        return this.titulo;
    }
    set actualizarTitulo(nuevoTitulo){
        this.titulo = nuevoTitulo;
    }
    get obtenerAutor(){
        return this.autor;
    }
    set actualizarAutor(nuevoAutor){
        this.autor = nuevoAutor;
    }
    get obtenerPaginas(){
        return this.paginas;
    }
    set actualizarPaginas(cantidadPaginas){
        this.paginas = cantidadPaginas;
    }
    mostraLibro(){
        document.write(`El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene páginas ${this.paginas}`);
    }
}

let elSeñorDeLosAnillos = new Libro("9788445071793", "El señor de los anillos", "J. R. R. Tolkien", 1272);
let harryPotter = new Libro("9788478884452", "Harry Potter y la piedra filosofal", "J. K. Rowling", 256);
if(elSeñorDeLosAnillos.obtenerPaginas > harryPotter.obtenerPaginas){
    document.write("El señor de los anillos tiene mas paginas");
} else {
    document.write("Harry Potter y la piedra filosofal tiene mas paginas")
}