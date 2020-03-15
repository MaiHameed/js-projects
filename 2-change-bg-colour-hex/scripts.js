var colour, newColour = document.getElementById("body").style.backgroundColor;

function changeBackground(){
    // Ensure that the randomly picked new colour doesn't match current background colour
    while(newColour == colour){
        // There are 16777216 different hex colour codes. Randomly pick one, then convert decimal to hex
        newColour = "#" + Math.floor(Math.random() * 16777217).toString(16).toUpperCase();
    }
    document.body.style.backgroundColor = newColour;
    document.getElementById("colourText").innerHTML = newColour;
    colour = newColour;
}