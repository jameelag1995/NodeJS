const request = require("request");
const axios = require("axios");
const requestUrl = "https://catfact.ninja/fact";
const axiosUrl = "https://v2.jokeapi.dev/joke/Programming?type=single";

const requireData = async () => {
    const result = await request(requestUrl, (error, response, body) => {
        console.log("request fetch: \n", JSON.parse(body).fact);
    });
};
requireData();

const fetchData = async () => {
    const result = await axios.get(axiosUrl);
    console.log("axios fetch: \n", result.data.joke);
};
fetchData();
