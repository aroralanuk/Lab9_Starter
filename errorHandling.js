// trackjs script
window.TrackJS &&
  TrackJS.install({
    token: "4fcb34665dfe4efb9b02059eb5859275",
  });

// part 5: global listener for errors
window.addEventListener("error", (e) => {
  console.error("Catching global errors here!");
});

// part 4: custom Error object
class ButtonClickError extends Error {
  constructor(message) {
    super(message);
    this.name = "ButtonDoesntExistError";
  }
}

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let output = document.querySelector("output");
  let firstNum = document.querySelector("#first-num").value;
  let secondNum = document.querySelector("#second-num").value;
  let operator = document.querySelector("#operator").value;

  // part 3: try ... catch ... finally
  try {
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
  } catch (err) {
    alert(err);
  } finally {
    output.innerHTML = "INVALID!!";
  }
});

let errorBtns = Array.from(document.querySelectorAll("#error-btns > button"));

// Start your code here
// You may move this JS to another file if you wish

// part 1: executing console functions for each button
errorBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    switch (btn.innerHTML) {
      case "Console Log":
        console.log("Logging to console!");
        break;
      case "Console Error":
        console.error("Sorry! this is an error :(");
        break;
      case "Console Count":
        console.count("Number of times Count btn clicked in this session");
        break;
      case "Console Warn":
        console.warn("Just a warning but don't ignore me :O");
        break;
      case "Console Assert":
        const reason = "assertion failed: hotdog isn't a sandwich";
        const a = "hotdog",
          b = "sandwich";
        console.assert(a === b, { a, b, reason });
        break;
      case "Console Clear":
        console.clear();
        break;
      case "Console Dir":
        console.dir(document.head.childNodes);
        break;
      case "Console dirxml":
        console.dirxml(btn);
        break;
      case "Console Group Start":
        const label = "My favorite dinosaurs";
        console.group(label);
        console.log("TRex");
        console.log("Raptor");
        console.log("Archaeopteryx");
        break;
      case "Console Group End":
        console.groupEnd();
        console.log("End of the Jurassic era!");
        break;
      case "Console Table":
        console.table([
          {
            first: "René",
            last: "Descartes",
            birthday: "1596-03-31",
          },
          {
            first: "Immanuel",
            last: "Kant",
            birthday: "1724-04-30",
          },
          {
            first: "Thomas",
            last: "Powell",
            birthday: "1949-06-06",
          },
        ]);
        break;
      case "Start Timer":
        console.time();
        break;
      case "End Timer":
        console.timeEnd();
        break;
      case "Console Trace":
        const first = () => {
          second();
        };
        const second = () => {
          third();
        };
        const third = () => {
          fourth();
        };
        const fourth = () => {
          console.trace();
        };
        first();
        break;
      case "Trigger a Global Error":
        console.log(label);
        break;
      default:
        // part 4: throwing custom error
        throw new ButtonClickError("Error thrown");
        break;
    }
  });
});
