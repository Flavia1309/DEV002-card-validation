import validator from './validator.js'
//Implementación en Javascript del algoritmo de luhn, con funciones de cálculo y validación
function luhn_checksum(code) {
 var len = code.length
 var parity = len % 2
 var sum = 0
 for (var i = len-1; i>= 0; i--){
 var d = parseInt(code.charAt(i))
 if (i % 2 == parity) { d *= 2 }
 if (d > 9) { d -= 9}
 sum += d
}
 return sum % 10
}
//Devolver el codigo completo (incluido el digito de control), a partir del código especificado
function luhn_validate(fullcode){
    return luhn_checksum(fullcode) == 0
}
//Devolver respuesta
function validar_tarjeta(){
if (sum = 0)
alert("tarjeta valida")
}
function validar_tarjeta(){
if (sum = "1","2","3","4","5","6","7","8","9")
alert("tarjeta invalida")
}



console.log(validator);
