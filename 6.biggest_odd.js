let algo_6 = document.getElementById('6')
algo_6.addEventListener("click", () => {
    findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])
})

function findOdd(A) {
    // input: array of integers 
    // count how many times each integer appears
    // return the one that appears an odd number of times
  
    let biggestOdd = ''
    let obj = populateHash(A)
  
    for (const key in obj) {
    if(obj[key] % 2 === 1 && key > biggestOdd) biggestOdd = key
    }
    console.log("biggest odd number is: ", +biggestOdd)
    return +biggestOdd
  }
  
  function populateHash(array){
    let hash = {}
    array.forEach( int => {
      hash.hasOwnProperty(int)? hash[int] += 1 : hash[int] = 1
    });
    return hash
  }
  