function append(value) {
    const inputField = document.getElementById("input")
    if(inputField.value === "0" || inputField.value === "Error") {
        inputField.value = value
    }else {
        inputField.value += value
    }
}

function clearInput() {
    const inputField = document.getElementById("input")
    inputField.value = "0"
}

function calculate() {
    const inputField = document.getElementById("input")
    try {
        const result = eval(inputField.value)
        inputField.value = result
    } catch (error) {
        inputField.value = "Error"
    }
}