let producto=null, clave=0, precio=0, descuento=0;
function calcular_descuento(){
    producto=document.getElementById("Input_producto").value;
    clave=parseInt(document.getElementById("Input_clave").value);
    precio=parseFloat(document.getElementById("Input_precio").value);

    let element_mod = document.querySelector("#resultados > span"), precio_f=0;

    if (clave==1 || clave==2){
        switch (clave){
            case 1:
                descuento=precio*0.1;
                precio_f=precio-descuento;
                element_mod.style.color="#00cc00";
                element_mod.innerHTML ="Producto: "+producto+
                "<br>"+"Tipo de descuento: "+clave+"<br>"+
                "Precio: "+precio+"<br>"+"Precio con descuento: "+precio_f;
                break;
            case 2:
                descuento=precio*0.2;
                precio_f=precio-descuento;
                element_mod.style.color="#00cc00";
                element_mod.innerHTML ="Producto: "+producto+
                "<br>"+"Tipo de descuento: "+clave+"<br>"+
                "Precio: "+precio+"<br>"+"Precio con descuento: "+precio_f;
                break;
        }
    }
    else{
        alert("¡La clave tiene un valor que no es 1 o 2! \n Rectifica el valor de la clave.");
        consultor.reset();
        element_mod.innerHTML ="";
    }
    consultor.reset();
};

