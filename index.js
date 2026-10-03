const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Hello from GitHub CI/CD! Backend Auto-deployed successfully! 🚀',
        deployedAt: new Date().toISOString()
    });
});

// Health check endpoint (uptime: server kitne seconds se alive hai)
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', uptime: process.uptime() });
});

// About API (Project ki basic details)
app.get('/about', (req, res) => {
    res.json({
        project: 'Node.js CI/CD POC',
        version: '1.0.0',
        description: 'Simple backend running with automated deployment',
        status: 'Active'
    });
});

// Greet API (Personalized welcome message: e.g. /greet?name=Pavan)
app.get('/greet', (req, res) => {
    const name = req.query.name || 'Friend';
    res.json({
        message: `Hello, ${name}! Welcome to our API.`
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
