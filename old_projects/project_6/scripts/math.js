// Name: William Grate
// Date: 10/22/22

function solve() {
    // Concept 2: Declaration (single equal sign)
    x = parseInt(numOne.value);
    y = parseInt(numTwo.value);
    answer = 0;
    
    // Concept 1: Operations
    // Concept 2: Equality
    // Could be replaced with an if-else block, but a switch-case is used instead for performance
    switch (operator.value) {
        case "add":
            answer = x + y;
            break;
        case "subtract":
            answer = x - y;
            break;
        case "multiply":
            answer = x * y;
            break;
        case "divide":
            answer = x / y;
            break;
        case "modulus":
            answer = x % y;
            break;
        case "power":
            answer = x ** y;
            break;
        default:
            break;
    }

    // Example of if-else version
    // op = operator.value
    // if (op == "add") {answer = x + y}
    // else if (op == "subtract") {answer = x - y}
    // ....
    // Could also use "===" to ensure the operator was a string

    result.textContent = answer;
}