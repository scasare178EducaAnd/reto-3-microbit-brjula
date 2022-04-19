let Angulo = 0
basic.clearScreen()
basic.forever(function () {
    Angulo = input.compassHeading()
    if (Angulo >= 0 && Angulo <= 45 || Angulo >= 315 && Angulo <= 360) {
        basic.showString("Norte")
    } else if (Angulo >= 45 && Angulo <= 135) {
        basic.showString("Oeste")
    } else if (Angulo >= 135 && Angulo <= 225) {
        basic.showString("Sur")
    } else {
        basic.showString("Este")
    }
})
