//! Almacenamiento y programacion orientada a objetos




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


//! Funciones de orden superior


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




//!  DOM y eventos

// Modelo de objetos del documentom, es una interfaz de programación p doc htm y xml -> doc como arbol de nodos
// Nodo raiz; nodos elementos(cada etiqueta html); nodos de texto; nodos de atributo(class, id, src); nodos de comentario

//acceder al dom
//                                               getElementById()
//usa el atributo del el htmlcomo identificador, accede a un unico el c id especifico
//let elemento= document.getElementById("id-del-el")

//                                              getElementByClassName
//p acceder a un conjunto de el html usando su atributo class como identificador, retorna un array de el c coincidencias -> retorna una coleccion de nodos
//let elemento= document.getElementByClassName("nombre-de-la-clase")

//                                             getElementByTagName
//p acceder a un conjunto de el html usando su etiqueta como identificador, es la menos especifica, retorna nodos

//let elemento= document.getElementByTagName("etiqueta")

//                                             querySelector
//selecciona el 1° el del dom que coincida con uno o mas selectores css (id, class, atributo)
//let elemento=document.querySelector("slector-css")

//                                             querySelectorAll
//devuelve una lista(NodeList) de los el que coinciden con selector css




//  Modificar nodos
//                                            innerHTML
//leer o escribir el html interno
//let contenedor=document.getElementById("contenedor");
//contenedor.innerHTML="<h2>Nuevo Título</h2>"

//                          innerText(considera el estilo y renderizado actual)
//                      textContent(devuelve el contenido textual sin tener en cuenta el estilo)
//let titulo=document.getElementById("titulo");
//titulo.innerText="Texto actualizado";

//                                            setAtribute()
//p modificar o establecer un nuevo atributo en un el
//let enlace=document.querySelector("a");
//enlace.setAtribute("href", "<https://...>")



//Añadir nodos
//                                          CreateElement()
//crea un nuevo el en el dom
//let nuevoDiv=docuent.CreateElement("div");
//nuevoDiv.innerHTML="<p>Nuevo div</p>";
//document.body.appendChild(nuevoDiv);

//                                         appendChild()
//añade un nodo como ultimo hijo del nodo padre
//let lista=document.getElementById("lista");
//let nuevoItem=document.CreateElement("li");
//nuevoItem.textContent="nuevo item";
//listaa.appendChild(nuevoItem);

//                                         insertBefore()
//inserta un nodo antes de un nodo hijo especifico
//let primerItem= lista.firstChild;
//lista.insertBefore(nuevoItem, primerItem);


//Eliminar nodos
//                                          removeChild()
//elimina nodo hijo
//let itemABorrar=document.getElementById("item");
//lista.removeChild(itemABorrar);

//                                         remove()
//elimina el nodo seleccionado
//let elemento=documento.getElementById("elemento");
//elemento.remove();



// - Crea una lista de tareas donde el usuario pueda:
//     - Añadir una nueva tarea desde un input.
//     - Marcarla como completada (estilo tachado o color).
//     - Eliminarla.
// - Guarda el estado de la lista en `localStorage`.


// guardarla conviertiendo las que ya estaban en texto conel json parse, si no hay nada arranca con un array vacio

let tareas= JSON.parse(localStorage.getItem("tareas")) || [];

//convierte el array a texto con stringify y lo guarda con la clave tareas

function guardarEnLocal() {
    localStorage.setItem("tareas", JSON.stringify (tareas));
}

//renderizarla

function renderizarTareas() {
    const lista = document.getElementById("listaTareas");
    
    lista.innerHTML="" //vacía la lista
    
    tareas.forEach((tarea, index)=>{
        const li=document.createElement("li"); //crea un li para cada una
        if (tarea.completada) li.classList.add ("completada");

        li.innerHTML=`
        <span>${tarea.texto}</span>
        <div class= "acciones">
            <button oneclick="toggleCompletada(${index})">✔</button>
            <button oneclick="eliminarTarea(${index})">❌</button>
        </div>`;

        lista.appendChild(li);

    })
}


//agregar tarea

function agregarTarea() {
    const input = document.getElementById("tareaInput");

    const texto = input.value.trim(); //trim elimina los espacios en blanco al principio y al final

    if (texto !== "") {
        tareas.push({texto: texto, completada: false});

        guardarEnLocal();
        renderizarTareas();
        
        input.value= "";
    }
}


function toggleCompletada(index) {
    tareas[index].completada= ! tareas[index].completada;

    guardarEnLocal()
    renderizarTareas();
}

//splice saca del array la tarea en esa posicion

function eliminarTarea() {
    tareas.splice (index, 1);

    guardarEnLocal();
    renderizarTareas();
}

//mostrar tareas al cargar

renderizarTareas();