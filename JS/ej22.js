let impar=[];
function impares(){
    let element_mod = document.querySelector("#lista");
    let element_mod_1 = document.querySelector("#lista_1");
    element_mod.style.color="#00cc00";
    element_mod_1.style.color="black";
    element_mod.innerHTML="";
    element_mod_1.innerHTML="";
    let numero=parseInt(prompt('Aqui puedes escribir el numero: '));
    if(numero>=0){
        for (let index = 0; index < numero; index++) {
            if (index%2!=0){
                impar.push(index);
            }
        }
    }
    else{
        alert("No puedes ingresar un numero negativo");
    }
    
    for(let x=0;x<5;x++){
        element_mod.innerHTML+=
        "El numero impar #"+(x+1)+" es: "+impar[x]+"<br>";
        element_mod_1.innerHTML+=
        "El numero impar #"+(x+1)+" es: "+impar[impar.length-(x+1)]+"<br>";
    }

    /*let element_mod_1 = document.querySelector("#sumatoria");
    element_mod_1.style.color="black";
    let suma=0;
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index]%3==0){
            suma=suma+numeros[index];
        }
    }
    element_mod_1.innerHTML=
    "La suma de los numeros que son multiplos de 3 es: "+suma;*/
}