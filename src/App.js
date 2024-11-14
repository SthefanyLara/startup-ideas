import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [inputArea, setInputArea] = useState('');
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateIdea = async () => {
    if (!inputArea) {
      alert('Por favor, digite uma área de interesse.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/generate', {
        area: inputArea
      });
      setIdea(response.data.idea);
    } catch (error) {
      console.error('Erro ao gerar ideia de startup:', error);
      alert('Erro ao gerar ideia de startup. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Gerador de Ideias de Startup</h1>
        <input
          type="text"
          placeholder="Digite a área de interesse (ex: saúde, tecnologia)"
          value={inputArea}
          onChange={(e) => setInputArea(e.target.value)}
          className="input-field"
        />
        <button onClick={handleGenerateIdea} disabled={loading} className="generate-button">
          {loading ? 'Gerando...' : 'Gerar Ideia'}
        </button>
  
        {idea && (
          <div className="result">
            <h2 className="result-title">Ideia de Startup:</h2>
            <p className="result-text">{idea}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
