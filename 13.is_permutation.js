let algo_13 = document.getElementById('13')
algo_13.addEventListener("click", () => {
    isPermutation("aabba", "ababa")
})
function isPermutation(strA, strB){
	// abc // cba
	if(strA.length !== strB.length) return false

	let sortedA = strA.split("").sort().join("")
    let sortedB = strB.split("").sort().join("")
    console.log(` '${strA}' and '${strB}' are a permutation? => ${sortedA === sortedB}`)
	return sortedA === sortedB
}