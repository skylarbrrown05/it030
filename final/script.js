// Check if name and theme are stored in localStorage
let name = localStorage.getItem("username");
let theme = localStorage.getItem("theme");

// If not stored yet, prompt the user and store values
if (!name || !theme) {
    name = prompt("What's your name?");
    theme = prompt("Do you prefer light or dark mode?").toLowerCase();

    // Save to localStorage
    localStorage.setItem("username", name);
    localStorage.setItem("theme", theme);
}

// Apply theme class to <body>
document.addEventListener("DOMContentLoaded", function () {
    if (theme === "dark") {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.add("light-theme");
    }

    // Insert greeting text
    const greeting = document.getElementById("welcome-message");
    if (greeting && name) {
        greeting.textContent = `Welcome back, ${name}`;
    }
});

    





//must include: 
// color options array
//prompt for user input
//store input in an output
//array check (needed)
//apply color to background 
