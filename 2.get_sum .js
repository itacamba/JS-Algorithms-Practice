let algo_2 = document.getElementById('2')
algo_2.addEventListener("click", () => {
    getSum(-1,2)
})

function getSum(a,b){
    if(a === b) return a;
    let orderedNums = [a,b].sort((a,b)=> a-b)
    let sum = 0
    for(let i = orderedNums[0]; i <= orderedNums[orderedNums.length - 1]; i++){
        sum = sum + i
    }
    return sum
}