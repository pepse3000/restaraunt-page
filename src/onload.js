import { MenuLoader } from "./menu.js";

const IndexPageLoader = (function () {
    const loadIndexPage = function() {
        let content = document.querySelector(".content");
        let page = document.createElement("div");
        page.classList.add("page");

        content.appendChild(page);
        page.appendChild(createNavBar());
        addEventsToButtons();
        createMainContent(page);
    }

    const addEventsToButtons = function() {
        let buttons = document.querySelectorAll("button");

        buttons.forEach(el => {
            el.addEventListener("click", clearPage)
        })
    }

    const createNavBar = function() {
        let navBar = document.createElement("nav");
        let buttonText = ["Restaraunt", "Menu", "Contact", "Book a table"];

        buttonText.forEach(el => {
            let btn = document.createElement("button");
            btn.innerText = el;

            if (el == "Book a table") {
                btn.classList.add("black")
            }

            navBar.appendChild(btn);
        })

        return navBar;
    }

    const createMainContent = function(element) {
        let subText = document.createElement("h3");
        subText.classList.add("sub-text", "medium-font", "relative");
        subText.innerText = "The pure taste of";

        let mainText = document.createElement("h1");
        mainText.classList.add("main-text", "big-font");
        mainText.innerText = "Thailand";

        let infoText = document.createElement("p");
        infoText.classList.add("info-text");
        infoText.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsam, at quod voluptatibus earum dolorem repellendus a officiis illo rem. Laudantium quis eius nobis enim veniam nisi at deserunt dolorem!";

        element.appendChild(subText);
        element.appendChild(mainText);
        element.appendChild(infoText);
    }

    const clearPage = function() {
        if (document.querySelector(".page")) {
            let page = document.querySelector(".page");
            page.remove();
            return;
        }

        if (document.querySelector(".menu-page")) {
            let menuPage = document.querySelector(".menu-page")
            menuPage.remove();
            return;
        }
    }

    const createMenuPage = function() {
        let content = document.querySelector(".content");

        let rightSideDiv = document.createElement("div");
        let leftSideDiv = document.createElement("div");
    }

    return { loadIndexPage };
})();

export { IndexPageLoader };
