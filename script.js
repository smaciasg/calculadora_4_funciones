var signo = "";
var num1 = "";
var num2 = "";
var img_display = document.querySelector("#display");

function setOP(element) {
    signo = element;
    img_display.innerText = element;
    return signo;
}

function press(element) {
    if(signo === ""){
        num1 = num1 + element;
        img_display.innerText = num1;
        return parseFloat(num1);
    } else {
        num2 = num2 + element;
        img_display.innerText = num2;
        return parseFloat(num2);
    }
}

function calculate(){
    num1 = eval(num1+ signo +num2);
    num2 = "";
    img_display.innerText = num1;
}

function clr() {
    num1 = "";
    num2 = "";
    signo = "";
    img_display.innerText = 0;
}

