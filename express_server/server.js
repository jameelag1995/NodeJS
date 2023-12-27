import express from "express";

const server = express();
// server.use("/numbers");
server.get("/numbers", (req, res) => {
    res.send("Success using GET Method");
});
server.post("/numbers", (req, res) => {
    res.send("Success using POST Method");
});
server.delete("/numbers", (req, res) => {
    res.send("Success using DELETE Method");
});
server.put("/numbers", (req, res) => {
    res.send("Success using PUT Method");
});
server.listen(4747, () => {
    console.log("express server listening on port 4747");
});
