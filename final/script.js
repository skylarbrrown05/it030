// Check and retrieve cookie values
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let c of cookies) {
    const [key, value] = c.split('=');
    if (key === name) return decodeURIComponent(value);
    }
    return null;
    }
    let userName = getCookie('name');
    let userTheme = getCookie('theme');
    if (!userName || !userTheme) {
    userName = prompt("What's your name?");
    userTheme = prompt("Do you prefer dark or light theme?").toLowerCase();
    document.cookie = `name=${userName}; max-age=${60 * 60 * 24 * 7}; path=/`;
    document.cookie = `theme=${userTheme}; max-age=${60 * 60 * 24 * 7}; path=/`;
    }
    // Apply personalized greeting
    const welcome = document.getElementById("welcome-message");
    if (welcome && userName) {
    welcome.textContent = `Welcome back, ${userName}`;
    }
    // Apply theme
    if (userTheme === 'dark') {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#f1f1f1";
    } else {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#121212";
    }
    

const colors = ["rgb(180, 176, 176)","rgb(233, 195, 201)","rgb(52, 51, 51)","rgb(192, 193, 213)"]; //grey, red, black, blue
//const userName = prompt("Whats your name?"); 
const colorChoice = parseInt(prompt("Pick a background color: 0 for grey, 1 for red, 2 for black, 3 for blue"));

// Display a message in the browser console
console.log("The first color in the array is:", colors[0]);

const userInfo = {
    name: userName,
    selectedColor: colors[colorChoice]
    };
    // Complete this line:
    document.body.style.backgroundColor = userInfo.selectedColor;
    console.log("Background color set to:", userInfo.selectedColor);



//must include: 
// color options array
//prompt for user input
//store input in an output
//array check (needed)
//apply color to background 
