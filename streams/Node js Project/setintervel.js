let count = 10
let intervelId
setInterval(() => {
    console.log(count)
    count--;
    if (count == 0) {
        console.log("Count is Done")
        clearInterval(intervelId)
    }
}, 1000);