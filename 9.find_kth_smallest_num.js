
window.addEventListener("DOMContentLoaded", () => {

    const formNode = document.getElementById("form-9") 
    formNode.addEventListener("submit", handleForm9)
    
})

function handleForm9(e){
    e.preventDefault()
    // target input tag for array
    const userArr = document.getElementById("arr-input-9")
    // convert string into array
    const arr = turnStringIntoArr(userArr.value)
    // target input tag for kth number
    const userKth = document.getElementById("kth-input-9")
    const str = validateKthStr(userKth.value)
    console.log(str)
}

function turnStringIntoArr(str){
    let arr = str.split(",")
     let newArr = []
    let errorNode = document.querySelector('.input-error')
    for(let i = 0; i < arr.length; i++){
        // if element is a number then...
        if(!isNaN(arr[i])){
           newArr.push(+arr[i])
        } else{  // if element is not a number
            errorNode.innerText = "make sure the formats are correct"
            // console.log("parent: " ,inputNode.nextSibling())
        }
       
    }
    return newArr
}
function validateKthStr(str){
    console.log("validating kth...")
  return !isNaN(str)
}


function smallestElement(arr,k){
    // sorted arr in descending order
    let sortedArr = arr.sort((a,b) => a - b)
    console.log("k: ", k)
    let uniqueNums = [sortedArr[0]]
      for(let i = 1; i < sortedArr.length; i++){
        if(sortedArr[i] !== sortedArr[i - 1]){
          uniqueNums.push(sortedArr[i])
        }
      }
        
    return uniqueNums.length >= k ? uniqueNums[k-1] : null
}