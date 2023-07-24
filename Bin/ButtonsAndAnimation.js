function DarkModeSwitch() {
    var NightMode = false;
    var ModeLogo = document.getElementById("DarkLogo");
    if (ModeLogo.style.backgroundColor == "green") {
        NightMode = false;
        ModeLogo.style.boxShadow = "-5px 5px 0px rgba(0, 0, 0, 0.2)";
        ModeLogo.style.border = "1px solid rgba(0, 0, 0, 0.2)";
        ModeLogo.style.transform = "translate(0px, 0px)";
        ModeLogo.style.color = "black";
        ModeLogo.style.backgroundColor = "white";
        const DarkItems = document.getElementsByClassName("DarkMode");
        for (let index = 0; index < DarkItems.length; index++) {
            const element = DarkItems[index];
            element.style.backgroundColor = "#fff";
            element.style.color = "rgb(35,35,35)";

        }
    } else {
        NightMode = true;
        ModeLogo.style.boxShadow = "none";
        ModeLogo.style.border = "none";
        ModeLogo.style.transform = "translate(-5px, 5px)";
        ModeLogo.style.color = "white";

        const DarkItems = document.getElementsByClassName("DarkMode");
        for (let index = 0; index < DarkItems.length; index++) {
            const element = DarkItems[index];
            element.style.backgroundColor = "rgb(35,35,35)";
            element.style.color = "#fff";
        }
        ModeLogo.style.backgroundColor = "green";
    }

}