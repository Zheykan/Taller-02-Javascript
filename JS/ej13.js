function contador(){
    let element_mod = document.querySelector("#div_4");
    element_mod.style.color="#00cc00";
    element_mod.innerHTML="Multiplos de 4"+"<br>";
    for(let x=4; x<=1500; x+=4){
        if (x%2==0) {
            element_mod.innerHTML += x+" es par"+"<br>";
        }
    }
    let element_mod_1 = document.querySelector("#div_5");
    element_mod_1.style.color+="#cc8b00";
    element_mod_1.innerHTML="Multiplos de 5"+"<br>";
    for(let x=5; x<=1500; x+=5){
        if (x%2==0) {
            element_mod_1.innerHTML += x+" es par"+"<br>";
        }
        else {
            element_mod_1.innerHTML += x+" es impar"+"<br>";
        }
    }
    let element_mod_0 = document.querySelector("#div_0");
    element_mod_0.style.color+="balck";
    element_mod_0.innerHTML="Multiplos de 4 y 5"+"<br>";
    for(let x=4; x<=1500; x++){
        if(x%4==0 && x%5==0){
            if (x%2==0) {
                element_mod_0.innerHTML += x+" es par"+"<br>";
            }
            else {
                element_mod_0.innerHTML += x+" es impar"+"<br>";
            }
        }
    }
}