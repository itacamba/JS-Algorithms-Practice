let algo_3 = document.getElementById('3')
algo_3.addEventListener("click", () => {
    tribonacci([1,2,4], 5)
})

function tribonacci(signature,n){
    for(let i = 0; i < (n - 3); i++){
        signature.push(signature[i] + signature[i+1] + signature[i+2])
    }
    console.log(`tribonacci sequence of ${n}-digits for [1,2,4] : `, signature)
    return signature
  }
