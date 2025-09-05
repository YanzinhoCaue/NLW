# 🚀 NLW Spacetime - Cápsula do Tempo

Bem-vindo à Cápsula do Tempo! Este é um projeto full-stack e multiplataforma desenvolvido durante a **Next Level Week (NLW) Spacetime** da Rocketseat. A aplicação permite que os usuários criem uma timeline pessoal com suas memórias mais marcantes, adicionando fotos, vídeos e textos, com a opção de torná-las públicas.

O projeto foi construído utilizando as tecnologias mais modernas do ecossistema JavaScript, incluindo **React, React Native, Next.js, Node.js, Fastify, Prisma e Tailwind CSS**.

---

### **🎬 Demonstração**

![image](https://github.com/YanzinhoCaue/NLW/assets/127339610/52d1c6a7-7e34-4d32-ae28-2b8610ed33b7)

---

### **🏛️ Arquitetura do Monorepo**

Este projeto foi estruturado como um **monorepo**, contendo três aplicações principais:


capsula-do-tempo/
├── server/     # API Back-end em Node.js + Fastify + Prisma
├── web/        # Aplicação Web em Next.js 13 (App Router) + Tailwind CSS
└── mobile/     # Aplicativo Mobile em React Native + Expo + Tailwind CSS

---

### **🛠️ Stack de Tecnologias**

Cada parte do projeto utiliza uma stack de tecnologias moderna e performática:

#### **Back-end (API)**
* **Node.js**: Ambiente de execução.
* **Fastify**: Framework web de alta performance.
* **Prisma**: ORM para interação com o banco de dados.
* **TypeScript**: Linguagem para tipagem estática.
* **Zod**: Biblioteca para validação de esquemas.
* **JWT (JSON Web Token)**: Para autenticação.

#### **Front-end (Web)**
* **Next.js**: Framework React com App Router.
* **React**: Biblioteca para construção de interfaces.
* **TypeScript**: Linguagem para tipagem estática.
* **Tailwind CSS**: Framework de estilização utility-first.
* **Axios**: Cliente HTTP para consumir a API.
* **Lucide React**: Biblioteca de ícones.

#### **Mobile**
* **React Native**: Framework para desenvolvimento mobile multiplataforma.
* **Expo**: Plataforma e ferramentas para facilitar o desenvolvimento com React Native.
* **Expo Router**: Sistema de roteamento baseado em arquivos.
* **TypeScript**: Linguagem para tipagem estática.
* **Tailwind CSS (NativeWind)**: Para estilização no ambiente nativo.
* **Expo Auth Session**: Para lidar com fluxos de autenticação OAuth.
* **Expo Image Picker**: Para seleção de mídia da galeria do usuário.

---

### **▶️ Como Executar o Projeto**

**Pré-requisitos:** Node.js, NPM (ou Yarn), Git e o Expo Go (no celular para o app mobile).

#### **1. Configurando o Back-end (`server`)**

```bash
# Navegue até a pasta do servidor
cd server

# Instale as dependências
npm install

# Crie um arquivo .env com base no .env.example e configure a URL do seu banco de dados
# Ex: DATABASE_URL="file:./dev.db"

# Execute as migrações do Prisma para criar as tabelas no banco
npx prisma migrate dev

# Inicie o servidor de desenvolvimento
npm run dev

O servidor estará rodando em http://localhost:3333.
2. Configurando o Front-end (web)
# Em um novo terminal, navegue até a pasta da aplicação web
cd web

# Instale as dependências
npm install

# Crie um arquivo .env.local e configure a URL da sua API e as chaves do GitHub OAuth
# Ex: NEXT_PUBLIC_API_URL=http://localhost:3333
# NEXT_PUBLIC_GITHUB_CLIENT_ID=SEU_CLIENT_ID

# Inicie a aplicação web
npm run dev

A aplicação web estará disponível em http://localhost:3000.
3. Configurando o Mobile (mobile)
# Em um novo terminal, navegue até a pasta da aplicação mobile
cd mobile

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento do Expo
npx expo start

Escaneie o QR Code com o aplicativo Expo Go no seu celular para rodar a aplicação. Lembre-se que seu celular e computador precisam estar na mesma rede, e a URL da API deve ser acessível pelo celular.
💬 Contato
Yan Cauê
LinkedIn: linkedin.com/in/yancaue
GitHub: github.com/YanzinhoCaue

