const myH1_1 = document.getElementById("myH1_1");
const myH1_2 = document.getElementById("myH1_2");

const cake = document.getElementById("cake1");
const kitty = document.getElementById("kitty");

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
  kitty.style.display = "block";
  kitty.style.width = "50%";
  myP_1.style.display = "none";
  myP_2.style.display = "block";
  audio.play();
}
