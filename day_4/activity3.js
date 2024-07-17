// console.log("Task-5")
// let i = 1;
// do {
//     console.log(i);
//     i++
// }
// while (i <= 5);


// console.log("=====================")
// console.log("")

console.log("Task-6")
let n = 5;
let factorial = 1;
if (n < 0) {
    console.log("Factorial of a negative number does not exist.")
}
else if (n === 0) {
    console.log(`Factorial of ${n} is : ${factorial}`)
}
else if (n > 0) {
    do {
        factorial *= n;
        n--;
    }
    while (n >= 1);
    console.log(factorial)
}
else{
    console.log("Please give a valid number")
}
console.log("=====================")
console.log("")