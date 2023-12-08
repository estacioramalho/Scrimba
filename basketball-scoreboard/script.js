let homescoreContainer = document.querySelector("#homescorecontainer");
let GuestScoreContainer = document.querySelector("#guestscorecontainer");
let homescore = 0;
let guestscore = 0;


//Home Score Functions
function addHomeScore1 () {
    homescore += 1;
    document.getElementById("homescorecontainer").innerHTML = homescore;
}

function addHomeScore2 () {
    homescore += 2;
    document.getElementById("homescorecontainer").innerHTML = homescore;
}

function addHomeScore3 () {
    homescore += 3;
    document.getElementById("homescorecontainer").innerHTML = homescore;
}


//Guest Score Functions
function addGuestScore1 () {
    guestscore += 1;
    document.getElementById("guestscorecontainer").innerHTML = guestscore;
}

function addGuestScore2 () {
    guestscore += 2;
    document.getElementById("guestscorecontainer").innerHTML = guestscore;
}

function addGuestScore3 () {
    guestscore += 3;
    document.getElementById("guestscorecontainer").innerHTML = guestscore;
}