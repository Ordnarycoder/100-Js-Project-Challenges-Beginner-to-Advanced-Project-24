const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result_area = document.getElementById("result");

rock.addEventListener("click", () => {
    let result = computer_choice();
    if (result === "rock") {
        result_area.value = "It's a tie";
    } else if (result === "paper") {
        result_area.value = "You lose!";
    } else if (result === "scissors") {
        result_area.value = "You win!";
    }
});

paper.addEventListener("click", () => {
    let result = computer_choice();
    if (result === "rock") {
        result_area.value = "You win!";
    } else if (result === "paper") {
        result_area.value = "It's a tie!";
    } else if (result === "scissors") {
        result_area.value = "You lose!";
    }
});

scissors.addEventListener("click", () => {
    let result = computer_choice();
    if (result === "rock") {
        result_area.value = "You lose!";
    } else if (result === "paper") {
        result_area.value = "You win!";
    } else if (result === "scissors") {
        result_area.value = "It's a tie!";
    }
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computer_choice() {
    let choice = getRandomInt(1, 3);
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
