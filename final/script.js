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

// Function to apply the theme
function applyTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
    } else {
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
    }
}

// Apply theme class to <body> on page load
document.addEventListener("DOMContentLoaded", function () {
    // Apply stored theme to body
    applyTheme(theme);

    // Insert greeting text
    const greeting = document.getElementById("welcome-message");
    if (greeting && name) {
        greeting.textContent = `Welcome back, ${name}`;
    }

    // Add theme toggle functionality
    const toggleBtn = document.getElementById("toggle-theme");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            // Toggle theme
            if (theme === "dark") {
                theme = "light";
            } else {
                theme = "dark";
            }

            // Apply the new theme to the body
            applyTheme(theme);

            // Save the new theme in localStorage
            localStorage.setItem("theme", theme);
        });
    }
    
});
