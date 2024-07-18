// Task 5

let sum = (num1, num2) => {
    console.log(num1 + num2)
}
// sum(45,45)

// Task 6
let hasChar = (str, char) => {
    let finalStr = str.toLowerCase()
    for (let i = 0; i < finalStr.length; i++) {
        if (finalStr[i] === char) {
            return true;
        }
    }

}
let result = hasChar("HEeLLO", "e");
// console.log(result);

// Task 7

const product = (num1, num2=5)=>{
    return (num1*num2)
}

// console.log(product(5))

// Task 8

const greetings = (hisName, age=20)=>{
    return `Hi ${hisName}! Happy ${age}th Birthday Buddy:)`
}

// console.log(greetings("Atif"))