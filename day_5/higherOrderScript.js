// Task 9

const hello = ()=>{
    console.log("Hello Buddy")
}

const higherOrder = (num, func )=>{
    for(let i=1; i<=num; i++){
        console.log(`Calling that function ${i} time.`)
        func();
    }
}

// higherOrder(5,hello)

// Task 1

const func1 = ()=>{
    return 5;
}

const func2 = ()=>{
    return 10;
}

const myHigherOrder = (f1,f2,value)=>{
    value +=f1();
    const result = value + f2()
    console.log(result)
}

myHigherOrder(func1,func2,5)