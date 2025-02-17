// Sum of Two Numbers
function sum(a, b) {
  return a + b;
}

// Factorial of a Number
function factorial(n) {
  if (n == 1 || n==0 ) {
    return 1
  }else{
    return n = factorial(n-1) * n
  }
}

// Find the Largest Number
function findLargest(arr) {
  let Mayor = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i-1]) {
      Mayor = arr[i]
    }
  }
  return Mayor
}


function countVowels(str) {
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
  if ( n <= 1 ) {
    return false
  }else if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }else{
    for (let i = 2; i <= Math.sqrt(n); i++) {
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
