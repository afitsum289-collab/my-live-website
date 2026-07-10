const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS so our frontend can securely talk to our backend
app.use(cors());
app.use(express.json());

// This is our backend route API
app.get('/api/greet', (req, res) => {
    console.log("Backend received a ping from the browser!");
    res.json({ message: "Hello from your live Node.js backend! The connection works perfectly! " });
});

app.listen(PORT, () => {
    console.log(`Backend server running smoothly on port ${PORT}`);
});