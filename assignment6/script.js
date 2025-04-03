// Display a message in the browser console
console.log("CSS + JavaScript is powerful!");

// Show an alert message when the page loads
//window.onload = function () {
    //alert("Welcome to my webpage!");
//};

// Function to toggle between light mode and dark mode
function changeTheme() {
    document.body.classList.toggle("dark-mode");
}


  color:black;
const colors = ["rgb(180, 176, 176)","rgb(233, 195, 201)","rgb(35, 31, 32)","rgb(192, 193, 213)"]; //grey, red, black, blue
const userName = prompt("What's your name?"); 
const colorChoice = parseInt(prompt("Pick a background color: 0 for grey, 1 for red, 2 for black, 3 for blue"));

console.log("The first color in the array is:", colors[0]);

const userInfo = {
    name: userName,
    selectedColor: colors[colorChoice]
    };
    // Complete this line:
    document.body.style.backgroundColor = userInfo.selectedColor;
    
//must include: 
// color options array
//prompt for user input
//store input in an output
//array check (needed)
//apply color to background 
