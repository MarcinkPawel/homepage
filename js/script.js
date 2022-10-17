{
    const hello = () => {
        console.log("Hi there, I hope you enjoy this journey as me.")
    }

    const buttonElement = document.querySelector(".button");

    const onChangeBackgroundColor = () => {

        const bodyElement = document.querySelector(".body");
        const magicElement = document.querySelector(".magic");

        bodyElement.classList.toggle("js-dark");
        magicElement.innerText = bodyElement.classList.contains("js-dark") ? "Let the day come!" : "Let the night come!";
    }

    buttonElement.addEventListener("click", onChangeBackgroundColor);

}