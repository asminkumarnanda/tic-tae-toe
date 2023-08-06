let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

let turn = "X";

//Funtion to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//Funtion to check for a win
const checkWin = () => {
  let boxtexts = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[2]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtexts[e[0]].innerText + " won";
      document.querySelector(".imgbox img").style.cssText = `width:200px`;
    }
  });
};

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioturn.play();
      document.querySelector(".gameInfo .info").innerText = `Turn For ${turn}`;
      checkWin();
    }
  });
});

reset.addEventListener("click", function () {
  document.querySelectorAll('.boxtext').forEach((element)=>{
    element.innerText="";
  });
  document.querySelector(".imgbox img").style.width=0;
  turn="X";
  document.querySelector(".gameInfo .info").innerText = `Turn For ${turn}`;
});
