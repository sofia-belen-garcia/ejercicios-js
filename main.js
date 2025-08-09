//Simula un login con usuario y contraseña predefinidos.

// - Usuario correcto: `"admin"`
// - Contraseña correcta: `"1234"`
    
//     Pide al usuario que los ingrese y muestra si el acceso es concedido o denegado.

// // const usuario = "admin"
// // const contraseña = 1234

// // const user = prompt ("Por favor ingrese su nombre de usuario")
// // if (user===usuario) {
// //     alert("Yay")
// // }
// // else{
// //     alert("Nou")
// // }


// Validar un correo
// Pide al usuario que ingrese una cadena de texto.

// Verifica si contiene un `'@'` y un `'.'`.

// Muestra si "parece un correo válido" o no.

// (Investigar includes)

// // let conArroba = "@"
// // let conPunto = "."

// // let mail= prompt("pone tu mail gil")
// // if (mail.includes(conArroba) && mail.includes(conPunto)) {
// //     alert("Bien ahi")
// // }
// // else{
// //     alert("Te mando la cana")
// // }


// ### **Ejercicio 3: Simulación de intentos de login (máximo 3)**

// Permite al usuario intentar ingresar usuario y contraseña hasta 3 veces.

// Si acierta, muestra "Acceso concedido".

// Si falla 3 veces, muestra "Cuenta bloqueada".


// // const user = "admin"
// // const contra = 1234

// // for (let i = 0; i < 3; i++) {
// // let usuario = prompt ("Pone el usuario gil")
// // console.log(usuario)

// // if (usuario==user){
// //     alert("Muy bien")
// //         break
// //     }

// //     else{
// //         alert("No")
// //     }

// //     if (i==2){
// //         alert("Morite")
// //     }
// // }

// // for (let i=0; i<3; i++) {
// //     let contraseña = prompt ("Contra")
// //     console.log(contraseña)

// //     if (contraseña==contra){
// //         alert ("Muy bien")
// //         break
// //     }
// //     else {
// //         alert("No")
// //     }
// //     if (contraseña==contra){
// //         alert("Muy bien")
// //     }
// // }



// Ejercicio 4: Simulador de cajero automático (retiro simple)
// Define un saldo inicial, por ejemplo: $1000.
// Pide al usuario un monto para retirar.
// Si el monto es menor o igual al saldo, realiza el retiro y muestra el nuevo saldo.
// Si no, muestra "Fondos insuficientes".

// // let saldoInicial= 1000

// // for (let index = 0; index < 5; index++) {
// //     let usuario= Number(prompt("Saca plata"))
// //     if (usuario<=saldoInicial) {
// //         saldoInicial -= usuario
// //         alert(`Sacamos la plata y queda: ${saldoInicial}`)
// //         console.log(usuario)
// //     }
// //     else if (usuario>saldoInicial){
// //         alert("Saldo insuficiente gil")
// //         console.log(usuario)
// //         break
// //     }
// // }



// ### **Ejercicio 5: Bloqueo por PIN incorrecto**

// Define un PIN correcto (por ejemplo: `4321`).

// Permite al usuario ingresarlo hasta 3 veces.

// - Si lo acierta, muestra "PIN correcto".
// - Si falla las 3 veces, muestra "Tarjeta bloqueada".




// // // // const pin = 4321

// // // // for (let i = 0; i < 3; i++) {
// // // //     let usuario=Number(prompt("Pos pon la clave"))
// // // //     console.log(usuario)

// // // //     if (usuario==pin) {
// // // //         alert("pin correcto")
// // // //         break
// // // //     }
// // // //     else {
// // // //         alert("no jodas,dale")
// // // //     }
// // // //     if (i==2){
// // // //         alert("no")
// // // //     }
// // // // }



// ### **Ejercicio 6: Menú de opciones básico**

// Muestra un menú repetidamente hasta que el usuario elija salir:

// ```jsx
// 1. Ver saludo
// 2. Mostrar hora ficticia
// 3. Salir
// ```

// Usa un bucle. Las opciones pueden mostrar mensajes simulados como “Hola, usuario” o “La hora es 12:00”.


