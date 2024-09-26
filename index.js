const myH1_1 = document.getElementById("myH1_1");
const myH1_2 = document.getElementById("myH1_2");

const cake = document.getElementById("cake1");
const div = document.getElementById("cake_div");

const myP_1 = document.getElementById("myP_1");
const myP_2 = document.getElementById("myP_2");

const audio = new Audio("mp3/Yippee sound effect.mp3");

cake.addEventListener("click", (event) => {
  event.target.src = "img/cake2.gif";
  setTimeout(afterTheCake, 1500);
});

function afterTheCake() {
  myH1_1.style.display = "none";
  myH1_2.style.display = "block";
  cake.style.display = "none";
  const kitty = document.createElement("img");
  div.append(kitty);
  kitty.style.width = "50%";
  kitty.style.marginTop = "-1rem";
  kitty.src = "img/kitty.gif";
  myP_1.style.display = "none";
  myP_2.style.display = "block";
  audio.play();
}
