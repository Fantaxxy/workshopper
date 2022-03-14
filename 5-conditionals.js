let overOrUnder = 7
if (overOrUnder < 50) {
    console.log("under 50")
} else if (overOrUnder > 50) {
    console.log("Over 50")
}

if (overOrUnder < 33) {
    console.log("Bottom Third")
} else if (overOrUnder > 33 && overOrUnder <= 66) {
    console.log("Middle Third")
} else if (overOrUnder > 66) {
    console.log("Top Third")
}

if (overOrUnder < 0 || overOrUnder > 100) {
    console.log("Outer Third")
}