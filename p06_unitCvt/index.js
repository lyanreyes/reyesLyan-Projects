/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let lengthP = document.getElementById("len-El")
let volumeP = document.getElementById("vol-El")
let massP = document.getElementById("mass-El")

function conversion(){
    let inputNum = Number(document.getElementById("num-El").value)
    length(inputNum)
    volume(inputNum)
    mass(inputNum)
}

function length(num){
    // meters to feet, feet to meters
    let feet = (num * 3.281).toFixed(3)
    let meters = (num / 3.281).toFixed(3)
    
    lengthP.textContent = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters`
}

function volume(num){
    // liters to gallon, gallon to litters
    let liters = (num / 0.264).toFixed(3)
    let gallon = (num * 0.264).toFixed(3)
    
    volumeP.textContent = `${num} liters = ${gallon} gallons | ${num} gallons = ${liters} liters`
}

function mass(num){
    // kg to pds vv
    let kg = (num * 2.204).toFixed(3)
    let lbs = (num / 2.204).toFixed(3)
    
    massP.textContent = `${num} kilos = ${kg} pounds | ${num} pounds = ${lbs} kilos`
}
