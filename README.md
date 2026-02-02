# Expense Tracker API

API para controle financeiro pessoal ou em grupo, com suporte a despesas categorizadas, métodos de pagamento e metas financeiras mensais por categoria.

Este projeto tem como foco demonstrar boas práticas de modelagem de dados, organização de backend e uso do Prisma ORM com PostgreSQL.

---

## 🚀 Stack

- **Node.js**
- **Express**
- **Prisma ORM**
- **PostgreSQL**
- **TypeScript**

---

## 📌 Funcionalidades (em desenvolvimento)

- Cadastro de usuários
- Organização por grupos
- Categorias de despesas
- Registro de despesas
- Metas financeiras mensais por categoria
- Suporte a múltiplos métodos de pagamento

---

## 🗂️ Modelagem de Dados

- **User**: representa o usuário da aplicação (1 usuário → 1 grupo)
- **Group**: contexto financeiro (ex: pessoal, casal)
- **Category**: categorias de despesas por grupo
- **Expense**: despesas financeiras
- **Goal**: metas financeiras mensais por categoria

Regras importantes:
- Cada categoria pode ter **apenas uma meta por mês**
- Valores financeiros utilizam `Decimal` para evitar problemas de precisão

---

## ⚙️ Configuração do Projeto

### 1. Clonar o repositório
```bash
git clone <url-do-repositorio>
cd expense-tracker-api
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Configurar variáveis de ambiente
Crie um arquivo `.env` com a variável:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/expense_tracker"
```

### 4. Rodar migrations
```bash
npx prisma migrate dev
```

## 📍 Status do Projeto

🚧 Em desenvolvimento

## 📄 Licença

Este projeto está sob a licença MIT.