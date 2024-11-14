# Startup Idea Generator

## Descrição
O **Startup Idea Generator** é uma aplicação que utiliza a API da OpenAI (GPT-3.5) para gerar ideias de startups baseadas em áreas de interesse fornecidas pelo usuário. O usuário pode inserir uma área de interesse, como saúde, tecnologia, finanças, entre outras, e a aplicação irá gerar uma sugestão de ideia para um aplicativo ou serviço relacionado a essa área.

## Funcionalidades
- **Entrada do usuário:** O usuário insere uma área de interesse, como "saúde", "educação", ou "tecnologia".
- **Geração de ideia:** O backend utiliza a API da OpenAI para gerar uma ideia de startup com base na área de interesse fornecida.
- **Exibição da ideia:** A ideia gerada é exibida na interface de forma limpa e organizada.

## Tecnologias Utilizadas
- **Frontend:** React.js
- **Backend:** Node.js com Express
- **API:** OpenAI GPT-3.5
- **Estilos:** CSS para estilização minimalista e responsiva.

## Pré-requisitos

Antes de começar, você precisará de:

- Node.js instalado (v16 ou superior).
- Uma chave API da OpenAI. Você pode obter sua chave [aqui](https://platform.openai.com/).

## Como Executar o Projeto

### 1. Clonar o Repositório

Primeiro, clone o repositório para o seu computador:

```bash
git clone https://seu-repositorio-url
cd startup-idea-generator

# ## 2. Instalar Dependências

# Execute o comando abaixo para instalar as dependências do projeto
# No diretório do frontend:

# ```bash
# cd frontend
# npm install

# No diretório do backend:

# ```bash
# cd backend
# npm install

# ### 3. Configuração do Ambiente

# No diretório do backend, crie um arquivo .env e insira sua chave API da OpenAI:

# ```.env
# OPENAI_API_KEY=seu-chave-api-openai

# ### 4. Executar o Backend

# No diretório do backend, execute o servidor com o comando:

# ```bash
# node server.js

# O servidor Express estará rodando na porta 5000.

# ### 5. Executar o Frontend

# No diretório do frontend, execute a aplicação React:

# ```bash
# npm start

# A aplicação estará disponível em http://localhost:3000.


# Estrutura do Projeto

# startup-idea-generator/
# ├── frontend/               # Frontend (React)
# │   ├── public/
# │   ├── src/
# │   └── package.json
# ├── backend/                # Backend (Node.js/Express)
# │   ├── server.js
# │   ├── .env                # Chave da API da OpenAI
# │   └── package.json
# ├── .gitignore
# └── README.md

# Como Usar

# 1. Abra o frontend no navegador (http://localhost:3000).
# 2. Digite uma área de interesse no campo de entrada (exemplo: "saúde", "educação", "tecnologia").
# 3. Clique no botão "Gerar Ideia".
# 4. A ideia de startup será exibida logo abaixo.

# Exemplo de Uso
# Entrada:
# . Área de interesse: "Saúde"

# Resultado da Ideia:
# "Aplicativo para agendamento de consultas médicas com especialidades, oferecendo uma interface simples para pacientes e médicos."


# Contribuindo
# Se você quiser contribuir para este projeto, siga os passos abaixo:

# 1. Faça um fork deste repositório.
# 2. Crie uma branch para suas modificações (git checkout -b minha-nova-feature).
# 3. Faça commit das suas mudanças (git commit -am 'Adicionando nova feature').
# 4. Envie para o repositório (git push origin minha-nova-feature).
# 5. Abra um pull request.

# Contato
# Caso tenha dúvidas ou sugestões, fique à vontade para entrar em contato!

# Autor: Sthefany Lara
# E-mail: sthefanylara.2001@gmail.com
