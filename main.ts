let _1 = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hello!")
})
loops.everyInterval(1000, function () {
    _1 = randint(0, 10)
    basic.showString("" + (_1))
})
basic.forever(function () {
    if (_1 == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