// // let usuario=prompt("Menu:\n 1-Ver saludo \n 2-Mostrar hora \n 3-Salir ")

// // while (usuario!=3){
// //     if(usuario==1){
// //         alert("Hola puto")
// //     }
// //     else if(usuario==2){
// //         alert("Son las seis")
// //     }
// //     else{
// //         alert("Ok te dejamos ir")
// //         break
// //     }
// //     usuario=prompt("Menu:\n 1-Ver saludo \n 2-Mostrar hora \n 3-Salir ")
// // }

// ### **Ejercicio 7: Verificación de contraseña segura**

// Pide una contraseña al usuario.

// Verifica si cumple:

// - Al menos 8 caracteres
// - Contiene al menos un número (simulado, por ejemplo, buscando si hay un '0'–'9')
    
//     Muestra si es "Segura" o "Insegura".

// // let usuarioContraseña = prompt("Ponga la contra segura")
// // while (usuarioContraseña.length<8) {
// //     usuarioContraseña=prompt("Clave muy corta, al menos 8 caracteres, que contenga al menos un numero 0 o 9")
// // }
// // if ( usuarioContraseña.includes(0, 9)) {
// //     alert("sip")
// // }




// ### **Ejercicio 8: Temporizador regresivo**

// Pide al usuario un número entero positivo.

// Cuenta regresivamente hasta 0 usando un bucle, mostrando cada número.

// // let usuario=Number(prompt("numero entero positivo"))

// // while (usuario<0 || !Number.isInteger(usuario)) {
// //     usuario= Number(prompt("tiene que ser entero y posiivo"))
// //     if (isNaN(usuario)) {
// //         usuario=Number(prompt("dale"))
// //     }
// // }
// // alert("si")


// ### **Ejercicio 9: Contador de letras en una palabra**

// Pide una palabra.

// Cuenta cuántos caracteres tiene **sin usar funciones de strings avanzadas** (simularlo con un bucle).

// ### **Ejercicio 10: Acceso por edad mínima con intentos**

// Pide la edad al usuario.

// - Si es mayor o igual a 18, permite el acceso.
// - Si es menor, niega el acceso.
    
//     Permite hasta 3 intentos antes de mostrar "Acceso bloqueado por intentos fallidos".

// // const edadValida = 18

// // for (let index = 0; index < 3; index++) {
// //     let usuario=Number(prompt("Pone tu edad"))

// //     if (usuario>=edadValida) {
// //         alert("Si")
// //         break
// //     }
// //     else if (isNaN(usuario)) {
// //         Number(prompt("Dale, tiene que ser un numero"))
// //     }
// //     else if(index==2){
// //         alert("Acceso bloqueado")
// //     }
// // }


//Semana 3, funciones

// ### Ejercicio 1: Calculadora de propinas

// > Crea una función que reciba el total de una cuenta y el porcentaje de propina.
// > 
// > 
// > Devuelve el monto total a pagar.
// > 
// > Simula el uso en un restaurante.
// >

// // const papasFritas=3500
// // const fideos=5000
// // const agua=1200
// // let total= 0
// // let propina= 0

// // function propinaCuenta (total, propina) {
// // return total + propina
// // }

// // let usuario=Number(prompt(`Menu: \n 1-Papas fritas ${papasFritas} \n 2- Fideos ${fideos} \n 3- Agua ${agua} \n 4- Propina \n 5-Salir`))
// // while (usuario!==5) {

// //     if(usuario===1){
// //         total+=papasFritas
// //     alert(`Pediste papitas, tu total es de $${total}`)
// // }
// //     else if (usuario===2) {
// //         total+=fideos
// //     alert(`Pediste fideito, tu total es de $${total}`)
// // }
// //     else if (usuario===3){
// //         total+=agua
// //     alert(`Pediste aguita, tu total es de $${total}`)
// // }
// //     else if(usuario===4){
// //         let propina= Number(prompt("Te interesaría dejaar una propina?"))
// //         let totalConPropina=propinaCuenta (propina, total) 
// //         alert(`el total es de $${totalConPropina}`)
// //     }
// // else{
// //     alert("Opcion inválida")
// // }
// // usuario=Number(prompt(`Menu: \n 1-Papas fritas ${papasFritas} \n 2- Fideos ${fideos} \n 3- Agua ${agua} \n 4-Propina \n 5- Salir`))
// // }



