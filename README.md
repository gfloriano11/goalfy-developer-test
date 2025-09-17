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

## 📌 Pré-requisitos

- Node.js >= 22.x 
- npm >= 10.x  

> ⚠️ É necessário ter uma versão do Node atualizada para rodar este projeto.  

Verifique sua versão:
```bash
node -v
```

Se precisar atualizar: 

Windows: baixe do site [oficial] (https://nodejs.org/)

Linux/macOS: use [nvm] (https://github.com/nvm-sh/nvm)

```bash
nvm install 22.19.0
nvm use 22.19.0
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

## 🎲 Banco de Dados

- O script de criação do banco de dados `goalfy` está em `app/assets/database.sql`
- Antes de iniciar o projeto, rode o banco na sua máquina e configure a conexão em `app/connection/connection.ts`, se necessário.

## 🛜 API

A API permite **adicionar, editar, remover e listar clientes**.  
Ao adicionar ou editar um cliente, a API consulta automaticamente a [ViaCEP](https://viacep.com.br/) para preencher o endereço completo.

### Endpoints

| Método | Endpoint       | Descrição                         | Parâmetros/Body |
|--------|---------------|-----------------------------------|----------------|
| GET    | `/clients`    | Lista todos os clientes           | Nenhum         |
| POST   | `/clients`    | Adiciona um novo cliente          | JSON no body: <br> - fullname: string <br> - email: string <br> - phone: string <br> - CNPJ: string <br> - CEP: string |
| PUT    | `/clients/:id`| Edita um cliente existente        | JSON no body (mesmos campos do POST) <br> Params: id (cliente) |
| DELETE | `/clients/:id`| Remove um cliente                 | Params: id (cliente) |

---

### Exemplos de uso

#### **Adicionar cliente (POST)**
```http
POST /clients
Content-Type: application/json

{
  "fullname": "João Silva",
  "email": "joao@email.com",
  "phone": "11999999999",
  "CNPJ": "12345678000199",
  "CEP": "01001000"
}
```
A API consulta o ViaCEP e salva address, city, state, UF e neighborhood no banco automaticamente.

#### **Editar cliente (PUT)**
```http
PUT /clients/1
Content-Type: application/json

{
  "fullname": "João Silva",
  "email": "joao@email.com",
  "phone": "11999999999",
  "CNPJ": "12345678000199",
  "CEP": "01001000"
}
```
Atualiza o cliente com id = 1 e reconsulta o ViaCEP para atualizar o endereço.

#### **Listar clientes (GET)**
```http
GET /clients
```
Retorna todos os clientes cadastrados.

#### **Remover cliente (DELETE)**
```http
DELETE /clients/1
```
Remove o cliente com id = 1 do banco.

#### **Exemplo de resposta JSON (GET /clients)**
```http
[
  {
    "id": 1,
    "fullname": "João Silva",
    "email": "joao@email.com",
    "phone": "11999999999",
    "CNPJ": "12345678000199",
    "CEP": "01001000",
    "address": "Praça da Sé",
    "neighborhood": "Sé",
    "city": "São Paulo",
    "state": "SP",
    "UF": "SP"
  }
]
```
