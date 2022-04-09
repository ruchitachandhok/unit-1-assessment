//alert ("hi");

/*-------app's state (variables)---------*/
var counter = 1;
console.log(counter);

let y = 0;

//var y = Math.floor(Math.random() * 1000 + 1);
console.log(y);

/*----- cached element references -----*/
let additionEl = document.getElementById("addition");
let subtractionEl = document.getElementById("subtraction");
let inputyournumEl = document.getElementById("inputyournum");
let sumdisplayEl = document.getElementById("sumdisplay");

sumdisplayEl.innerText = y;

/*----- event listeners -----*/
additionEl.addEventListener("click", function (event) {
    myaddfunc();
});

subtractionEl.addEventListener("click", function (event) {
    mysubfunc();
});


/*----- Functions -----*/
function myaddfunc() {
  console.log("entering the add function");
  let x = parseInt(document.getElementById("inputyournum").value);
  console.log("x: ", x, "y:", y);
  let mysum = x + y;
  y = mysum;
  console.log("The addition value:", mysum);
  sumdisplayEl.innerText = mysum;
}

function mysubfunc() {
  let x = parseInt(document.getElementById("inputyournum").value);
  let mysub = x - y;
  y = mysub;
  console.log("The subtraction value:", mysub);
  sumdisplayEl.innerText = mysub;
}
