const currentLocation = window.location.href;
const page = currentLocation.split("/").at(-1).split(".")[0];

document.getElementById(page).classList.add("active");