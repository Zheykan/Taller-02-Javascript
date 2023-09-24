function calculadora(){
    let element_mod = document.querySelector("#suma_par");
    let element_mod_1 = document.querySelector("#suma_impar");
    element_mod.style.color="#00cc00";
    element_mod_1.style.color="black";
    let suma_p=0;
    let suma_ip=0;
    for (let index = 1; index <= 50; index++) {
        if(index%2==0){
            suma_p=suma_p+index;
        }
        else{
            suma_ip=suma_ip+index
        }
    }
    element_mod.innerHTML=
    "la suma de los numeros pares de 1 a 50 es: "+suma_p;
    element_mod_1.innerHTML=
    "La suma de los numeros impares de 1 a 50 es: "+suma_ip;
}