// ### Ejercicio 2: Verificación de usuario con token

// > Simula que un sistema genera un “token de sesión” al iniciar.
// > 
// > 
// > Crea una función que verifique si el token ingresado por el usuario coincide con el generado.
// >

// // const token=Math.floor(Math.random()*10000)

// // alert(`tutoken es ${token}`)

// // function generarToken(token, tokenUsuario) {
// //     if (token===tokenUsuario) {
// //         return true
// //     }
// //     else{
// //         return false
// //     }
// // }


// // for (let index = 0; index < 3; index++) {
// // let tokenUsuario =Number ( prompt ("Intenta"))
// // if(generarToken (token, tokenUsuario)){
// //     alert("si")
// //     break
// // }
// // else{
// //     alert("No pero podes intentar de nuevo")
// // }

// // }


// ### Ejercicio 3: Simulador de envío (función flecha)

// > El usuario elige un país.
// > 
// > 
// > Una función flecha retorna el costo estimado de envío.
// > 
// > Ejemplo: Argentina → $500, Chile → $700, Otro → $1200.
// >


// // const chile=700
// // const argentina=500
// // const uruguay=1200
// // let usuarioElegir=Number(prompt("Elija un pais: \n 1-chile \n 2-argentina \n 3-uruguay"))

// // const elegir=(pais, precio)=>{
// //     alert(`Holis elegiste ${pais}`)
// //     alert(`Te sale $${precio}`)
// // }

// // if (usuarioElegir===1) {
// //     elegir("chile", chile)
// // }

// // else if (usuarioElegir===2) {
// //     elegir("Argentina", argentina)
// // }

// // else if (usuarioElegir===3) {
// //     elegir("uruguay", uruguay)
// // }
// // else{
// //     alert("no")
// // }



// ### Ejercicio 4: Simulación de sistema bancario

// > Crea funciones para consultar saldo, depositar y retirar.
// > 
// > 
// > Simula una sesión de operaciones bancarias básicas.
// >

// // let saldo=30000

// // function sumaDepositar(saldo, deposito) {
// //     return saldo + deposito
// // }

// // function restaRetirar(saldo, retiro) {
// //     return saldo - retiro
// // }

// // function consulta(saldo) {
// //     return saldo
// // }

// // let  usuario= Number(prompt("Menu: \n 1- Consultar saldo \n 2- Depositar \n 3- Retirar \n 4- salir"))

// // while (usuario !== 4) {

// // if (usuario===1) {
// //     alert(`Tu saldo es de $${consulta(saldo)}`)
// // }

// // else if (usuario === 2) {
// //     let deposito=Number(prompt("Depositar ?"))
// //     saldo = sumaDepositar (saldo, deposito)
// //     alert(`Depositaste $${deposito} ahora tu saldo es de $${saldo}`)
// // }

// // else if (usuario === 3) {
// //     let retiro = Number(prompt("Retirar ?"))
// //     saldo = restaRetirar(saldo, retiro)
// //     alert(`Retiraste $${retiro}, ahora tu saldo es de $${saldo}`)
// // }
// // else {
// //     alert("No gil intenta de nuevo")
// // }
// // usuario= Number(prompt("Menu: \n 1- Consultar saldo \n 2- Depositar \n 3- Retirar \n 4- salir"))
// // }



// ### Ejercicio 5: Sistema de evaluación escolar

// > Función que recibe nombre y nota (0–10).
// > 
// > 
// > Devuelve si está “Aprobado” (≥6) o “Desaprobado”.
// > 
// > Muestra mensaje final.
// >

// // function nombreNota(nombre, nota) {
// //     if(nota>=6){
// //         return`${nombre} aprobaste`
// //     }
// //     else{
// //         return`${nombre} deaprobaste`
// //     }
// // }

// // let nombre= prompt("Coloca tu nombre")

// // let nota=Number(prompt("Coloca tu nota"))

// // alert( nombreNota (nombre, nota))


