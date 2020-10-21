window.addEventListener("DOMContentLoaded", () => {
    const algo9Btn = document.getElementById("9") 
    algo9Btn.addEventListener("click", showConsole)
    
})

function showConsole(){
    console.log("clicked")
}

function getInput(e){
    console.log(e.target.value)
}