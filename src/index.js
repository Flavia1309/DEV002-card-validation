import validator from './validator.js'
//Implementación en Javascript del algoritmo de luhn, con funciones de cálculo y validación
const botonEnviar= document.getElementById("btnEnviar")
botonEnviar.addEventListener("click", function(e){
    e.preventDefault();//Implelmentar mi boton de validar
});
const numeromakify= document.getElementById("numeromaskify");
    console.log (numeromakify)//implementar que arroje los primeros 12 numeros con el signo #

    let creditNumber = document.getElementById(creditNumber).value;//declaro la variable para validar

    //Si la tarjeta es valida, aparecen los numeros ocultos, si no es valida aparece tu tarjeta no es valida
   if (validator.isValid(creditNumber)) {
      alert("validar tarjeta numero de tarjeta");  
    } else {
      alert("Tu tarjeta es Inválida");
};

creditNumber.addEventListener("Onkeyup", function() {

const traermaskify = validator.maskify(creditNumber.value)    
});