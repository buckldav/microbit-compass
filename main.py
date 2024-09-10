degrees = 0
STEP = 45 / 2
# N = [15 * STEP, STEP]
NE = [STEP, 3 * STEP]
E = [3 * STEP, 5 * STEP]
SE = [5 * STEP, 7 * STEP]
S = [7 * STEP, 9 * STEP]
SW = [9 * STEP, 11 * STEP]
W = [11 * STEP, 13 * STEP]
NW = [13 * STEP, 15 * STEP]

def on_forever():
    global degrees
    degrees = input.compass_heading()
    if degrees > NE[0] and degrees <= NE[1]:
        basic.show_string("NE")
    elif degrees > E[0] and degrees <= E[1]:
        basic.show_string("E")
    elif degrees > SE[0] and degrees <= SE[1]:
        basic.show_string("SE")
    elif degrees > S[0] and degrees <= S[1]:
        basic.show_string("S")
    elif degrees > SW[0] and degrees <= SW[1]:
        basic.show_string("SW")
    elif degrees > W[0] and degrees <= W[1]:
        basic.show_string("W")
    elif degrees > NW[0] and degrees <= NW[1]:
        basic.show_string("NW")
    else:
        basic.show_string("N")
basic.forever(on_forever)
