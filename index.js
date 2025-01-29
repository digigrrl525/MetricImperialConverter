/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meter = 3.281
const liter = 0.264
const kilo = 2.204
const convertBtn = document.getElementById("convert-btn")
const lengthText = document.getElementById("length-p")
const volumeText = document.getElementById("volume-p")
const massText = document.getElementById("mass-p")
let number = document.getElementById("numberToConvert")

convertBtn.addEventListener("click", function() {
    if (number.value > 0){
     return getValue()
    } else {
        number.value = 0
        lengthText.textContent = null
        volumeText.textContent = null
        massText.textContent = null
    }
})


function getValue() {
    // 20 meters = 65.616 feet | 20 feet = 6.096 meters
    lengthText.textContent = `${number.value} meters = ${(number.value * meter).toFixed(3)} feet | 
                              ${number.value} feet = ${(number.value / meter).toFixed(3)} meters `
    
    volumeText.textContent = `${number.value} liters = ${(number.value * liter).toFixed(3)} gallons | 
                              ${number.value} gallons = ${(number.value / liter).toFixed(3)} liters `

    massText.textContent = `${number.value} kilos = ${(number.value * kilo).toFixed(3)} pounds | 
                              ${number.value} pounds = ${(number.value / kilo).toFixed(3)} kilos `
    
    return number.value
}

// take number entered into input on button click and convert it 
// display conversion in the p of each individual card