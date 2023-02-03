function insertionSort2(n, arr) {
  // Write your code here
  let len = arr.length, value;
  for(let i = 1; i < len; i++){
      value = arr[i]
      let j;
      for(j = i - 1; j > - 1 && arr[j] > value; j--){
          arr[j + 1] = arr[j]            
      }
      arr[j + 1] = value;
      console.log(arr.join(" "))
  }
  
}