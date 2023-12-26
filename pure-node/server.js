import http from "node:http";
import { readFileSync } from "node:fs";
const server = http.createServer((req, res) => {
    const { url, method } = req;
    switch (url) {
        case "/raw-html":
            res.end("<h1>Welcome</h1>");
            return;
        case "/users":
            const jsonFile = readFileSync("./src/users.json", "utf-8");
            res.end(jsonFile);
            return;
        case "/index.css":
            const css = readFileSync("./src/index.css", "utf-8");
            res.end(css);
            return;
        case "/":
            const htmlFile = readFileSync("./src/index.html", "utf-8");
            res.end(htmlFile);
            return;
    }
});

server.listen(3000, () => {
    console.log("server is listening on port 3000");
});
