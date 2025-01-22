
let countEL = document.getElementById("count-el")

let count = 0
function increment() {
   count = count + 1
   console.log(count)

   countEL.innerText = count
}


