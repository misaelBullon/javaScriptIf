

let select = document.querySelector('select'); //almaceno select en una variable
    let p = document.querySelector('p'); //almaceno p en una variable

    select.addEventListener('change', setMascota);  //agrego el event listener en select esperando un change, y llamo a la funcion setMscota

    function setMascota(){
        const choice = select.value;  //Se asigna una constante a eleccion.value

        if(choice === 'perro'){  //Podria ser reemplazada con switch y case
            p.textContent = ' Usted elijio un ' + choice ;  //p.textContent agrega texto a la etiqueta p
            console.log(choice);
        }else if(choice === 'gato'){
            p.textContent = ' Usted elijio un ' + choice ;   
            console.log(choice);
        }else if(choice === 'loro'){
            p.textContent = ' Usted elijio un ' + choice ; 
            console.log(choice);
        }else{
            p.textContent = ' Usted elijio un ' + choice ; 
            console.log(choice);
        }
    }

    function changeColor(newColor){    //Creo la funcion llamada en los <button>
        var element = document.getElementById('demo'); //Busco el elemento con el id 'demo' y lo agrego a una variable
        element.style.color = newColor;    //aplico style.color con el color pasado como parametro en los <button>
    }

    let day = new Date().getDay();
    switch(day){
        case 1:
            console.log("Today is monday");
            break;
        case 2:
            console.log("Today is tuesday");
            break;
        case 3:
            console.log("Today is wendsday");
            break;
        case 4:
            console.log("Today is thursday");
            break;
        case 5:
            console.log("Today is friday");
            break;
        case 6:
            console.log("Today is saturday");
            break;
        case 7:
            console.log("Today is sunday");
            break;
        default:
            console.log("Something went wrong");
    }
    
    var ho = new Date();
    let h1 = document.getElementById('hora');
    console.log(ho.getHours() + ":" + ho.getMinutes());

    h1.textContent = `${ho.getHours()}` + ':' + `${ho.getMinutes()}`;