import validator from './validator.js'
//Implementación en Javascript del algoritmo de luhn, con funciones de cálculo y validación

const numeroTarjeta = document.getElementById('creditNumber')
const numeroMaskify = document.getElementById('numeroMaskify')
const botonEnviar = document.getElementById("btnEnviar")

botonEnviar.addEventListener("click", function () {
 // e.preventDefault();//Implelmentar mi boton de validar
  /*const numeromakify= document.getElementById("numeromaskify");
      console.log (numeromakify)//implementar que arroje los primeros 12 numeros con el signo #*/

  let numerosTarjetaCredito = document.getElementById("creditNumber").value;//declaro la variable para validar

  //Si la tarjeta es valida, aparecen los numeros ocultos, si no es valida aparece tu tarjeta no es valida
  if (validator.isValid(numerosTarjetaCredito)) {
    alert("Tu tarjeta " + validator.maskify(numeroTarjeta.value) + " es válida");
  } else {
    alert("Tu tarjeta " + validator.maskify(numeroTarjeta.value) + " es Inválida");
  }
  
  });
  numeroTarjeta.addEventListener("keyup",function() { //keyup: cada vez que sueltan una tecla, este evento sucede.

  const traerMaskify = validator.maskify(numeroTarjeta.value) //en esta nueva variable, en mi f maskify, entra el valor de ccNumber
  numeroMaskify.textContent= traerMaskify //el string es devuelto con la propiedad maskify en la interfaz
});

  






