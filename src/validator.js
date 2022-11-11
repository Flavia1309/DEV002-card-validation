const validator = {
  isvalid: (creditnumber) => {
  const length = creditnumber.length;
  console.log ("btnenviar" + creditnumber)
  let agregarnumeros = 0 //funcionamiento de mi boton enviar y que acepte solo numeros
  if(length % 2 == 0){ //le digo que si el digito par multiplicado por 2 es igual a 0
  
    for(let e = 0; e < length; e++){//comienza mi funcion 
      let currentDigit = parseInt(creditnumber[e]);
      if (e % 2 == 0){//Indico posiciones pares
  
        if ((currentDigit *= 2) > 9){//Indico que el numero multiplicado por 2 es mayor a 9
  
          let primernumero = parseInt(currentDigit / 10);//Separo los valores y lo indentifica tomando el numero entero
          let ultimonumero = currentDigit % 10;//Identifica el ultimo numero para el codigo de luhn
          currentDigit = primernumero + ultimonumero//sumar el primer y ultimo numero
        }
        agregarnumeros += currentDigit; //sumo todos los digitos de la tarjeta
      }
    }
    const total = (agregarnumeros % 10) ===0
    console.log(total, agregarnumeros)
    return total
  }
},
  maskify: (creditnumber) => {
    return creditnumber.slice(0, -4).replace(/./g, "#") + creditnumber.slice(-4)
  }
}

  
  export default validator;
  



































//invertir el numero  de tarjeta de credito
/*invertirDigitos(creditNumber){
    var invertido= 0
    var resto= 123456789
    do{
    invertido = invertido * 10 + (resto % 10)
    resto = Math.floor(resto/10)
    } while (resto > 0)
    console.log (invertido);
    document.getElementById(creditNumber).innerHTML = invertido;
    return invertido
}
//Multiplicar los pares de mi numero invertido
*/
/*isValid: function(numeroDeTarjeta){
    console.log(numeroDeTarjeta)
    let len = numeroDeTarjeta.length
    let parity = len % 2
    let sum = 0
    {
    let d = parseInt(numeroDeTarjeta.charAt(i))
    if (i % 2 == parity) { d *= 2 }
    if (d > 9) { d -= 9}
    sum += d
   }
    if (sum % 10 == 0) {
    return true  
    } else  {
      return false
    }
  },
  maskify: function(numeroDeTarjeta){

  }
};*/