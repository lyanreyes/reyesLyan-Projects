// assign a value to each of the button ids

// music area
const clickSound = new Audio("click.mp3")
clickSound.volume = 0.5
const matchSound = new Audio("win.mp3")
matchSound.volume = 1.0

//reset game and images
const refreshBtn = document.getElementById("refreshBtn")

refreshBtn.addEventListener("click", () => {
    restartGame(false);
})

// add a place holder image until flipped, revealing itselfs
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")
const btn7 = document.getElementById("btn7")
const btn8 = document.getElementById("btn8")
const btn9 = document.getElementById("btn9")
const btn10 = document.getElementById("btn10")
const btn11 = document.getElementById("btn11")
const btn12 = document.getElementById("btn12")
const btn13 = document.getElementById("btn13")
const btn14 = document.getElementById("btn14")
const btn15 = document.getElementById("btn15")
const btn16 = document.getElementById("btn16")

const buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8,
    btn9, btn10, btn11, btn12, btn13, btn14, btn15, btn16
]

// to duplicate 
const imgPath = [
    "akatsuki.jpg", "aot.jpg", "bbulls.jpg", "ben10.jpg",
    "bluelock.jpg", "demon.jpg", "fireforce.jpg", "goku.jpg",
    "gomu.jpg", "hinata.jpg", "hxh.jpg", "L.jpg", 
    "ms.jpg", "naruto.jpg", "onepiece.jpg", "pokemon.jpg", 
    "rinnegan.jpg", "uchiha.jpg", "uzumaki.jpg", "whitebeard.jpg"
]

let holder = []
let counter = 0

function restartGame(keepScore = false) {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
    moves = 0;
    movesDisplay.textContent = moves;
    holder = [];

    // Only reset round score if this was a manual refresh
    if (!keepScore) {
        score = 0;
        scoreDisplay.textContent = score;
    }

    // regenerate images
    generateImg();
    assignImg();

    // reset card visuals
    buttons.forEach(btn => {
        btn.classList.remove("matched");
        btn.style.backgroundImage = "url(qblock.jpg)";
    });
}


function generateImg() {
    holder = []; // clear here to ensure fresh start
    let randomNum;
    let generatedImg;
    for (let i = 0; i < buttons.length / 2; i++) {
        do {
            randomNum = Math.floor(Math.random() * imgPath.length);
            generatedImg = imgPath[randomNum];
        } while (holder.includes(generatedImg));

        holder.push(generatedImg);
        holder.push(generatedImg);
    }
}


//fisher-yates algorithm
function shuffleIndex(array){
    for (let i = array.length - 1; i > 0; i--){
        const randoms = Math.floor(Math.random() * (i+1));

        [array[i], array[randoms]] = [array[randoms], array[i]]
    }
}


function assignImg(){
    shuffleIndex(holder);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].dataset.image = `images/${holder[i]}`;
        buttons[i].style.backgroundImage = "url(qblock.jpg)"
    }
}

generateImg()
assignImg()
console.log(holder)

//// game mechanic

function reset(){
    button.removeAttribute("style")
}

let firstCard = null;
let secondCard = null;
let lockBoard = false; // prevent clicking while waiting

function show(button) {
    if (lockBoard || button === firstCard || button.classList.contains("matched")) {
        return; // don’t flip if board is locked, same card, or already matched
    }

    clickSound.currentTime = 0;
    clickSound.play();

    button.style.backgroundImage = `url(${button.dataset.image})`;

    if (!firstCard) {
        firstCard = button;
    } else {
        secondCard = button;
        checkMatch();
    }
}


function checkMatch() {
    moves++;
    movesDisplay.textContent = moves;

    if (firstCard.dataset.image === secondCard.dataset.image) {
        // Match sound
        matchSound.currentTime = 0;
        matchSound.play();

        score++;
        scoreDisplay.textContent = score;

        // Lock matched cards
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");

        resetTurn();

        // 🏆 WIN CHECK
        if (score === buttons.length / 2) {
            totalScore += score;
            totalScoreDisplay.textContent = totalScore;

            setTimeout(() => {
                alert(`🎉 You won in ${moves} moves! Restarting...`);
                restartGame(true); // keep score after winning
            }, 500);
        }

    } else {
        // Not a match → flip back
        lockBoard = true;
        setTimeout(() => {
            firstCard.style.backgroundImage = "url(qblock.jpg)";
            secondCard.style.backgroundImage = "url(qblock.jpg)";
            resetTurn();
        }, 1000);
    }
}




function resetTurn() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

let moves = 0;
let score = 0;

const movesDisplay = document.getElementById("moves");
const scoreDisplay = document.getElementById("score");

