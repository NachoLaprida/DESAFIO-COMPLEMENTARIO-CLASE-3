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


let numero = parseInt(prompt("Ingrese numero"))
for (i = 1; i <= 100; i++) {

    let producto1 = i % numero
    
    if(producto1 == 0) {
        console.log(i + " es multiplo de " + numero)
    }
}


