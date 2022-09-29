function add(num1 ,num2){
    return num1+num2;
}

function substract(num1,num2){
    return num1-num2;

}

function multiply(num1,num2){
    return num1*num2

}

function divide(num1,num2){
    if(num2 ==0){
        console.log('no se puede dividir por 0')
    }else{
        return num1/num2;
    }

}

console.log(divide(1,2))