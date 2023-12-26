import http from "node:http";
import { readFileSync } from "node:fs";
const server = http.createServer((req, res) => {
    const { url, method } = req;
    console.log("method: ", method);
    console.log("url: ", url);
    
    switch (url) {
        case "/about":
            switch (method) {
                case "GET":
                    const htmlFile = readFileSync("./src/index.html", "utf-8");
                    res.end(htmlFile);
                    return;
                case "DELETE":
                    res.end("delete in about");
                    return;
                case "POST":
                    res.end("post in about");
                    return;
                case "PUT":
                    res.end("put in about");
                    return;
            }

        case "/video":
            switch (method) {
                case "GET":
                    res.end("get in video");
                    return;
                case "DELETE":
                    res.end("delete in video");
                    return;
                case "POST":
                    res.end("post in video");
                    return;
                case "PUT":
                    res.end("put in video");
                    return;
            }
        case "/style.css":
            const css = readFileSync("./src/style.css", "utf-8");
            res.end(css);
            return;
    }
});

server.listen(4545, () => {
    console.log("server is listening on port 4545");
});
