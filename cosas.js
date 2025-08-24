//Almacenamiento y programacion orientada a objetos

// 2. **Biblioteca de Libros**
//     - Clase Libro con título y autor.
//     - Clase Biblioteca con método buscarPorAutor(autor).
//     - Guarda la biblioteca en localStorage.


class Libro {
    constructor(titulo, autor) {
        this.titulo=titulo;
        this.autor=autor;
    }
}

class Biblioteca{
    constructor (){
        const datosGuardados= localStorage.getItem("Biblioteca");

        //condicion ? verdadero: falso

        this.libros= datosGuardados ? JSON.parse(datosGuardados):[];
    }

     //guardar va fuera delconstructor

    guardar(){
        localStorage.setItem("biblioteca", JSON.stringify(this.libros));
    }

     //agregar

    agregarLibro (titulo, autor){
        const nuevoLibro= new Libro(titulo, autor);
        this.libros.push(nuevoLibro);
        this.guardar();
    }

     //buscar

    buscarPorAutor (){
        return this.libros.filter(libro=>libro.autor===autor);
    }
}

//agregar

const miBiblioteca= new Biblioteca ();


miBiblioteca.agregarLibro("Rayuela", "Cortázar");
miBiblioteca.agregarLibro("El Aleph", "Borges");


console.log(miBiblioteca.libros);

const autor= prompt("AUTOR");

console.log(miBiblioteca.buscarPorAutor(autor));