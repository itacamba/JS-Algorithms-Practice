let algo_12 = document.getElementById('12')
algo_12.addEventListener("click", () => {
    findPairDifference([3,5,9,6,8,7,2],3)
})
function findPairDifference(arr, k){
	let newArr = []
	let sorted = arr.sort((a,b)=> a - b)
	for(let i= 0; i< sorted.length; i++){
		j = i+1
		while(sorted[j] - sorted[i] <= k){
			if(sorted[j]-sorted[i] === k){
				newArr.push([sorted[i],sorted[j]])
				break;
			} else {
				j++
			}
		}
    }
    console.log(`The pairs with difference ${k} are: `, newArr)
	return newArr
}