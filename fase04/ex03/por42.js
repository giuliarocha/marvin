function por42(num1, num2){
var result = null;
var a = 0
while(num1 <= num2){
    if(num1 % 42 === 0){
        a = a + 1
    }
if(a === 2){
    return(num1)
}
num1++
}
    if(!result)
        console.log("Não encontrado");
        return false;
}




