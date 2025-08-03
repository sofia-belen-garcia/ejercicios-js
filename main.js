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
// //         return alert (`El día de T máx fue ${diaMax} con una T de ${maxTemp} \n y el día con T min fue ${diaMin} con una T de ${minTemp}`)
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