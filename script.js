var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var randomButton = document.querySelector(".random");

setInitialGradient();

// set gradient to match color inputs at start (is there a way to not hard-code this?)
function setInitialGradient() {
    color1.value = "#FFFF00";
    color2.value = "#FF0000";
    setGradient(); // set gradient to match color inputs at start
}

// sets gradient to whatever values color1 and color2 are set to
function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

// creates a random hexidecimal value
function createHexValue() {
    var newNumber = "#";
    var temp;
    for (var i = 0; i < 6; i++) {
        temp = Math.floor(Math.random() * 16);
        if (temp > 9) { // if number is higher than 9, change to appropriate hex value
            switch (temp) {
                case 10:
                    temp = "A";
                    break;
                case 11:
                    temp = "B";
                    break;
                case 12:
                    temp = "C";
                    break;
                case 13:
                    temp = "D";
                    break;
                case 14:
                    temp = "E";
                    break;
                case 15:
                    temp = "F";
                    break;
            }
        }
        newNumber = newNumber + temp;
    }
    return newNumber;
}

function randomize() {
    color1.value = createHexValue();
    color2.value = createHexValue();
    setGradient();
}

randomButton.addEventListener("click", randomize)
color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
