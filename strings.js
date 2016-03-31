function reversal() {
    document.getElementById("button").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("output").innerHTML += "<p>" + document.getElementById("input").value.split("").reverse().join("") + "</p>";
    })
}

function alphabits() {
    document.getElementById("button").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("output").innerHTML += "<p>" + document.getElementById("input").value.sort("") + "</p>";
    })
}

function palindrome() {
    document.getElementById("button").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("output").innerHTML += "<p>" + document.getElementById("input").value + "</p>";
    })
}

var testString = "";
reversal(testString);
alphabits(testString);
palindrome(testString);