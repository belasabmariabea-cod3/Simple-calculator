document.getElementById("startCalc").addEventListener("click", function() {
    let x = Number(prompt("Enter 1st num"));
    let y = Number(prompt("Enter 2nd num"));
    let operation = prompt("Chose Your Arithmetic Operators.(+ - * /)");
   
    if (Number.isNaN(x) && Number.isNaN(y)) {
        alert("Oops! That's not a number.");
    } else {
        let total;
        if (operation =="+") total = x + y;
        else if (operation == "-") total = x - y;
        else if (operation == "*") total = x * y;
        else if (operation == "/") total = y ? x / y :"Sorry it cannot divide into a ZERO.";
        else total = "OPPS INVALID OPERATORS!!";

        alert("Result: " + total);
    }
});
