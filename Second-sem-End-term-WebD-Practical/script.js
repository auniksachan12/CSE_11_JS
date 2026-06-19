function checkNumber() {

    let number = document.getElementById("number").value;
    let result = document.getElementById("result");

    if (number === "") {
        result.innerHTML = "Please enter a number!";
        result.className = "error";
    }
    else if (number % 2 === 0) {
        result.innerHTML = number + " is an Even Number";
        result.className = "even";
    }
    else {
        result.innerHTML = number + " is an Odd Number";
        result.className = "odd";
    }

}