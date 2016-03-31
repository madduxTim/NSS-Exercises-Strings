function reversal() {
    document.getElementById("button").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("output").innerHTML += "<p>" + document.getElementById("input").value.split("").reverse().join("") + "</p>";
    })
}

function alphabits() {
    document.getElementById("button").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("output").innerHTML += "<p>" + document.getElementById("input").value.split("").sort().join("") + "</p>";
    })
}

function palindrome() {
    document.getElementById("button").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("output").innerHTML += "<p>" + document.getElementById("input").value + "</p>";
        if (document.getElementById("input").value === document.getElementById("input").value.split("").reverse().join("")) {
            document.getElementById("output").innerHTML += "<p style='color: red'>Hey, you got yerself a palindrome there Chuck!</p>"
        }
    })
}

var testString = "";
reversal(testString);
alphabits(testString);
palindrome(testString);