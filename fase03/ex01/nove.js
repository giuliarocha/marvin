function nove(numero){
var nome = String(numero)
var sobra = nome.substring(nome.length - 1, nome. length -0);
var isso = Number (sobra)

if(isso === 9)
return true

else
return false
}
