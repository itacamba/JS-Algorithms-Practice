let algo_8 = document.getElementById('8')
algo_8.addEventListener("click", () => {
    diamond(7);
})

function diamond(n){ // 5
    console.log("Diamond of Size 7:")
    if(n % 2 === 0 || n < 0) return null;
    if(n === 1) return "*\n";
    let arr = []
    let spaces = (n/2 - 0.5)
    let stars = 1
    for(let row = 1; row <= n; row++){
      if(row < n/2 + 0.5){ // while row < 3
        console.log(' '.repeat(spaces) + '*'.repeat(stars))
        spaces = spaces - 1
        stars = stars + 2
      } else { 
        console.log(' '.repeat(spaces) + '*'.repeat(stars))
        spaces = spaces + 1
        stars = stars -2
      }
    }
  }
  
  
  // -*-       --*      ---*      ----*
  // ***       -***     --***     ---*** 
  // -*-       *****    -*****    --*****
  //           -***     *******   -*******
  //           --*      -*****    *********
  //                    --***     -*******
  //                    ---*      --*****
  //                              ---***
  //                              ----*