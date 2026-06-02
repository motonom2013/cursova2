let game = document.querySelector("#game");
let bb = document.querySelectorAll(".b");
let a = ":(";
let h1 = document.querySelector("p");
let r = document.querySelector(".retry")
let play = true;
let cont = 0
h1.textContent = " хід :) ";
r.addEventListener("click", function (event){
a=":(";
cont = -1
play = true;
bb.forEach((box)=>{
box.classList.remove("aa")
box.textContent = ""
box.classList.remove("ab")
box.disabled = false;  
h1.textContent = " хід :) ";   
});
});


game.addEventListener("click", function (event) {
  const clicked = event.target;
  const b = clicked.classList.contains("b");
  cont = cont + 1
  if (b)
    if (play == true) {
      if (a == ":(") {
        clicked.textContent = ":)";
        clicked.classList.add("aa");
        a = ":)";
        
        h1.textContent = " хід :( ";
        win();
      } else {
        clicked.textContent = ";(";
        h1.textContent = " хід :) ";
        a = ":(";
        
        clicked.classList.add("ab");
        win();
      }
      clicked.disabled = true;
    }
});

let h = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function win() {
  for (let [i, d, c] of h) {
    if (
      bb[i].textContent == bb[d].textContent &&
      bb[d].textContent == bb[c].textContent &&
      bb[c].textContent !== ""
    ) {
      h1.textContent = `переміг ${a}`;
      play = false;
    }
    if (cont == 9) {play = false;
        h1.textContent = "нічия";
    }
  }
}
