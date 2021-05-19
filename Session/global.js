
const stop =  setInterval(() => {
    console.log("running this in 1 seconds")
}, 1000);

setTimeout(() => {
    console.log("stop in exactly 3 seconds");
    clearInterval(stop);
}, 3000);