// ### Ejercicio 6: Calculadora de IMC

// > Función que recibe altura y peso.
// > peso sobre altura
// > < 18.5
// Normal		18,5 – 24,9
// Sobrepeso		25,0 – 29,9
// Obesidad	I	30,0 – 34,9
// > Calcula el IMC y retorna: Bajo peso, Normal, Sobrepeso.
// >

// // function imc(peso, altura) {
// //     imc=peso/ altura * altura
// //     if (imc<18.5){
// //         return `${imc.toFixed(2)} bajo peso`
// //     }
// //     else if (imc<30 && imc>18.5){
// //         return `${imc.toFixed(2)} normal`
// //     }
// //     else if (imc>=30){
// //         return `${imc.toFixed(2)} sobrepeso`
// //     }
// // }


// // let peso=Number(prompt("Pone tu peso en Kg"))

// // let altura= Number(prompt("Pone tu altura en m"))

// // alert(imc(peso, altura))





// ### Ejercicio 1: Inventario de productos

// > Usa un array de objetos para representar productos (nombre, stock).
// > 
// > 
// > Crea funciones para agregar, eliminar y mostrar productos.
// >

// // function agregar(frutas, pera) {
// //     frutas.push(pera)
// //     alert(frutas)
// // }

// // function eliminar(frutas) {
// //     frutas.pop()
// //     alert(frutas)
// // }

// // function mostrar(frutas) {
// //     alert(frutas[3])
// // }

// // let frutas= [
// //     "manzana",
// //     "banana",
// //     "naranja",
// //     "melon"
// // ]

// // agregar (frutas, "pera")
// // eliminar (frutas)
// // mostrar (frutas)


// ### Ejercicio 2: Buscador de libros

// > Crea un array con objetos de libros (título, autor).
// > 
// > 
// > Función que reciba un autor y devuelva sus libros.
// >


// // const libros=[
// //     {
// //         titulo:"Rayuela",
// //         autor: "Cortazar"
// //     },
// //     {
// //         titulo: "Misery",
// //         autor: "Stephen King"
// //     },
// //     {
// //         titulo: "Teoria de la evolucion",
// //         autor: "Darwin"
// //     }
// // ]



// // function buscarLibro() {
// //     let usuario = Number(prompt("¿?Qué crterio? \n 1- Título \n 2- Autor"))

// //     if (usuario==1) {
// //         buscarTitulo()
// //     }
// //     else if(usuario==2){
// //         buscarAutor()
// //     }
// //     else{
// //         alert("no existe esa opción")
// //     }
// // }

// // function buscarTitulo() {
// //     const arrayTitulos =[]
// //     for (let index = 0; index < libros.length; index++) {
// //         arrayTitulos.push(libros[index].titulo);
        
// //     }
// //     let tituloBuscado = prompt("¿Cuál titulo buscas?")

// //     let index=arrayTitulos.indexOf(tituloBuscado)

// //     if (index==-1) {
// //         alert("No lo encontramos")
// //     }
// //     else{
// //         alert("El libro que busca esta escrito por " + libros[index].autor)
// //     }
// // }

// // buscarLibro()

// // function buscarAutor() {
// //     const arrayAutores=[]
// //     for (let index = 0; index < libros.length; index++) {
// //         arrayAutores.push(libros[index].autor);
// //     }
// //     let autorBuscado=prompt("¿Qué autor buscas?")

// //     let index=arrayAutores.indexOf(autorBuscado)

// //     if (index==-1){
// //         alert("Nolo encontramos")
// //     }
// //     else{
// //         alert("El autor que busca escribió " + libros[index].titulo)
// //     }
// // }


// ### Ejercicio 3: Promedio de calificaciones

// > Array con notas numéricas.
// > 
// > 
// > Función que calcule y devuelva el promedio.
// >

// // let notas=[]
// // let suma= 0
// // function calculoPromedio() {
// //     let usuario= prompt("Decinos tus notas con comas")
// //     let notas= usuario.split(",").map(Number)
// //     for (let index = 0; index < notas.length; index++) {
// //         suma += notas [index]
// //         let promedio= suma/notas.length

