const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON (useful for future API endpoints)
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

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

// Catch-all route to serve index.html for any other requests (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Forgebit server running on port ${PORT}`);
});
