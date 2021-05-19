const fs = require("fs")
fs.readFile("./guu.txt", (error, data) => {

    if (error) {
        console.log("there is an error trying to read the file");
    } else {
        console.log(data);

        console.log(data.toString());
    }
}

);
// it is read from the file
// and the "if" is to show if there is no error whilw filling their details






