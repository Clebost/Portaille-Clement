let temp = 0
input.onButtonPressed(Button.A, function () {
    temp = 1
    makerbit.showStringOnLcd1602("Binevenue chez :", makerbit.position1602(LcdPosition1602.P0), 16)
    makerbit.showStringOnLcd1602("MakerBit", makerbit.position1602(LcdPosition1602.P16), 16)
    pins.servoWritePin(AnalogPin.P0, 1500)
    for (let index = 0; index < 2; index++) {
        tinkercademy.LED(DigitalPin.P1, OnOff.On)
        basic.pause(1000)
        tinkercademy.LED(DigitalPin.P1, OnOff.Off)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 0)
    temp = 0
    while (temp == 0) {
        tinkercademy.LED(DigitalPin.P1, OnOff.On)
        basic.pause(1000)
        tinkercademy.LED(DigitalPin.P1, OnOff.Off)
        basic.pause(1000)
    }
})
