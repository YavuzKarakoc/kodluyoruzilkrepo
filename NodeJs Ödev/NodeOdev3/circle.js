function circleArea(radius) {
    console.log(Math.PI * Math.pow(radius,2))
}
function circleCircumference(radius) {
    console.log(2 * Math.PI * radius)
}

module.exports = {
    circleArea,
    circleCircumference
}