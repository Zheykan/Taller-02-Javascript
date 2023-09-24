const cuaderno=75000/15;
let numero=0;

function calculadora(){
    numero=parseInt(document.getElementById("Input_numero").value);
    let element_mod = document.querySelector("#resultado > span"), precio=0;
    if (numero>=0){
        precio=Math.round(numero*cuaderno);
        element_mod.style.color="#00cc00";
        element_mod.innerHTML ="El costo de "+numero+
        " cuadernos es de: $"+precio+"<br>";
    }
    else{
        alert("¡No puedes ingresar numeros negativos o letras! \n Ingresa otra cantidad.");
        note_price.reset();
        element_mod.innerHTML ="";
    }
    note_price.reset();
};