//Almacenamiento y programacion orientada a objetos




//agregar:push -> const usuarios = []; usuarrios.push ({nombre: "Ana", edad: 25})

//ordenar:sort -> usuarios.sort((a,b)=>a.edad-b.edad) -> a<b

//filtar:filter -> const mayoresDe25 = usuarios.filter(usuario=>usuario.edad>25)

//buscar:find -> const luis= usuarios.find(usuario=>usuario.nombre==="Luis")

//eliminar:delete -> delete usuario.edad




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


//Funciones de orden superior


//                                              forEach
//itera s/ un array y ejecuta una fn por c/el del array -> retorna undifined
//array.forEach(function(elementoActual, indiceDelElActualOpcional, arrayCompletoOpcional)){codigo}        



//                                                map
//crea un nuevo array con todos los el que pasan una prueba definida por la fn, si no devuelve un [vacío]
//const numeros=[1,4,2,4,5,3]; const duplicados= numeros.map(function(num){
//                                                  return num*2;})



//                                               filter
//crea un nuevo array con todos los el que pasan una prueba definida por la fn, si no devuelve [Vacio] -> devuelve un booleano
//const nuevoArray=array.filter(function(elemento, indice, array){codigo})




//                                                reduce
// ejecuta un fn reductora s c el del array (izq a derecha), retorna un unico valor acumulado
// tiene dos parametros: Funcion reductora que se ejecuta en c el del array -> 4 argumentos -> acumulador (valor acumulado hasta el momento); valor actual; indice actual (opcional); array (opcional)
//                       Valor inicial para el acumulador(opcional), si no se proporciona se usa [0] y comienza por el segundo elemento
//array.reduce(function(ac, valorActual, indiceActual, array){codigo}, valorInicial);




//                                                some
//verifica si al menos un el del array cumple con una condicion implementada por al fn, devuelve booleano



//                                                findIndex
//devuelve el indice o -1


