let numeros=[];
numeros.length=10;

function calculadora(){
    for (let index = 0; index < numeros.length; index++) {
        let aleatorio=parseInt(prompt('Aqui puedes escribir el numero: '));
        numeros[index]=aleatorio;
        alert("Faltan "+numeros.length-index+" numeros");
    }
    let element_mod = document.querySelector("#lista");
    element_mod.style.color="#00cc00";
    element_mod.innerHTML=
    "la lista de numeros que ingresaste es: "+numeros;

    let element_mod_1 = document.querySelector("#sumatoria");
    element_mod_1.style.color="black";
    let suma=0;
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index]%3==0){
            suma=suma+numeros[index];
        }
    }
    element_mod_1.innerHTML=
    "La suma de los numeros que son multiplos de 3 es: "+suma;
}