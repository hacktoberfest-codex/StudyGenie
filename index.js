const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New req rec\n`;
    
    fs.appendFile('log.txt', log);
    
    switch (req.url) {
        case "/":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Homepage");
            break;
        case "/about":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("About Section");
            break;
        case "page1":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Homepage");
            break;
        case "page2":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Homepage");
            break;
        case "page3":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Homepage");
            break;
        case "page4":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Homepage");
            break;
        case "page5":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Homepage");
            break;
        case "page6":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Homepage");
            break;
        case "page7":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Homepage");
            break;
        case "page8":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Homepage");
            break;
        case "page9":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Homepage");
            break;  
        default:
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("404 Not Found");
    }
});

myServer.listen(8000, () => console.log("Server started on port 8000"));