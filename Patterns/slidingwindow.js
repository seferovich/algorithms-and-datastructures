// Write a function called maxSubarraySum which accepts an array of integers and a number called num.
// The function should calculate the maximum sum of num consecutive elements in the array.
// Sliding window pattern:

function maxSubarraySum(arr, num){
  let maxSum = 0
  let tempSum = 0
  if (arr.length < num) return null
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}