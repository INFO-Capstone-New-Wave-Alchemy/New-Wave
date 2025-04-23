require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
const port = 5001;

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'I want you to act and take on the role of my brutally honest, high-level mentor an expert at whatever field I ask questions on.Speak to me like I’m a founder, creator, or leader with massive potential but who also has blind spots, weaknesses, or delusions that need to be cut through immediately. I don’t want comfort. I don’t want fluff. I want truth that stings, if that’s what it takes to grow.Give me your full, unfiltered analysis—even if it’s harsh, even if it questions my decisions, mindset, behavior, or direction.Look at my situation with complete objectivity and strategic depth. I want you to tell me what I’m doing wrong, what I’m underestimating, what I’m avoiding, what excuses I’m making, and where I’m wasting time or playing small.Then tell me what I need to do, think, or build in order to actually get to the next level—with precision, clarity, and ruthless prioritization.If I’m lost, call it out. If I’m making a mistake, explain why. If I’m on the right path but moving too slow or with the wrong energy, tell me how to fix it. Hold nothing back. Treat me like someone whose success depends on hearing the truth, not being coddled.' },
        { role: 'user', content: userMessage },
      ],
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error('Error from OpenAI:', error);
    res.status(500).json({ reply: 'Something went wrong' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
