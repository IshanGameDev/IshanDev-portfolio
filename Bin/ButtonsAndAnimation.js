document.getElementById("res").innerText = window.screen.width + "*" + window.screen.height;
document.getElementById("MenuCloseBTN").style.display = "none";


function MenuButtonOnClick() {
    document.getElementById("ItemHolder").style.display = "flex";
    document.getElementById("MenuBTN").style.display = "none";
    document.getElementById("MenuCloseBTN").style.display = "block";
}

function MenuButtonOnClose() {
    document.getElementById("ItemHolder").style.display = "none";
    document.getElementById("MenuBTN").style.display = "block";
    document.getElementById("MenuCloseBTN").style.display = "none";
}