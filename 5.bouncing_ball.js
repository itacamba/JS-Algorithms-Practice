let algo_5 = document.getElementById('5')
algo_5.addEventListener("click", () => {
    bouncingBall(30,0.66,1.5)
})

function bouncingBall(h,  bounce,  window) {
    // input: h = float; bounce = >0 < 1; window = 1.5
    // output: positive integer
    if(h < 0 )return -1;
    if(bounce < 0 || bounce > 1) return -1;
    if(window > h || window === h) return -1
    if(bounce === 1) return -1
    let ballInSight = 1 // first time ball is thrown
    h = h * bounce // reduced height cause ball has been seen once
    while(h > window){
      ballInSight += 2
      h = h * bounce
    }
    console.log(`ball has been seen ${ballInSight} times`);
    return ballInSight;
  }