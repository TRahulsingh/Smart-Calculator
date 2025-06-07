// Append characters to the display
function append(value) {
    document.getElementById('display').value += value;
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Calculate square of the current value
function square() {
    let current = document.getElementById('display').value;
    if (current) {
        document.getElementById('display').value = Math.pow(Number(current), 2);
    }
}

// Evaluate the final result
function calculate() {
    let input = document.getElementById('display').value;
    try {
        let result = eval(input);
        document.getElementById('display').value = result;
    } catch (error) {
        alert("Invalid Expression");
    }
}