// //         return promedio
// //     }
// // }

// // console.log (calculoPromedio())



// ### Ejercicio 4: Filtro de tareas completadas

// > Array de tareas (objeto: nombre, completada: true/false).
// > 
// > 
// > Función que filtre solo las tareas completadas.
// >

// // const tareas = [
// //     {
// //         tarea: "limpiar",
// //         completada: false
// //     },
// //     {
// //         tarea: "comer",
// //         completada: true
// //     },
// //     {
// //         tarea: "cocinar",
// //         completada: true
// //     },
// //     {
// //         tarea: "pasear",
// //         completada: false
// //     },
// //     {
// //         tarea: "estudiar",
// //         completada: false
// //     }
// // ]

// // function tareaCompletada() {
// //     const completadas = tareas.filter (tareas=> tareas.completada === true)
// //     console.log (completadas)
// // }
// // tareaCompletada ()


// ### Ejercicio 5: Agenda de contactos

// > Usa un array de objetos con nombre, teléfono y correo.
// > 
// > 
// > Función para buscar un contacto por nombre.
// >


// // const contactos = [
// // {
// //     nombre: "Sofía García",
// //     telefono: "1134567890",
// //     mail: "sofia.garcia@email.com"
// // },
// // {
// //     nombre: "Juan Pérez",
// //     telefono: "1122334455",
// //     mail: "juan.perez@email.com"
// // },
// // {
// //     nombre: "Mariana López",
// //     telefono: "1167891234",
// //     mail: "mariana.lopez@email.com"
// // },
// // {
// //     nombre: "Carlos Méndez",
// //     telefono: "1144556677",
// //     mail: "carlos.mendez@email.com"
// // },
// // {
// //     nombre: "Lucía Fernández",
// //     telefono: "1198765432",
// //     mail: "lucia.fernandez@email.com"
// // }
// // ];


// // function buscador() {
// //     let usuario= prompt("A quien buscas perro?")

// //     let indice= contactos.find(contacto=>contacto.nombre===usuario)
// //     console.log (indice)
// // }

// // buscador ()


// ### Ejercicio 6: Registro de temperaturas

// > Array con temperaturas semanales.
// > 
// > 
// > Función que devuelva la temperatura máxima y mínima.
// >


// // const clima = [
// //     { dia: "Lunes", temperatura: 20 },
// //     { dia: "Martes", temperatura: 22 },
// //     { dia: "Miércoles", temperatura: 18 },
// //     { dia: "Jueves", temperatura: 24 },
// //     { dia: "Viernes", temperatura: 21 },
// //     { dia: "Sábado", temperatura: 25 },
// //     { dia: "Domingo", temperatura: 19 }
// // ];

// // function encontrarMaxMin(clima) {
// //     let maxTemp= clima[0].temperatura
// //     let minTemp= clima[0].temperatura
// //     let diaMax= clima[0].dia
// //     let diaMin=clima[0].dia

// //     for (let i = 0; i < clima.length; i++) {
// //         if (clima[i].temperatura>maxTemp) {
// //             maxTemp=clima[i].temperatura
// //             diaMax=clima[i].dia
// //         }
// //         else if (clima[i].temperatura<minTemp) {
// //             minTemp=clima[i].temperatura
// //             diaMin=clima[i].dia
// //         }
// //          alert (`El día de T máx fue ${diaMax} con una T de ${maxTemp} \n y el día con T min fue ${diaMin} con una T de ${minTemp}`)
// //     }

// // }

// // encontrarMaxMin(clima)




// function clima() {
//     const climaMaximo= climaSemanal.filter(climaSemanal=>climaSemanal.temperatura>=25)
//     console.log(climaMaximo)
//     const climaMinimo=climaSemanal.filter(climaSemanal=>climaSemanal.temperatura<= 18)
//     console.log(climaMinimo)
// }

// clima ()




// ### Ejercicio 7: Conversor de grados

// > Array con temperaturas en Celsius.
// > 
// > 
// > Función que retorne un nuevo array en Fahrenheit.
// >

// // const tC = [18, 20, 22, 19, 24, 26, 21];


