const camisa=25000;
let cantidad=0;

function calcular_descuento(){
    cantidad=parseInt(document.getElementById("Input_cantidad").value);
    let element_mod = document.querySelector("#resultados > span"), precio=0, descuento=0, precio_f=0;
    if (cantidad>0){
        if (cantidad>=3){
            precio=cantidad*camisa;
            descuento=precio*0.2;
            precio_f=precio-descuento;
            element_mod.style.color="#00cc00";
            element_mod.innerHTML ="Cantidad de camisas: "+cantidad+
            "<br>"+"Precio: "+precio+"<br>"+
            "Precio con descuento: "+precio_f;
        }
        else{
            precio=cantidad*camisa;
            descuento=precio*0.1;
            precio_f=precio-descuento;
            element_mod.style.color="#cc8b00";
            element_mod.innerHTML ="Cantidad de camisas: "+cantidad+
            "<br>"+"Precio: "+precio+"<br>"+
            "Precio con descuento: "+precio_f;
        }
    }
    else{
        alert("¡Debes ingresar por lo menos 1 camisa! \n Rectifica la cantidad.");
        calculadora.reset();
        element_mod.innerHTML ="";
    }
    calculadora.reset();
};

