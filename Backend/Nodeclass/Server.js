const http = require ("http");
const port = 5000

const app = http.createServer((req, res) => {
    res.setHeader("Content-Type", "Text/html");
    console.log("Hello world");
    res.write("<h1>Hello Goodluck<h1>");
    res.end()
});



app.listen(port, () => {
    console.log(`server is ready: ${port}`);
});