// // const far= tF => {
// //     const arraytF= [];
// //     for (let index = 0; index < tC.length; index++) {
// //         let tF=(tC[index]*(9/5)) + 32
// //         arraytF.push(tF)
// //     }
// //     return arraytF
// // }
// // alert (far(tF))


// ### Ejercicio 8: Contador de elementos

// > Recibe un array con palabras.
// > 
// > 
// > Función que devuelva cuántas veces aparece cada una (objeto con frecuencia).
// >


// // const palabras = [
// //     "gato",
// //     "perro",
// //     "casa",
// //     "sol",
// //     "gato",
// //     "luna",
// //     "perro",
// //     "flor",
// //     "gato",
// //     "casa"
// // ];

// // function repetida() {
// //     const frecuencia={};
// //     for (let index = 0; index < palabras.length; index++) {
// //         const palabra = palabras[index];
// //         if (frecuencia[palabra]) {
// //             frecuencia[palabra] += 1
// //         }
// //         else{
// //             frecuencia[palabra]=1
// //         }
        
// //     }
// //     console.log (frecuencia)
// // }

// // repetida()



// ### Ejercicio 9: Ordenador de puntajes

// > Array de puntajes (números).
// > 
// > 
// > Función que devuelva los puntajes ordenados de mayor a menor.
// >



// // const puntajes = [5, 8, 12, 7, 8, 3, 15, 5, 20, 8];


// // const ordenados = puntajes.sort((a,b)=>b-a)

// // console.log (ordenados)



// ### Ejercicio 10: Carrito de compras

// > Array de productos con precio.
// > 
// > 
// > Función que calcule el total del carrito.
// >

// // const productos = [
// //     { nombre: "Pan", precio: 150 },
// //     { nombre: "Leche", precio: 300 },
// //     { nombre: "Queso", precio: 850 },
// //     { nombre: "Huevos", precio: 650 },
// //     { nombre: "Café", precio: 1200 },
// //     { nombre: "Manteca", precio: 400 }
// // ];



// // const resultado=()=>{
// //     suma=0

// //     for (let index = 0; index < productos.length; index++) {
// //         suma += productos[index].precio
        
// //     }
// //     alert (suma)
// // }
// // resultado()




// ### Ejercicio 11: Encuesta de edades

// > Recibe un array de edades.
// > 
// > 
// > Función que devuelva cuántos son menores, adultos y mayores.
// >

// // const edades=[];
// //     let niños= 0;
// //     let adultos= 0;
// //     let veteranos=0;
// // function edad() {

// //     for (let index = 0; index < 10; index++) {
// //         numero=Number(prompt("Decinos tu edad"));
// //         edades.push(numero)
// //         if (numero<18) {
// //             niños += 1
// //         }
// //         else if (numero>=18 && numero <=65) {
// //             adultos +=1
// //         }
// //         else  {
// //             veteranos +=1
// //         }
        
// //     }

// //     alert(`Ayuda, son: ${niños} niños; ${adultos} adultos; y ${veteranos} veteranos`);
// // }


// // edad()


// ### Ejercicio 12: Generador de nombres de usuario

// > Recibe un array de nombres y apellidos.
// > 
// > 
// > Función que cree un nombre de usuario (ej: juan.perez).
// >


// // const personas = [
// //     { nombre: "Juan", apellido: "Pérez" },
// //     { nombre: "María", apellido: "Gómez" },
// //     { nombre: "Carlos", apellido: "López" },
// //     { nombre: "Ana", apellido: "Martínez" },
// //     { nombre: "Luis", apellido: "Rodríguez" }
// // ];


// // function nombres() {
// //     const usuarios=[];
// //     for (let index = 0; index < personas.length; index++) {
// //         let nombre= personas[index].nombre.toLowerCase();
// //         let apellido=personas[index].apellido.toLowerCase();
// //         let usuario=`${nombre}.${apellido}`;
// //         usuarios.push(usuario);
// //     }
// //     console.log(usuarios)
// // }

// // nombres()





// ### Ejercicio 13: Validador de correos

// > Recibe un array de emails.
// > 
// > 
// > Función que devuelva solo los válidos (contienen “@”).
// >


