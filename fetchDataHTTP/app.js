import http from "node:http";
import axios from "axios";
const url = "https://catfact.ninja/fact";

const fetchData = async () => {
    const result = await axios.get(url);
    console.log("axios fetch: \n", result.data.fact);
    return result.data.fact;
};
fetchData();

const server = http.createServer(async (req, res) => {
    const { url, method } = req;
    if (url === "/catfact") {
        const result = await fetchData();
        console.log(result);
        res.end(result);
    }
});

server.listen(4545, () => {
    console.log("listening on port 4545");
});
