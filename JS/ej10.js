function calcularEdad(fecha) {
    let hoy = new Date();
    let cumpleanios = new Date(fecha);
    let anio = hoy.getFullYear() - cumpleanios.getFullYear();
    let m = hoy.getMonth() - cumpleanios.getMonth();
    let d = hoy.getDate() - cumpleanios.getDate();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanios.getDate())) {
        anio--;
    }

    return anio;
}

function calcular_edad(){
    let nombre_1="";
    let nombre_2="";
    let edad_p1=new Date();
    let edad_p2=new Date();

    let element_mod = document.querySelector("#mayor");
    let element_mod_0 = document.querySelector("#menor");

    element_mod.style.color="green";
    element_mod_0.style.color= "#cc8b00";

    nombre_1=document.getElementById("Input_nombre_1").value+
    " "+document.getElementById("Input_apellido_1").value;
    
    nombre_2=document.getElementById("Input_nombre_2").value+
    " "+document.getElementById("Input_apellido_2").value;

    edad_p1=calcularEdad(document.getElementById("Input_fecha_n1").value)
    edad_p2=calcularEdad(document.getElementById("Input_fecha_n2").value)

    if (edad_p1>edad_p2){
        element_mod.innerHTML = "El mayor es: "+nombre_1+" y su edad es "+edad_p1+" años";
        element_mod_0.innerHTML= "El menor es: "+nombre_2+" y su edad es "+edad_p2+" años";
    }
    else{
        element_mod.innerHTML = "El mayor es: "+nombre_2+" y su edad es "+edad_p2+" años";
        element_mod_0.innerHTML= "El menor es: "+nombre_1+" y su edad es "+edad_p1+" años";
    }
    age_1.reset();
    age_2.reset();
}