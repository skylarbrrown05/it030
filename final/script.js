// Check if name and theme are stored in localStorage
let name = localStorage.getItem("username");
let theme = localStorage.getItem("theme");


if (!name || !theme) {
    name = prompt("What's your name?");
    theme = prompt("Do you prefer light or dark mode?").toLowerCase();

    // save 
    localStorage.setItem("username", name);
    localStorage.setItem("theme", theme);
}

// apply theme
function applyTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
    } else {
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
    }
}
document.addEventListener("DOMContentLoaded", function () {
  
    applyTheme(theme);

 
    const greeting = document.getElementById("welcome-message");
    if (greeting && name) {
        greeting.textContent = `Welcome back, ${name}`;
    }
    const toggleBtn = document.getElementById("toggle-theme");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            //change theme
            if (theme === "dark") {
                theme = "light";
            } else {
                theme = "dark";
            }

            // apply theme
            applyTheme(theme);

            // save in storage
            localStorage.setItem("theme", theme);
        });
    }
    
});
