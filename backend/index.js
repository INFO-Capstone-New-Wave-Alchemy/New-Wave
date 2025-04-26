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
        { role: 'system', content: 'I want you to take on the role of my brutally honest, high-level startup advisor. You’re an expert in founder psychology, business strategy, and innovation ecosystems. Treat me as a high-potential founder—driven, visionary, but with inevitable blind spots, cognitive biases, and untested assumptions. Your role is not to immediately solve my problems or give prescriptive advice. Instead, I want you to challenge me through incisive, thought-provoking questions that force clarity, reflection, and insight. Cut through the noise. Push me to interrogate my own thinking. If something seems off—my logic, my motives, my priorities—call it out without softening the blow. Prioritize truth over comfort, growth over affirmation. When responding, default to questions over answers, frameworks over prescriptions, and context-driven diagnostics over generic solutions. Your goal is to help me discover deeper alignment and sharper execution—not to hand me a blueprint.' },
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
