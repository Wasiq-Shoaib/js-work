let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const mxg = document.querySelector("#mxg");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#computer-score");

const comchoice = (userchoice) => {
  const gencomp = ["rock", "paper", "scissor"];
  const genno = Math.floor(Math.random() * 3);
  return gencomp[genno];
};

const drawgame = () => {
  console.log("game draw");
  mxg.innerText = "Game was Draw";
  mxg.style.backgroundColor = "blue";
};

const showwinner = (userwin, compchoice, userchoice) => {
  if (userwin) {
    userscore++;
    user.innerHTML = userscore;
    console.log("you win");
    mxg.innerText = `you win. your choice beats computer choice`;
    mxg.style.backgroundColor = "green";
  } else {
    compscore++;
    comp.innerText = compscore;
    console.log("you lose.");
    mxg.innerText = `you lose! computer choice beats your choice}`;
    mxg.style.backgroundColor = "red";
  }
};

const playgame = (userchoice) => {
  console.log("user choice =", userchoice);
  const compchoice = comchoice();
  console.log("comp choice = ", compchoice);

  if (userchoice === compchoice) {
    drawgame();
  } else {
    let userwin = true;

    if (userchoice === "scissor") {
      userwin = compchoice === "rock" ? false : true;
    }
    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else {
      compchoice === "rock" ? true : false;
    }
    showwinner(userwin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    // console.log("was  clicked", userchoice);
    playgame(userchoice);
  });
});
