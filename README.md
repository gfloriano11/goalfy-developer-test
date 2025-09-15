# 📌 Desafio Fullstack - Goalfy  

## 📝 Sobre o Desafio  
Este repositório contém a minha solução para o **Desafio Fullstack** proposto pela [Goalfy](https://goalfy.com.br/).  
O objetivo é desenvolver um **CRUD de clientes**, utilizando boas práticas de desenvolvimento e separação entre **frontend** e **backend**.  

---

## ⚙️ Tecnologias Utilizadas  

### Frontend  
- 🛠️ TypeScript
- ⚛️ React  
- 🎨 Styled Components
- 📡 React-Router-Dom
- 🖼️ Lucide-React

### Backend  
- 🟢 Node.js (TypeScript) 
- 🚀 Express + CORS
- 🗄️ MySQL 
- 🧩 DDD (Domain Driven Design) para organização do código  

---

## Estrutura do Projeto

```bash
desafio-fullstack-goalfy/
│── app/                     # Backend (Node + Express + CORS)
│   ├── assets/              # Script .sql
│   ├── connection/          # Conexão com banco [alterar caso necessário]
│   ├── interfaces/          # Interface http (request e response)
│   ├── model/               # Casos de Uso de Client
│   ├── router/              # Rotas de acesso aos métodos de Client
│   └── server/              # Arquivo de inicialização de servidor/rotas 
│
│── src/                     # Frontend (React + TypeScript + Styled Components)
│   ├── components/          # Componentes reutilizáveis
│   ├── contexts/            # Client Context
│   └── pages/               # Páginas da aplicação
│
│
└── README.md
```

## 🚀 Como Rodar o Projeto  

### 📂 Clonar o repositório  
```bash
git clone https://github.com/gfloriano11/desafio-fullstack-goalfy.git
cd desafio-fullstack-goalfy
```

### ⬇️ Instalar Dependências
```bash
npm install
```

### 💻 Inicializar Aplicação
```bash
npm run start
```