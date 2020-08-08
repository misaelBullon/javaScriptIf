

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


    //Funcion de reloj
    
    function reloj(){
        let h1 = document.getElementById('hora');
        let p = document.getElementById('fecha');
        var ho = new Date();
        var hora = ho.getHours();
        var min = ho.getMinutes();
        var sec = ho.getSeconds();
        var dia = ho.getDate();
        var mes = ho.getMonth();
        var año = ho.getFullYear();

        var newMes = mes + 1;
        var newMin = checkTime(min);  //Si los minutos y segundos son menores a 10 agrego el 0
        var newSec = checkTime(sec);

       
        p.textContent = dia + '/' + newMes + '/' + año;
      
        h1.textContent = hora + ':' + newMin + ':' + newSec;

        var time = setTimeout(function(){ reloj() }, 500);
    }

    //Agrego el 0 en caso de que los minutos sean mayor a 10
    function checkTime(t){
        if(t < 10){
            t = '0' + t;
        }
        return t;
    }
    
    reloj();
 
/*
    //Mensaje de confirmacion
   var mensaje = confirm('Aceptar o denegar');
   if(mensaje){
       alert('Gracias por aceptar');
   }else{
       alert('Hasta la proxima');
   }

*/

   //Practica de thor project

//Suma
var num1 = 10;
var num2 = 15;

function add7(num1){
    let result = num + 7;
    console.log('El resultado es ' + result);
}
//Multiplicacion
function multiply(num1, num2){
    let result = num1*num2;
    console.log('El resultado de la multiplicacion es' + result);
}
/*
//Primera letra mayuscula
function mayuscula(){
    var capital = prompt('Ingrese una palabra');

    if(capital.toUpperCase()){
        alert(capital[0].toUpperCase() + capital.slice(1).toLowerCase());
    }else if(capital.toLowerCase()){
        alert(capital[0].toUpperCase() + capital.slice(1).toLowerCase());
    }
    
}
mayuscula();
*/


//Ultima letra

function ultima(){
 var cadena = prompt('Ingrese una cadena');
 var l = cadena.length;
 var newLength = l-1;
 alert(cadena[newLength]);
}
ultima();
