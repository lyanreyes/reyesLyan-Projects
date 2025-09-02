const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const charNum = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const charSym = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const charNumSym = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

// the buttons to be clicked
let generateEl = document.getElementById("generate-el")
let passEl = document.getElementById("pass-el")
let passE2 = document.getElementById("pass-el2")
let numberEl = document.getElementById("num-el")
let symbolEl = document.getElementById("sym-el")

//toggle button logic
let withNum = true
let withSym = true
numberEl.addEventListener("click", function() {
    withNum = !withNum
    numberEl.textContent = withNum ?"W/ Numbers: On" : "W/ Numbers: Off"
})
symbolEl.addEventListener("click", function() {
    withSym = !withSym
    symbolEl.textContent = withSym ? "W/ Symbols: On" : "W/ Symbols: Off"
})

// generate password button
generateEl.addEventListener("click", function(){
    let pass1 = generatePassword()
    let pass2 = generatePassword()
    passEl.textContent = pass1
    passE2.textContent = pass2
})

// allow to copy paste when clicking the password buttons
passEl.addEventListener("click", function(){
    const temp = document.createElement("textarea")
    temp.value = passEl.textContent
    document.body.appendChild(temp)
    temp.select()
    document.execCommand("copy")
    document.body.removeChild(temp)
    alert("Copied: " + passEl.textContent)
})
passE2.addEventListener("click", function(){
    const temp = document.createElement("textarea")
    temp.value = passEl.textContent
    document.body.appendChild(temp)
    temp.select()
    document.execCommand("copy")
    document.body.removeChild(temp)
    alert("Copied: " + passEl.textContent)
})

//the password generator function
function generatePassword() {
    password = ""
    
    //conditional first to determine the toggle
    if (withNum === true && withSym === true) {
        for(let i = 0; i < 15; i ++) {
            let randomizer = Math.floor(Math.random() * charNumSym.length)
            password += charNumSym[randomizer]
        }
    } else if (withNum === true && withSym === false) {
        for(let i = 0; i < 15; i ++) {
            let randomizer = Math.floor(Math.random() * charNum.length)
            password += charNum[randomizer]
        }
    } else if (withNum === false && withSym === true) {
        for(let i = 0; i < 15; i ++) {
            let randomizer = Math.floor(Math.random() * charSym.length)
            password += charSym[randomizer]
        }
    } else {
        for(let i = 0; i < 15; i ++) {
            let randomizer = Math.floor(Math.random() * characters.length)
            password += characters[randomizer]
        }
    }
    return password
}