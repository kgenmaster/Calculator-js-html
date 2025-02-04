const buttons = document.querySelectorAll(".btn")
const opsboard = document.querySelector(".operations")
const equalsign = document.querySelector(".equals")
const output = document.getElementsByClassName("result")

buttons.forEach((btn) => {
    btn.addEventListener ("click", (e) => {
        if (e.target.value == equalsign.value) {
            try {
                output.value = eval(opsboard.value)
            }
            catch (error) {
                output.value = 'Error'
            }
        }

        opsboard.value += e.target.textContent
    })
} )