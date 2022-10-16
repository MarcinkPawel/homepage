let buttonElement = document.querySelector(".button");
let bodyElement = document.querySelector(".body");
let magicElement = document.querySelector(".magic");
let clockElement = document.querySelector(".clock");
let hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

buttonElement.addEventListener("click", () => {

    clockTime = +clockElement.value;

    if (hours.includes(clockTime)) {
        magicElement.innerText = "It's too early!";

    } else {
        magicElement.innerText = "Night Time, sleep well!";
        bodyElement.classList.toggle("dark");
    }

}
)
