const validator = {
  isValid: (creditNumber) => {
    const length = creditNumber.length;  //longitud de string
    let agregarDigitos = 0;
    //si la cantidad de dígitos, al sacar módulo(%) 2 da como resultado 0
    if (length % 2 == 0) {
      // Comienza al inicio del numero y duplica a partir del primer número
      for (let i = 0; i < length; i++) {
        let digitoActual = parseInt(creditNumber[i]);
        if (i % 2 == 0) //tomar posiciones pares
        //si el digito actual multiplicado x 2 es mayor que 9
        {
          if ((digitoActual *= 2) > 9) {
            // Separar los valores de 2 digitos para después sumarlos
            let primerNumero = parseInt(digitoActual / 10); //identifica el primer numero de currentDigit tomando el entero, es decir 1 p. ej 16 / 10 = 1.6 = 1
            let ultimoNumero = digitoActual % 10; //identifica el ultimo número de current digit con modulo 10 p ej, 16 mod 10 = 6
            //confirmar x console log si/en donde se guarda
            // suma el primero y último número de currentDigit
            digitoActual = primerNumero + ultimoNumero;
          }
        }
        //suma todos los dígitos de la tarjeta
        agregarDigitos += digitoActual; //consolidar agregarDigitos | Qué pasa con los impares y menores a 9?
      }
    }
    // creo otra constante para alojar la suma de los dígitos, ver si el total sacando su módulo es === a 0,
    //al ser typeOf retorna un tipo de dato primitivo, si no es true, entonces devuelve false
    const total = (agregarDigitos % 10) === 0
    console.log(total, agregarDigitos)
    return total
  },
  // regresa una copia de los números de mi CC. .slice extrae una sección del string y lo devuelve como un nuevo string sin modificar el original. 0 indica el primer elemento, -4 indica desplazamiento desde el final del array, extrae los 4 últimos elementos del array. .replace, reemplaza de forma global por un #
  maskify: (creditNumber) => {
    return creditNumber.slice(0, -4).replace(/./g, '#') + creditNumber.slice(-4)//Expresion regular, hace una busqueda dentro del string y reemplaza los digitos menos los 4 Ultimos, una expresion regular es una funcion en corto
  }
}
export default validator;
//5579100347228064 , 5253460008191610














































/*const validator = {
  isValid: (creditNumber) => {
    let arrayNumber = creditNumber.split("")
    const length = arrayNumber.length;
    console.log("btnenviar" + creditNumber)
    let agregarnumeros = 0 //funcionamiento de mi boton enviar y que acepte solo numeros
    if (length % 2 == 0) {//Indico posiciones pares

      for (let e = 0; e < length; e++) {//comienza mi funcion 
      let currentDigit = parseInt(arrayNumber[e]);
     
       // console.log("posicion par" + currentDigit)
        let multDos = currentDigit * 2;
        console.log("multDos" + multDos)
        if (multDos > 9) {//Indico que el numero multiplicado por 2 es mayor a 9

          let primernumero = parseInt(multDos / 10);//Separo los valores y lo indentifica tomando el numero entero
          let ultimonumero = multDos % 10;//Identifica el ultimo numero para el codigo de luhn
          currentDigit = primernumero + ultimonumero//sumar el primer y ultimo numero
          console.log("mayor a 9 " + currentDigit)
        } else if (
          currentDigit = multDos) {
          // console.log("multDos2 " + currentDigit)
        } else {
          currentDigit = currentDigit[e]
          console.log("impar" + currentDigit)
        }
        agregarnumeros += currentDigit; //sumo todos los digitos de la tarjeta
        console.log("suma total " + agregarnumeros)
      }
    }

    const total = (agregarnumeros % 10) === 0

    return total;
  },

  maskify: (numeroTarjeta) => {
    return numeroTarjeta.slice(0, -4).replace(/./g, '#') + numeroTarjeta.slice(-4)
  }
} */

































