const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes (important for Hostinger App Hosting if frontend and backend domain differ slightly)
app.use(cors());

// Middleware to parse JSON (useful for future API endpoints)
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Explicit route for the homepage (often needed for Hostinger container health checks on /)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Basic API route placeholder for future AI chatbot integration
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    // TODO: Integrate actual AI API (OpenAI/Anthropic) here
    // For now, return a placeholder response
    res.json({
      success: true,
      reply: "This is a placeholder response from the Forgebit backend. The AI integration will be connected here."
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Forgebit server running on port ${PORT}`);
});