// // const emails = [
// //     "sofia.garcia@email.com",
// //     "juan.perez@email.com",
// //     "mariana.lopez@email.com",
// //     "carlos.mendez@email.com",
// //     "lucia.fernandez@email.com",
// //     "diego.rios@email.com",
// //     "carlos.mendezemail.com",
// //     "luciafernandez.email.com",
// //     "diego.rios.email.com",
// //     "valentina.martinemail.com",
// //     "matias.rodriguezemail.com",
// //     "camila.sanchez.email.com",
// //     "valentina.martin@email.com",
// //     "matias.rodriguez@email.com",
// //     "camila.sanchez@email.com",
// //     "nico.gonzalez@email.com"
// // ];

// // // function emailValido() {
// // //     let email=[]

// // //     for (let index = 0; index < emails.length; index++) {
        
// // //         let nombreValido= emails[index].includes("@");
// // //         if (nombreValido==true) {
// // //             email.push(emails[index]);
// // //         }
// // //     }
// // //     console.log(email)
// // // }
// // // emailValido()


// // const emailValido= emails.filter(email=>email.includes("@"))

// // console.log(emailValido)

// ### Ejercicio 14: Calculadora de promedios por alumno

// > Array de objetos con nombre y array de notas.
// > 
// > 
// > Función que retorne el promedio por alumno.
// >
// // const alumnos = [
// //     { nombre: "Sofía", notas: [8, 9, 10] },
// //     { nombre: "Juan", notas: [6, 7, 5] },
// //     { nombre: "Camila", notas: [9, 9, 8] },
// //     { nombre: "Pedro", notas: [4, 6, 5] }
// // ];


// // function promedios() {
// //     const promedio=[]
// //     for (let index = 0; index < alumnos.length; index++) {
// //         let valores=0
// //         let nota=alumnos[index].notas
// //         for (let i = 0; i < nota.length; i++) {
// //             valores += nota[i]
            
// //         }
// //         let valor=valores/nota.length

// //         promedio.push({nombre: alumnos[index].nombre, promedio: valor})
// //     }
// //     console.log(promedio)
// // }

// // promedios()


// ### Ejercicio 15: Agenda diaria

// > Crea un objeto con días como claves y actividades como valores.
// > 
// > 
// > Función que muestre actividades por día.
// >

// // const agenda = {
// //     lunes: "Gimnasio a las 8:00",
// //     martes: "Clase de inglés a las 18:00",
// //     miércoles: "Trabajo remoto todo el día",
// //     jueves: "Reunión de equipo a las 10:00",
// //     viernes: "Cena con amigos a las 21:00",
// //     sábado: "Ir al parque",
// //     domingo: "Descansar y ver películas"
// // };

// // function actividad() {
// //     let dia= prompt("¿La actividad de qué día te interesaba ver?").toLowerCase()
// //         if (agenda[dia]) {
// //         alert(`Ese día tenes: ${agenda[dia]}`)
// //     }
// //         else{
// //         alert("No")
// //     }
// // }

// // actividad()

// ### Ejercicio 16: Sistema de votación

// > Array con votos (ej: "A", "B", "A", "C").
// > 
// > 
// > Función que devuelva cuántos votos tuvo cada opción.
// >

// // const votos = [
// //     "A", "B", "A", "C", "A", "B", "C", "A", "C", "B",
// //     "A", "C", "B", "A", "B", "C", "C", "A", "B", "A",
// //     "C", "B", "A", "C", "B", "A", "B", "C", "A", "B"
// // ];

// // function contador() {
// //     let sumaA= 0
// //     let sumaB=0
// //     let sumaC=0
    
// //     for (let index = 0; index < votos.length; index++) {
// //         if (votos[index]=="A") {
// //             sumaA++ ;
// //         }
// //         else if (votos[index]=="B") {
// //             sumaB++;
// //         }
// //         else{
// //             sumaC++;
// //         }
// //     }
// //     console.log(sumaA);
// //     console.log(sumaB);
// //     console.log(sumaC);
// // }

// // contador()

// ### Ejercicio 17: Simulador de encuesta de satisfacción

