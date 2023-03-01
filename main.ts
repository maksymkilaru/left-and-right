let usersequence: number[] = []
let randomside = 0
let index = 0
let correctsequence: number[] = []
let complexity = 2
let level = 1
let speedsequence = 1000
let win = true
basic.forever(function () {
    correctsequence = []
    correctsequence = []
    basic.showString("" + level)
    basic.pause(1000)
    index = 0
    for (let index2 = 0; index2 < complexity; index2++) {
        randomside = randint(0, 1)
        correctsequence[index] = randomside
        index += 1
        if (randomside == 0) {
            basic.showLeds(`
                # # # . .
                # # # . .
                # # # . .
                # # # . .
                # # # . .
                `)
            basic.pause(speedsequence)
            basic.clearScreen()
            basic.pause(speedsequence)
        } else if (randomside == 1) {
            basic.showLeds(`
                . . # # #
                . . # # #
                . . # # #
                . . # # #
                . . # # #
                `)
            basic.pause(speedsequence)
            basic.clearScreen()
            basic.pause(speedsequence)
        } else if (randomside == 2) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(speedsequence)
            basic.clearScreen()
            basic.pause(100)
        }
    }
    basic.showIcon(IconNames.Happy)
    basic.pause(100)
    basic.clearScreen()
    index = 0
    while (usersequence.length != correctsequence.length + 0) {
        if (input.buttonIsPressed(Button.A)) {
            usersequence[index] = parseFloat("0")
            index += 1
            basic.showLeds(`
                # # # . .
                # # # . .
                # # # . .
                # # # . .
                # # # . .
                `)
            basic.clearScreen()
        } else if (input.buttonIsPressed(Button.B)) {
            usersequence[index] = parseFloat("1")
            index += 1
            basic.showLeds(`
                . . # # #
                . . # # #
                . . # # #
                . . # # #
                . . # # #
                `)
            basic.clearScreen()
        } else if (input.buttonIsPressed(Button.AB)) {
            usersequence[index] = parseFloat("2")
            index += 1
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.clearScreen()
        }
    }
    index = 0
    for (let value of correctsequence) {
        if (value == usersequence[Math.constrain(index, 0, correctsequence.length)]) {
            index += 1
        } else {
            basic.showIcon(IconNames.No)
            correctsequence = []
            usersequence = []
            level = 0
            win = false
            break;
        }
    }
    if (win == true) {
        basic.showIcon(IconNames.Yes)
        speedsequence = speedsequence / 1.2
        complexity = Math.constrain(complexity + 1, 2, 20)
    } else {
        complexity = 2
        speedsequence = 1000
    }
    win = true
    level = level + 1
    basic.pause(1000)
})
