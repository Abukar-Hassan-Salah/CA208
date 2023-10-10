// console.log("Starting now...")

// setTimeout(() => {
//     console.log("After 1 second of delay, here we go!")
// }, 1000)

// console.log("Done!")

let count = 10
let intervalId;

intervalId = setInterval(() => {
    console.log(count)
    count--;

    if (count === 0) {
        console.log("Count is done!")
        clearInterval(intervalId)
    }

}, 1000)