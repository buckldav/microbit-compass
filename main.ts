let degrees = 0
let STEP = 45 / 2
//  N = [15 * STEP, STEP]
let NE = [STEP, 3 * STEP]
let E = [3 * STEP, 5 * STEP]
let SE = [5 * STEP, 7 * STEP]
let S = [7 * STEP, 9 * STEP]
let SW = [9 * STEP, 11 * STEP]
let W = [11 * STEP, 13 * STEP]
let NW = [13 * STEP, 15 * STEP]
basic.forever(function on_forever() {
    
    degrees = input.compassHeading()
    if (degrees > NE[0] && degrees <= NE[1]) {
        basic.showString("NE")
    } else if (degrees > E[0] && degrees <= E[1]) {
        basic.showString("E")
    } else if (degrees > SE[0] && degrees <= SE[1]) {
        basic.showString("SE")
    } else if (degrees > S[0] && degrees <= S[1]) {
        basic.showString("S")
    } else if (degrees > SW[0] && degrees <= SW[1]) {
        basic.showString("SW")
    } else if (degrees > W[0] && degrees <= W[1]) {
        basic.showString("W")
    } else if (degrees > NW[0] && degrees <= NW[1]) {
        basic.showString("NW")
    } else {
        basic.showString("N")
    }
    
})
