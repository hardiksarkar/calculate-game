const mainStart = document.getElementById("main-start");
const container = document.getElementById("container");
const startDiv = document.getElementById("start-div");

// Correct Answer Function

const answer = (n1, n2, oper) => {
  if (oper == 1) {
    return n1 + n2;
  } else {
    return n1 - n2;
  }
};

//Operator Function

const getOper = (oper) => {
  if (oper) {
    return "+";
  } else {
    return "-";
  }
};

const checkLine = () => {
  // checkLine1.innerHTML = ``;
  checkLine2.innerHTML = ``;
  checkLine3.innerHTML = ``;
  return;
};

const getQuote = (p) => {
  let c = Math.round(Math.random() * 10);
  if (p >= 0 && p <= 10) {
    if (c >= 0 && c <= 3) {
      return `" Your score is equal to your IQ. "`;
    } else if (c >= 4 || c <= 7) {
      return `" This game is not for Nursery Kids. "`;
    } else {
      return `" You should die in a spoon of water. "`;
    }
  } else if (p >= 11 && p <= 40) {
    switch (c) {
      case 0:
        return `" Are you born Dumb !! "`;
      case 1:
        return `" Are you born Dumb !! "`;
      case 2:
        return `" Go and try Rickshaw not this. "`;
      case 3:
        return `" Hope you are not science student. "`;
      case 4:
        return `" First wake up. Then try. "`;
      case 5:
        return `" Please marry a Dog. "`;
      case 6:
        return `" Go and take Admission in Kindergarden. "`;
      case 7:
        return `" It's not a bad score. Its Worst. "`;
      case 8:
        return `" Take tution form Class 2 childs. "`;
      case 9:
        return `" Dont try again. Just get lost. "`;
      case 10:
        return `" Smart phones are not for you. "`;
    }
  } else if (p >= 41 && p <= 60) {
    if (c <= 2) return `" Potential is there. !! "`;
    if (c <= 4) return `" You are in middle of Worst and Best. "`;
    if (c <= 6) return `" Are you thinking of Pizzas ? "`;
    if (c <= 8) return `" Dont lose hope. Give another try. "`;
    if (c <= 10) return `" Okay. Better than 60%. "`;
  } else if (p >= 61 && p <= 80) {
    if (c <= 2) return `" Impressive !! "`;
    if (c <= 4) return `" I think you can do better. "`;
    if (c <= 6) return `" You belong to top 20% people. "`;
    if (c <= 8) return `" You have some Talent. "`;
    if (c <= 10) return `" So someone impressed me. "`;
  } else if (p >= 81 && p <= 90) {
    if (c <= 2) return `" You are Insane. "`;
    if (c <= 4) return `" Impossible ! How you reached here ? "`;
    if (c <= 6) return `" A genious yo are. "`;
    if (c <= 8) return `" You have an Einstein brain. "`;
    if (c <= 10) return `" Mathematics is in your Blood ! "`;
  } else {
    if (c <= 2) return `" The Top 1% genious you are. "`;
    if (c <= 4) return `" You're the Champion. You've Proved it "`;
    if (c <= 6) return `" Now you can tell yourself a Master. "`;
    if (c <= 8) return `" Oh My God !! Who are You ? "`;
    if (c <= 10) return `" You have a God level IQ. "`;
  }
};

// Level Function

const levelFunc = (p) => {
  if (p <= 10) {
    return `Level : Kid`;
  } else if (p <= 40) {
    return `Level : Easy`;
  } else if (p <= 60) {
    return `Level : Medium`;
  } else if (p <= 80) {
    return `Level : Hard`;
  } else if (p <= 90) {
    return `Level : Insane`;
  } else {
    return `Level : God`;
  }
};

function startDivFunc() {
  startDiv.classList.add("hidden");
  addDivFunc();
  startGame();
}

function addDivFunc() {
  let htmlData = `<p id="line-1"></p>
        <div id="div-1">
            <p id="points"></p> 
            <div id="div-1-child">
                <p class="fa" id="line-2"></p>
                <p id="line-3"></p>
            </div>
            <p id="timer"></p>
        </div>
        <p id="quote"></p>
        <p id="expression"></p>
        <input type="number" name="" id="answer">
        <button id="submit">Submit</button>
        <div id="button-div">
            <button id="start">Reload Game</button>
            <button id="reset">Main Menu</button>
        </div>`;
  container.insertAdjacentHTML("afterbegin", htmlData);
}

