const weight = prompt('Your weight?')
const height = prompt('Your height?')
const bmi = weight / (height * height)
console.log(bmi)
if (bmi <= 25) {
    alert('It\'s Okay' )
} else {
    document.write('fuck')
}
