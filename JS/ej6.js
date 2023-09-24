let numero=0;

function conversor(){
    numero=parseFloat(document.getElementById("Input_numero").value);
    let element_mod = document.querySelector("#resultado > span"), gr=0, ton=0;
    if (numero!=0){
        gr=numero*1000;
        ton=numero/1000;
        element_mod.style.color="#00cc00";
        element_mod.innerHTML ="La masa ingresada equivale a: "+gr+
        " gramos y a "+ton+" toneladas."+"<br>";
    }
    else{
        alert("¡Debes ingresar una cantidad mayor a 0 kg! \n Ingresa otro numero.");
        conversor_kg.reset();
        element_mod.innerHTML ="";
    }
    conversor_kg.reset();
};

