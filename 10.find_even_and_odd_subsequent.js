let algo_10 = document.getElementById('10')
algo_10.addEventListener("click", () => {
    findEvenOddSubsequent("98676555533")
})

function findEvenOddSubsequent(str){
    let transformed = []
    for( let i = 0; i < str.length; i++){
      // if both are even
      if(str[i]% 2 == 0 && str[i+1] % 2 == 0){
        transformed.push(str[i], '*');
      } else if(str[i]%2 == 1 && str[i+1]%2 == 1){ // both are odd
        transformed.push(str[i], '-');
      } else { // if both are not even or odd
       transformed.push(str[i]);
      }
    }
    console.log("the new string is: ", transformed.join(""))
    return transformed.join("")
  }