let numero=0;

function invertir(){
    numero=parseFloat(document.getElementById("Input_numero").value);
    let element_mod = document.querySelector("#resultado > span"), inverso=0;
    if (numero!=0){
        inverso=numero*-1;
        element_mod.style.color="#00cc00";
        element_mod.innerHTML ="el inverso de "+numero+
        " es: "+inverso+"<br>";
    }
    else{
        alert("¡0 no tiene un inverso! \n Ingresa otro numero.");
        invertidor.reset();
        element_mod.innerHTML ="";
    }
    invertidor.reset();
};

