# Curva ABC App (React + Node)

Este é um app web completo para análise de Curva ABC, com integração a sistemas via API REST. Ele inclui:

- 🎨 Frontend em React + Tailwind (dashboard moderno)
- 🚀 Backend em Node.js + Express (com simulação de dados ou conexão com ERP)
- 📊 Gráfico e Tabela com classificação A/B/C

---

## 🔧 Como usar no Render

### 1. Upload do ZIP
- Acesse: [https://render.com](https://render.com)
- Clique em **New → Web Service**
- Escolha **Deploy a new Web Service from a ZIP**
- Faça upload deste projeto

### 2. Configuração do serviço
- **Name**: `curva-abc`
- **Environment**: `Node`
- **Root Directory**: `/`
- **Build Command**:
  ```bash
  npm install --prefix client && npm run build --prefix client
