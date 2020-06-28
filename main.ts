basic.forever(function () {
    if (true) {
        makerbit.showStringOnLcd1602("Binevenue chez :", makerbit.position1602(LcdPosition1602.P0), 16)
        makerbit.showStringOnLcd1602("MakerBit", makerbit.position1602(LcdPosition1602.P16), 16)
        pins.servoSetPulse(AnalogPin.P0, 1500)
        pins.servoSetPulse(AnalogPin.P0, -1500)
    }
})
