let temp = 0
input.onButtonPressed(Button.A, function () {
    makerbit.showStringOnLcd1602("Binevenue chez :", makerbit.position1602(LcdPosition1602.P0), 16)
    makerbit.showStringOnLcd1602("MakerBit", makerbit.position1602(LcdPosition1602.P16), 16)
    temp = 0
    pins.servoSetPulse(AnalogPin.P0, 1500)
    while (temp == 0) {
        tinkercademy.LED(DigitalPin.P1, OnOff.On)
        basic.pause(1000)
        tinkercademy.LED(DigitalPin.P1, OnOff.Off)
    }
})
input.onButtonPressed(Button.B, function () {
    pins.servoSetPulse(AnalogPin.P0, -1500)
    temp = 1
    for (let index = 0; index < 4; index++) {
        tinkercademy.LED(DigitalPin.P1, OnOff.On)
        basic.pause(1000)
        tinkercademy.LED(DigitalPin.P1, OnOff.Off)
    }
})
basic.forever(function () {
    if (true) {
    	
    }
})
