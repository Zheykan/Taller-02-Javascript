let variable_1=0, variable_2=1;
function dividir_variable(){
    variable_1=parseFloat(document.getElementById("Input_variable_1").value);
    variable_2=parseFloat(document.getElementById("Input_variable_2").value);
    let element_mod = document.querySelector("#cosiente");
    let element_mod_0 = document.querySelector("#residuo");

    let cosiente=variable_1/variable_2;
    let residuo=variable_1%variable_2;

    element_mod.innerHTML = "El cosiente de la división: "+cosiente+"<br>";
    element_mod_0.innerHTML = "El residuo de la división: "+residuo+"<br>";
    /*if (variable_1>variable_2){
        variable_2=[variable_1, variable_1=variable_2][0];
        element_mod.innerHTML = "<br>"+"La variable 1 es: "+variable_1+"<br>"+"y"+"<br>"+"la variable 2 es: "+variable_2;
    }
    else{
        element_mod.innerHTML = "<br>"+"La variable 1 es: "+variable_1+"<br>"+"y"+"<br>"+"la variable 2 es: "+variable_2;
    }*/
    divisor.reset();
}