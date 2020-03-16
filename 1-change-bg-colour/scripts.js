const colours = ["red", "orange", "yellow", "green", "blue", "purple"];
let colour = document.querySelector("body").style.backgroundColor;
let newColour = colour;

function changeBackground(){
    // Ensure that the randomly picked new colour doesn't match current background colour
    while(newColour == colour){
        newColour = colours[Math.floor(Math.random() * colours.length)];
    }
    document.body.style.backgroundColor = newColour;
    colour = newColour;
}