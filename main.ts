input.onButtonPressed(Button.A, function () {
    Personas = Persones + 1
    basic.showNumber(Persones)
})
input.onGesture(Gesture.Shake, function () {
    Persones = 0
    basic.showNumber(Persones)
})
input.onButtonPressed(Button.B, function () {
    if (Persones > 0) {
        Personas = Persones - -1
        basic.showNumber(Persones)
    }
})
let Personas = 0
let Persones = 0
Persones = 0
basic.forever(function () {
    if (Persones > 5) {
        basic.showString("AF")
    } else {
        basic.showNumber(Persones)
    }
})
