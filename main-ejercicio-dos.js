// ### 2. **Filtro en Vivo de una Tabla**

// - Muestra una tabla con datos (por ejemplo, productos).
// - Añade un input que filtre las filas en vivo según el texto ingresado.
// - El filtrado debe funcionar sin recargar la página.

const productos = [
    { nombre: "Pan", precio: 300 },
    { nombre: "Leche", precio: 800 },
    { nombre: "Huevos", precio: 1500 },
    { nombre: "Arroz", precio: 1200 },
    { nombre: "Yerba", precio: 2500 }
];

const tabla=document.getElementById("tablaProductos");

function renderizarTabla(lista) {
    
    tabla.innerHTML="";

    lista.forEach (prod => {
        const fila= document.createElement("tr");
        fila.innerHTML=`
        <td>${prod.nombre}</td>
        <td>$${prod.precio}</td>`;

        tabla.appendChild(fila);
    })
}

renderizarTabla(productos);

const input= document.getElementById("filtroInput");

input.addEventListener("keyup", function() {
    const texto= input.value.toLowerCase();
    const filtrados= productos.filter(prod=> 
        prod.nombre.toLowerCase().includes(texto) ||
        prod.precio.toString().includes(texto)
    );

    renderizarTabla(filtrados)
})