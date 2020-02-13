function por42(num1, num2){
var result = null;
while(num1 <= num2){
    if(num1 % 42 === 0){
        return Math.max(num1) + 42;
    }
    num1++;
}
    if(!result){
        console.log("Não encontrado");
        return false;
}
}




