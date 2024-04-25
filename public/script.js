let displayValue = '';
let resultValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").textContent = displayValue;
}

function clearDisplay() {
    displayValue = '';
    resultValue = '';
    document.getElementById("display").textContent = '0';
    document.getElementById("result").innerHTML = '= <span class="text-orange-500">0</span>';
}

function calculate() {
    try {
        resultValue = eval(displayValue);
        document.getElementById("result").innerHTML = '= <span class="text-orange-500">' + resultValue + '</span>';
    } catch (error) {
        document.getElementById("result").innerHTML = '= <span class="text-orange-500">Error</span>';
    }
}

function calculatePercentage() {
    try {
        resultValue = eval(displayValue) / 100;
        document.getElementById("result").innerHTML = '= <span class="text-orange-500">' + resultValue + '</span>';
    } catch (error) {
        document.getElementById("result").innerHTML = '= <span class="text-orange-500">Error</span>';
    }
}