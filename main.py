randomside = 0
index = 0
complexity = 2
level = 1
speedsequence = 1000
correctsequence: List[number] = []
usersequence: List[number] = []

def on_forever():
    global correctsequence, index, randomside, usersequence, level, speedsequence, complexity
    correctsequence = []
    correctsequence = []
    basic.show_string("" + str((level)))
    basic.pause(1000)
    index = 0
    for index2 in range(complexity):
        randomside = randint(0, 1)
        correctsequence[index] = randomside
        index += 1
        if randomside == 0:
            basic.show_leds("""
                # # # . .
                                # # # . .
                                # # # . .
                                # # # . .
                                # # # . .
            """)
            basic.pause(speedsequence)
            basic.clear_screen()
            basic.pause(speedsequence)
        elif randomside == 1:
            basic.show_leds("""
                . . # # #
                                . . # # #
                                . . # # #
                                . . # # #
                                . . # # #
            """)
            basic.pause(speedsequence)
            basic.clear_screen()
            basic.pause(speedsequence)
        elif randomside == 2:
            basic.show_leds("""
                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
            """)
            basic.pause(speedsequence)
            basic.clear_screen()
            basic.pause(100)
    basic.show_icon(IconNames.HAPPY)
    basic.pause(100)
    basic.clear_screen()
    index = 0
    while len(usersequence) != len(correctsequence) + 0:
        if input.button_is_pressed(Button.A):
            usersequence[index] = parse_float("0")
            index += 1
            basic.show_leds("""
                # # # . .
                                # # # . .
                                # # # . .
                                # # # . .
                                # # # . .
            """)
            basic.clear_screen()
        elif input.button_is_pressed(Button.B):
            usersequence[index] = parse_float("1")
            index += 1
            basic.show_leds("""
                . . # # #
                                . . # # #
                                . . # # #
                                . . # # #
                                . . # # #
            """)
            basic.clear_screen()
        elif input.button_is_pressed(Button.AB):
            usersequence[index] = parse_float("2")
            index += 1
            basic.show_leds("""
                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
            """)
            basic.clear_screen()
    index = 0
    for value in correctsequence:
        if value == usersequence[Math.constrain(index, 0, len(correctsequence))]:
            index += 1
        else:
            basic.show_icon(IconNames.NO)
            correctsequence = []
            usersequence = []
            level = 0
            break
    if level > 0:
        basic.show_icon(IconNames.YES)
        speedsequence = speedsequence / 1.2
        complexity = Math.constrain(complexity + 1, 2, 20)
    level = level + 1
    basic.pause(1000)
basic.forever(on_forever)
