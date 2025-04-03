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


const colors = ["#fcf7fc ","#f0f9fd ","#f6f0fd ","#f0f4fd "]; //light pink, greem, purple, blue
//const userName = prompt("What's your name?"); 
const colorChoice = prompt("Pick a background color: 0 for pink, 1 for green, 2 for purple, 3 for blue");

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
