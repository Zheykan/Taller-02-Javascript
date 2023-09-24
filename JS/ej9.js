function contador(){
    let element_mod = document.querySelector("#div_6");
    element_mod.style.color="#00cc00";
    element_mod.innerHTML="Multiplos de 6"+"<br>";
    for(let x=0; x<=200; x+=6){
        element_mod.innerHTML += x+"<br>";
        if (x==198){
            let element_mod_0 = document.querySelector("#div_200");
            element_mod_0.style.color="black";
            element_mod_0.innerHTML += 200+"<br>"; 
        }
    }
    let element_mod_1 = document.querySelector("#div_8");
    element_mod_1.style.color+="#cc8b00";
    element_mod_1.innerHTML="Multiplos de 8"+"<br>";
    for(let x=192; x>=0; x+=-8){
        element_mod_1.innerHTML += x+"<br>";
    }
}