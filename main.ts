function convert (tekst: string) {
    omgekeerd = omkeren(tekst)
    for (let index = 0; index <= omgekeerd.length - 1; index++) {
        numeric += 2 ** index * parseFloat(omgekeerd.charAt(index))
    }
    return numeric
}
input.onButtonPressed(Button.A, function () {
    binair = "" + binair + "1"
})
function omkeren (tekst: string) {
    omgekeerd = ""
    for (let index = 0; index <= tekst.length - 1; index++) {
        omgekeerd = "" + tekst.charAt(index) + omgekeerd
    }
    return omgekeerd
}
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(convert(binair))
    binair = ""
    numeric = 0
})
input.onButtonPressed(Button.B, function () {
    binair = "" + binair + "0"
})
let omgekeerd = ""
let numeric = 0
let binair = ""
binair = ""
numeric = 0