function startGame() {
  const line_1 = container.children[0];
  const div_1 = container.children[1];
  const points = container.children[1].children[0];
  const div_1_child = container.children[1].children[1];
  const line_2 = container.children[1].children[1].children[0];
  const line_3 = container.children[1].children[1].children[1];
  const timer = container.children[1].children[2];
  const quote = container.children[2];
  const expression = container.children[3];
  const myAnswer = container.children[4];
  const submit = container.children[5];
  const button_div = container.children[6];
  const start = container.children[6].children[0];
  const reset = container.children[6].children[1];

  // console.log(expression);
  // console.log(numbtn);
  let p = 0;
  let z;
  let x = true;
  let goTimer;
  let c;
  let setTimex;

  let n1;
  let n2;
  let oper;
  let check=true;

  points.innerHTML = `Points : 0`;
  line_2.innerHTML = ``;
  line_3.innerHTML = ``;
  quote.innerHTML = ``;

  start.classList.add("hidden");
  reset.classList.add("hidden");

  function focusFunc() {
    if (check == false) {
      return;
    }
    myAnswer.focus();
  }

  function blurFunc() {
    check = false;
    myAnswer.blur();
  }

  function gameFunc() {
    if (p <= 10) {
      z = 10;
    } else if (p <= 40) {
      z = 100;
    } else if (p <= 60) {
      z = 1000;
    } else if (p <= 80) {
      z = 10000;
    } else {
      z = 10000;
    }
    n1 = Math.round(Math.random() * z);
    n2 = Math.round(Math.random() * z);
    oper = Math.round(Math.random());
    expression.innerHTML = `${n1} ${getOper(oper)} ${n2}`;

    line_1.innerHTML = `${levelFunc(p)}`;
  }

  function setTimeoutFunc() {
    start.classList.remove("hidden");
    reset.classList.remove("hidden");
  }

  function goTimerStartFunc() {
    if (p <= 10) {
      c = 4;
    } else if (p <= 40) {
      c = 9;
    } else {
      c = 14;
    }

    timer.innerHTML = `Timer : ${c + 1}`;
    myAnswer.value = "";

    goTimer = setInterval(goTimerFunc, 1000);
  }

  function goTimerFunc() {
    if (c == 0) {
      x = false;
      blurFunc();
      clearInterval(goTimer);
      points.innerHTML = ``;
      timer.innerHTML = `Time Up`;
      line_3.innerHTML = `Game Over`;
      line_2.innerHTML = "&#xf119";
      line_2.style.color = "red";
      points.innerHTML = `Points : ${p}`;
      expression.innerHTML = `${n1} ${getOper(oper)} ${n2} = ${answer(
        n1,
        n2,
        oper
      )}`;
      quote.innerHTML = `${getQuote(p)}`;
      setTimex = setTimeout(setTimeoutFunc, 1000);
      return;
    }
    if (c != 0) {
      timer.innerHTML = `Timer : ${c}`;
    }
    c--;
  }

  function submitBtnFunc() {
    if (x == false) {
      return;
    }
    clearInterval(goTimer);
    if (myAnswer.value == answer(n1, n2, oper)) {
      // functions more
      p = p + 2;
      line_3.innerHTML = `Correct`;
      line_2.innerHTML = `&#xf587`;
      line_2.style.color = "green";
      quote.innerHTML = ``;
      points.innerHTML = `Points : ${p}`;
      myAnswer.value = "";
      clearTimeout(setTimex);
      gameFunc();
      goTimerStartFunc();
    } else {
      x = false;
      blurFunc();
      line_3.innerHTML = `Game Over`;
      line_2.innerHTML = "&#xf119";
      line_2.style.color = "red";
      points.innerHTML = `Points : ${p}`;
      quote.innerHTML = `${getQuote(p)}`;
      expression.innerHTML = `${n1} ${getOper(oper)} ${n2} = ${answer(
        n1,
        n2,
        oper
      )}`;
      setTimex = setTimeout(setTimeoutFunc, 1000);
      return;
    }
  }

  function reloadGameFunc() {
    let child = container.firstElementChild;
    let childLen = container.children.length;
    while (childLen != 1) {
      container.removeChild(child);
      child = container.firstElementChild;
      childLen--;
    }
    addDivFunc();
    startGame();
  }

  function resetFunc() {
    // container.removeChild(container.lastElementChild);
    let child = container.firstElementChild;
    let childLen = container.children.length;
    while (childLen != 1) {
      container.removeChild(child);
      child = container.firstElementChild;
      childLen--;
    }
    startDiv.classList.remove("hidden");
  }

  gameFunc();
  goTimerStartFunc();

  document.body.addEventListener('click', focusFunc);

  myAnswer.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      submit.click();
    }
  });

  submit.addEventListener("click", submitBtnFunc);
  start.addEventListener("click", reloadGameFunc);
  reset.addEventListener("click", resetFunc);
}

mainStart.addEventListener("click", startDivFunc);
