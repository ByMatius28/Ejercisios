'use strit'

let edad = Number(prompt("Ingrese su edad"))
let licencia = Number(prompt("Si usted tiene licenia precione 1. caso contrario precione 2")) 
if(licencia == 1){
    licencia= true;
}
else{
    licencia= false;
}
if(edad >=25 && licencia == true){
alert("Apto")
}
else{
    alert("No apto")
}
alert("Fin Ejercisio 1")

