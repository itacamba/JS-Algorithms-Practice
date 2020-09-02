let alg = document.getElementById('3')
alg.addEventListener("click", () => {
    tribonacci([1,1,1], 5)
})

function tribonacci(signature,n){
    //input: [1,1,1] or [0,0,1] |  n = natural number
    //output: [0,0,1,1,2,4,7,13,24,44] => n times
    if(n === 0) return []
    let newArr = [],
        signatureCopy = [...signature]
        sum = sumArr(signatureCopy) // 3
    for(let i=0; i < (n-3); i++){
        newArr.push(sum) // newArr = [3] | signature = [1,1,1] | sum = 3
        signatureCopy.shift() // signature = [1,1]
        signatureCopy.push(sum) // signature = [1,1,3]
        sum = sumArr(signatureCopy)
    }

    return signature.concat(newArr)
  }
  
  function sumArr(arr){
    let sum = 0
    for(let i=0; i < arr.length ; i++){
      sum = sum + arr[i]
      
    }
    return sum
  }