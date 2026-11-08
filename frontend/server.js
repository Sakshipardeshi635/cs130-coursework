
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Backend URL can change depending on deployment architecture
const BACKEND_URL =
    process.env.BACKEND_URL || "http://127.0.0.1:5000";

app.use(express.static("public"));

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        service: "Express Frontend"
    });
});

app.get("/api/message", async (req, res) => {
    try {
        const response = await fetch(
            `${BACKEND_URL}/api/message`
        );

        if (!response.ok) {
            throw new Error(`Backend returned ${response.status}`);
        }

        const data = await response.json();
        res.json(data);

    } catch (error) {
        console.error("Backend connection error:", error.message);

        res.status(502).json({
            error: "Cannot connect to Flask backend"
        });
    }
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express running on port ${PORT}`);
    console.log(`Flask backend: ${BACKEND_URL}`);
});

