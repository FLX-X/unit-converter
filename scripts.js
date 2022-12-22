const convertBtn = document.querySelector(".header-btn")
const inputEl = document.querySelector(".header-input")
const lengthEl = document.querySelector(".length-paragraph")
const volumeEl = document.querySelector(".volume-paragraph")
const massEl = document.querySelector(".mass-paragraph")

convertBtn.addEventListener("click", function() {
    lengthRender()
    volumeRender()
    massRender()
    inputEl.placeholder = inputEl.value
    inputEl.value = ""
})

function lengthRender() {
    let result = (inputEl.value * 3.28084).toFixed(3)
    let result2 = (inputEl.value * 0.3048).toFixed(3)
    lengthEl.textContent = `${inputEl.value} meteres = ${result} feet | ${inputEl.value} feet = ${result2} meters`
}

function volumeRender() {
    let result = (inputEl.value * 0.264172).toFixed(3)
    let result2 = (inputEl.value * 3.78541).toFixed(3)
    volumeEl.textContent = `${inputEl.value} liters = ${result} gallons | ${inputEl.value} gallons = ${result2} liters`
}

function massRender() {
    let result = (inputEl.value * 2.20462).toFixed(3)
    let result2 = (inputEl.value * 0.453592).toFixed(3)
    massEl.textContent = `${inputEl.value} kilos = ${result} pounds | ${inputEl.value} pounds = ${result2} kilos`
}