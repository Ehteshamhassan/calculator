let display = document.getElementById("display");
function appdisp(v) {
    display.value += v;
}
function clearDisplay() {
    display.value = "";
}
function out() {
    display.value = eval(display.value);
}