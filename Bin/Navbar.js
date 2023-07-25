function DarkMode_() {
    var Icon = document.getElementById("_DarkModeICON").innerHTML;
    var Dark = document.getElementById("_darkMode");
    var Dark_Childs = document.getElementsByClassName("DarkMode");
    if (Icon == "dark_mode") {
        for (let index = 0; index < Dark_Childs.length; index++) {
            const element = Dark_Childs[index];
            element.style.backgroundColor = "rgba(40,40,40,1)"
            element.style.color = "#FFF"
        }
        document.getElementById("_DarkModeICON").innerHTML = "sunny";
        Dark.style.transform = "translate(-5px, 5px)";
        Dark.style.color = "#FFF";
        Dark.style.backgroundColor = "green";
        Dark.style.border = "None";
        Dark.style.boxShadow = "None";
        Dark.childNodes[0].nextSibling.style.backgroundColor = "green";



    } else {
        for (let index = 0; index < Dark_Childs.length; index++) {
            const element = Dark_Childs[index];
            element.style.backgroundColor = "#FFF"
            element.style.color = "rgba(40,40,40,1)"
        }
        document.getElementById("_DarkModeICON").innerHTML = "dark_mode";
        Dark.style.transform = "translate(0px, 0px)";
        Dark.style.color = "#black";
        Dark.style.backgroundColor = "white";
        Dark.style.border = "1px solid rgba(0, 0, 0, 0.2)";
        Dark.style.boxShadow = " -5px 5px rgba(0, 0, 0, 0.5)";
        Dark.childNodes[0].nextSibling.style.backgroundColor = "#FFF"

    }


}

function Home() {
    var HomePannel = document.getElementById("HomePannel");
    var PlayerPannel = document.getElementById("PlayerPannel");
    if (HomePannel.style.display == "flex") {
        HomePannel.style.display = "none";
        PlayerPannel.style.display = "flex";
    } else {
        HomePannel.style.display = "flex"
        PlayerPannel.style.display = "none";
    }
}

function Player() {
    var HomePannel = document.getElementById("HomePannel");
    var PlayerPannel = document.getElementById("PlayerPannel");
    if (PlayerPannel.style.display == "flex") {
        PlayerPannel.style.display = "none";
        HomePannel.style.display = "flex"
    } else {
        PlayerPannel.style.display = "flex"
        HomePannel.style.display = "none"
    }
}
var items = document.getElementsByClassName("Info");
for (let index = 0; index < items.length; index++) {
    const element = items[index];
    element.innerHTML = window.screen.width + "*" + window.screen.height;
}

function NavMenu() {
    var MenuBTN = document.getElementById("MenuBTN");
    var NavItemHolder = document.getElementById("NavItemHolder");
    if (MenuBTN.innerHTML == "menu") {
        NavItemHolder.style.transform = "scale(100%)";
        NavItemHolder.style.transform = "translateX(100%);";
        MenuBTN.innerHTML = "close";
    } else {
        MenuBTN.innerHTML = "menu"
        NavItemHolder.style.transform = "scale(0%)";
        NavItemHolder.style.transform = "translateX(-100%);";
    }
}