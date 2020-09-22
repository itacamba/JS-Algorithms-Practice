let algo_7 = document.getElementById('7')
algo_7.addEventListener("click", () => {
    reverseWords('The quick brown fox jumps over the lazy dog.')
})
function reverseWords(str) {
    let arrOfWords = str.split(" ") // split by spaces => will turn extra spaces into ""
    let arrReversed = []
    arrOfWords.forEach( w => {
      let letters = w.split("")
      letters.reverse()
      const reversedWord = letters.join("")
      arrReversed.push(reversedWord)
    })
    console.log("The Reversed String is: ",arrReversed.join(" ") )
    return arrReversed.join(" ")
    
  }