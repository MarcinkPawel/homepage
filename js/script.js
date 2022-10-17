{
    const hello = () => {
        console.log("Hi there, I hope you enjoy this journey as me.")
    }

    const buttonElement = document.querySelector(".button");

    const onChangeBackgroundColor = () => {

        const bodyElement = document.querySelector(".body");
        const magicElement = document.querySelector(".magic");

        bodyElement.classList.toggle("dark");
        magicElement.innerText = bodyElement.classList.contains(".body--dark") ? "Let the night come!" : "Let the day come!";
    }

    buttonElement.addEventListener("click", onChangeBackgroundColor);

}