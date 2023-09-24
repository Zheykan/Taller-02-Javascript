let numeros=[];
numeros.length=30;

function calculadora(){
    let suma=0;
    let element_mod = document.querySelector("#enunciado");
    let element_mod_0 = document.querySelector("#lista");
    let element_mod_1 = document.querySelector("#sumatoria");
    element_mod.style.color="#00cc00";
    element_mod_0.style.color="#00cc00";
    element_mod_1.style.color="black";

    element_mod.innerHTML=
        "la lista de las 30 primeras potencias de 3 es:"+"<br>";

    for (let index = 0; index < numeros.length; index++) {
        let potencia= Math.pow(3,index);
        numeros[index]=potencia;
        suma=suma+potencia;
    }
    for (let index = 0; index < numeros.length; index++) {
        element_mod_0.innerHTML+=numeros[index]+"<br>";
    } 
    element_mod_1.innerHTML=
    "La suma de las potencias de 3 es: "+suma;
}