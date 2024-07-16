let year = 1900;
if (year % 4 ===0 && year % 100===0){
    if(year % 400 ===0){
        console.log(`${year} is a Leap year.`)
    }
    else{
        console.log(`${year} is not a Leap year.`)
    }

}
else if(year % 4 ===0){
    console.log(`${year} is a Leap year.`)
}
else{
    console.log(`${year} is not Leap year.`)
}