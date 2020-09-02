let alg = document.getElementById('3')
alg.addEventListener("click", () => {
    tribonacci([1,1,1], 5)
})

function tribonacci(signature,n){
    for(let i = 0; i < (n - 3); i++){
        signature.push(signature[i] + signature[i+1] + signature[i+2])
    }
    return signature
  }
