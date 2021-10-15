input.onButtonPressed(Button.A, function () {
    x = "" + x + "A"
    Check()
})
function Check () {
    if (count == 3 && x == sequence) {
        basic.showString("7")
        basic.pause(200)
        control.reset()
    } else if (count == 3 && x != sequence) {
        basic.showIcon(IconNames.No)
        x = ""
        count = -1
        basic.pause(500)
        basic.clearScreen()
    }
    count += 1
}
input.onButtonPressed(Button.B, function () {
    x = "" + x + "B"
    Check()
})
let sequence = ""
let count = 0
let x = ""
x = ""
count = 0
sequence = "BBAB"
