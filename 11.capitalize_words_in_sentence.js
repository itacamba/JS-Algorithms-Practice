let algo_11 = document.getElementById('11')
algo_11.addEventListener("click", () => {
    capitalizeWordsInSentence("Hello my name is Carla Sahagun.")
})

function capitalizeWordsInSentence(sentence){
    let arr = sentence.split(" ")
    let newArr = []
    for(let i = 0; i < arr.length; i++){
      if(arr[i][0] === arr[i][0].toUpperCase() ){
        newArr.push(arr[i])
      } else {
        newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1))
      }
    }
    console.log(`the sentence "${sentence}" capitalized is: `, newArr.join(" "))
    return newArr.join(" ")
}