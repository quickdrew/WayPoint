import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import OpenAI from 'openai';

// Initialize OpenAI
const openai = new OpenAI({
    apiKey: "your-openai-api-key"
});

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname)); // Serve static files
app.use(express.json()); // Parse JSON bodies

// Serve map.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'map.html'));
});

// GPT endpoint
app.post('/gpt', async (req, res) => {
    const { prompt, distanceLimit} = req.body;
  
    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini', // Replace with desired model
        messages: [
          {
            role: 'system',
            content: `You are a travel planning assistant. Suggest destinations along a specific route between two locations. Ensure all suggestions are within ${distanceLimit} miles of the route, resonably seperated to prevent long rides with no stops or too many stops in a row, and relevant to the user's travel preferences.
            Always return the output in this JSON format:
            [
              {
                "name": "Destination Name",
                "lat": 00.0000,
                "lng": 00.0000,
                "description": "Short description of the destination"
              },
              ...
            ]
            Ensure the output is strictly valid JSON with no additional text or commentary.`,
          },
          { role: 'user', content: prompt },
        ],
      });
  
      const gptResponse = completion.choices[0].message.content;
  
      // Parse the JSON directly from GPT response
      let destinations = [];
      try {
        destinations = JSON.parse(gptResponse);
      } catch (error) {
        console.error('Error parsing JSON from GPT response:', error);
      }
  
      res.json({ destinations, rawResponse: gptResponse });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  
  

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
