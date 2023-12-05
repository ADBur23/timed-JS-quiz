var startQuiz = document.getElementById("question-title");
var button = document.getElementById("start");

let arrIndex = 0;
function start() {
  document.getElementById("start-screen").setAttribute("class", "hide");
  document.getElementById("questions").setAttribute("class", "start");
  startQuiz.innerHTML = "";
  let title = document.getElementById("question-title");
  let choices = document.getElementById("choices");
  title.textContent = questions[arrIndex].question;

  startQuiz.append(choices);
  for (let i = 0; i < questions[arrIndex].answerChoice.length; i++) {
    // create
    var buttonEl = document.createElement("button");
    // add

    buttonEl.textContent = questions[arrIndex].answerChoice[i];
    buttonEl.addEventListener("click", handleChoice);
    // append
    startQuiz.append(buttonEl);
   
  }

  // button.setAttribute("class", "hide");

  // if (start) {
  //   (i) === 5;
  //   [
  //     document.getElementById("questions").setAttribute("class", "hide"),
  //     document.getElementById("end-screen").setAttribute("class", "start"),
  //   ];
  // }
//  finish ();
}

function handleChoice() {
  arrIndex++;
  if (arrIndex === questions.length)
  finish (); 
  else
  start();
}

function finish() {
  // if (start.i) {
  //   (i) === 5;
  //   [
      document.getElementById("questions").setAttribute("class", "hide");
      document.getElementById("end-screen").setAttribute("class", "start");
  //   ];
  // }

  // startQuiz.innerHTML = "";
  // let title = document.getElementById("question-title");
  // let choices = document.getElementById("choices")
}

button.addEventListener("click", start);
