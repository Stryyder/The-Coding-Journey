function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0
  } else {
    return sum(arr, n - 1) + arr[n - 1]; // Addition not multiplication!!
    
    // steps of the journey
          // [2,3,4,5] , 3
          // not 0(n is 3), so wait for next  + ((4))

          // [2,3,4,5] , 2   
          //  not 0(n is 2), so wait for next + ((3))

          // [2,3,4,5] , 1 
          // not 0(n is 1), so wait for next + ((2))

          // [2,3,4,5], 0
          // n is 0, so return 0
          // If multiplication we would need a 1 here to ensure math works right

  }
  // Only change code above this line
}
