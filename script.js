// 1) Even or Odd

const check = (num) => {
    if(num % 2 == 0){
        console.log(num,"is Even");
    }else {
        console.log(num,"is Odd");
    }
}

check(4);
check(7);
check(0);


// 2) Result Evaluator - Pass or Fail

function evaluateResult(marks){
    if(marks >= 0 && marks <= 100){
        let result = marks >= 50 ? "Pass" : "Fail";
        console.log(result);
    }
    else {
        console.log("Invalid marks");
    }
}

evaluateResult(75);
evaluateResult(40);
evaluateResult(120);


// 3) Maximum Finder - Largest of Three Numbers


const findMax = (num1,num2,num3) => {
    if(num1 >= num2 && num1 >= num3){
        return num1;
    }
    else if(num2 >= num1 && num2 >= num3){
        return num2;
    }
    else {
        return num3;
    }
}

console.log(findMax(10,25,15));
console.log(findMax(5,3,8));
console.log(findMax(9,9,2));


// 4) Accumulator - Sum from 1 to N


function sumToN(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

console.log(sumToN(5));
console.log(sumToN(10));


// 5) Multiplication Table Generator

function printTable(n){
    for(let i = 1; i <= 10; i++){
        console.log(n, "x", i, "=", i*n);
    }
}

printTable(3);


// 6) Digit Counter - Number Length Finder

function countDigits(num){
    let count = 0;
    if(num === 0){
        count++;
    }
    while(num > 0){
        num = Math.floor(num / 10);
        count++;

    }
    return count;
}

console.log(countDigits(1234));
console.log(countDigits(9));
console.log(countDigits(10000));


// 7) Number Reverser

function reverseNumber(num){
    let rev = 0;
    while(num > 0){
        rev = rev * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return rev;
}

console.log(reverseNumber(1234));
console.log(reverseNumber(500));
console.log(reverseNumber(91));


// 8) Factorial Engine

function factorial(n){
    let fact = 1;
    for(let i = n; i >= 1; i--){
        fact *= i;
    }
    return fact;
}

console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(1));


// 9) Prime Validator

function isPrime(n){
    let isPrime = true;
    if(n <= 1){
        isPrime = false;
        return isPrime;
    }
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            isPrime = false;
            break;
        }
    }
    return isPrime; 
}

console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(2));


// 10) Pattern Builder - Star Triangle


function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";

        for (let j = 1; j <= i; j++) {
            row += "*";
        }

        console.log(row);
    }
}

printPattern(4);
