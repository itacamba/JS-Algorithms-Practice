let algo_4 = document.getElementById('4')
algo_4.addEventListener("click", () => {
    getCount("hello my beautiful dev community")
})

function getCount(str) {
    // input: string of lowercase letters and or espaces
    // output: integer
    if(str === ' ') return 0;
    if(str === '') return 0;
    let vowelsCount = 0;
    let vowelsHash = {"a": 0, "e": 0, "i":0, "o": 0, "u": 0}
    const strNoSpaces = str.split(" ").join("")
    for(let i = 0; i < str.length; i++){
      if(vowelsHash.hasOwnProperty(str[i])){
        vowelsCount += 1
      }
    }
    console.log("vowels quantity for 'hello my beautiful dev community' : ", vowelsCount)
    return vowelsCount;
  }