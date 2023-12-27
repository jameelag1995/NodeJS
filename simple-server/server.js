import http from "node:http";

const server = http.createServer((req, res) => {
    const { url, method } = req;
    res.appendHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.appendHeader("Access-Control-Allow-Methods", "PUT", "DELETE", "GET");
    switch (url) {
        case "/request":
            switch (method) {
                case "GET":
                    res.end("Get request received!");
                    return;
                case "PUT":
                    console.log("PUT request received");
                    res.end("Put request received");
                    return;
                default:
                    return;
            }
        default:
            return;
    }
});

server.listen(4545, () => {
    console.log("listening on port 4545");
});
