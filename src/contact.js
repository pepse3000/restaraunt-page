import { IndexPageLoader } from "./onload.js";

export const ContactLoader = (function() {
    const loadContactPage = function() {
        let body = document.querySelector("body");

        if (!body.classList.contains("bc-hidden")) {
            body.classList.add("bc-hidden");
        }

        let content = document.querySelector(".content");
        let menuPage = document.createElement("div");
        menuPage.classList.add("menu-page");

        // Left side
        let leftSideDiv = document.createElement("div");
        let navBar = IndexPageLoader.createNavBar();

        leftSideDiv.classList.add("left-side", "contact-bk");

        createLeftContent(leftSideDiv);
        leftSideDiv.appendChild(navBar);
        menuPage.appendChild(leftSideDiv)

        IndexPageLoader.addEventsToButtons();

        // Right side
        let rightSideDiv = document.createElement("div");
        rightSideDiv.classList.add("right-side", "right-contact");
        createRightContent(rightSideDiv);
        menuPage.appendChild(rightSideDiv);

        content.appendChild(menuPage);
    }

    const createLeftContent = function(element) {
        let subText = document.createElement("h3");
        subText.classList.add("sub-text", "menu-text-medium", "relative");
        subText.innerText = "Contact";

        let mainText = document.createElement("h1");
        mainText.classList.add("main-text", "menu-text-big");
        mainText.innerText = "Get in Touch";

        element.appendChild(subText);
        element.appendChild(mainText);
    }

    const createRightContent = function(element) {
        let defaultText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dolore unde? Magni laborum sunt cumque consequatur nesciunt praesentium ad maiores a distinctio nisi dolorem, repellendus, harum tempora laudantium illo. Autem.";

        let subText = document.createElement("h3");
        subText.classList.add("sub-text", "menu-text-medium");
        subText.textContent = "Our Contacts";

        let defTextOne = document.createElement("p");
        let defTextTwo = document.createElement("p");

        defTextOne.textContent = defaultText;
        defTextTwo.textContent = defaultText;

        let contactButton = document.createElement("button");
        contactButton.classList.add("contact-btn");
        contactButton.textContent = "Contact Us!";

        element.appendChild(subText);
        element.appendChild(defTextOne);
        element.appendChild(defTextTwo);
        element.appendChild(contactButton);
    }

    return { loadContactPage };
})();
