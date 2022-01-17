// EJERCICIO 1 CON DO WHILE
let saludo =""

do {
    saludo = parseInt(prompt("Bienvenido/a al Plaza Hotel, a que piso va?\nPresione 1 - 2 - 3 o 4 para salir del edificio"))


    switch(saludo) {

        case 1:
            alert("Bienvenido al primer piso")
            break;

        case 2:
            alert("Bienvenido al segundo piso")
            break;
        
        case 3:
            alert("Bienvenido al tercer piso")
            break;

        default:
            alert("No existe ese piso, vuelva a elegir")
            break;
        
        case 4:
            alert("Adios")



    }
} while(saludo != 4)

//EJERCICIO 2 CON FOR
const numero1 = 4
const numero2 = 6

let numero = parseInt(prompt("Ingrese numero"))
for (i = 1; i <= 60; i++) {

    let producto1 = i % numero
    
    if(producto1 == 0) {
        alert(i + " es multiplo de 4")
    }

    
    let producto2 = i % numero
    
    if(producto2 == 0) {
        alert(i + " es multiplo de 6")
    }
}




