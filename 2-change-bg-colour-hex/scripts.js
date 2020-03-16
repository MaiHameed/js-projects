let colour = document.querySelector("body").style.backgroundColor;
let newColour = colour;

function changeBackground(){
    // Ensure that the randomly picked new colour doesn't match current background colour
    while(newColour == colour){
        // There are 16777216 different hex colour codes. Randomly pick one, then convert decimal to hex
        newColour = "#" + Math.floor(Math.random() * 16777217).toString(16).toUpperCase();
    }
    document.querySelector("body").style.backgroundColor = newColour;
    document.getElementById("colourText").innerHTML = newColour;
    colour = newColour;
}