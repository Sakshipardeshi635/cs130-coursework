
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/api/message", async (req, res) => {
    try {
        const response = await fetch(
            "http://127.0.0.1:5000/api/message"
        );

        const data = await response.json();

        res.json(data);

    } catch (error) {
        res.status(500).json({
            error: "Cannot connect to Flask backend"
        });
    }
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express running on port ${PORT}`);
});
