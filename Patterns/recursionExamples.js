// Factorial number
function factorial(num){
  if(num === 1) return 1
  return num * factorial(num-1)
}

// Product of all elements in array
function productOfArray(arr) {
  if(arr.length === 0) {
      return 1
  }
  return arr[0] * productOfArray(arr.slice(1))
}

// Fibonacci 
function fib(n){  
  if (n <= 2) return 1
  return fib(n-1) + fib(n-2)
}