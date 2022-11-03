import validator from './validator.js';
//validar tarjeta de crédito
function "fValidar tarjeta"() {
var opt = $("lstTipoTarjeta option:selected").val();
codigo = $("numero_tarjeta").val().replace('-','');
var msg = "Valor incorrecto";
VISA = /^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/;
MASTERCARD = /^5[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]   {4}$/;
$("#err_numerotarjeta").html('');
if(luhn(codigo)) {}
}


console.log(validator);
