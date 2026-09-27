const logo = document.querySelector(".logo");
const main = document.getElementById("main");

logo.addEventListener("click", (event) => {
    event.preventDefault();

    main.scrollIntoView({
        behavior: "scroll",
        block: "start"
    });
    window.location.hash = "#main";
});