// > Array de objetos con usuario y puntaje (1–5).
// > 
// > 
// > Función que devuelva el promedio y los usuarios que votaron 5.
// >

// // const usuarios = [
// //     { usuario: "sofia_g", puntaje: 4 },
// //     { usuario: "juan23", puntaje: 5 },
// //     { usuario: "cami.luna", puntaje: 3 },
// //     { usuario: "peter_pan", puntaje: 2 },
// //     { usuario: "nati_89", puntaje: 5 },
// //     { usuario: "marcelo_x", puntaje: 1 },
// //     { usuario: "ari.dev", puntaje: 4 },
// //     { usuario: "lau.fer", puntaje: 3 },
// //     { usuario: "tomi_ok", puntaje: 2 },
// //     { usuario: "vero_b", puntaje: 5 }
// // ];

// // function promedios() {
// //     suma=0
// //     for (let index = 0; index < usuarios.length; index++) {
// //         suma+=usuarios[index].puntaje
// //         promedio=suma/usuarios.length
// //     }
// //     console.log(promedio)
    
// // }

// // promedios();

// // function votaronCinco(){
// //     for (let index = 0; index < usuarios.length; index++) {
// //         if (usuarios[index].puntaje===5) {
// //             alert(`Bien ahí ${usuarios[index].usuario}, nos querés`);
// //         }
// //         else if(usuarios[index].puntaje != 5){
// //             alert(`El usuario ${usuarios[index].usuario} no soportó`)
// //         }
// //     }
// // }

// // votaronCinco(usuarios)


// ### Ejercicio 18: Registro de ventas

// > Array de objetos con producto, cantidad y precio unitario.
// > 
// > 
// > Función que calcule total por venta y general.
// >


// // const carrito = [
// //     { producto: "Manzanas", cantidad: 3, precioUnitario: 150 },
// //     { producto: "Pan", cantidad: 2, precioUnitario: 250 },
// //     { producto: "Leche", cantidad: 1, precioUnitario: 300 },
// //     { producto: "Huevos", cantidad: 12, precioUnitario: 25 },
// //     { producto: "Yerba", cantidad: 1, precioUnitario: 1200 }
// // ];

// // function total() {
// //     let suma=0
// //     for (let index = 0; index < carrito.length; index++) {
// //         if (carrito[index].cantidad != 0) {
// //             let sumaUnoSolo=carrito[index].cantidad*carrito[index].precioUnitario
// //             suma += carrito[index].precioUnitario*carrito[index].cantidad
// //                 console.log(`El precio por el producto ${carrito[index].producto} es ${sumaUnoSolo}`)
// //         }

// //     }


// //     console.log(`El precio total es ${suma}`)
// // }
// // total()


// ### Ejercicio 19: Clasificador de películas

// > Array con películas (título, año, género).
// > 
// > 
// // // > Función que devuelva las de un género específico.
// // // >


// // const peliculas = [
// //     { titulo: "El Señor de los Anillos: La Comunidad del Anillo", anio: 2001, genero: "Fantasía" },
// //     { titulo: "Titanic", anio: 1997, genero: "Romance/Drama" },
// //     { titulo: "Jurassic Park", anio: 1993, genero: "Ciencia Ficción" },
// //     { titulo: "Avengers: Endgame", anio: 2019, genero: "Acción/Superhéroes" },
// //     { titulo: "El Padrino", anio: 1972, genero: "Crimen/Drama" }
// // ];

// // const generoCrimen= peliculas.filter(pelicula=>pelicula.genero=="Crimen/Drama")

// // console.log (generoCrimen)

// ### Ejercicio 20: Simulador de favoritos

// > Array de objetos con nombre y favorito: true/false.
// > 
// > 
// > Función que devuelva los elementos marcados como favoritos.
// >

// // const personas = [
// //     { nombre: "Sofía", favorito: true },
// //     { nombre: "Lucas", favorito: false },
// //     { nombre: "María", favorito: true },
// //     { nombre: "Julián", favorito: false },
// //     { nombre: "Ana", favorito: true }
// // ];

// // const favoritos= personas.filter(persona=>persona.favorito===true);

// // console.log(favoritos)


