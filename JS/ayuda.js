horario_proximo_origen = "11:37:00*11:38:00*11:39:00*11:40:00*11:41:00";

let array_horario_proximo_origen = [];
array_horario_proximo_origen = horario_proximo_origen.split('*');

let titulo = document.getElementById("titulo_horario_proximo_origen");
let horarios = document.getElementById("horario_proximo_origen");

titulo.innerHTML = "<p> Prox. horarios "+result.linea_origen+", parada "+result.nombre_origen_directo+"</p>";

array_horario_proximo_origen.forEach(function(i){
  horarios.innerHTML += "<p>" + i + "</p>";
})

function contador(){
    let div_6=[];
    for(let x=0; x<=200; x+=6){
        div_6.push(x);
        if (x==198){
            div_6.push(200);
        }
    }
    let div_8=[];
    for (let x=192; x>=0; x+=-8){
        div_8.push(x);
    }
    let element_mod = document.querySelector("#resultado > span");
    element_mod.style.color="#00cc00";
    for (let index = 0; index < div_6.length; index++) {
        element_mod.innerHTML += "<p>"+div_6[index]+"</p>";
    }
}