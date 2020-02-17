const specView = document.getElementById("specView");
const menu = document.getElementById("menu");
const screenDetails = document.getElementById("screenDetails");
const cameraDetails = document.getElementById("cameraDetails");
const memoryDetails = document.getElementById("memoryDetails");
const platformDetails = document.getElementById("platformDetails");

document.getElementById("screenPrompt").addEventListener('click', function() {
    screenDetails.classList.remove("disabled");
    this.classList.add("disabled");
})

document.getElementById("cameraPrompt").addEventListener('click', function() {
    cameraDetails.classList.remove("disabled");
    this.classList.add("disabled");
})

document.getElementById("memoryPrompt").addEventListener('click', function() {
    memoryDetails.classList.remove("disabled");
    this.classList.add("disabled");
})

document.getElementById("platformPrompt").addEventListener('click', function() {
    platformDetails.classList.remove("disabled");
    this.classList.add("disabled");
})

document.getElementById("characteristicsButton").addEventListener('click', function() {
    menu.classList.remove("disabled");
})

document.getElementById("platformSpec").addEventListener('click', function() {
    specView.classList.remove("disabled");
    menu.classList.add("disabled");
})

document.getElementById("closeTab").addEventListener('click', function() {
    specView.classList.add("disabled");
    menu.classList.remove("disabled");
})