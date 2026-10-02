const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Hello! Node.js backend is running successfully.',
        deployedAt: new Date().toISOString()
    });
});

// Health check endpoint (uptime: server kitne seconds se alive hai)
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', uptime: process.uptime() });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
