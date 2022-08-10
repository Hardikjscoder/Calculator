const output = document.getElementById("output")
let buttons = document.querySelectorAll("button")
const audio = new Audio("./assets/sound.wav")
let outputValue = ""

for (button of buttons) {
    button.addEventListener("click", (e) => {
        buttonText = e.target.innerText
        audio.play()

        if (buttonText == "×") {
            buttonText = "*"
            outputValue += buttonText
            output.value = outputValue
        }

        else if (buttonText == "^") {
            buttonText = "**"
            outputValue += buttonText
            output.value = outputValue
        }

        else if (buttonText === "÷") {
            buttonText = "/"
            outputValue += buttonText
            output.value = outputValue
        }

        else if (buttonText === "π") {
            buttonText = "3.14"
            outputValue += buttonText
            output.value = outputValue
        }

        else if (buttonText === "e") {
            buttonText = "2.71828182846"
            outputValue += buttonText
            output.value = outputValue
        }

        else if (buttonText == "√") {
            outputValue = Math.sqrt(outputValue)
            output.value = outputValue
        }

        else if (buttonText == "C") {
            outputValue = ""
            output.value = outputValue
        }

        else if (buttonText == "←") {
            outputValue = outputValue.slice(0, -1)
            output.value = outputValue
        }

        else if (buttonText == "=") {
            output.value = eval(outputValue)
        }

        else {
            outputValue += buttonText
            output.value = outputValue
        }
    })
}

output.addEventListener("keydown", () => {
    alert("Please do not type...")
})
