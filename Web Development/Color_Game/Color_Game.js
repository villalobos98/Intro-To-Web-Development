// [
//     "tomato",
//     "orange",
//     "dodgerblue",
//     "mediumseagreen",
//     "gray",
//     "slateblue",
// ]

var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var text = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var winningColor = pickedColor();

//Set the color of the winning color to the H1 tag in HTML
text.textContent = winningColor;

for( var i = 0; i < squares.length; i++){
    //Set the style of the div color box to a specific color from the list
    squares[i].style.backgroundColor = colors[i];

    //Add click listener to game
    squares[i].addEventListener("click", function() {
        //Grabbed color of picked square
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === winningColor){
            messageDisplay.textContent = "CORRECT !";
            changeColors(clickedColor);
        }else{
            this.style.backgroundColor = "#cd853f";
            messageDisplay.textContent = "TRY AGAIN !"
        }
    }
    )
}

// Set all all squares to the winning
// color once the correct sqaure has been found
function changeColors(color){
    for( var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}


function pickedColor(){
    //Random number from 0 to 255
    //There will be 6 of these values.
    var randomNum = Math.floor(Math.random() * colors.length + 0);
    return colors[randomNum];
}

function generateRandomColors(num){
    var colors = [];
    for(var i = 0; i < num; i ++){
        var colorOne = Math.floor(Math.random() * 255 + 0);
        var colorTwo = Math.floor(Math.random() * 255 + 0);
        var colorThree = Math.floor(Math.random() * 255 + 0);
        var colorString = "rgb(" + String(colorOne) + ", " + String(colorTwo) + ", " + String(colorThree) + ")";
        colors.push(colorString);
    }
    return colors;
}


