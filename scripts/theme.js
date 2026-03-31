//---------------------------------------Base Code---------------------------------
let dark_mode_toggle = document.querySelector("#theme-toggle");
function darkToggle() {document.body.classList.toggle("dark");
if (document.body.classList.contains("dark")) {dark_mode_toggle.textContent = "Switch to Light Mode";}
else {dark_mode_toggle.textContent = "Switch to Dark Mode";}};
dark_mode_toggle.addEventListener("click", darkToggle);


