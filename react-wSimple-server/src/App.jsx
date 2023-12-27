import "./App.css";

function App() {
    const sendGetRequest = async () => {
        await fetch("http://localhost:4545/request")
            .then((res) => res.text())
            .then((res) => console.log("res", res))
            .catch((e) => {
                console.log("request failed", e.message);
            });
    };

    const sendPutRequest = async () => {
        await fetch("http://localhost:4545/request", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: "sending Put request ",
        })
            .then((res) => res.text())
            .then((res) => console.log("res", res))
            .catch((e) => {
                console.log("request failed", e.message);
            });
    };
    return (
        <>
            <button onClick={sendGetRequest}>
                Send GET Request to port 4545
            </button>
            <button onClick={sendPutRequest}>
                Send PUT Request to port 4545
            </button>
        </>
    );
}

export default App;
