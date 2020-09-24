let algo_1 = document.getElementById('1')
algo_1.addEventListener("click", () => {
    removeIfNotUnique(['A','A','A','B','B','C','C','D','A','A','B','B'])
})

function removeIfNotUnique(arr){
    // arr : [1,1,1,2,2,3] => output: [1,2,3]
    let result = [],
        currentElement = arr[0]
        result.push(currentElement)
         
    for(let i = 0; i < arr.length ; i++){ // arr.length = 3
      if(arr[i] !== currentElement){
        currentElement = arr[i]
        result.push(currentElement)
      }
    }
    console.log("Unique in order for ['A','A','A','B','B','C','C','D','A','A','B','B'] is: ", result)
    return result;
  }
