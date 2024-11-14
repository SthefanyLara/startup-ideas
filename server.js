const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 5000;

app.use(express.json());

// Endpoint para gerar a ideia de startup
app.post('/generate', async (req, res) => {
  const { area } = req.body;

  if (!area) {
    return res.status(400).send({ error: 'Área de interesse é necessária.' });
  }

  const data = {
    model: "gpt-3.5-turbo",
    messages: [{
      role: "user",
      content: `Dê-me uma ideia de startup para um aplicativo de ${area}.`
    }]
  };

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', data, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    const idea = response.data.choices[0].message.content;
    return res.json({ idea });
  } catch (error) {
    console.error('Erro ao gerar ideia de startup:', error.message);
    return res.status(500).send({ error: 'Erro interno ao gerar ideia.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
