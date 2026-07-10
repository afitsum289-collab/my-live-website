const express = require('express');
const cors = require('cors'); // 1. Import cors
const app = express();
const PORT = process.env.PORT || 3000;

// 2. Allow your Vercel website to talk to this backend
app.use(cors({
    origin: 'https://my-live-website-seven.vercel.app'
}));

app.get('/api/message', (req, res) => {
    res.json({ message: "Hello from your live Node.js backend! The connection works perfectly!" });
});

app.listen(PORT, () => {
    console.log(`Backend server running smoothly on port ${PORT}`);
});