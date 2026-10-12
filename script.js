/* Function to filter marine animals */
function showAnimals(type) {
    var animals = document.getElementsByClassName("animal");

    for (var i = 0; i < animals.length; i++) {
        var animalType = animals[i].getAttribute("data-type");

        if (type == "all") {
            animals[i].style.display = "block";
        }
        else if (type == animalType) {
            animals[i].style.display = "block";
        }
        else {
            animals[i].style.display = "none";
        }
    }
}

/* Function to count completed actions */
function updateProgress() {
    var checkboxes = document.querySelectorAll(".checklist input");
    var completed = 0;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked == true) {
            completed++;
        }
    }

    document.getElementById("progress").innerHTML =
        "You have completed " + completed + " out of 4 actions.";
}

/* Function to submit the ocean pledge */
var totalPledges = 0;

function makePledge(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var pledge = document.getElementById("pledge").value;

    if (name == "" || pledge == "") {
        document.getElementById("message").innerHTML =
            "Please fill in all the details.";
    }
    else {
        totalPledges = totalPledges + 1;

        document.getElementById("count").innerHTML = totalPledges;

        document.getElementById("message").innerHTML =
            "Thank you, " + name + "! Your pledge is to " + pledge + ".";

        document.getElementById("name").value = "";
        document.getElementById("pledge").value = "";
    }
}

/* Function to check the quiz answer */
function checkAnswer(answer) {
    if (answer == "correct") {
        document.getElementById("answer").innerHTML =
            "Correct! Mangrove forests protect coastlines and provide shelter for young fish.";
    }
    else {
        document.getElementById("answer").innerHTML =
            "Wrong answer! The correct answer is Mangrove Forests.";
    }
}
