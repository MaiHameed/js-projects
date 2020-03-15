const colours = ["red", "orange", "yellow", "green", "blue", "purple"];
var colour, newColour = document.getElementById("body").style.backgroundColor;

function changeBackground(){
    // Ensure that the randomly picked new colour doesn't match current background colour
    while(newColour == colour){
        newColour = colours[Math.floor(Math.random() * colours.length)];
    }
    document.body.style.backgroundColor = newColour;
    colour = newColour;
}