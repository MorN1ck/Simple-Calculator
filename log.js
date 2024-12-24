let clear = document.getElementById("clear");
let button = document.querySelector("button");
let input = document.querySelector("#display");
console.log(button);
let appendNumber = (button) => {
    if (button => 0 && button <= 9) {
        input.value += button;
        console.log(button);   
    }
}
let appendOperator = (button) => {
    input.value += button;
    console.log(button);
}
