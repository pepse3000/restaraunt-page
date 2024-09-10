import { IndexPageLoader } from "./onload.js";

export const MenuLoader = (function() {
    const loadMenuPage = function() {
        let body = document.querySelector("body");
        body.classList.add("bc-hidden");

        let content = document.querySelector(".content");
        let menuPage = document.createElement("div");
        menuPage.classList.add("menu-page");

        // Left side
        let leftSideDiv = document.createElement("div");
        let navBar = IndexPageLoader.createNavBar();

        leftSideDiv.classList.add("left-side", "menu-bk");

        createLeftContent(leftSideDiv);
        leftSideDiv.appendChild(navBar);
        menuPage.appendChild(leftSideDiv)

        IndexPageLoader.addEventsToButtons();

        // Right side
        let rightSideDiv = document.createElement("div");
        rightSideDiv.classList.add("right-side");

        createRightContent(rightSideDiv);
        menuPage.appendChild(rightSideDiv);

        content.appendChild(menuPage);
    }

    const createLeftContent = function(element) {
        let subText = document.createElement("h3");
        subText.classList.add("sub-text", "menu-text-medium", "relative");
        subText.innerText = "Check Out";

        let mainText = document.createElement("h1");
        mainText.classList.add("main-text", "menu-text-big");
        mainText.innerText = "Our Menus";

        element.appendChild(subText);
        element.appendChild(mainText);
    }

    const createRightContent = function(element) {
        // Header
        let menuHeader = document.createElement("div");
        let menuUl = document.createElement("ul");
        let menuText = ["Starters", "Lunch", "Dinner", "Drinks"];

        for (let i = 0; i < 4; i ++) {
            let menuLi = document.createElement("li");

            if (i == 0) {
                menuLi.classList.add("li-active")
            };
            menuLi.textContent = menuText[i];
            menuUl.appendChild(menuLi);
        }

        menuHeader.appendChild(menuUl);
        element.appendChild(menuHeader);

        // Menu Container
        let menuContainer = document.createElement("div");
        let menuNames = ["Starters", "Breakfast", "Dinner"];
        let defaultText = "Lorem ipsum dolor sit amet, consectetur";
        let defaultPrice = "$29";
        let menuDishNames = [
            ["Tomato Toast", "Noodle Soup", "Pumpkin Soup"],
            ["Delicious Pancakes", "Sweet Haven", "Oatmeal Spirit"],
            ["Italian Pizza", "Sea Curry", "Vegan Burger"],
        ];

        menuContainer.classList.add("menu-container");

        for (let i = 0; i < 3; i++) {
            let menuType = document.createElement("div");
            menuType.classList.add("menu-type");
            menuType.id = `m${i + 1}`

            let subText = document.createElement("h3");
            menuType.appendChild(subText);

            subText.classList.add("sub-text", "menu-text-medium");
            subText.innerText = menuNames[i];

            for (let j = 0; j < 3; j++) {
                let menuElement = document.createElement("div");
                menuElement.classList.add("menu-element");

                let imgHolder = document.createElement("div");
                imgHolder.classList.add("img-holder");
                menuElement.appendChild(imgHolder);

                let menuContent = document.createElement("div");
                menuContent.classList.add("menu-content");
                let menuName = document.createElement("h4");
                menuName.innerText = menuDishNames[i][j];
                let menuText = document.createElement("p");
                menuText.innerText = defaultText;

                menuContent.appendChild(menuName);
                menuContent.appendChild(menuText);
                menuElement.appendChild(menuContent);

                let menuPrice = document.createElement("div");
                menuPrice.classList.add("menu-price");
                menuPrice.innerText = defaultPrice;
                menuElement.appendChild(menuPrice);

                menuType.appendChild(menuElement);
            }

            menuContainer.appendChild(menuType);
        }

        element.appendChild(menuContainer);
    }

    return { loadMenuPage };

})();
