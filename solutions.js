// Sum of Two Numbers
function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Los datos de entrada no son adecuados");
    return "Los datos de entrada no son adecuados";
  }
  return a + b;
}

// Factorial of a Number
function factorial(n) {
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
    console.log("Los datos de entrada no son adecuados");
    return "Los datos de entrada no son adecuados";
  }
  if (n == 1 || n==0 ) {
    return 1
  }else{
    return factorial(n-1) * n
  }
}

// Find the Largest Number
function findLargest(arr) {
  if (!Array.isArray(arr) || arr.some(x => typeof x !== "number")) {
    console.log("Los datos de entrada no son adecuados");
    return "Los datos de entrada no son adecuados";
  }
  let Mayor = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > Mayor) {
      Mayor = arr[i]
    }
  }
  return Mayor
}


function countVowels(str) {
  if (typeof str !== "string") {
    console.log("Los datos de entrada no son adecuados");
    return "Los datos de entrada no son adecuados";
  }
  let count = 0;
  let strLow = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (strLow[i] == "a") {
      count++;
    } else if (strLow[i] == "e") {
      count++;
    } else if (strLow[i] == "i") {
      count++;
    }else if (strLow[i] == "o") {
      count++;
    }else if (strLow[i] == "u") {
      count++;
    }
  }
  return count;
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    console.log("Los datos de entrada no son adecuados");
    return "Los datos de entrada no son adecuados";
  }
  if ( n <= 1 ) {
    return false
  }else if (n == 2  || n == 3) {
    return true;
  }else if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }else{
    for (let i = 5; i <= Math.sqrt(n); i+=2) {
        if (n % i === 0){
          return false;
        }
    }
  } 
  return true
}


module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
