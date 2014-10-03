var gestures = ["rock", "paper", "scissors", "lizard", "spock"];

var rules = {
    rock: {
        scissors: "breaks",
        lizard: "crushes"
    },
    paper: {
        rock: "covers",
        spock: "disproves"
    },
    scissors: {
        paper: "cuts",
        lizard: "decapitates"
    },
};