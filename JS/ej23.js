function impares(){
    let element_mod = document.querySelector("#lista");
    element_mod.style.color="#00cc00";
    element_mod.innerHTML="";
    for(let x=10;x<=20;x++){
        if (x%2!=0){
            if(x%3==0){
                element_mod.innerHTML+=
                "El numero impar "+x+" es multiplo de 3."+"<br>";
            }
            else{
                element_mod.innerHTML+=
                "El numero impar "+x+" no es multiplo de 3."+"<br>";
            }
        }
    }
}